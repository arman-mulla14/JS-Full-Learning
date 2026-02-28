function Roll(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";    

let allowedChars = "";
let password = "";
allowedChars += includeLowercase ? lowercaseChars : "";
allowedChars += includeUppercase ? uppercaseChars : "";
allowedChars += includeNumbers ? numberChars : "";
allowedChars += includeSymbols ? symbolChars : ""; 
if(allowedChars.length > 0){
    return  `(password legnth must be 1 )`
}
    return " ";

}

    const passwordLength = 12; 
    const includeUppercase = true;
    const includeLowercase = false;
    const includeNumbers = true;
    const includeSymbols = false;

    const password = Roll(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols); 


    console.log(password);