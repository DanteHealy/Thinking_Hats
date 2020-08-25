function sendMail(contactForm) {
    emailjs.send("gmail", "six_hats", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "general_inquiry": contactForm.emailmessage.value
    })
    .then(function(response) {
            console.log("SUCCESS", response);
            alert("Message Sent!");
        }, function(error) {
            console.log("FAILED", error);
            alert("Message Failed!");
        }
    );
    return false;  // To block from loading a new page
}