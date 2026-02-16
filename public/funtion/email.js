 

 function isemail(email) {

    if(email.includes('@') && email.includes(".com")) {
        return true;
    } else {
        return false;
    }
 }



console.log(isemail("arman@gmail.com"));f