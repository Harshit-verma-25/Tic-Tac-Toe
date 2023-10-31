// Initializing value of Win, Lose and Draw
const xWin = document.getElementById("X-win-count")
const oWin = document.getElementById("O-win-count")
const boxes = document.getElementsByClassName("box")
const boxtext = document.getElementsByClassName("boxtext")
const playAgainBtn = document.getElementById("play-again-btn")
const ResetBtn = document.getElementById("reset-btn")
const draw = document.getElementById("draw-count")

let xWinCount = 0
let oWinCount = 0
let drawCount = 0
let turnCount = 0
let turn = "X"
let gameover = false

// Function to change turn
const changeturn = () => {
        return turn === "X" ? "O" : "X"
}

// Function to check win
const checkwin = () => {
    turnCount += 1
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
    wins.forEach(element => {
        if((boxtext[element[0]].innerText === boxtext[element[1]].innerText) && (boxtext[element[1]].innerText === boxtext[element[2]].innerText) && (boxtext[element[0]].innerText !== "")){
            if(boxtext[element[0]].innerText === "X"){
                xWinCount += 1;
                xWin.textContent = `X: ${xWinCount}`
            }
            else{
                oWinCount += 1;
                oWin.textContent = `O: ${oWinCount}`
            }
        gameover = true
        } 
    })
    if(turnCount === 9 && gameover === false){
        drawCount += 1
        draw.textContent = `Draw: ${drawCount}`
    }
}

// Game Logic
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener("click", () => {
        if(boxtext.innerText === "" && gameover === false){
            boxtext.innerText = turn
            turn = changeturn()
            checkwin()
        }
    })
})

// Play Again Button
playAgainBtn.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll(".boxtext")
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    })
    gameover = false
    turnCount = 0
    turn = "X"
})

// Restart Button
ResetBtn.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll(".boxtext")
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    })
    gameover = false
    turn = "X"    
    xWinCount = 0
    oWinCount = 0
    drawCount = 0
    turnCount = 0

    xWin.textContent = `X: ${xWinCount}`
    oWin.textContent = `O: ${oWinCount}`
    draw.textContent = `DRAW: ${drawCount}`
})
