// Create variables first hide and then show sections of the exercise page based on certain criteria being met: 
function hideFunction() {
    // First hide key sections on first page load:  
    document.getElementById("sixHats").style.display="none";
    document.getElementById("reportButton").style.display="none";
    document.getElementById("hatReport").style.display="none";
    document.getElementById("whiteTick").style.display="none";
    document.getElementById("redTick").style.display="none";
    document.getElementById("yellowTick").style.display="none";
    document.getElementById("blackTick").style.display="none";
    document.getElementById("greenTick").style.display="none";
    document.getElementById("blueTick").style.display="none";
}

// Create two variables from element ids for the main question and submit button: 
let questionInput = document.getElementById('question-problem');
let submitButton = document.getElementById('submit');
let questionDisplay = document.getElementById('question-display');
let clearButton = document.getElementById('clear');

submitButton.addEventListener("click",function(){
    questionDisplay.textContent = questionInput.value;
    document.getElementById("sixHats").style.display="block";
    document.getElementById("problemVideo").style.display="none";
});

clearButton.addEventListener("click",function(){
    questionDisplay.textContent = "";    
    document.getElementById("sixHats").style.display="none";
    document.getElementById("problemVideo").style.display="block";
});


// Create six variables from element ids for the main question: 

// Create response variables from element ids for the answer to the White Hat question 
let answerWhite = document.getElementById('answer-white');
let submitWhite = document.getElementById('whiteHat');
let whiteAnswer = document.getElementById('whiteAnswer');

whiteHat.addEventListener("click",function(){
    whiteAnswer.textContent = answerWhite.value;
    document.getElementById("whiteTick").style.display="block";
});


// Create response variables from element ids for the answer to the Black Hat question 
let answerBlack = document.getElementById('answer-black');
let submitBlack = document.getElementById('blackHat');
let blackAnswer = document.getElementById('blackAnswer');

blackHat.addEventListener("click",function(){
    blackAnswer.textContent = answerBlack.value;
    document.getElementById("blackTick").style.display="block";
});


// Create response variables from element ids for the answer to the Yellow Hat question 
let answerYellow = document.getElementById('answer-yellow');
let submitYellow = document.getElementById('yellowHat');
let yellowAnswer = document.getElementById('yellowAnswer');

yellowHat.addEventListener("click",function(){
    yellowAnswer.textContent = answerYellow.value;
    document.getElementById("yellowTick").style.display="block";
});


// Create response variables from element ids for the answer to the Green Hat question 
let answerGreen = document.getElementById('answer-green');
let submitGreen = document.getElementById('greenHat');
let greenAnswer = document.getElementById('greenAnswer');

greenHat.addEventListener("click",function(){
    greenAnswer.textContent = answerGreen.value;
    document.getElementById("greenTick").style.display="block";
});


// Create response variables from element ids for the answer to the Red Hat question 
let answerRed = document.getElementById('answer-red');
let submitRed = document.getElementById('redHat');
let redAnswer = document.getElementById('redAnswer');

redHat.addEventListener("click",function(){
    redAnswer.textContent = answerRed.value;
    document.getElementById("redTick").style.display="block";
});


// Create response variables from element ids for the answer to the Blue Hat question 
let answerBlue = document.getElementById('answer-blue');
let submitBlue = document.getElementById('blueHat');
let blueAnswer = document.getElementById('blueAnswer');

blueHat.addEventListener("click",function(){
    blueAnswer.textContent = answerBlue.value;
    document.getElementById("blueTick").style.display="block";
});


//Have background colors change on hover using some jQuery
$(".flip-card").hover(function() {
    var a =$(this).attr("data-color");
    $("body").css("background", a);
});
    



