
//make an array of questions 
        //make var for number of correct (score)
        //make var 
        //for loop

        //make prompt for initials and score and set it in the local storage


//known bugs

var score = 0; //in global scope. initially set to 0.

var pos = 1; //position

var timer = 60; 

var initials = "";

var questions = 
["what is the correct spelling of goat?", 
"who stinks?",
]


console.log("starting score is " + score);


document.getElementById("btn").addEventListener("click", timerBtn);

function displayQuestion1() {
    
    document.getElementById("q").innerHTML = "Question " + pos + ": " + questions[0];

        document.getElementById("a1").innerHTML = "goat";
            document.getElementById("a1").addEventListener("click", scoreUp);
                
        document.getElementById("a2").innerHTML = "goot";
            document.getElementById("a2").addEventListener("click", scoreDown);

        document.getElementById("a3").innerHTML = "gate";
            document.getElementById("a3").addEventListener("click", scoreDown);

        document.getElementById("a4").innerHTML = "crunk";
            document.getElementById("a4").addEventListener("click", scoreDown);

            document.getElementById("next").addEventListener("click", displayQuestion2);
} 

function displayQuestion2() {
    document.getElementById("q").innerHTML = "Question " + pos + ": " + questions[1];

        document.getElementById("a1").innerHTML = "steve";
            document.getElementById("a1").addEventListener("click", scoreUp);
                
        document.getElementById("a2").innerHTML = "goot";
            document.getElementById("a2").addEventListener("click", scoreDown);

        document.getElementById("a3").innerHTML = "gate";
            document.getElementById("a3").addEventListener("click", scoreDown);

        document.getElementById("a4").innerHTML = "crunk";
            document.getElementById("a4").addEventListener("click", scoreDown);

            document.getElementById("next").addEventListener("click", displayQuestion1);
}

//add functions for rest of questions, and on last question add function for game over, and 
//run the save score and initials function

function scoreUp() {
    document.getElementById("rw").innerHTML = "Correct!";
    score++;
    console.log(score);
    position();
}

function scoreDown() {
    if (score <= 0 ){
        score + 0
    } else {
    document.getElementById("rw").innerHTML = "Incorrect!"
    score--;
    //timer - 5; //how to get it to remove time on incorrect answer?
    console.log(score); 
    }

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
    console.log(initials);
    console.log(score);
    window.alert("thanks! your initials and score have been saved to local storage.")

    localStorage.setItem("previous score: ", score)
    localStorage.setItem("Initials: ", initials);

    

    //enter initials into local storage
    //insert element that gets value and displays
    
}





//known problems**

//timer?
//buttons?
//local storage overwrites: do i want it to add a new one each time so one can keep track of all their
//scores?

//cant get timer to subtract on incorrect
//buttons are sometimes not responsive
    //also ugly






