let btnOnePointHome = document.getElementById("btn-one-point-h")
let btnTwoPointHome = document.getElementById("btn-two-point-h")
let btnThreePointHome = document.getElementById("btn-three-point-h")
let decHomeScoreOne = document.getElementById("decHomeScoreOne")
let scoreHomeEl = document.getElementById("home-count-el")
let scoreHome = 0

function increaseScoreHomeOne() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
}

function increaseScoreHomeTwo() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
}

function increaseScoreHomeThree() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}

function decreaseHomeScore() {
    scoreHome -= 1
    scoreHomeEl.textContent = scoreHome
}


let btnOnePointAway = document.getElementById("btn-one-point-a")
let btnTwoPointAway = document.getElementById("btn-two-point-a")
let btnThreePointAway = document.getElementById("btn-three-point-a")
let decAwayScoreOne = document.getElementById("decAwayScoreOne")
let scoreAwayEl = document.getElementById("away-count-el")
let scoreAway = 0


function increaseScoreAwayOne() {
    scoreAway += 1
    scoreAwayEl.textContent = scoreAway
}

function increaseScoreAwayTwo() {
    scoreAway += 2
    scoreAwayEl.textContent = scoreAway
}

function increaseScoreAwayThree() {
    scoreAway += 3
    scoreAwayEl.textContent = scoreAway
}

function decreaseAwayScore() {
    scoreAway -= 1
    scoreAwayEl.textContent = scoreAway
}