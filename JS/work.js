'use strict';
var userName = prompt("What is your name?")
alert("Welcome " + userName + " I will do a quiz for you about me.");

var userScore= 0;
var ready = prompt('I will be asking you 5 questions about me, are you ready for this play? ;) Type yes to continue.'); 
// console.log(ready.toLowerCase());
// console.log(ready.toUpperCase());



if (ready.toLocaleLowerCase() === "yes"){
    alert("Let's begin then "+ userName + " ;)");
}
    else if  (ready.toLocaleLowerCase() === "no") { 
            alert("Refresh and type yes to begin.");
}


//--------------firstQuestion------------

var firstQuestion = prompt('Did I graduate from University of Jordan? (Yes/No)'); 
// console.log(firstQuestion.toLowerCase());
// console.log(firstQuestion.toUpperCase());
if (firstQuestion.toLocaleLowerCase() === "yes"){
    alert("Yes, you are right");
    userScore ++;
}
else if (firstQuestion.toLocaleLowerCase() === "no") {
        alert("Your answer is wrong.");
}



//------------secondQuestion--------------

var secondQuestion = prompt('Do you think I like soccer? (Yes/No)'); 
// console.log(secondQuestion.toLowerCase());
// console.log(secondQuestion.toUpperCase());
if (secondQuestion.toLocaleLowerCase() === "yes"){
    alert("Yes, and I support Manchester United");
    userScore ++;
}
else if (secondQuestion.toLocaleLowerCase() === "no") {
        alert("Your answer is wrong.");
}

//-------------thirdQuestion-------------

var thirdQuestion = prompt('Do you think I am addicted to coffee? (Yes/No)'); 
// console.log(thirdQuestion.toLowerCase());
// console.log(thirdQuestion.toUpperCase());
if (thirdQuestion.toLocaleLowerCase() === "yes"){
    alert("Yes, I drink around 4 mugs daily");
    userScore ++;
}
else if (thirdQuestion.toLocaleLowerCase() === "no") {
        alert("Your answer is wrong.");
}

// //--------------forthQuestion------------

var forthQuestion = prompt('Do I like seafood? (Yes/No)'); 
// console.log(forthQuestion.toLowerCase());
// console.log(forthQuestion.toUpperCase());

if (forthQuestion.toLocaleLowerCase() === "yes"){
    alert("Your answer is wrong.");
}
else if (forthQuestion.toLocaleLowerCase() === "no") {
        alert("Yeah I don't eat it");
        userScore ++;
}

//-------------fifthQuestion-------------

var fifthQuestion = prompt('Do you think I play fifa? (Yes/No)'); 
// console.log(fifthQuestion.toLowerCase());
// console.log(fifthQuestion.toUpperCase());

if (fifthQuestion.toLocaleLowerCase() === "yes"){
    alert("Yes, I play fifa.");
    userScore ++;
}
else if (fifthQuestion.toLocaleLowerCase() === "no") {
        alert("Your answer is wrong.");
}


// //-------------sixthQuestion-------------


function sixthQuestion (){
    var correctAnswer6 =5;
    for (var i=0; i<4; i++){
        var guessNumber6 = prompt("Guess a number between 1 and 10, you have 4 trials");
        // console.log("Guess a number between 1 and 10, you have 4 trials");
        if(guessNumber6<correctAnswer6){
            alert("Too low.");
            // console.log("Too low");
        } else if (guessNumber6>correctAnswer6){
            alert("Too high.");
            // console.log("Too high");
        } else if (guessNumber6==correctAnswer6){
            alert("Your answer is correct, good job.");
            // console.log("Your answer is correct, good job");
            userScore ++;
            break;
        }
    }
}

//-------------seventhQuestion-------------

function seventhQuestion(){
    var correctAnswer7 = [1,2,5,8,18];
    for (var i=0;i<6;i++){

        var guessNumber7 = parseInt(prompt("Guess a number between 1 and 20, you have 6 trials. Ps: There's a multiple possible correct answers."))
        // console.log("Guess a number between 1 and 20, you have 6 trials. Ps: There's a multiple possible correct answers.");
        for(var j=0; j< correctAnswer7.length ;j++){

            // console.log(correctAnswer7.length);
            // console.log(j);

            if(guessNumber7 === correctAnswer7[j]){
                alert("You guessed right ;) good job.");
                // console.log("You guessed right ;) good job.");
                userScore ++;
                i=6;
                break;
            }
            
        }
        if (i !==6)
        {
            alert('Sorry wrong answer, try again.');
            // console.log("Sorry wrong answer, try again.");

        }
    } 
    alert("The correct answers are: " + correctAnswer7)
    // console.log("The correct answers are: " + correctAnswer7");
}

sixthQuestion();
seventhQuestion();

alert("Good Job!... You got " + userScore + " correct answers!")
// console.log("Your final score is " + userScore");
alert("Thank you for your time " + userName + ".");
// console.log("Thank you for your time " + userName + ".");