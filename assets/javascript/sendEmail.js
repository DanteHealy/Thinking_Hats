function sendMail(contactForm) {
    emailjs.send("gmail", "six_hats", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "general_inquiry": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);         
        },
        function(error) {
            console.log("FAILED", error);         
        }
    );
    return false;  // To block from loading a new page
}

function myReset() {
    document.getElementById(“myForm”).reset();
    }
$(document).ready(function() {
    $(“form”).submit(function() {
        alert(“Thanks! Your details have been submitted! Thanks for your time, comments and questions! We appreciate it!“);
    });
});
