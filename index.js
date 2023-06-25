
function getTime(){
    let x = new Date();
    let marquee = document.getElementById("time");
    marquee.innerText = "The time is " + x.toLocaleTimeString();
}

setInterval(getTime,1000);