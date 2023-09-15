if(-not(Test-Path -Path trello.env)) {
	exit 2;
}

Get-Content trello.env | foreach {
	$name, $value = $_.split('=')
	if ([string]::IsNullOrWhiteSpace($name) -Or $name.Contains('#')) {
	  continue
	}
	Set-Content env:\$name $value
}  

$apiKey = $env:TRELLO_API_KEY
$apiToken = $env:TRELLO_API_TOKEN
$kanbanBoard = $env:TRELLO_KANBAN_BOARD

function getBoard {
	 ([string]$boardId)
	$uri = "https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${apiToken}"
	Invoke-RestMethod -Uri $uri
}
function getBoardIds {
	$uri = "https://api.trello.com/1/members/me/boards?fields=name,url&key=$apiKey&token=$apiToken"
	Invoke-RestMethod -Uri $uri
}
function getBoardLists {
	param ([string]$boardId)
	$uri = "https://api.trello.com/1/boards/${boardId}/lists?fields=name&key=${apiKey}&token=${apiToken}"
	Invoke-RestMethod -Uri $uri
}
function getBoardCards {
	param ([string]$boardId)
	$uri = "https://api.trello.com/1/boards/${boardId}/cards?fields=name&key=${apiKey}&token=${apiToken}"
	Invoke-RestMethod -Uri $uri
}
function getBoardCard {
	param ([string]$cardId)
	$uri = "https://api.trello.com/1/cards/${cardId}?key=${apiKey}&token=${apiToken}"
	Invoke-RestMethod -Uri $uri | ConvertTo-Json
}
function getListFromName() {
	param (
		[string]$boardName,
		[string]$listName
	)
	$board = getBoardFromName $boardName
	$lists = getBoardLists $board.id
	$lists | Where-Object { $_.name -like $listName }
}
function getCardFromName() {
	param (
		[string]$boardName,
		[string]$cardName
	)
	$board = getBoardFromName $boardName
	$cards = getBoardCards $board.id
	$cards | Where-Object { $_.name -like "*$cardName*" }
}
function getBoardFromName() {
	param (
		[string]$boardName
	)
	$boards = getBoardIds
	$boards | Where-Object { $_.name -like "*$boardName*" }
}
function createCard() {
	param (
		[string]$listId,
		[string]$name,
		[string]$desc
	)
	$uri = "https://api.trello.com/1/cards?key=${apiKey}&token=${apiToken}&idList=${listId}&name=${name}&desc=${desc}"
	Invoke-RestMethod -Uri $uri -Method Post
}
function updateCard() {
	param (
		[string]$cardId,
		[string]$name,
		[string]$desc
	)
	$uri = "https://api.trello.com/1/cards/${cardId}?key=${apiKey}&token=${apiToken}&name=${name}&desc=${desc}"
	Invoke-RestMethod -Uri $uri -Method Put
}
function deleteCard() {
	param (
		[string]$cardId
	)
	$uri = "https://api.trello.com/1/cards/${cardId}?key=${apiKey}&token=${apiToken}"
	Invoke-RestMethod -Uri $uri -Method Delete
}
function readFromTrelloBranchGithub() {
	git fetch
	git pull origin trello-db
	$json = Get-Content -Path 'TrelloDB.json' | ConvertFrom-Json
	$json.features.latest = $json.features.latest + 1
	$json.ui.latest = $json.ui.latest + 1
	$json.design.latest = $json.design.latest + 1
	$json | ConvertTo-Json | Out-File 'TrelloDB.json'
	exit 0;
}

function setLabel() {
	param (
		[string]$cardName,
		[string]$label
	)
	$card = getCardFromName "Kanban" $cardName
	$uri = "https://api.trello.com/1/cards/${card.id}/idLabels?key=${apikey}&token=${apiToken}"
	Invoke-RestMethod -Uri $uri -Method Post
}
function getLabelsFromBoard() {
	param (
		[string]$boardName
	)
	$board = getBoardFromName $boardName
	$boardID = $board.id
	$uri = "https://api.trello.com/1/boards/${boardID}/labels?key=${apiKey}&token=${apiToken}"
	Write-Host $uri
	Invoke-RestMethod -Uri $uri | Where-Object { $_ -ne "" }
}

function getLabelFromName() {
	param (
		[string]$boardName,
		[string]$labelName
	)
	$labels = getLabelsFromBoard $boardName
	$labels | Where-Object { $_.name -like $labelName }
}