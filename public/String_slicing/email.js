//let email = "armanbashirmulla.15@gmail.com"; 
//let user = email.slice(0, email.indexOf("@"));
//let extesion = email.slice(email.indexOf("@")+1); 
//console.log(extesion);  
//console.log(user)


function Roll(){

    let email = document.getElementById('email').value; 
    let result = document.getElementById('data'); 
if(email.includes("@gmail ") ){
    
    result.style.color ="green";
    result.textContent= email.slice(0,email.indexOf("@")); 

   
}
else{
    result.style.color ="red "; 
    result.textContent= "Enter Valid email ❌"

    
}
}