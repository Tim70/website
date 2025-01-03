let weatherText = "";
const observer = new MutationObserver(webRingImage);
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
// Beverage randomizer
function bevSelect(){
    let beverages = [["yuenyeung","https://en.wikipedia.org/wiki/Yuenyeung"], ["london fog", "https://en.wikipedia.org/wiki/London_fog_(drink)"], ["cortado", "https://en.wikipedia.org/wiki/Cortado"]];
    let beverage = beverages[Math.floor(Math.random() * beverages.length)];
    let beverageElement = document.getElementById("bev");
    beverageElement.innerText = beverage[0];
    beverageElement.setAttribute("href",beverage[1]);
}
window.onload = bevSelect;
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
    observer.observe(document.getElementById("umaring"),{childList:true});
}