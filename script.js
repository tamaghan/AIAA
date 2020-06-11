

function show_meeting() {
    var meet = document.getElementById('meetings');
    var event = document.getElementById('events');
    meet.style.display = "flex";
    event.style.display = "none";
}function show_event() {
    var meet = document.getElementById('meetings');
    var event = document.getElementById('events');
    meet.style.display = "none";
    event.style.display = "flex";
}
var submitButton = document.getElementById("submit_form");
    var form = document.getElementById("email_form");
    form.addEventListener("submit", function (e) {
        setTimeout(function() {
            submitButton.value = "Sending...";
            submitButton.disabled = true;
        }, 1);
    });

