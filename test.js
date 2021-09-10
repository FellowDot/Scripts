(function($){
    $('body').append("<p>Os ogros tem camadas, as cebolas tem camadas.</p>");
    $('body').append("<p>É por isso que ninguém gosta de ogros.</p>");
    $('body').append("<p>Gostei de Duloc, bem limpa.</p>");

    var scripts = document.getElementsByTagName('script');
    var myScript = scripts[ scripts.length - 1 ];

    var queryString = myScript.src.replace(/^[^\?]+\??/,'');

    var params = parseQuery( queryString );

    function parseQuery ( query ) {
        var Params = new Object ();
        if ( ! query ) return Params; // return empty object
        
        var Pairs = query.split(/[;&]/);
        for ( var i = 0; i < Pairs.length; i++ ) {
            var KeyVal = Pairs[i].split('=');
            if ( ! KeyVal || KeyVal.length != 2 ) continue;
            var key = unescape( KeyVal[0] );
            var val = unescape( KeyVal[1] );
            val = val.replace(/\+/g, ' ');
            Params[key] = val;
        }
        return Params;
    }

    console.log("store = ", params["store"])

    // PEGA O PARÂMETRO QUE VAI NA TAG <SCRIPT
    // var one = document.currentScript.getAttribute('store'); //1
    // alert(one);

    //var reply_click = function(){
        //var email = document.getElementById('fellow-email').value
        //var pwd = document.getElementById('fellow-password').value
        //alert("Tentativa de login:\nEmail:" + email + "\nPassword:" + pwd);
    //}

    //document.getElementById('fellow-btn').onclick = reply_click;
})();