/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let gamePlaying = false

let scores = [0, 0]
let roundScore = 0
let activePlayer = 0
const diceDom = document.querySelector('.dice')
const currentZero = document.getElementById('current-0')
const currentOne = document.getElementById('current-1')
const playerZero = document.querySelector('.player-0-panel')
const playerOne = document.querySelector('.player-1-panel')
const playerNameZero = document.getElementById('name-0')
const playerNameOne = document.getElementById('name-1')
const ScoreZero = document.getElementById('score-0')
const ScoreOne = document.getElementById('score-1')
const roll = document.querySelector('.btn-roll')
const hold = document.querySelector('.btn-hold')
const newGame = document.querySelector('.btn-new')

const nextPlayer = function () {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
	roundScore = 0
	currentZero.textContent = 0
	currentOne.textContent = 0
	playerZero.classList.toggle('active')
	playerOne.classList.toggle('active')
	diceDom.style.display = 'none'
}

const init = function () {
	scores = [0, 0]
	roundScore = 0
	activePlayer = 0
	ScoreZero.textContent = 0
	ScoreOne.textContent = 0
	diceDom.style.display = 'none'
	currentZero.textContent = 0
	currentOne.textContent = 0
	playerNameZero.textContent = 'Player 1'
	playerNameOne.textContent = 'Player 2'
	playerZero.classList.remove('winner')
	playerOne.classList.remove('winner')
	playerZero.classList.remove('active')
	playerOne.classList.remove('active')
	playerZero.classList.add('active')
	gamePlaying = true
}

// GAME LOGIC
roll.addEventListener ('click', function () {
	if (gamePlaying) {
		let dice = Math.floor(Math.random() * 6) + 1

		diceDom.style.display = 'block'
		diceDom.src = 'dice-' + dice + '.png'

		if (dice !== 1) {
			roundScore += dice
			document.querySelector('#current-' + activePlayer).textContent = roundScore
		} else {
			nextPlayer()
		}
	}
})

hold.addEventListener('click', function() {
	if (gamePlaying) {
		scores[activePlayer] += roundScore
		document.getElementById('score-' + activePlayer).textContent = scores[activePlayer]

		if (scores[activePlayer] >= 10) {
			document.getElementById('name-' + activePlayer).textContent = 'Winner!'
			diceDom.style.display = 'none'
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
			gamePlaying = false
		} else {
			nextPlayer()
		}
	}
})

newGame.addEventListener('click', init)

// START GAME
init()
