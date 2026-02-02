function Roll(){
    const b1 = document.getElementById('b1');
        const b2 = document.getElementById('b2');

            const b3 = document.getElementById('b3');
                const b4 = document.getElementById('b4');
                    const b5 = document.getElementById('b5');
                let r1  = document.getElementById('r1');     
                    
if(b1.checked){

    r1.textContent = `You are Student 😃`
    r1.style.color= "green"; 
    r1.style.fontSize= "20px"; 

}else{

    r1.textContent = `You are Not Student ❌`
    r1.style.color='red'
}

if(b2.checked){

    r2.textContent = `You are 18+ 😃`
    r2.style.color= "green"; 
    r2.style.fontSize= "20px"; 

}else{

    r2.textContent = `You are Not 18+ ❌`
    r2.style.color='red'
}


if(b3.checked){

    r3.textContent = `You are Student Of TKIET 😃`
    r3.style.color= "green"; 
    r3.style.fontSize= "20px"; 

}else{

    r3.textContent = `You are Not Student Of TKIET ❌`
    r3.style.color='red'
}

if(b4.checked){

    r4.textContent = `You are Male 😃`
    r4.style.color= "green"; 
    r4.style.fontSize= "20px"; 

}


if(b5.checked){

    r5.textContent = `You are Female 😃`
    r5.style.color= "green"; 
    r5.style.fontSize= "20px"; 

}



                    
}