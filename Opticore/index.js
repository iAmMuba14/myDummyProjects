console.log("Hey there");

document.querySelector(".button").style.color = "blue";
document.querySelector("span").style.color = "red";
document.querySelector("h1").style.fontSize = "10em";
document.querySelector("h1").style.fontFamily = "monospace"
document.querySelector("h1").innerText = "HIM";

document.querySelector(".we").onclick = () => {
    document.querySelector(".we").style.color = "#3999D1";
}

function changeColor(){
    document.querySelector("h1").style.color = "yellow";
    document.querySelector(".logo h2").style.color = "green";
    document.querySelector(".Eight h1").style.fontSize = "7.3rem";
}