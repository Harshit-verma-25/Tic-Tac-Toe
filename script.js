console.log("Welcome to Tic-Tac-Toe Game!!");

// Initializing value of Win, Lose and Draw
let win_p = 0
let lose_p = 0
let win_cpu = 0
let lose_cpu = 0
let draw = 0

let turn = "X"
let gameover = false

// Function to change turn
const changeturn = () => {
        return turn === "X" ? "O" : "X"
}

// Function to check win
const checkwin = () => {
    let boxtext = document.getElementsByClassName("boxtext")
    let wins = [
        [0,1,2],
        [0,3,6],
        [6,7,8],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        [3,4,5],
        [1,4,7],
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
            if(boxtext[e[0]].innerText == "X"){
                win_p += 1
                lose_cpu += 1
                document.querySelector(".turn1").innerText = boxtext[e[0]].innerText + " Won";
                document.querySelector(".turn2").innerText = boxtext[e[0]].innerText + " Won";
                document.querySelector(".win_p").innerText = win_p;
                document.querySelector(".lose_cpu").innerText = lose_cpu;
                gameover = true;
            }
            else{
                lose_p += 1
                win_cpu += 1 
                document.querySelector(".turn2").innerText = boxtext[e[0]].innerText + " Won";
                document.querySelector(".turn1").innerText = boxtext[e[0]].innerText + " Won";
                document.querySelector(".win_cpu").innerText = win_cpu;
                document.querySelector(".lose_p").innerText = lose_p;
                gameover = true;
            }
        }    
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn
            turn = changeturn()
            checkwin()
        }
    })
})