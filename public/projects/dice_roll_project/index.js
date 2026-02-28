function Roll(){

const diceCount = document.getElementById("diceCount").value;
const result = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");

const values = []; 
const images = [];

for(let i = 0; i < diceCount ; i++){

const value = Math.floor(Math.random()*6) + 1; 
values.push(value);
images.push(`<img src="./dice_images/${value}.png" alt="dice${value}">`);

}

result.textContent = `dice values: ${values.join(",")}`;
diceImages.innerHTML = images.join("");

}