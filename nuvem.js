var loadScript = function(url, callback){

    /* JavaScript that will load the jQuery library on Google's CDN.
       We recommend this code: https://snipplr.com/view/18756/loadscript/.
       Once the jQuery library is loaded, the callback function will be executed. */
  
};
  
var myAppJavaScript = function(){
    /* Your app's JavaScript here.
       $ in this scope references the jQuery object we'll use.
       Don't use 'jQuery', or 'jQuery191', here. Use the dollar sign
       that was passed as argument.*/

    console.log("Entrou na função");
    // console.log($('body'));
    // var next = document.getElementsByTagName('form');
    // next.appendChild("<p>Gostei de Duloc, muito limpa</p>");
    // var el = document.getElementById('element');
    // var form = document.getElementsByTagName('form');
    // el.innerHTML = '<p><a id="clickme" href="#">Click me</a></p>';
    // document.getElementById('clickme').onclick = function (e) {
    //     e.preventDefault();
    //     document.body.innerHTML += '<p>Gostei de Duloc, muito limpa.</p>';
    // }

    const duloc = document.createElement("p");
    duloc.innerHTML += "Gostei de Duloc, muito limpa.";

    const fellow_logo = document.createElement("img");
    fellow_logo.src = 'https://gestao.fellowdot.com/static/geral/media/theme/Fellow-02.png'

    document.getElementsByTagName('form')[0].appendChild(fellow_logo);
};

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

console.log("store = ", params["store"]);

console.log(LS);

// var reply_click = function(){
//     var email = document.getElementById('fellow-email').value
//     var pwd = document.getElementById('fellow-password').value
//     $('form').append("<p>Gostei de Duloc, bem limpa "+$.fn.jquery+'</p>');
// }

// document.getElementById('fellow-btn').onclick = reply_click;

myAppJavaScript();