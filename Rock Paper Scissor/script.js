let userScore = 0;
let compScore = 0;

let userScoreUpdate = document.querySelector(".userScore");
let compScoreUpdate = document.querySelector(".compScore");


let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let statusbox = document.querySelector(".status");
let msgContainer = document.querySelector(".msgContainer");

let drawGame = () => {
    msg.innerText = "The game is draw.";
    msgContainer.style.backgroundColor = "rgb(170, 55, 17)";
}

let genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    let compChoice = options[index];
    return compChoice;
}

let showWinner = (userWin) => {
    if (userWin) {
        msg.innerText = "You win.";
        msgContainer.style.backgroundColor = "green";
        userScore++;
        userScoreUpdate.innerText = userScore;
    }
    else {
        msg.innerText = "You lose.";
        msgContainer.style.backgroundColor = "red";
        compScore++;
        compScoreUpdate.innerText = compScore;
    }
};

let updateStatusBox = (compChoice) =>
{
    statusbox.innerText = `Computer choice : ${compChoice}`;
} 

let playGame = (userChoice) => {
    console.log(`User choice = ${userChoice}`);

    //computer choice
    let compChoice = genCompChoice();
    console.log(`Computer choice = ${compChoice}`);
    updateStatusBox(compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice == "rock") {
            //compChoice - paper or scissors
            userWin = compChoice == "paper" ? false : true;
        }
        else if (userChoice == "paper") {
            //compChoice - rock or scissors
            userWin = compChoice == "scissors" ? false : true;
        }
        else {
            //userChoice - scissors
            //compChoice - rock or paper
            userWin = compChoice == "rock" ? false : true;
        }

        showWinner(userWin);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});