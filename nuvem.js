var loadScript = function(url, callback){

    /* JavaScript that will load the jQuery library on Google's CDN.
       We recommend this code: https://snipplr.com/view/18756/loadscript/.
       Once the jQuery library is loaded, the callback function will be executed. */
  
};

// ### O APP EM SI
var myAppJavaScript = function(){
    /* Your app's JavaScript here.
       $ in this scope references the jQuery object we'll use.
       Don't use 'jQuery', or 'jQuery191', here. Use the dollar sign
       that was passed as argument.*/

    // console.log("Entrou na função");
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

    // Novo <p>
    const duloc = document.createElement("p");
    duloc.innerHTML += "Gostei de Duloc, muito limpa.";

    // Nova <div> principal
    const div = document.createElement("div");
    div.id = "main_div"
    div.className = "float"
    div.style.width = "100%"
    div.style.display = "flex"
    div.style.border = "1px solid rgba(67, 67, 67, 0.3)"
    div.style.borderRadius = "5px"
    div.style.marginBottom = "15px"

    // <div> lateral esquerda
    const left_div = document.createElement("div");
    left_div.id = "left_div"
    left_div.style.width = "30%"
    // left_div.style.border = "2px solid #bb6223"
    // left_div.style.borderRadius = "25px"

    // <div> lateral direita
    const right_div = document.createElement("div");
    right_div.id = "right_div"
    right_div.style.width = "70%"
    right_div.style.display = "table"
    // right_div.style.border = "2px solid #bb6223"
    // right_div.style.borderRadius = "25px"
    
    // <img>
    const fellow_logo = document.createElement("img");
    fellow_logo.src = "https://gestao.fellowdot.com/static/geral/media/theme/Fellow-02.png";
    fellow_logo.style.width = "100%"

    // <p>
    const text = document.createElement("p");
    text.innerHTML += "Seu programa de relacionamento inteligente!";
    text.style.fontFamily = "Ubuntu-Bold";
    text.style.textAlign = "center";
    text.style.verticalAlign = "middle"
    text.style.display = "table-cell"
    // text.style.height = "50%";

    // <div>
    // ├──<left_div>
    // │  ├──<fellow_logo>
    // ├──<right_div>
    // │  ├──<text>

    var form = document.getElementsByTagName('form')[0]    
    
    form.insertBefore(div, form.children[1]);
        div.appendChild(left_div);
            left_div.appendChild(fellow_logo);
        div.appendChild(right_div);
            right_div.appendChild(text);    
};

var scripts = document.getElementsByTagName('script');
var myScript = scripts[ scripts.length - 1 ];

// ### FAZ O PARSING DO QUE VEM COMO PARÂMETRO NA CHAMADA DO JS
// ### PODE NÃO SER NECESSÃRIO POIS ÚNICO VALOR É O STORE_ID
// ### STORE_ID PODE SER RECUPERADO NA LS
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

// ### RECUPERA O STORE_ID DA LOJA QUANDO ELA CARREGA O JS
// console.log("store = ", params["store"]);


// console.log(LS);

// var reply_click = function(){
//     var email = document.getElementById('fellow-email').value
//     var pwd = document.getElementById('fellow-password').value
//     $('form').append("<p>Gostei de Duloc, bem limpa "+$.fn.jquery+'</p>');
// }

// document.getElementById('fellow-btn').onclick = reply_click;

// ### ATIVA O FELLOE-E NO CHECKOUT DA NUVEM
const DEBUG = false

if(DEBUG){
    myAppJavaScript();
}
