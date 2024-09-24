let weatherText = "";
function getTime(){
    let x = new Date();
    let marquee = document.getElementById("time");
    marquee.innerText = "The time is " + x.toLocaleTimeString() + "|" + weatherText;
}

async function weather() {
    const response = await fetch("https://wttr.in/?format=3&m");
    return await response.text();
  }
weather().then( (x) => {
    weatherText= x;
});


window.addEventListener('offline', () => {
    document.body.parentElement.classList.add("offline");
});
window.addEventListener("online", () => {
    document.body.parentElement.classList.remove("offline");
});
setInterval(getTime, 1000);
function webRingImage(){
    document.getElementsByTagName("a")[7].innerHTML='<img src="https://github.com/umacabal/umaring/raw/main/umass.png">';
    observer.disconnect();
}
function createObserver(){
    const observer = new MutationObserver(webRingImage);
    observer.observe(document.getElementById("umaring"),{childList:true});
    console.log("lies");
}