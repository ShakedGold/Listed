$currentBranch = git branch | Select-String "\*" | ForEach-Object { $_.ToString().Split(" ")[-1] }
Write-Host "What do you want to do?"
Write-Host "1. Create branch from url (trello url)"
Write-Host "2. Get updates from current branch ($currentBranch -> pull)"
Write-Host "3. Get updates from remote main branch (checkout)"
Write-Host "4. Switch to branch"
Write-Host "5. Pull updates from remote branch"
Write-Host "7. List all branches"
Write-Host "8. Exit"

Write-Host -NoNewline "Enter your choice: "
$inp = Read-Host
switch ($inp) {
  1 {
    Write-Host -NoNewline "Enter url: "
    $url = Read-Host
    $branch = $url.Split("/")[-1] -replace "[0-9]+-", ""

    Write-Host -NoNewline "Is $branch the correct branch name? (y/n): "
    $inp = Read-Host
    if ($inp -ne "y") {
      Write-Host "Exiting"
      exit 0
    }

    Write-Host "Fetching updates..."
    git fetch
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
    $branch = git branch -a | Where-Object { $_ -like "*$branchName*" }
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
    Write-Host "Exiting"
  }
  default {
    Write-Host "Invalid choice"
    exit 1
  }
}