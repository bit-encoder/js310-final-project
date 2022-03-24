const presidentQuestion = document.getElementById('president')
const sixLetters = document.getElementById('six-letters')
const sumOfTwoQuestion = document.getElementById('sum-of-two-numbers')

const praise = "You got this right!";
const reprimand = "Better luck next time.";

function checkPresident() {
    const currentState = presidentQuestion.value

    if (currentState.toLowerCase() === 'biden'){
        presidentQuestion.style.backgroundColor = 'rgb(167, 232, 189)';
        const praiseText = document.createElement('p');
        praiseText.textContent = praise;

    }
}

presidentQuestion.addEventListener('submit', () => checkPresident());

function checkSixLetters() {
    const valid
}

function checkSum() {
    const valid
}