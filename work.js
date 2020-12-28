'use strict';
var userName = prompt("What is your name?")
alert("Welcome " + userName + " I will do a quiz for you about me.");

var ready = prompt('I will be asking you 5 questions about me, are you ready for this play? ;) (yes/no)'); 
// console.log(ready.toLowerCase());
// console.log(ready.toUpperCase());



if (ready.toLocaleLowerCase() === "yes"){
    alert("Let's begin then "+ userName + " ;)");
}
    else if  (ready.toLocaleLowerCase() === "no") { 
            alert("Refresh and type yes to begin.");
}


//--------------firstQuestion------------

var firstQuestion = prompt('Did I graduate from University of Jordan? (yes/no)'); 
// console.log(firstQuestion.toLowerCase());
// console.log(firstQuestion.toUpperCase());
if (firstQuestion.toLocaleLowerCase() === "yes"){
    alert("Yes, you are right");
}
else if (firstQuestion.toLocaleLowerCase() === "no") {
        alert("Your answer is wrong.");
}



//------------secondQuestion--------------

var secondQuestion = prompt('Do you think I like soccer? (yes/no)'); 
// console.log(secondQuestion.toLowerCase());
// console.log(secondQuestion.toUpperCase());
if (secondQuestion.toLocaleLowerCase() === "yes"){
    alert("Yes, and I support Manchester United");
}
else if (secondQuestion.toLocaleLowerCase() === "no") {
        alert("Your answer is wrong.");
}

//-------------thirdQuestion-------------

var thirdQuestion = prompt('Do you think I am addicted to coffee? (yes/no)'); 
// console.log(thirdQuestion.toLowerCase());
// console.log(thirdQuestion.toUpperCase());
if (thirdQuestion.toLocaleLowerCase() === "yes"){
    alert("Yes, I drink around 4 mugs daily");
}
else if (thirdQuestion.toLocaleLowerCase() === "no") {
        alert("Your answer is wrong.");
}

// //--------------forthQuestion------------

var forthQuestion = prompt('Do I like seafood? (yes/no)'); 
// console.log(forthQuestion.toLowerCase());
// console.log(forthQuestion.toUpperCase());

if (forthQuestion.toLocaleLowerCase() === "yes"){
    alert("Your answer is wrong.");
}
else if (forthQuestion.toLocaleLowerCase() === "no") {
        alert("Yeah I don't eat it");
}

//-------------fifthQuestion-------------

var fifthQuestion = prompt('Do you think I play fifa? (yes/no)'); 
// console.log(fifthQuestion.toLowerCase());
// console.log(fifthQuestion.toUpperCase());

if (fifthQuestion.toLocaleLowerCase() === "yes"){
    alert("Yes, I play");
}
else if (fifthQuestion.toLocaleLowerCase() === "no") {
        alert("Your answer is wrong.");
}