let counter = document.getElementById('countlabel');
let count = 0; 

function increment(){ 
    count +=1 
    counter.textContent = count; 
}

function reset(){
        count = 0;  
    counter.textContent = count; 
}

function decrement(){

    if(count <= 0){
        confirm("Count is already at zero");
        return;
    }
        count -=1;;  
    counter.textContent = count; 
}

