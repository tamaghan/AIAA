var dashboard = 'https://docs.google.com/spreadsheets/d/11D2-5ZAmew6l6lHPPf259ahIJFMYCNGc9Ee5rf4LWhE/edit?usp=sharing';

function init() {
    Tabletop.init({
        key: dashboard,
        callback: dashboard_container,
        simpleSheet: true
    })
}

function dashboard_container(data) {
    // console.log(data);
    dbf(data);
    micro(data);
    AIAA(data);
    dbf_eve(data);
    micro_eve(data);
    AIAA_eve(data);
    progress(data);
}

window.addEventListener('DOMContentLoaded', init)

function progress(data) {
    var prog = data[0]["progress"];
    console.log(prog);
    var bar = document.getElementById("prog").style;
    var bar1 = document.getElementById("prog-mob").style;
    bar.width = prog;
    bar1.width = prog;
}

function dbf(data) {
    for (let i = 0; i < data.length; i++) {
        var add = data[i]["DBF"];
        if (add === "") {
            continue;
        }
        $("#dbf-meet").append(" <div class=\"card dash-card dbf text-center dash-cards\">\n" +
            "                            <div class=\"card-body dash-card-body\">\n" +
            "                                <h5 style=\"margin: 0\" class=\"card-title\">" + add + "</h5>\n" +
            "                            </div>\n" +
            "                        </div>");
        $("#dbf-meet-mob").append("<div class=\"card dbf dash-card-mobile\">\n" +
            "                        <div class=\"card-body\">\n" +
            "                            <h5 style=\"margin: 0\" class=\"card-title\">" + add + "</h5>\n" +
            "                        </div>\n" +
            "                    </div>");
    }
}

function micro(data) {
    for (let i = 0; i < data.length; i++) {
        var add = data[i]["Micro-g"];
        if (add === "") {
            continue;
        }
        $("#micro-meet").append(" <div class=\"card dash-card micro text-center dash-cards\">\n" +
            "                            <div class=\"card-body dash-card-body\">\n" +
            "                                <h5 style=\"margin: 0\" class=\"card-title\">" + add + "</h5>\n" +
            "                            </div>\n" +
            "                        </div>");
        $("#micro-meet-mob").append("<div class=\"card micro dash-card-mobile\">\n" +
            "                        <div class=\"card-body\">\n" +
            "                            <h5 style=\"margin: 0\" class=\"card-title\">" + add + "</h5>\n" +
            "                        </div>\n" +
            "                    </div>");
    }
}

function AIAA(data) {
    for (let i = 0; i < data.length; i++) {
        var add = data[i]["AIAA"];
        if (add === "") {
            continue;
        }
        $("#aiaa-meet").append(" <div class=\"card dash-card club text-center dash-cards\">\n" +
            "                            <div class=\"card-body dash-card-body\">\n" +
            "                                <h5 style=\"margin: 0\" class=\"card-title\">" + add + "</h5>\n" +
            "                            </div>\n" +
            "                        </div>");
        $("#aiaa-meet-mob").append("<div class=\"card club dash-card-mobile\">\n" +
            "                        <div class=\"card-body\">\n" +
            "                            <h5 style=\"margin: 0\" class=\"card-title\">" + add + "</h5>\n" +
            "                        </div>\n" +
            "                    </div>");
    }
}

function dbf_eve(data) {
    for (let i = 0; i < data.length; i++) {
        var add = data[i]["DBF-eve"];
        if (add === "") {
            continue;
        }
        $("#dbf-eve").append(" <div class=\"card dash-card dbf text-center dash-cards\">\n" +
            "                            <div class=\"card-body dash-card-body\">\n" +
            "                                <h5 style=\"margin: 0\" class=\"card-title\">" + add + "</h5>\n" +
            "                            </div>\n" +
            "                        </div>");
        $("#dbf-eve-mob").append("<div class=\"card dbf dash-card-mobile\">\n" +
            "                        <div class=\"card-body\">\n" +
            "                            <h5 style=\"margin: 0\" class=\"card-title\">" + add + "</h5>\n" +
            "                        </div>\n" +
            "                    </div>");
    }
}

function micro_eve(data) {
    for (let i = 0; i < data.length; i++) {
        var add = data[i]["Micro-g-eve"];
        if (add === "") {
            continue;
        }
        $("#micro-eve").append(" <div class=\"card dash-card micro text-center dash-cards\">\n" +
            "                            <div class=\"card-body dash-card-body\">\n" +
            "                                <h5 style=\"margin: 0\" class=\"card-title\">" + add + "</h5>\n" +
            "                            </div>\n" +
            "                        </div>");
        $("#micro-eve-mob").append("<div class=\"card micro dash-card-mobile\">\n" +
            "                        <div class=\"card-body\">\n" +
            "                            <h5 style=\"margin: 0\" class=\"card-title\">" + add + "</h5>\n" +
            "                        </div>\n" +
            "                    </div>");
    }
}

function AIAA_eve(data) {
    for (let i = 0; i < data.length; i++) {
        var add = data[i]["AIAA-eve"];
        if (add === "") {
            continue;
        }
        $("#aiaa-eve").append(" <div class=\"card dash-card club text-center dash-cards\">\n" +
            "                            <div class=\"card-body dash-card-body\">\n" +
            "                                <h5 style=\"margin: 0\" class=\"card-title\">" + add + "</h5>\n" +
            "                            </div>\n" +
            "                        </div>");
        $("#aiaa-eve-mob").append("<div class=\"card club dash-card-mobile\">\n" +
            "                        <div class=\"card-body\">\n" +
            "                            <h5 style=\"margin: 0\" class=\"card-title\">" + add + "</h5>\n" +
            "                        </div>\n" +
            "                    </div>");
    }
}

function go_dark() {
    var back = document.getElementById('real-dashboard');
    var head = document.getElementById('dash-head');
    var cards_mob = document.querySelectorAll(".dash-card-mobile");
    var cards = document.querySelectorAll(".dash-card");
    for (let i = 0; i < cards.length; i++) {
        cards_mob[i].style.boxShadow = 'none';
        cards[i].style.boxShadow = 'none';
    }
    back.style.backgroundColor = 'rgb(22, 22, 22)';
    head.style.backgroundImage = 'linear-gradient(50deg, #fbb040 0%, #f9ed32 74%)';

}

function go_light() {
    var back = document.getElementById('real-dashboard');
    var head = document.getElementById('dash-head');
    var cards_mob = document.querySelectorAll(".dash-card-mobile");
    var cards = document.querySelectorAll(".dash-card");
    for (let i = 0; i < cards.length; i++) {
        cards_mob[i].style.boxShadow = ' 1px 1px 5px 2px #bfbaba';
        cards[i].style.boxShadow = '1px 1px 5px 2px #bfbaba';
    }
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
    if (document.getElementById('meet').classList.contains('active')) {
        show_meeting_dash();
    } else if (document.getElementById('event').classList.contains('active')) {
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
    if (document.getElementById('meet').classList.contains('active')) {
        show_meeting_dash();
    } else if (document.getElementById('event').classList.contains('active')) {
        show_event_dash();
    }
}

function show_aiaa() {
    var dbf = document.getElementById('dash-body-dbf');
    var micro = document.getElementById('dash-body-micro');
    var aiaa = document.getElementById('dash-body-aiaa');
    dbf.style.display = "none";
    micro.style.display = "none";
    aiaa.style.display = "block";
    if (document.getElementById('meet').classList.contains('active')) {
        show_meeting_dash();
    } else if (document.getElementById('event').classList.contains('active')) {
        show_event_dash();
    }
}

function show_meeting_dash() {
    var dbf = document.getElementById('dash-body-dbf').style.display;
    var micro = document.getElementById('dash-body-micro').style.display;
    var aiaa = document.getElementById('dash-body-aiaa').style.display;
    if (dbf === 'block') {
        var meet = document.getElementById('dbf-meetings');
        var event = document.getElementById('dbf-events');
        meet.style.display = "block";
        event.style.display = "none";
    } else if (micro === 'block') {
        var meet1 = document.getElementById('micro-meetings');
        var event1 = document.getElementById('micro-events');
        meet1.style.display = "block";
        event1.style.display = "none";
    } else if (aiaa === 'block') {
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
    if (dbf === 'block') {
        var meet = document.getElementById('dbf-meetings');
        var event = document.getElementById('dbf-events');
        meet.style.display = "none";
        event.style.display = "block";
    } else if (micro === 'block') {
        var meet1 = document.getElementById('micro-meetings');
        var event1 = document.getElementById('micro-events');
        meet1.style.display = "none";
        event1.style.display = "block";
    } else if (aiaa === 'block') {
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

var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");
if (form) {
    form.addEventListener("submit", function (e) {
        setTimeout(function () {
            submitButton.value = "Sending...";
            submitButton.disabled = true;
        }, 1);
    });
}
