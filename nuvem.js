var loadScript = function(url, callback){

    /* JavaScript that will load the jQuery library on Google's CDN.
       We recommend this code: https://snipplr.com/view/18756/loadscript/.
       Once the jQuery library is loaded, the callback function will be executed. */
  
};

// const BASE_URI = "http://127.0.0.1:8000/"
const BASE_URI = "https://e.fellowdot.com/"

var myAppJavaScript = function(){
    /* Your app's JavaScript here.
       $ in this scope references the jQuery object we'll use.
       Don't use 'jQuery', or 'jQuery191', here. Use the dollar sign
       that was passed as argument.*/

    console.log("Entrou na função store");
    var next = document.getElementById('auth');
    next.appendChild('<a href="e.fellowdot.com" class="p-left-quarter">Meu Fellow</a>');
    // document.getElementById('clickme').onclick = function (e) {
    //     e.preventDefault();
    //     document.body.innerHTML += '<p>Gostei de Duloc, muito limpa.</p>';
    // }
}

// ### ATIVA O FELLOE-E NO CHECKOUT DA NUVEM
const DEBUG = true

if(DEBUG){
    myAppJavaScript();
}