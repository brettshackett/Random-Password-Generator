// Assignment code here
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"

var letters
var numbers
var symbols

function generateLength(){
  letters = window.prompt("How long do you want your password to be? Pick a number between 8 and 128: ");
  if (letters<8){
    window.alert("Password must be longer than 8 characters, try again!");
    generateLength();
  } else if(letters > 128){
    window.alert("Password must be shorter than 128 characters, try again!");
    generateLength();
  }
  return letters;
}


function generateNumbers(){
  numbers = window.prompt("Do you want to include numbers in your password? Answer yes or no");
  if (numbers === null || numbers === ""){
    alert("Please answer Yes or No");
    generateNumbers();

  }else if (numbers === "yes" || numbers ==="y"){
    numbers = true;
    return numbers;

  }else if (numbers === "no" || numbers ==="n"){
    numbers = false;
    return numbers;
  
  }else {
    alert("Please answer Yes or No");
    generateNumbers();
  }
  return numbers;
}

function generateSymbols(){
  symbols = window.prompt("Do you want to have special values in your password? (EX: #, $, etc.) Answer yes or no");
  if (symbols === null || symbols === ""){
    alert("Please answer Yes or No");
    determineSpecial();

  }else if (symbols === "yes" || symbols ==="y"){
    symbols = true;
    return symbols;

  }else if (symbols === "no" || symbols ==="n"){
    symbols = false;
    return symbols;
  
  }else {
    alert("Please answer Yes or No");
    determineSpecial();
  }
  return symbols;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var totLetters = document.getElementById("letters");
var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("symbols")



  
function generatePassword(){
  generateLength();
  console.log(letters);
  generateNumbers();
  console.log(numbers);
  generateSymbols();
  console.log(symbols);
  var characters = lowercaseChar;
  var password = "";
  if (numbers && symbols){
    characters += numberChar + specialChar;
  
  }else if (numbers){
    characters += numberChar;
  
  }else if (symbols){
    characters += specialChar;
  
  }else if(numbers){
    characters += numberChar;
  
  }else if (symbols){
    characters += specialChar;
  
  }else{
    characters === lowercaseChar;
  }
  
  for(var i = 0; i < letters; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password2 = ""; 
  password2 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password2;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)