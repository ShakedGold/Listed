. ./Trello.ps1
if($LASTEXITCODE -eq 2) {
	Write-Host "trello.env file not found."
	exit 1
}

$currentBranch = git branch | Select-String "\*" | ForEach-Object { $_.ToString().Split(" ")[-1] }
$options = @(
	"Create trello card",
	"Create branch from trello URL",
	"Create branch from card name",
	"Get updates from current branch ($currentBranch -> pull)",
	"Get updates from remote main branch (checkout)",
	"Switch to branch",
	"Pull updates from remote branch",
	"List all branches",
	"Fetch prune updates",
	"Exit"
)
Write-Host "What do you want to do?"
for ($i = 0; $i -lt $options.Length; $i++) {
	Write-Host "$($i + 1). $($options[$i])"
}

Write-Host -NoNewline "Enter your choice: "
$inp = Read-Host

switch ($($options[$inp - 1])) {
  "Create trello card" {
	Write-Host "In what list would you like to create a card?"
	Write-Host "1. Backlog"
	Write-Host "2. Design"

	Write-Host -NoNewline "Enter your choice: "
	$inp = Read-Host

	switch($inp) {
		1 {
			$listName = "Backlog"
		}
		2 {
			$listName = "Design"
		}
	}

	$list = getListFromName "Kanban" $listName
	Write-Host "Creating card in $listName"
	Write-Host -NoNewline "Enter card name: "
	$cardName = Read-Host
	Write-Host -NoNewline "Enter card description: "
	$cardDesc = Read-Host
	Write-Host "What type is the card?"
	Write-Host "1. Feature"
	Write-Host "2. UI"
	Write-Host "3. Design"
	Write-Host -NoNewline "Enter your choice: "
	$inp = Read-Host
	git fetch --quiet
	git checkout main -- TrelloDB.json
	$json = Get-Content -Path 'TrelloDB.json' | ConvertFrom-Json
	switch ($inp) {
		1 {
			$latestFeature = $json.features.latest
			$cardName = "F-$latestFeature | $cardName"
			$json.features.latest = $json.features.latest + 1
		}
		2 {
			$latestUI = $json.ui.latest
			$cardName = "U-$latestUI | $cardName"
			$json.ui.latest = $json.ui.latest + 1
		}
		3 {
			$latestDesign = $json.design.latest
			$cardName = "D-$latestDesign | $cardName"
			$json.design.latest = $json.design.latest + 1
		}
	}
	$json | ConvertTo-Json | Out-File 'TrelloDB.json'
	createCard $list.id $cardName $cardDesc | Out-Null

	Write-Host "commiting changes to TrelloDB.json"
	git commit -m "Updated TrelloDB.json" TrelloDB.json --quiet
	$commit = git log -1 --pretty=format:%H
	Write-Host "pushing changes to remote"
	git push --force --quiet origin ${commit}:main
	Write-Host "successfully pushed changes to remote"

	Write-Host "would you like to create a branch for this card? (Y/n): "
	$inp = Read-Host
	if ($inp -like "n") {
		exit 0
	}

	$branch = $cardName.ToLower() -replace " \| ", "-"
	$branch = $branch -replace " ", "-"
	$branch = $cardName.ToLower() -replace " \| ", "-"
	$branch = $branch -replace " ", "-"
    Write-Host "Creating branch $branch"
    git branch $branch
    Write-Host "Checking out branch $branch"
    git checkout $branch
    Write-Host "Pushing branch $branch"
    git push --set-upstream origin $branch
  }
  "Create branch from trello URL" {
	Write-Host -NoNewline "Enter trello URL: "
	$url = Read-Host
	# select the string excluding the first numbers until -, regex = [0-9]+-
	$branch = $url.Split("/")[-1]
	$branch = $url -replace "^[0-9]+-", ""
	
	Write-Host -NoNewline "Is $branch the correct branch name? (Y/n): "
	$inp = Read-Host
	if($inp -like "n") {
		exit 0;
	}

	Write-Host "Creating branch $branch"
	git branch $branch
	Write-Host "Checking out branch $branch"
	git checkout $branch
	Write-Host "Pushing branch $branch"
	git push --set-upstream origin $branch
  }
	"Create branch from card name" {
		Write-Host -NoNewline "Enter card name: "
		$cardName = Read-Host
		
		$card = getCardFromName "Kanban" $cardName
		if($card -eq $null) {
			Write-Host "Card $cardName does not exist"
			exit 1
		}
		$branch = $card.name.ToLower() -replace " \| ", "-"
		$branch = $branch -replace " ", "-"

		Write-Host -NoNewline "Is $branch the correct branch name? (Y/n): "
		$inp = Read-Host
		if($inp -like "n") {
			exit 0;
		}

		Write-Host "Creating branch $branch"
		git branch $branch
		Write-Host "Checking out branch $branch"
		git checkout $branch
		Write-Host "Pushing branch $branch"
		git push --set-upstream origin $branch
	}
  "Get updates from current branch ($currentBranch -> pull)" {
    Write-Host "Fetching updates..."
    git fetch
    Write-Host "Pulling updates"
    git pull
  }
  "Get updates from remote main branch (checkout)" {
    Write-Host "Fetching updates..."
    git fetch
    Write-Host "Checking out main"
    git checkout main
    Write-Host "Pulling updates"
    git pull
  }
  "Switch to branch" {
    Write-Host -NoNewline "Enter branch name: "
    $branchName = Read-Host
    $branch = git branch -a | Where-Object { $_ -like "*$branchName*" } | Select-Object -First 1
    $branch = $branch -replace "remotes/origin/", ""
    if ($branch -eq $null) {
      Write-Host "Branch $branchName does not exist"
      exit 1
    }
    $branch = $branch.TrimStart("*").Trim()
    Write-Host -NoNewline "Is $branch the correct branch name? (y/n): "
    $inp = Read-Host

    if ($inp -ne "y") {
      Write-Host "Exiting"
      exit 0
    }

    Write-Host "Checking out branch $branch"
    git checkout $branch
  }
  "Pull updates from remote branch" {
    Write-Host "Fetching updates..."
    git fetch
    Write-Host "Enter name of branch"
    $branchName = Read-Host
    $branch = git branch | Where-Object { $_ -like "*$branchName*" }
    Write-Host "Pulling updates"
    git pull origin $branch
  }
  "List all branches" {
    Write-Host "Fetching updates..."
    git fetch --prune
    Write-Host "All of the git branches are:"
    git branch -a | ForEach-Object { $_.TrimStart("*").Trim() }
  }
  "Fetch prune updates" {
    Write-Host "Fetching updates and pruning..."
    git fetch --prune
    Write-Host "Pulling updates"
    git pull
  }
  "Exit" {
    Write-Host "Exiting"
  }
  default {
    Write-Host "Invalid choice"
    exit 1
  }
}
