// samle alle varibalene til senere bruk 
let userScore = 0; 
let compScore = 0; 
const userScore_span = document.getElementById("user-score"); 
const compScore_span = document.getElementById("comp-score"); 
const scoreBoard_div = document.querySelector(".score-board"); 
const result_p = document.querySelector(".result > p"); 
const rock_div = document.getElementById("r"); 
const paper_div = document.getElementById("p"); 
const scissors_div = document.getElementById("s"); 


//Aktivere knappene 
function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; 
}

function convertToWord(letter) {
    if (letter === "r") return "Stein";
    if (letter === "p") return "Papir";
    if (letter === "s") return "Saks";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore; 
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertToWord(userChoice) + " slår " + convertToWord(computerChoice) + ". Du vinner!";
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("green-glow")}, 700); 
}



function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore; 
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertToWord(userChoice) + " taper mot " + convertToWord(computerChoice) + ". Data vinner...";
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("red-glow")}, 700); 
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore; 
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertToWord(userChoice) + " er det samme som " + convertToWord(computerChoice) + ". Det blir uavgjort."; 
    document.getElementById(userChoice).classList.add("grey-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("grey-glow")}, 700); 
}

function game(userChoice) {
    const computerChoice = getComputerChoice(); 
    switch (userChoice + computerChoice) {
        case "pr": 
        case "rs": 
        case "sp": 
        win(userChoice, computerChoice);
            break; 
        case "rp": 
        case "ps": 
        case "sr": 
        lose(userChoice, computerChoice); 
            break;
        case "rr": 
        case "pp": 
        case "ss": 
        draw(userChoice, computerChoice); 
           
    }
}


rock_div.addEventListener("click", function() {
    game("r");
})

paper_div.addEventListener("click", function() {
    game("p");
})

scissors_div.addEventListener("click", function() {
    game("s");
})

//https://www.youtube.com/watch?v=jaVNP3nIAv0 