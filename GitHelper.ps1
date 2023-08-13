. ./Trello.ps1

$currentBranch = git branch | Select-String "\*" | ForEach-Object { $_.ToString().Split(" ")[-1] }
Write-Host "What do you want to do?"
Write-Host "1. Create branch from url (trello url)"
Write-Host "2. Get updates from current branch ($currentBranch -> pull)"
Write-Host "3. Get updates from remote main branch (checkout)"
Write-Host "4. Switch to branch"
Write-Host "5. Pull updates from remote branch"
Write-Host "7. List all branches"
Write-Host "8. Fetch prune updates"
Write-Host "9. Exit"

Write-Host -NoNewline "Enter your choice: "
$inp = Read-Host
switch ($inp) {
  1 {
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
	git pull origin trello-db --quiet
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

	git reset HEAD
	git add TrelloDB.json
	git commit -m "Updated TrelloDB.json"
	git checkout trello-db
	git push --set-upstream origin trello-db

	Write-Host "would you like to create a branch for this card? (y/n)"
	$inp = Read-Host
	if ($inp -ne "y") {
		Write-Host "Exiting"
		exit 0
	}

	$branch = $cardName.ToLower() -replace " \| ", "-"
	$branch = $branch -replace " ", "-"
    Write-Host "Creating branch $branch"
    git branch $branch
    Write-Host "Checking out branch $branch"
    git checkout $branch
    Write-Host "Pushing branch $branch"
    git push --set-upstream origin $branch
  }
  2 {
    Write-Host "Fetching updates..."
    git fetch
    Write-Host "Pulling updates"
    git pull
  }
  3 {
    Write-Host "Fetching updates..."
    git fetch
    Write-Host "Checking out main"
    git checkout main
    Write-Host "Pulling updates"
    git pull
  }
  4 {
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
  5 {
    Write-Host "Fetching updates..."
    git fetch
    Write-Host "Enter name of branch"
    $branchName = Read-Host
    $branch = git branch | Where-Object { $_ -like "*$branchName*" }
    Write-Host "Pulling updates"
    git pull origin $branch
  }
  7 {
    Write-Host "Fetching updates..."
    git fetch --prune
    Write-Host "All of the git branches are:"
    git branch -a | ForEach-Object { $_.TrimStart("*").Trim() }
  }
  8 {
    Write-Host "Fetching updates and pruning..."
    git fetch --prune
    Write-Host "Pulling updates"
    git pull
  }
  9 {
    Write-Host "Exiting"
  }
  default {
    Write-Host "Invalid choice"
    exit 1
  }
}
