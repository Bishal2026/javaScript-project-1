function bubbleRun(){
    let cutter = "";

for(let i =0 ; i<168; i++){
   let rn =  Math.floor(Math.random()*10)
    cutter  += `<div class="btn">${rn}</div>`;

}

document.querySelector("#panel-btn").innerHTML = cutter;

}
bubbleRun();

 let timer = 30;

function setTimer(){
     let timer1 =setInterval(function(){
        if(timer >0){
        timer--;
        document.querySelector("#timer").textContent = timer;}
        else{
            document.querySelector("#panel-btn").innerHTML =`<h1> Game Over <h1/>`
            clearInterval(timer1);
        }
    },1000);
}

setTimer();

let hitrn =0;
function hit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML = hitrn;
}

hit();

let score= 0;
function Scoreval(){
    score += 10;
    document.querySelector("#scr").textContent = score;
    
}

document.querySelector("#panel-btn").addEventListener("click",function(d){
   let clicknumber = Number(d.target.textContent);
   if(clicknumber === hitrn){
        Scoreval();
        bubbleRun();
        hit();
   }
});

