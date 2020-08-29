// Create variables first hide and then show sections of the hats.html exercise page based on certain criteria being met: 
function hideFunction() {
    // First include load animation that runs until page is fully loaded:
    $(".loader-wrapper").fadeOut("slow");
    // Second hide key sections on first page load to be called up when certain parts are completed:  
    document.getElementById("hatProblem").style.display="none";
    document.getElementById("sixHats").style.display="none";    
    document.getElementById("reportProduce").style.display="none";
    document.getElementById("reportPrint").style.display="none";
    document.getElementById("hatReport").style.display="none";
    document.getElementById("resetBtn").style.display="none";
    document.getElementById("whiteTick").style.display="none";
    document.getElementById("whiteTick2").style.display="none";
    document.getElementById("redTick").style.display="none";
    document.getElementById("redTick2").style.display="none";
    document.getElementById("yellowTick").style.display="none";
    document.getElementById("yellowTick2").style.display="none";
    document.getElementById("blackTick").style.display="none";
    document.getElementById("blackTick2").style.display="none";    
    document.getElementById("greenTick").style.display="none";
    document.getElementById("greenTick2").style.display="none";
    document.getElementById("blueTick").style.display="none";
    document.getElementById("blueTick2").style.display="none";
}

// Create two variables from element ids for the main question and submit button: 
let questionInput = document.getElementById('question-problem');
let submitButton = document.getElementById('submit');
let questionDisplay = document.getElementById('question-display');
let clearButton = document.getElementById('clear');

// Reveals the Six Hats Flip-card Div plus Reset button and hides the Problem Video when the problem submit button is pressed and fixes the problem statement
submitButton.addEventListener("click", function(){
    let questiondisplayvalue = encodeURI(questionInput.value).replace(/%20/g," ").replace(/%0A/g,"<br>");
    questionDisplay.innerHTML = questiondisplayvalue;    
    var strQ = $('#question-problem').val().length;
    if (strQ < 20) {    
        alert("Problem statement is too short. Please elaborate further!");             
    } else {        
    document.getElementById("problemBox").style.display="none";
    document.getElementById("hatProblem").style.display="block";
    document.getElementById("sixHats").style.display="block";
    document.getElementById("resetBtn").style.display="block";
    document.getElementById("problemVideo").style.display="none";
    }
});

// Clear all current work when clicking the reset button before reloading. 
clearButton.addEventListener("click", function(){     
    if (confirm("WARNING: A reset will lose all your current work!")) {
        location.reload();                       
    }
});

/* Create six variables from element ids for the main question: */
// Create response variables from element ids for the answer to the White Hat question 
let answerWhite = document.getElementById('answer-white');
let submitWhite = document.getElementById('whiteHat');
let whiteAnswer = document.getElementById('whiteAnswer');

// On click of the answer check that the minimum character requirement is met before saving the answer and logging progress
submitWhite.addEventListener("click",function(){                 
    let whiteanswervalue = encodeURI(answerWhite.value).replace(/%20/g," ").replace(/%0A/g,"<br>");
    whiteAnswer.innerHTML = whiteanswervalue;
    var strW = $('#answer-white').val().length;
    if (strW < 20) {    
        alert("Answer is too short. Please elaborate further!");             
    } else {        
        document.getElementById("whiteTick").style.display="block";
        document.getElementById("whiteTick2").style.display="block";        
        countWhite = 1;
        showRptBtn();
        pauseWhite();
    }
}); 

// Create response variables from element ids for the answer to the Red Hat question 
let answerRed = document.getElementById('answer-red');
let submitRed = document.getElementById('redHat');
let redAnswer = document.getElementById('redAnswer');

// On click of the answer check that the minimum character requirement is met before saving the answer and logging progress
submitRed.addEventListener("click",function(){
    let redanswervalue = encodeURI(answerRed.value).replace(/%20/g," ").replace(/%0A/g,"<br>");
    redAnswer.innerHTML = redanswervalue;    
    var strR = $('#answer-red').val().length;
    if (strR < 20) {    
        alert("Answer is too short. Please elaborate further!");             
    } else {        
        document.getElementById("redTick").style.display="block";
        document.getElementById("redTick2").style.display="block";        
        countRed =1;
        showRptBtn();
        pauseRed();
    }
}); 

// Create response variables from element ids for the answer to the Yellow Hat question 
let answerYellow = document.getElementById('answer-yellow');
let submitYellow = document.getElementById('yellowHat');
let yellowAnswer = document.getElementById('yellowAnswer');

// On click of the answer check that the minimum character requirement is met before saving the answer and logging progress
submitYellow.addEventListener("click",function(){
    let yellowanswervalue = encodeURI(answerYellow.value).replace(/%20/g," ").replace(/%0A/g,"<br>");
    yellowAnswer.innerHTML = yellowanswervalue;    
    var strY = $('#answer-yellow').val().length;
    if (strY < 20) {    
        alert("Answer is too short. Please elaborate further!");             
    } else {        
        document.getElementById("yellowTick").style.display="block";
        document.getElementById("yellowTick2").style.display="block";        
        countYellow = 1;
        showRptBtn();
        pauseYellow();
    }
}); 

// Create response variables from element ids for the answer to the Black Hat question 
let answerBlack = document.getElementById('answer-black');
let submitBlack = document.getElementById('blackHat');
let blackAnswer = document.getElementById('blackAnswer');

// On click of the answer check that the minimum character requirement is met before saving the answer and logging progress
submitBlack.addEventListener("click",function(){
    let blackanswervalue = encodeURI(answerBlack.value).replace(/%20/g," ").replace(/%0A/g,"<br>");
    blackAnswer.innerHTML = blackanswervalue;    
    var strB = $('#answer-black').val().length;
    if (strB < 20) {    
        alert("Answer is too short. Please elaborate further!");             
    } else {        
        document.getElementById("blackTick").style.display="block";
        document.getElementById("blackTick2").style.display="block";        
        countBlack = 1;    
        showRptBtn();
        pauseBlack();
    }
}); 

// Create response variables from element ids for the answer to the Green Hat question 
let answerGreen = document.getElementById('answer-green');
let submitGreen = document.getElementById('greenHat');
let greenAnswer = document.getElementById('greenAnswer');

// On click of the answer check that the minimum character requirement is met before saving the answer and logging progress
submitGreen.addEventListener("click",function(){
    let greenanswervalue = encodeURI(answerGreen.value).replace(/%20/g," ").replace(/%0A/g,"<br>");
    greenAnswer.innerHTML = greenanswervalue;    
    var strG = $('#answer-green').val().length;
    if (strG < 20) {    
        alert("Answer is too short. Please elaborate further!");             
    } else {        
        document.getElementById("greenTick").style.display="block";
        document.getElementById("greenTick2").style.display="block";        
        countGreen = 1;
        showRptBtn();
        pauseGreen();
    }
}); 

// Create response variables from element ids for the answer to the Blue Hat question 
let answerBlue = document.getElementById('answer-blue');
let submitBlue = document.getElementById('blueHat');
let blueAnswer = document.getElementById('blueAnswer');

// On click of the answer check that the minimum character requirement is met before saving the answer and logging progress
submitBlue.addEventListener("click",function(){
    let blueanswervalue = encodeURI(answerBlue.value).replace(/%20/g," ").replace(/%0A/g,"<br>");
    blueAnswer.innerHTML = blueanswervalue;    
    var strB = $('#answer-blue').val().length;
    if (strB < 20) {    
        alert("Answer is too short. Please elaborate further!");             
    } else {        
        document.getElementById("blueTick").style.display="block";
        document.getElementById("blueTick2").style.display="block";        
        countBlue = 1;
        showRptBtn();
        pauseBlue();
    }
}); 

// Pause the videos when modals are closed to avoid multiple video voices played at the same time. Defect discovered during testing! 
function pauseProblem() { 
   $('#problemVid').get(0).pause();  /* Pause video when problem is submitted */
} 

function pauseWhite() { 
   $('#whiteVid').get(0).pause();  /* Pause video when white modal closes */
} 

function pauseRed() { 
   $('#redVid').get(0).pause();  /* Pause video when red modal closes */
} 

function pauseYellow() { 
   $('#yellowVid').get(0).pause();  /* Pause video when yellow modal closes */
} 

function pauseBlack() { 
   $('#blackVid').get(0).pause();  /* Pause video when black modal closes */
} 

function pauseGreen() { 
   $('#greenVid').get(0).pause();  /* Pause video when green modal closes */
} 

function pauseBlue() { 
   $('#blueVid').get(0).pause();  /* Pause video when blue modal closes */
} 

/* Show Generate Report Button when all boxes are completed: */
// Establish the necessary variables to count when each box has been completed: 
var countWhite = 0;
var countRed = 0;
var countYellow = 0;
var countBlack = 0;
var countGreen = 0; 
var countBlue = 0;

//Reveal the generate report box when the hCount variable equals 6 (or all the Hat boxes are completed)
function showRptBtn() {
    if (countWhite && countRed && countYellow && countBlack && countGreen && countBlue) {    
    document.getElementById("reportProduce").style.display="block"; 
    }  
}

/* Create a function that reveals the report when the Genrate report button is pressed */

// set the variable linked to the button ID
let generateReport = document.getElementById('reportButton');

// Generate report when clicking the generate report button leaving only the reset button with the report: 
generateReport.addEventListener("click",function(){    
    if (confirm("WARNING: After report is run you cannot amend your answers. Please confirm you still wish to proceed!")) {
        document.getElementById("hatReport").style.display="block";         
        document.getElementById("sixHats").style.display="none";
        document.getElementById("reportProduce").style.display="none";
        document.getElementById("reportPrint").style.display="block";
    }
});