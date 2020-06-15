
function go_dark() {
    var back = document.getElementById('real-dashboard');
    var head = document.getElementById('dash-head');
    var cards = document.querySelectorAll(".dash-card-mobile");
    // var card_text = document.querySelectorAll(".card-subtitle");
    // for (let i = 0; i < cards.length; i++) {
	// cards[i].style.boxShadow = 'none';
	// cards[i].style.backgroundImage = 'linear-gradient(50deg, #ca4c8d 0%, #d45353 74%)';
	// cards[i].style.color = 'white';
    // }
    back.style.backgroundColor = 'rgb(22, 22, 22)';
    head.style.backgroundImage = 'linear-gradient(50deg, #fbb040 0%, #f9ed32 74%)';

}
function go_light() {
    var back = document.getElementById('real-dashboard');
    var head = document.getElementById('dash-head');
    back.style.backgroundColor = 'white';
    head.style.backgroundImage = 'linear-gradient(50deg, #65799b 0%, #5e2563 74%)';

}
function show_dbf() {
    var dbf = document.getElementById('dash-body-dbf');
    var micro = document.getElementById('dash-body-micro');
    var aiaa = document.getElementById('dash-body-aiaa');
    dbf.style.display = "block";
    micro.style.display = "none";
    aiaa.style.display = "none";
    if (document.getElementById('meet').classList.contains('active')){
        console.log('meet');
         show_meeting_dash();
    } else if(document.getElementById('event').classList.contains('active')){
        console.log('event');
        show_event_dash();
    }
}

function show_micro() {
    var dbf = document.getElementById('dash-body-dbf');
    var micro = document.getElementById('dash-body-micro');
    var aiaa = document.getElementById('dash-body-aiaa');
    dbf.style.display = "none";
    micro.style.display = "block";
    aiaa.style.display = "none";
    if (document.getElementById('meet').classList.contains('active')){
        console.log('meet');
         show_meeting_dash();
    } else if(document.getElementById('event').classList.contains('active')){
        console.log('event');
        show_event_dash();
    }
}function show_aiaa() {
    var dbf = document.getElementById('dash-body-dbf');
    var micro = document.getElementById('dash-body-micro');
    var aiaa = document.getElementById('dash-body-aiaa');
    dbf.style.display = "none";
    micro.style.display = "none";
    aiaa.style.display = "block";
    if (document.getElementById('meet').classList.contains('active')){
        console.log('meet');
         show_meeting_dash();
    } else if(document.getElementById('event').classList.contains('active')){
        console.log('event');
        show_event_dash();
    }
}

function show_meeting_dash() {
    var dbf = document.getElementById('dash-body-dbf').style.display;
    var micro = document.getElementById('dash-body-micro').style.display;
    var aiaa = document.getElementById('dash-body-aiaa').style.display;
    if (dbf === 'block'){
        var meet = document.getElementById('dbf-meetings');
        var event = document.getElementById('dbf-events');
        meet.style.display = "block";
        event.style.display = "none";
    } else if (micro === 'block'){
        var meet1 = document.getElementById('micro-meetings');
        var event1 = document.getElementById('micro-events');
        meet1.style.display = "block";
        event1.style.display = "none";
    } else if (aiaa === 'block'){
        var meet1 = document.getElementById('aiaa-meetings');
        var event1 = document.getElementById('aiaa-events');
        meet1.style.display = "block";
        event1.style.display = "none";
    }
}
function show_event_dash() {
    var dbf = document.getElementById('dash-body-dbf').style.display;
    var micro = document.getElementById('dash-body-micro').style.display;
    var aiaa = document.getElementById('dash-body-aiaa').style.display;
    if (dbf === 'block'){
        var meet = document.getElementById('dbf-meetings');
        var event = document.getElementById('dbf-events');
        meet.style.display = "none";
        event.style.display = "block";
    } else if (micro === 'block'){
        var meet1 = document.getElementById('micro-meetings');
        var event1 = document.getElementById('micro-events');
        meet1.style.display = "none";
        event1.style.display = "block";
    } else if (aiaa === 'block'){
        var meet1 = document.getElementById('aiaa-meetings');
        var event1 = document.getElementById('aiaa-events');
        meet1.style.display = "none";
        event1.style.display = "block";
    }
}













function show_meeting() {
    var meet = document.getElementById('meetings-desk');
    var event = document.getElementById('events-desk');
    meet.style.display = "flex";
    event.style.display = "none";
}
function show_event() {
    var meet = document.getElementById('meetings-desk');
    var event = document.getElementById('events-desk');
    meet.style.display = "none";
    event.style.display = "flex";
}
function show_meeting_mobile() {
    var meet = document.getElementById('meetings');
    var event = document.getElementById('events');
    meet.style.display = "block";
    event.style.display = "none";
}
function show_event_mobile() {
    var meet = document.getElementById('meetings');
    var event = document.getElementById('events');
    meet.style.display = "none";
    event.style.display = "block";
}
var submitButton = document.getElementById("submit_form");
    var form = document.getElementById("email_form");
    if(form){
        form.addEventListener("submit", function (e) {
        setTimeout(function() {
            submitButton.value = "Sending...";
            submitButton.disabled = true;
        }, 1);
    });
    }


