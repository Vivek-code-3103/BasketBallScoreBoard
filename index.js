 const hscore = document.querySelector(".homeScore");
const gscore = document.querySelector(".guestScore");
const hbtn1 = document.querySelector(".hbtn1");
const hbtn2 = document.querySelector(".hbtn2");
const hbtn3 = document.querySelector(".hbtn3");
const gbtn1 = document.querySelector(".gbtn1");
const gbtn2 = document.querySelector(".gbtn2");
const gbtn3 = document.querySelector(".gbtn3");
const newbtn = document.querySelector(".new-btn");
const endbtn = document.querySelector(".end-btn");
const homeBg = document.querySelector(".home-bg");
const guestBg = document.querySelector(".guest-bg");
const result = document.querySelector(".result");
const hbtn = document.querySelector(".hbtn");
const gbtn = document.querySelector(".gbtn");
let isalive = true;
let homeScore = 0;
let guestScore = 0;


hbtn1.addEventListener("click", function () {
    if (isalive) {
        homeScore += 1;
        hscore.textContent = homeScore;
    }
});
hbtn2.addEventListener("click", function () {
    if (isalive) {
        homeScore += 2;
        hscore.textContent = homeScore;
    }
});
hbtn3.addEventListener("click", function () {
    if (isalive) {
        homeScore += 3;
        hscore.textContent = homeScore;
    }
});
gbtn1.addEventListener("click", function () {
    if (isalive) {
        guestScore += 1;
        gscore.textContent = guestScore;
    }
});
gbtn2.addEventListener("click", function () {
    if (isalive) {
        guestScore += 2;
        gscore.textContent = guestScore;
    }
});
gbtn3.addEventListener("click", function () {
    if (isalive) {
        guestScore += 3;
        gscore.textContent = guestScore;
    }
});
endbtn.addEventListener("click",function(){
    if(homeScore> guestScore){
        guestBg.classList.remove("winner");
        homeBg.classList.add("winner");
       /* hbtn.forEach((x)=>{
            x.style.backgroundcolor = "yellow";
        });
        gbtn.forEach((x)=>{
           x.style.backgroundcolor="blue";
        });*/
        result.textContent = "HOME TEAM WINS"
        isalive = false;
    }else if(homeScore == guestScore){
        guestBg.classList.add("draw");
        homeBg.classList.add("draw");
        /*gbtn.forEach((y) => {
          y.style.backgroundColor = "blueviolet";
        });
         
        hbtn.forEach((y) => {
          y.style.backgroundColor = "blueviolet";
        });*/
        result.textContent = "MATCH DRAW";
        isalive = false;
    }else{
        homeBg.classList.remove("winner");
        guestBg.classList.add("winner");
        /*hbtn.forEach((y) => {
          y.style.backgroundColor = "#1b244a";
        });
        gbtn.forEach((x) => {
          x.style.backgroundColor = "green";
        });*/
        result.textContent = "GUEST TEAM WINS";
        isalive = false;
    }
});

newbtn.addEventListener("click",function(){
    //    if(isalive==false){
            result.textContent="";
            homeScore=0;
            guestScore=0;
            homeBg.classList.remove("winner");
            guestBg.classList.remove("winner");
            /*hbtn.forEach((y)=>{
               y.style.backgroundColor = "blue";       
            });
            gbtn.forEach((x)=>{
              x.style.backgroundColor="green";
            });*/
            homeBg.classList.remove("draw");
            guestBg.classList.remove("draw");
            hscore.textContent = homeScore;
            gscore.textContent = guestScore;
    //    }
       isalive = true;
});




let startbtn = document.querySelector(".start");
let breakbtn = document.querySelector(".break");
var min = 00;
var second = 00;
var tens = 00;
let minOut = document.querySelector(".min");
let secondOut = document.querySelector(".second");
let tensOut = document.querySelector(".tens");
var Interval;

startbtn.addEventListener("click",()=>{
    clearInterval(Interval);
    Interval = setInterval(startTime,10);
});
breakbtn.addEventListener("click",()=>{
   clearInterval(Interval);
});
newbtn.addEventListener("click",()=>{
     clearInterval(Interval);
     tens="00";
     second="00";
     min="00";
     minOut.innerHTML = min;
     secondOut.innerHTML = second;
     tensOut.innerHTML = tens;
});
endbtn.addEventListener("click",()=>{
    clearInterval(Interval);
 });
function startTime(){
    tens++;
    if(tens<=9){
        tensOut.innerHTML = "0"+tens;
    }
    if(tens>9){
        tensOut.innerHTML = tens;
    }
    if(tens>99){
        second++;
        secondOut.innerHTML = "0"+second;
        tens=0;
        tensOut.innerHTML = "0"+tens;
    }
    if(second>9){
       secondOut.innerHTML = second;
    }
    if(second>59){
        min++;
        minOut.innerHTML = "0"+min;
        second=0;
        secondOut.innerHTML="0"+second;
    }
    if(min>9){
        minOut.innerHTML = min;
    }
    if(min>59){
        clearInterval(Interval);
        result.textContent = "Times Up"
    }
}