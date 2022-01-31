let userScore = 0;
let computerScore = 0;
//comment
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
function convertWord(letter){
    if(letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}
function win(_user, computer){
    userScore ++;
    userScore_span.innerHTML = userScore;
    const userWord = "user".fontsize(3).sub();
    const compWord = "computer".fontsize(3).sub();
    result_p.innerHTML =  `${convertWord( _user )}${(userWord)} beats ${convertWord(computer)}${compWord} . You win!`;
}
function lose(_user, computer){
    computerScore ++;
    computerScore_span.innerHTML = computerScore;
    const userWord = "user".fontsize(3).sub();
    const compWord = "computer".fontsize(3).sub();
    result_p.innerHTML =  `${convertWord(computer)}${compWord}  beats ${convertWord( _user )}${(userWord)} . Computer wins!` ;
} 
   
function tie(_user, computer){
    result_p.innerHTML = "Its a draw!";
}

function getComputerChoice(){
    
    const choices = ["r", "p", "s"];
    const j = Math.floor(Math.random() * 3);
    return choices[j];

}

function game(_userChoice){
   const computerChoice = getComputerChoice();
    switch(_userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
        win(_userChoice,computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
        lose(_userChoice,computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
        tie(_userChoice,computerChoice);
        break;
    }
}

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    })
    paper_div.addEventListener('click',function(){
        game("p");
    })
    scissor_div.addEventListener('click',function(){
        game("s");
    })
}


    main();
function reset(){
    userScore_span.innerHTML = 0;
    computerScore_span.innerHTML =0;
    
}