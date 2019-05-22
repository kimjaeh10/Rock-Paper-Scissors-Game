let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
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

// setTimeout(function () { console.log("3 seconds") }, 3000 );

function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(comp)}. You Win!`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function () { document.getElementById(user).classList.remove('green-glow') }, 500);
}

function lose(user, comp) {
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(comp)} beats ${convertToWord(user)}. You Lost.`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function () { document.getElementById(user).classList.remove('red-glow') }, 500);
}

function draw(user, comp) {
    result_p.innerHTML = `${convertToWord(comp)} equals ${convertToWord(user)}. It's a draw.`
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(function () { document.getElementById(user).classList.remove('gray-glow') }, 500);
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

main();