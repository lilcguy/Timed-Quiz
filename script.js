//make start button, add event listener that runs the game function on press

//make a timer and display it 

//make an array of questions 
        //make var for number of correct (score)
        //make var 
        //for loop

        //make prompt for initials and score and set it in the local storage


//make separate variables for each question?

var score = 0; //in global scope. initially set to 0.
var timer = 100; //probably has to be in milli
var initials = "";

var questions = ["yes?", "yes?", "yes?", "yes?", "yes?", "yes?",];

function quizGame() {

    var start = window.confirm("play quiz game?")
        if (start === true) {
            window.alert("lets begin!");
        } else {
            return;
        }

    for (var i=0; i < questions.length; i++) {
        var correct = window.confirm("yes?")
        if (correct === true) {
            window.alert("right!");
            score++ //add to score
            console.log(score);
        } else {
            window.alert("wrong!");
            //timer - 50 remove time from timer in wrong answer
        }
    }
    
    window.alert("your score is " + score + "!");
    saveScore();


}

function saveScore (){
    
    if (score <= 5) {
        window.alert("you could use some practice!");
        
    } else {
        window.alert("nicely done!");
    }

    initials = window.prompt("enter your initials!");
    console.log(initials);
    console.log(score);
    window.alert("thanks! your initials and score have been saved to local storage.")

    localStorage.setItem("previous score: ", score)
    localStorage.setItem("Initials: ", initials);

    

    //enter initials into local storage
    //insert element that gets value and displays
    
}

quizGame(); //runs the game on start up.



/*known problems***

//timer?
//buttons?
//local storage overwrites: do i want it to add a new one each time so one can keep track of all their
scores?





have it getItem() and display it.
if statement: if something is true, then run this code.



*/

/* other

 if statement: if something is true, then run this code. 





*/