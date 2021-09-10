$('body').append("<p>Vai do Fellow-e pra Nuvem</p>");

// PEGA O PARÂMETRO QUE VAI NA TAG <SCRIPT
// var one = document.currentScript.getAttribute('one'); //1
// alert(one);

var reply_click = function(){
    var email = document.getElementById('fellow-email').value
    var pwd = document.getElementById('fellow-password').value
    alert("Tentativa de login:\nEmail:" + email + "\nPassword:" + pwd);
}

document.getElementById('fellow-btn').onclick = reply_click;