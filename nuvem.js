var loadScript = function(url, callback){

    /* JavaScript that will load the jQuery library on Google's CDN.
       We recommend this code: https://snipplr.com/view/18756/loadscript/.
       Once the jQuery library is loaded, the callback function will be executed. */
  
  };
  
  var myAppJavaScript = function($){
    /* Your app's JavaScript here.
       $ in this scope references the jQuery object we'll use.
       Don't use 'jQuery', or 'jQuery191', here. Use the dollar sign
       that was passed as argument.*/
    $('form').append("<p>Gostei de Duloc, bem limpa "+$.fn.jquery+'</p>');
    // var next = document.getElementById('__next');
    // next.append("Gostei de Duloc, muito limpa "+$.fn.jquery);
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

console.log("store = ", params["store"])

// For jQuery version 1.7
var target = [1, 7, 0];

var current = typeof jQuery === 'undefined' ? [0,0,0] : $.fn.jquery.split('.').map(function(item) {
    return parseInt(item);
});

if (current[0] < target[0] || (current[0] == target[0] && current[1] < target[1])) {
    loadScript('//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js', function(){
        var jQuery1101 = jQuery.noConflict(true);
        myAppJavaScript(jQuery1101);
    });
} else {
    myAppJavaScript(jQuery);
}