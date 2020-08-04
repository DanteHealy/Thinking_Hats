// Create two variables from element ids for the main question: 

let questionInput = document.getElementById('question-problem');
let submitButton = document.getElementById('submit');
let questionDisplay = document.getElementById('question-display');
let clearButton = document.getElementById('clear');

submitButton.addEventListener("click",function(){
    questionDisplay.textContent = questionInput.value;
});

clearButton.addEventListener("click",function(){
    questionDisplay.textContent = "Enter Your Question or Challenge to Display Here!";
});


