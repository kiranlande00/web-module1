let orangeBtn = document.getElementById("orangeBtn");
let redBtn = document.getElementById("redBtn");
let greenBtn = document.getElementById("greenBtn");
let blueBtn = document.getElementById("blueBtn");
let yellowBtn = document.getElementById("yellowBtn");
let board = document.getElementById("board");


orangeBtn.addEventListener("click",orangeFunction);
redBtn.addEventListener("click",redFunction);
greenBtn.addEventListener("click",greenFunction);
blueBtn.addEventListener("click",blueFunction);
yellowBtn.addEventListener("click",yellowFunction);


function orangeFunction(){
   board.style.backgroundColor = "orange";
}

function redFunction(){
    board.style.backgroundColor = "red";
}

function greenFunction(){
    board.style.backgroundColor = "green";
}

function blueFunction(){
    board.style.backgroundColor = "blue";
}

function yellowFunction(){
    board.style.backgroundColor = "yellow";
}


let textBox = document.getElementById("text");

textBox.addEventListener("input",changedText);
function changedText(){
    let boardText = document.getElementById("boardText");
    boardText.textContent = textBox.value;

}

let name = document.getElementById("name");
name.textContent = prompt("Your name please?");