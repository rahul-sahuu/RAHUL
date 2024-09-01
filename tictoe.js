let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turn0 = true;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,7],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


  
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if (turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;  

        checkWinner();
    });
});

function checkWinner(){
   
}
