let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset")
let msgContainer = document.querySelector(".msg-container")
let newBtn =  document.querySelector("#newGame-btn")
let winnerMsg =  document.querySelector("#msg")
turnx = true;
const winPaterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () =>{
    turnx = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(turnx === true){
            box.innerText = "x"
            turnx = false;
            box.classList.remove("color2")
            box.classList.add("color1")
        }else{
            box.innerText = "0"
            turnx = true;
            box.classList.remove("color1")
            box.classList.add("color2")
        }
        box.disabled = true;
        chekWinner();
    })
});
const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWInner = (winner) =>{
        winnerMsg.innerHTML = ` 🧩Congratulation, the winner is ${winner} 🎉🥳🏆`;
        msgContainer.classList.remove("hide");
        disabledBoxes();
    }
const chekWinner = () =>{
    for(patterns of winPaterns){
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

    if(pos1val != "" && pos2val != ""&& pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            showWInner(pos1val);
        }
    }
    }
}
resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);