
var enter;
var characterCount;                                    
var includeSymbols;
var uppercase; 
var lowercase;
var picknumbers;

symbols = ["!","@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]"];
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"];
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
space = [];
var choices;
var toUpper = function (x) {
  return x.toUpperCase();
};
alphabet2 = alphabet.map(toUpper);


var get = document.querySelector("#generate");


get.addEventListener("click", function () {
  ps = writePassword ();
  document.getElementById("password").placeholder = ps;
});

function writePassword() {
  enter=parseInt(prompt("How many characters?"));
  if (!enter){
    alert("Try Again");
  } else if (enter <8 || enter > 128) {
    enter = parseInt(prompt("Choose between 8 and 128"));

  }else {
    includeSymbols = confirm("Allow special characters?");
    uppercase = confirm ("Uppercase?");
    lowercase = confirm ("Lowercase letters?");
    picknumbers = confirm ("Allow numbers?");
  };  
  
   
   if (!includeSymbols && !picknumbers && !uppercase && !lowercase) {
    choices = alert("error");
}

else if (includeSymbols && picknumbers && uppercase && lowercase) {
    choices = symbols.concat(numbers, alphabet, alphabet2);
}
else if (includeSymbols && confirmNumber && uppercase) {
    choices = symbols.concat(numbers, alphabet2);
}
else if (includeSymbols && confirmNumber && lowercase) {
    choices = symbols.concat(numbers, alphabet);
}
else if (includeSymbols && lowercase && uppercase) {
    choices = symbols.concat(alphabet, alphabet2);
}
else if (includeSymbols && lowercase && uppercase) {
    choices = numbers.concat(alphabet, alphabet2);
}
else if (includeSymbols && picknumbers) {
    choices = symbols.concat(numbers);

} else if (includeSymbols && lowercase) {
    choices = symbols.concat(alphabet);

} else if (includeSymbols && uppercase) {
    choices = csymbols.concat(alphabet2);
}
else if (lowercase && picknumbers) {
    choices = alphabet.concat(numbers);

} else if (lowercase && uppercase) {
    choices = alphabet.concat(alphabet2);

} else if (picknumbers && uppercase) {
    choices = numbers.concat(alphabet2);
}
else if (includeSymbols) {
    choices = symbols;
}
else if (picknumbers) {
    choices = numbers;
}
else if (lowercase) {
    choices = alphabet;
}
else if (uppercase) {
    choices = space.concat(alphabet2);
};


var password = [];


for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
}

var ps = password.join("");
UserInput(ps);
return ps;
}
  
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}


