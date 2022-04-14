function jubileeCountdown(){
    const birthDate = new Date("21 April 2026 00:00");
    const now = new Date();
    const diff = birthDate - now;
    

    const msInSecond = 1000;//сколько миллисекунд в секунде
    const msInMinute = 60 * 1000;//сколько миллисекунд в минуте
    const msInHour = 60 * 60 * 1000; //сколько миллисекунд в часе
    const msInDay = 24 * 60 * 60 * 1000; //сколько миллисекунд в дне

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent=displayDay;
    
    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <=0){
        document.querySelector(".days").textContent=0;
        document.querySelector(".hours").textContent=0;
        document.querySelector(".minutes").textContent=0;
        document.querySelector(".seconds").textContent=0;
        clearInterval(timerID);
        turned100();
    } 
}
let timerID=setInterval(jubileeCountdown, 1000);
function turned100(){
    const heading = document.querySelector("h1");
    heading.textContent="The Queen Elizabeth II is a 100 years old!";
    heading.classList.add("red");
    turned100();
}
const button = document.querySelector("#myButton");
button.addEventListener("click", function(){
    document.querySelector("#myAudio").play();
})