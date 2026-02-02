
const Roll = document.getElementById("Roll");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const label4 = document.getElementById("label4");
const label5 = document.getElementById("label5");

const max = 1; 
const min = 15; 
let random1;
let random2;
let random3;
let random4;
let random5; 

Roll.onclick = function(){
random1 =Math.floor(Math.random()*(max- min+1))+ min;
label1.textContent = random1 ; 

random2 =Math.floor(Math.random()*(max- min+1))+ min;
label2.textContent = random2 ; 

random3 =Math.floor(Math.random()*(max- min+1))+ min;
label3.textContent = random3 ; 

random4 =Math.floor(Math.random()*(max- min+1))+ min;
label4.textContent = random4 ; 

random5 =Math.floor(Math.random()*(max- min+1))+ min;
label5.textContent = random5 ; 
}
