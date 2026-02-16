
function convert(){


    const temp = document.getElementById("temp").value; 
const fah = document.getElementById("Fah");
const cel = document.getElementById("Cel");
const result = document.getElementById("result");
let tempe; 



if(fah.checked){ 
tempe = parseInt(temp); 
tempe = tempe* 9 / 5 + 32; 

result.style.color= "green"; 
result.textContent = `The temperature in Fahrenheit is ${tempe.toFixed(2)} °F`;


}else if(cel.checked ){

   tempe = parseInt(temp); 
tempe = (tempe-32) * (5 / 9);
result.style.color= "green"; 
result.textContent = `The temperature in Fahrenheit is ${tempe.toFixed(2)} °F`;
 

}else{
    result.style.color="red"
    result.textContent = "Please select a conversion type.";
setTimeout(() => {

   // alert("Please select a conversion type.");
    location.reload();  
}, 1000);


}


}

