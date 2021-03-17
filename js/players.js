'use strict'

var p1Name = null;
var p2Name = null;
var btnStart = null;
var playerNames = [];

var validateInput = function () {
    var isValid = true;
    if (p1Name.value.length < 3) {
        p1Name.value = '';
        p1Name.placeholder = '3 or more characters, pleace';
        isValid = false;
    }

    if (p2Name.value.length < 3) {
        p2Name.value = '';
        p2Name.placeholder = '3 or more characters, pleace';
        isValid = false;
    }
    return isValid;
}

var savePlayerNames = function () {
    playerNames.push({ namep1: p1Name.value, namep2: p2Name.value });
    localStorage['playersNames'] = JSON.stringify(playerNames);
}

var nextPage = function () {
    savePlayerNames();
    var newGame = true;
    localStorage['newGame'] = JSON.stringify(newGame);
    location.href = 'game.html';
}

window.onload = function () {
    p1Name = document.getElementById('p1');
    p2Name = document.getElementById('p2');
    btnStart = document.getElementById('startBtn');

    btnStart.addEventListener('click', function () {
        (validateInput()) ? nextPage() : errorBtn();
    });
}