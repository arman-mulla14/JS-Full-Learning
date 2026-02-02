function Roll(){
    
let user = document.getElementById('name').value; 
let result = document.getElementById("data"); 

user = user.trim().charAt(0).toUpperCase() + user.trim().slice(1).toLowerCase(); 

result.textContent = user; 
}