#! /bin/bash
echo "What do you want to do?"
echo "1. Create branch from url (trello url)"
echo "2. Get updates from current branch"
echo "3. Get updates from remote main branch (checkout)"
echo "4. Switch to branch"
echo "5. Pull updates from remote branch"
echo "6. Exit"

echo -n "Enter your choice: "
read inp
case $inp in
  1)
    echo -n "Enter url: "
	read url
	branch=$(echo $url | cut -d'/' -f6 | sed -E 's/[0-9]+\-//')
    
    echo -n "Is $branch the correct branch name? (y/n): "
	read inp	
    if [[ "$inp" != "y" ]]; then
      echo "Exiting"
      exit 1
	fi
    
    echo "Fetching updates..."
    git fetch
    echo "Creating branch $branch"
    git branch $branch
    echo "Checking out branch $branch"
    git checkout $branch
    echo "Pushing branch $branch"
    git push --set-upstream origin $branch
  ;;
  2)
    echo "Fetching updates..."
    git fetch
    echo "Pulling updates"
    git pull
  ;;
  3)
    echo "Fetching updates..."
    git fetch
    echo "Checking out main"
    git checkout main
    echo "Pulling updates"
    git pull
  ;;
  4)
    echo "Enter branch name"
	read branchName
    branch=$(git branch | grep -i $branchName)
    echo "Is $branch the correct branch name? (y/n)"
	read inp

    if (inp -ne "y"); then
      echo "Exiting"
	  exit 1
    fi

    echo "Checking out branch $branch"
    git checkout $branch
  ;;
  5)
    echo "Fetching updates..."
	git fetch
	echo "Enter name of branch"
	read branchName
	branch=$(git branch | grep -i $branchName)
	echo "Pulling updates"
	git pull origin $branch
  ;;
  6)
	echo "Exiting"
	;;
  *)
    echo "Invalid choice"
  ;;
esac