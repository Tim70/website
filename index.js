
function getTime(weatherText){
    let x = new Date();
    let marquee = document.getElementById("time");
    marquee.innerText = "The time is " + x.toLocaleTimeString() + "|"  + weatherText;
}

async function weather() {
    const response = await fetch("https://wttr.in/?format=3&m");
    return await response.text();
  }

weather().then( (weatherText) => {
    setInterval(getTime(weatherText), 1000);
});


window.addEventListener('offline', () => {
    document.body.parentElement.classList.add("offline");
});
window.addEventListener("online", () => {
    document.body.parentElement.classList.remove("offline");
});