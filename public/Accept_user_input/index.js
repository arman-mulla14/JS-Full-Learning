//

function roll(){
let user = document.getElementById('mytext').value;
let data = document.getElementById('main');
data.textContent= `Hello ${user}, welcome to the JavaScript world!`;
alert(`Hello ${user}, welcome to the JavaScript world!`);
}