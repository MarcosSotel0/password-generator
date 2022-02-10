// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lenght = prompt("lenght of pasword?"); // 1 / 2 / 3 / 10 / 20
  var result = 'abcdefghijklmnopqrstuvwxyz';
  if(/[a-zA-Z]/.test(lenght)){
    lenght = prompt("pleas enter the lenght for you'r pasword")
  }else if(lenght == null || lenght == ""){
    lenght = prompt("pleas enter the lenght for you'r pasword");
  }
  let mustadd = prompt("do you have some characters in mind to be added to your pasword?"); // a b c\
  if(/[a-zA-Z]/.test(mustadd)){
    for (i = 0; i < mustadd.length; i++ ) {
      result += mustadd.charAt(Math.floor(Math.random() * mustadd.length));
    }
  }
  let uper = confirm("would you like some uper case leters?");// true / false 
  if(uper == true){
    uper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (i = 0; i < lenght; i++ ) {
      result += uper.charAt(Math.floor(Math.random() * uper.length));
    }
  }
  
  let number = confirm("would you like numbers?");//true / false 
  if(number == true){
    number = '0123456789';
    for (i = 0; i < lenght; i++ ) {
      result += number.charAt(Math.floor(Math.random() * number.length));
    }
  }
  let special = confirm("would you like special characters?"); // true / false
  if(special == true){
    special = '~!#$%&*-+|';
    for (i = 0; i < lenght; i++ ) {
      result += special.charAt(Math.floor(Math.random() * special.length));
    }
  }
  // const userSetings = [{lenght,uper,mustadd,number,special}];
  var password = generatePassword(result,lenght,mustadd);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// generating pasword
function generatePassword(value,length,mustAdd){
  
  var result = value.split("");
  for ( let i = 0 ; i < result.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      let x = result[i];
      result[i] = result[j];
      result[j] = x;
  }

  var saver = mustAdd.split("");
  for(let i = 0; i < length ;i++){
    let j = Math.floor(Math.random() * (i + 1));
      let x = result[i];
      result[i] = result[j];
      saver[j] = x;
  }
  saver = saver.join("");
  return saver;
}