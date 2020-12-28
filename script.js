window.addEventListener('load', init);
//global variable

//available levels
const levels = {
    easy : 5,
    medium : 3,
    hard : 2
}

//to change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM elements

const wordInput = document.querySelector('#word-Input');
const currentWord = document.querySelector('#current-Word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'Misspell',
    'lucky',
    'statue',
    'horrendous',
    'javascript',
    'diarrhoea',
    'investigate',
    'nutrition',
    'siblings',
    'symptom',
    'establishment',
    'laughter',
    'cocktail',
    'intelligence',
    'pronounciation',
    'handkerchief'
];

//initialize game
function init() {
    //show number of seconds in UI
    seconds.innerHTML = currentLevel;
     //load word from array
     showWord(words);
     //start matching on word input
     wordInput.addEventListener('input', startMatch);
    //call countdown every sec
    setInterval( countdown , 1000);
    //check game status
    setInterval(checkStatus, 50);
}

// start match
function startMatch() {
    if(matchWords()){
       isPlaying = true;
       time = currentLevel + 1;
       showWord(words);
       wordInput.value = '';
       score++;
    }
    //if score is -1 display 0
    if(score === -1){
        scoreDisplay.innerHTML = 0;
   } else {
       scoreDisplay.innerHTML = score;
   }
}   
// match current word to wordInput
function matchWords(){
    if(wordInput.value == currentWord.innerHTML){
        message.innerHTML = 'Correct!!';
        return true;
    }
    else{
        message.innerHTML = '';
        return false;
    }
}

//pick to show random words
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

function countdown() {
    if (time > 0) {
        time--;
    }
    else if (time === 0) {
        isPlaying = false;
    }
    //show time
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!'
        score = -1;
    }
}