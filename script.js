
//make an array of questions 
        //make var for number of correct (score)
        //make var 
        //for loop

        //make prompt for initials and score and set it in the local storage


//known bugs

var score = 0; //in global scope. initially set to 0.
var maxScore = 5;

var timer = 60; 

var initials = "";

var questions = ["what is the correct spelling of goat?", ]
//var q1 = "what is the correct spelling of goat?";
var q2 = "";
var q3 = "";
var q4 = "";
var q5 = "";
console.log("score is " + score);


document.getElementById("btn").addEventListener("click", timerBtn);

function displayQuestion1() {
    document.getElementById("q").innerHTML = "Question: " + questions[0];

        document.getElementById("a1").innerHTML = "goat";
            document.getElementById("a1").addEventListener("click", scoreUp);
                
        document.getElementById("a2").innerHTML = "goot";
            document.getElementById("a2").addEventListener("click", scoreDown);

        document.getElementById("a3").innerHTML = "gate";
            document.getElementById("a3").addEventListener("click", scoreDown);

        document.getElementById("a4").innerHTML = "crunk";
            document.getElementById("a4").addEventListener("click", scoreDown);
} 

function scoreUp() {
    document.getElementById("rw").innerHTML = "Correct!"
    score++;
    console.log(score);
}

function scoreDown() {
    if (score <= 0 ){
        score + 0
    } else {
    document.getElementById("rw").innerHTML = "Incorrect!"
    score--;
    console.log(score); 
    }

}

function reset() {
    //clear all elements in the HTML to reset
    document.getElementById("q").innerHTML = "";
    document.getElementById("a1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("a4").innerHTML = "";
}

//document.getElementById("q").innerHTML = "Question: " + q1;

function timerBtn() { //when the corresponding button is pressed 

    var demo = setInterval(counter, 1000)

    function counter() { 
        timer--
        //console.log(timer);
        document.getElementById("timer").innerHTML = "Time left: " + timer //displays on html
        if (timer === 0){ //stop at 0 
            window.alert("time out!");
            clearInterval(demo); //stops execution
            timer = 60; //resets the timer for next run.
            reset();
            
        }
      
    }
displayQuestion1();
   
}



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

//quizGame(); //runs the game on start up. this should run based on a click event.



/*known problems***

//timer?
//buttons?
//local storage overwrites: do i want it to add a new one each time so one can keep track of all their
scores?





have it getItem() and display it.
if statement: if something is true, then run this code.



*/

