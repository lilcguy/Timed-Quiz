
var score = 0; //in global scope. initially set to 0.

var pos = 1; //position

var timer = 60; 

var initials = "";

var questions = 
["What is the correct syntax for a console log?", 
"What shortcut allows you to access the dev tools in the browser?",
"A boolean can be true or...",
"What is NOT a primitive data type?",
"What is NOT a keyword to declare a variable?"
]


console.log("starting score is " + score);


document.getElementById("btn").addEventListener("click", timerBtn);

function displayQuestion1() {
    
    document.getElementById("q").innerHTML = "Question " + pos + ": " + questions[0];

        document.getElementById("a1").innerHTML = "console.log()";
            document.getElementById("a1").addEventListener("click", scoreUp);
                
        document.getElementById("a2").innerHTML = "log.console()";
            document.getElementById("a2").addEventListener("click", scoreDown);

        document.getElementById("a3").innerHTML = "console()";
            document.getElementById("a3").addEventListener("click", scoreDown);

        document.getElementById("a4").innerHTML = "log = console";
            document.getElementById("a4").addEventListener("click", scoreDown);

            document.getElementById("next").addEventListener("click", displayQuestion2);
} 

function displayQuestion2() {
    resetResponse();
    document.getElementById("q").innerHTML = "Question: " + questions[1];

        document.getElementById("a1").innerHTML = "F1";
            document.getElementById("a1").addEventListener("click", scoreDown);
                
        document.getElementById("a2").innerHTML = "Ctrl+D";
            document.getElementById("a2").addEventListener("click", scoreDown);

        document.getElementById("a3").innerHTML = "F12";
            document.getElementById("a3").addEventListener("click", scoreUp);

        document.getElementById("a4").innerHTML = "Ctrl+Shift+T";
            document.getElementById("a4").addEventListener("click", scoreDown);

            document.getElementById("next").addEventListener("click", displayQuestion3);
}

function displayQuestion3() {
    resetResponse();
    document.getElementById("q").innerHTML = "Question: " + questions[2];

        document.getElementById("a1").innerHTML = "Upside down";
            document.getElementById("a1").addEventListener("click", scoreDown);
                
        document.getElementById("a2").innerHTML = "Number";
            document.getElementById("a2").addEventListener("click", scoreDown);

        document.getElementById("a3").innerHTML = "String";
            document.getElementById("a3").addEventListener("click", scoreDown);

        document.getElementById("a4").innerHTML = "False";
            document.getElementById("a4").addEventListener("click", scoreUp);

            document.getElementById("next").addEventListener("click", displayQuestion4);
}

function displayQuestion4() {
    resetResponse();
    document.getElementById("q").innerHTML = "Question: " + questions[3];

        document.getElementById("a1").innerHTML = "String";
            document.getElementById("a1").addEventListener("click", scoreDown);
                
        document.getElementById("a2").innerHTML = "Number";
            document.getElementById("a2").addEventListener("click", scoreDown);

        document.getElementById("a3").innerHTML = "Boolean";
            document.getElementById("a3").addEventListener("click", scoreDown);

        document.getElementById("a4").innerHTML = "Loop";
            document.getElementById("a4").addEventListener("click", scoreUp);

            document.getElementById("next").addEventListener("click", displayQuestion5);
}

function displayQuestion5() {
    resetResponse();
    document.getElementById("q").innerHTML = "Question: " + questions[4];

        document.getElementById("a1").innerHTML = "Let";
            document.getElementById("a1").addEventListener("click", scoreDown);
                
        document.getElementById("a2").innerHTML = "This";
            document.getElementById("a2").addEventListener("click", scoreUp);

        document.getElementById("a3").innerHTML = "Var";
            document.getElementById("a3").addEventListener("click", scoreDown);

        document.getElementById("a4").innerHTML = "Const";
            document.getElementById("a4").addEventListener("click", scoreDown);

            document.getElementById("next").addEventListener("click", displayScore); //last question: display the score.
}

function resetResponse(){
    document.getElementById("rw").innerHTML = "";
}

function scoreUp() {
    document.getElementById("rw").innerHTML = "Correct!";
    
    score++;
    console.log(score);
    
}

function scoreDown() {
    if (score <= 0 ){
        score + 0
    } 
    document.getElementById("rw").innerHTML = "Incorrect!"
    score--;
    console.log(score);
    
    
    

}

function position () { //track position in quiz
    pos++
    console.log("position is " + pos);
}




function reset() {
    //clear all elements in the HTML to reset
    document.getElementById("q").innerHTML = "";
    document.getElementById("a1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("a4").innerHTML = "";
    document.getElementById("rw").innerHTML = "";
    
}



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


function saveScore (){
    
    if (score <= 5) {
        window.alert("you could use some practice!");
        
    } else {
        window.alert("nicely done!");
    }

    initials = window.prompt("enter your initials!");
    //console.log(initials);
    //console.log(score);
    window.alert("thanks! your initials and score have been saved to local storage.")

    localStorage.setItem("previous score: ", score)
    localStorage.setItem("Initials: ", initials);

    

    //enter initials into local storage
    //insert element that gets value and displays
    
}

function displayScore(){
    if (score <= 3) {
        window.alert("you could use some practice!");
        
    } else {
        window.alert("nicely done!");
    }

    document.getElementById("score").innerHTML = "Your score is " + score;
    initials = window.prompt("enter your initials!");
    if (initials === ""){
        window.alert("no initials saved!");
        initials = "Anonymous";
    }
    document.getElementById("initials").innerHTML = "Your initials are: " + initials;
    localStorage.setItem("score: ", score);
    localStorage.setItem("Initials: ", initials);

}









