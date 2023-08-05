Write-Output "What do you want to do?"
Write-Output "1. Create branch from url (trello url)"
Write-Output "2. Get updates from current branch"
Write-Output "3. Get updates from remote main branch (checkout)"
Write-Output "4. Switch to branch"

$inp = Read-Host "Enter your choice"
switch ($inp) {
  1 {
    $url = Read-Host "Enter url"
    $branchWithNumber = $url -Split "/" | Select-Object -last 1
    $branch = $branchWithNumber -replace "^(.*?)[0-9]-", ""
    
    $inp = Read-Host "Is $branch the correct branch name? (y/n)"
    if ($inp -ne "y") {
      Write-Output "Exiting"
      break
    }
    
    Write-Output "Fetching updates..."
    git fetch
    Write-Output "Creating branch $branch"
    git branch $branch
    Write-Output "Checking out branch $branch"
    git checkout $branch
    Write-Output "Pushing branch $branch"
    git push --set-upstream origin $branch
    break
  }
  2 {
    Write-Output "Fetching updates..."
    git fetch
    Write-Output "Pulling updates"
    git pull
    break
  }
  3 {
    Write-Output "Fetching updates..."
    git fetch
    Write-Output "Checking out main"
    git checkout main
    Write-Output "Pulling updates"
    git pull
    break
  }
  4 {
    $branchName = Read-Host "Enter branch name"
    $branch = git branch | Select-String -Pattern $branchName
    $branch = $branch -replace "^\s+", ""
    $inp = Read-Host "Is $branch the correct branch name? (y/n)"

    if ($inp -ne "y") {
      Write-Output "Exiting"
      break
    }

    Write-Output "Checking out branch $branch"
    git checkout $branch
    break
  }
  default {
    Write-Output "Invalid choice"
    break
  }
}