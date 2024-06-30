let reset = document.querySelector(".reset");
let newGame = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msgContainer");
let winnerMsg = document.querySelector("#winnerMsg");
let buttons = document.querySelectorAll(".box");

let turn0 = true;


let winningPatterns =
[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let resetGame = () =>
{
    turn0 = true;
    enableButtons();
}

let disableButtons = () =>
{
    for(let button of buttons)
    {
        button.disabled = true;
    }
}

let enableButtons = () =>
{
    for (let button of buttons)
    {
        button.disabled = false;
        button.innerText ="";
        msgContainer.classList.add("hide");
    }
}

let showWinner = (player) =>
{
    winnerMsg.innerText = `Winner: ${player}`;
    msgContainer.classList.remove("hide");
    disableButtons();
}

let checkWinner = () => {
    for (let pattern of winningPatterns) {
        let posVal1 = buttons[pattern[0]].innerText;
        let posVal2 = buttons[pattern[1]].innerText;
        let posVal3 = buttons[pattern[2]].innerText;

        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if (posVal1 === posVal2 && posVal2 === posVal3) {
                showWinner(posVal1);
            }
        }
    }
}


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (turn0) {
            button.innerText = "0";
            turn0 = false;
        }
        else {
            button.innerText = "X";
            turn0 = true;
        }

        button.disabled = true;

        checkWinner();
    })
})

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);