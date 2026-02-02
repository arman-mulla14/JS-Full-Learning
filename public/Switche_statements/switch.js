


function Roll(){

    const dates = Number(document.getElementById('days').value );
    const result = document.getElementById("result"); 
 
switch(dates){

case 1:
    result.style.color = "red";
    result.style.fontSize = "20px";
    result.textContent = "Monday ☀️";
    break;

case 2:
    result.style.color = "orange";
    result.style.fontSize = "20px";
    result.textContent = "Tuesday 🔥";
    break;

case 3:
    result.style.color = "yellow";
    result.style.fontSize = "20px";
    result.textContent = "Wednesday 🌤️";
    break;

case 4:
    result.style.color = "blue";
    result.style.fontSize = "20px";
    result.textContent = "Thursday ⚡";
    break;

case 5:
    result.style.color = "green";
    result.style.fontSize = "20px";
    result.textContent = "Friday 🎉";
    break;

case 6:
    result.style.color = "purple";
    result.style.fontSize = "20px";
    result.textContent = "Saturday 🕺";
    break;

case 7:
    result.style.color = "brown";
    result.style.fontSize = "20px";
    result.textContent = "Sunday 😌";
    break;

default:
    result.style.color = "black";
    result.textContent = "Enter number between 1 and 7 ❌";


}
}