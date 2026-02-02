function checkAge(){
let age = document.getElementById('ageInput').value; 
let result = document.getElementById('root'); 


if(age >= 18){

    result.textContent = `your age is ${age} you are valid 😃`;
    result.style.color = 'green';
    result.style.height = '50px';
    
if(age>=100 ){
   
      result.textContent = `${age}  ❌ please Enter valid age `;
    result.style.color = 'red';
    result.style.height = '50px';
    
}


}else{

      result.textContent = `your age is ${age} you are Not valid ❌ `;
    result.style.color = 'red';
    result.style.height = '50px';
    

    if(age>=0 ){
   
      result.textContent = `${age}  ❌ please Enter valid age `;
    result.style.color = 'red';
    result.style.height = '50px';
    
}
}


}