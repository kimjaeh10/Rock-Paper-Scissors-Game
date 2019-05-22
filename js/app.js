let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const computer_questionmark = document.getElementById("question-mark");

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    computer_questionmark.innerHTML = "";
    const choice = choices[randomNumber];
    showComputerChoice(choice);
    
    return choice;
}

function showComputerChoice(letter) {
    if (letter === 'r') {
        var img = document.createElement("IMG");
        img.src = "images/rock.png";
        img.width = 100;
        computer_questionmark.appendChild(img);
    }
    if (letter === 'p') {
        var img = document.createElement("IMG");
        img.src = "images/paper.png";
        img.width = 100;
        computer_questionmark.appendChild(img);
    }
    if (letter === 's') {
        var img = document.createElement("IMG");
        img.src = "images/scissor.png";
        img.width = 100;
        computer_questionmark.appendChild(img);
    }
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        // User wins
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        // Computer wins
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        // Draw
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}


function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(comp)}. You Win!`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function () { document.getElementById(user).classList.remove('green-glow') }, 300);
}

function lose(user, comp) {
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(comp)} beats ${convertToWord(user)}. You Lost.`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function () { document.getElementById(user).classList.remove('red-glow') }, 300);
}

function draw(user, comp) {
    result_p.innerHTML = `${convertToWord(comp)} equals ${convertToWord(user)}. It's a draw.`
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(function () { document.getElementById(user).classList.remove('gray-glow') }, 300);
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

function myFunction() {
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "Rock Paper Scissors Game";

    computer_questionmark.innerHTML = "";

    var img = document.createElement("IMG");
    img.src = "images/questionmark.png";
    img.alt = "";
    img.width = 100;
    computer_questionmark.appendChild(img);
}

main();