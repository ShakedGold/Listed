$apiKey = '70f030a4d157b2160d08948a4e15cfc5'
$apiToken = 'ATTA3794a7771dcce119ea6768161e1026a05043a57553a6ac5a189ef321f338e6ea3E4A4EF7'
$kanbanBoard = '64c67e7a9618fdd3555d0629'

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