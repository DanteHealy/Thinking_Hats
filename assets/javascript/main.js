// Create two variables from element ids for the main question and submit button: 
let questionInput = document.getElementById('question-problem');
let submitButton = document.getElementById('submit');
let questionDisplay = document.getElementById('question-display');
let clearButton = document.getElementById('clear');

/* Create six variables from element ids for the main question: */
// Create response variables from element ids for the answer to the White Hat question 
let answerWhite = document.getElementById('answer-white');
let submitWhite = document.getElementById('whiteHat');
let whiteAnswer = document.getElementById('whiteAnswer');

// Create response variables from element ids for the answer to the Red Hat question 
let answerRed = document.getElementById('answer-red');
let submitRed = document.getElementById('redHat');
let redAnswer = document.getElementById('redAnswer');

// Create response variables from element ids for the answer to the Yellow Hat question 
let answerYellow = document.getElementById('answer-yellow');
let submitYellow = document.getElementById('yellowHat');
let yellowAnswer = document.getElementById('yellowAnswer');

// Create response variables from element ids for the answer to the Black Hat question 
let answerBlack = document.getElementById('answer-black');
let submitBlack = document.getElementById('blackHat');
let blackAnswer = document.getElementById('blackAnswer');

// Create response variables from element ids for the answer to the Green Hat question 
let answerGreen = document.getElementById('answer-green');
let submitGreen = document.getElementById('greenHat');
let greenAnswer = document.getElementById('greenAnswer');

// Create response variables from element ids for the answer to the Blue Hat question 
let answerBlue = document.getElementById('answer-blue');
let submitBlue = document.getElementById('blueHat');
let blueAnswer = document.getElementById('blueAnswer');

/* Show Generate Report Button when all boxes are completed: */
// Establish the necessary variables to count when each box has been completed: 
let countWhite = 0;
let countRed = 0;
let countYellow = 0;
let countBlack = 0;
let countGreen = 0; 
let countBlue = 0;

/* Create a function that reveals the report when the Generate report button is pressed */
// set the variable linked to the button ID
let generateReport = document.getElementById('reportButton');

// Create variables first hide and then show sections of the hats.html exercise page based on certain criteria being met: 
function hideFunction() {
    // First include load animation that runs until page is fully loaded:
    $(".loader-wrapper").fadeOut("slow");
    // Second hide key sections on first page load to be called up when certain parts are completed:  
    $("#hatProblem").hide();
    $("#sixHats").hide();    
    $("#reportProduce").hide();
    $("#reportPrint").hide();
    $("#hatReport").hide();
    $("#resetBtn").hide();
    $(".hatCheck").hide();    
}

// Reveals the Six Hats Flip-card Div plus Reset button and hides the Problem Video when the problem submit button is pressed and fixes the problem statement
submitButton.addEventListener("click", function(){
    let questiondisplayvalue = encodeURI(questionInput.value).replace(/%20/g," ").replace(/%0A/g,"<br>");
    questionDisplay.innerHTML = questiondisplayvalue;    
    let strQ = $('#question-problem').val().length;
    if (strQ < 20) {    
        alert("Problem statement is too short. Please elaborate further!");             
    } else {        
    $("#problemBox").hide();
    $("#problemVideo").hide();    
    $("#hatProblem").show();
    $("#sixHats").show();
    $("#resetBtn").show();
    }
});

// Clear all current work when clicking the reset button before reloading. 
clearButton.addEventListener("click", function(){     
    if (confirm("WARNING: A reset will lose all your current work!")) {
        location.reload();                       
    }
});

// On click of the answer check that the minimum character requirement is met before saving the answer and logging progress
submitWhite.addEventListener("click",function(){                 
    let whiteanswervalue = encodeURI(answerWhite.value).replace(/%20/g," ").replace(/%0A/g,"<br>");
    whiteAnswer.innerHTML = whiteanswervalue;
    let strW = $('#answer-white').val().length;
    if (strW < 20) {    
        alert("Answer is too short. Please elaborate further!");             
    } else {        
        $("#whiteTick").show();
        $("#whiteTick2").show();
        countWhite = 1;
        showRptBtn();
        pause();
    }
}); 

// On click of the answer check that the minimum character requirement is met before saving the answer and logging progress
submitRed.addEventListener("click",function(){
    let redanswervalue = encodeURI(answerRed.value).replace(/%20/g," ").replace(/%0A/g,"<br>");
    redAnswer.innerHTML = redanswervalue;    
    let strR = $('#answer-red').val().length;
    if (strR < 20) {    
        alert("Answer is too short. Please elaborate further!");             
    } else {        
        $("#redTick").show();
        $("#redTick2").show();
        countRed =1;
        showRptBtn();
        pause();
    }
}); 

// On click of the answer check that the minimum character requirement is met before saving the answer and logging progress
submitYellow.addEventListener("click",function(){
    let yellowanswervalue = encodeURI(answerYellow.value).replace(/%20/g," ").replace(/%0A/g,"<br>");
    yellowAnswer.innerHTML = yellowanswervalue;    
    let strY = $('#answer-yellow').val().length;
    if (strY < 20) {    
        alert("Answer is too short. Please elaborate further!");             
    } else {        
        $("#yellowTick").show();
        $("#yellowTick2").show();
        countYellow = 1;
        showRptBtn();
        pause();
    }
}); 

// On click of the answer check that the minimum character requirement is met before saving the answer and logging progress
submitBlack.addEventListener("click",function(){
    let blackanswervalue = encodeURI(answerBlack.value).replace(/%20/g," ").replace(/%0A/g,"<br>");
    blackAnswer.innerHTML = blackanswervalue;    
    let strB = $('#answer-black').val().length;
    if (strB < 20) {    
        alert("Answer is too short. Please elaborate further!");             
    } else {        
        $("#blackTick").show();
        $("#blackTick2").show();
        countBlack = 1;    
        showRptBtn();
        pause();
    }
}); 

// On click of the answer check that the minimum character requirement is met before saving the answer and logging progress
submitGreen.addEventListener("click",function(){
    let greenanswervalue = encodeURI(answerGreen.value).replace(/%20/g," ").replace(/%0A/g,"<br>");
    greenAnswer.innerHTML = greenanswervalue;    
    let strG = $('#answer-green').val().length;
    if (strG < 20) {    
        alert("Answer is too short. Please elaborate further!");             
    } else {        
        $("#greenTick").show();
        $("#greenTick2").show();
        countGreen = 1;
        showRptBtn();
        pause();
    }
}); 

// On click of the answer check that the minimum character requirement is met before saving the answer and logging progress
submitBlue.addEventListener("click",function(){
    let blueanswervalue = encodeURI(answerBlue.value).replace(/%20/g," ").replace(/%0A/g,"<br>");
    blueAnswer.innerHTML = blueanswervalue;    
    let strB = $('#answer-blue').val().length;
    if (strB < 20) {    
        alert("Answer is too short. Please elaborate further!");             
    } else {        
        $("#blueTick").show();
        $("#blueTick2").show();
        countBlue = 1;
        showRptBtn();
        pause();
    }
}); 

// Pause the videos when modals are closed to avoid multiple video voices played at the same time. Defect discovered during testing! 
function pause() {
    document.querySelectorAll('video').forEach(vid => vid.pause());
}

//Reveal the generate report box when the hCount variable equals 6 (all the Hat boxes are completed)
function showRptBtn() {
    if (countWhite && countRed && countYellow && countBlack && countGreen && countBlue) {    
    $("#reportProduce").show(); 
    }  
}

// Generate report when clicking the generate report button leaving only the reset button with the report: 
generateReport.addEventListener("click",function(){    
    if (confirm("WARNING: After report is run you cannot amend your answers. Please confirm you still wish to proceed!")) {
        $("#hatReport").show();
        $("#sixHats").hide();
        $("#questionInfo").hide();
        $("#reportProduce").hide();
        $("#reportPrint").show();
    }
});