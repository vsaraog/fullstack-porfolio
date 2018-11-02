//document.getElementById("smslink").onclick = function() {myFunction()};
let message;

function sendtext() {
    message = document.getElementById("exampleTextarea").value;
    document.getElementById("smslink").href = "sms:7047797890&body=" + message;
    
    body = "body=" + message;
    linkhere = encodeURI("sms:7047797890&body=" + message);
    console.log(linkhere);
    sendit();
}

function sendit() {
    window.location.href = linkhere;
}

function sendtextnomsg() {
    window.location.href ="sms:7047797890";
}