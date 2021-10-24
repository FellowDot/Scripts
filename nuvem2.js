var loadScript = function(url, callback){

    /* JavaScript that will load the jQuery library on Google's CDN.
       We recommend this code: https://snipplr.com/view/18756/loadscript/.
       Once the jQuery library is loaded, the callback function will be executed. */
  
};

var user = null
var checkins = null

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

var fellow_login = async function(){

    var url = new URL('http://127.0.0.1:8000/batman')

    var params = [
        ['email', document.getElementById('email').value],
        ['pwd', document.getElementById('password').value],
        ['id_nuvem_company', 123456]
    ]

    console.log(params);
    
    url.search = new URLSearchParams(params).toString();
    
    let response = await fetch(url);
    let data = await response.json();

    data['checkins'].forEach(checkin => {
        console.log(checkin);
    });
    console.log(data['user']);

    user = data['user']
    checkins = data['checkins']

    console.log(data['checkins']);

    second_screen();
}

var second_screen = function(){
    // Nova <div> principal, janela toda na Nuvem
    const div2 = document.createElement("div");
    div2.id = "main_div"
    div2.className = "float"
    div2.style.width = "100%"
    div2.style.display = "flex"
    div2.style.flexDirection = "column"
    div2.style.border = "1px solid rgba(67, 67, 67, 0.3)"
    div2.style.borderRadius = "5px"
    div2.style.marginBottom = "15px"

        // ???? Tela de Perfil ???? //
        // <div> lateral esquerda
        const profile_screen = document.createElement("div");
        profile_screen.id = "profile_screen"
        profile_screen.style.display = "flex"
        profile_screen.style.flexDirection = "column"
        profile_screen.style.margin = "0 auto"
        // left_div.style.width = "30%"
        // left_div.style.border = "2px solid #bb6223"
        // left_div.style.borderRadius = "25px"

            // <p>
            const profile_name = document.createElement("p");
            profile_name.innerHTML += user ? user.name : '';
            profile_name.style.fontFamily = "Ubuntu-Bold";
            profile_name.style.textAlign = "center";
            profile_name.style.verticalAlign = "middle"
            // text.style.display = "table-cell"
            // text.style.height = "50%";

            // <div> lateral esquerda
            const profile_stamp_sheet = document.createElement("div");
            profile_stamp_sheet.id = "profile_screen"
            profile_stamp_sheet.style.display = "flex"
            profile_stamp_sheet.style.flexDirection = "row"
            profile_stamp_sheet.style.margin = "0 auto"
            // left_div.style.width = "30%"
            // left_div.style.border = "2px solid #bb6223"
            // left_div.style.borderRadius = "25px"

                // <p>
                const profile_stamp_sheet_title = document.createElement("p");
                profile_stamp_sheet_title.innerHTML += "Cartela: ";
                profile_stamp_sheet_title.style.fontFamily = "Ubuntu-Bold";
                profile_stamp_sheet_title.style.textAlign = "center";
                profile_stamp_sheet_title.style.verticalAlign = "middle"
                // text.style.display = "table-cell"
                // text.style.height = "50%";
                profile_stamp_sheet.appendChild(profile_stamp_sheet_title);
                
                // for(var stamp in stamps){
                //     // <p>
                //     const stamp_element = document.createElement("p");
                //     stamp_element.innerHTML += stamp.value;
                //     stamp_element.style.fontFamily = "Ubuntu-Bold";
                //     stamp_element.style.textAlign = "center";
                //     stamp_element.style.verticalAlign = "middle"
                //     // text.style.display = "table-cell"
                //     // text.style.height = "50%";

                //     profile_stamp_sheet.appendChild(stamp_element);
                // }

                var total = 0
                
                checkins.forEach(checkin => {
                    total += checkin.stamp.value

                    // <p>
                    const stamp_element = document.createElement("p");
                    stamp_element.innerHTML += "(" + checkin.stamp.value + ")";
                    stamp_element.style.fontFamily = "Ubuntu-Bold";
                    // stamp_element.style.textAlign = "center";
                    // stamp_element.style.verticalAlign = "middle"
                    // text.style.display = "table-cell"
                    // text.style.height = "50%";

                    profile_stamp_sheet.appendChild(stamp_element);

                    // console.log(stamp.value)
                })

                // <p>
                const stamp_element = document.createElement("p");
                stamp_element.innerHTML += " = " + total;
                stamp_element.style.fontFamily = "Ubuntu-Bold";
                // stamp_element.style.textAlign = "center";
                // stamp_element.style.verticalAlign = "middle"
                // text.style.display = "table-cell"
                // text.style.height = "50%";
                profile_stamp_sheet.appendChild(stamp_element);

            // <div> lateral esquerda
            const profile_eldest_stamp = document.createElement("div");
            profile_eldest_stamp.id = "profile_screen"
            profile_eldest_stamp.style.display = "flex"
            profile_eldest_stamp.style.flexDirection = "row"
            profile_eldest_stamp.style.margin = "0 auto"
            // left_div.style.width = "30%"
            // left_div.style.border = "2px solid #bb6223"
            // left_div.style.borderRadius = "25px"

                // <p>
                const profile_eldest_stamp_text = document.createElement("p");
                profile_eldest_stamp_text.innerHTML += "Selo mais antigo: " + checkins[checkins.length - 1].stamp.dt_expiration;
                profile_eldest_stamp_text.style.fontFamily = "Ubuntu-Bold";
                profile_eldest_stamp_text.style.textAlign = "center";
                profile_eldest_stamp_text.style.verticalAlign = "middle"
                // text.style.display = "table-cell"
                // text.style.height = "50%";
                profile_eldest_stamp.appendChild(profile_eldest_stamp_text);
    
    var nuvem_form = document.getElementsByTagName('form')[0]  
    nuvem_form.insertBefore(div2, nuvem_form.children[2]);
        div2.appendChild(profile_screen);
            profile_screen.appendChild(profile_name);
            profile_screen.appendChild(profile_stamp_sheet);
            profile_screen.appendChild(profile_eldest_stamp);
}

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

    // Nova <div> principal, janela toda na Nuvem
    const div = document.createElement("div");
    div.id = "main_div"
    div.className = "float"
    div.style.width = "100%"
    div.style.display = "flex"
    div.style.flexDirection = "column"
    div.style.border = "1px solid rgba(67, 67, 67, 0.3)"
    div.style.borderRadius = "5px"
    div.style.marginBottom = "15px"

    // ???? Tela de Login ???? //
    // <div> lateral esquerda
        const main_screen = document.createElement("div");
        main_screen.id = "main_screen"
        main_screen.style.display = "flex"
        main_screen.style.flexDirection = "column"
        main_screen.style.margin = "0 auto"
        // left_div.style.width = "30%"
        // left_div.style.border = "2px solid #bb6223"
        // left_div.style.borderRadius = "25px"
        
            // <img>
            const fellow_logo = document.createElement("img");
            fellow_logo.src = "https://gestao.fellowdot.com/static/geral/media/theme/Fellow-02.png";
            fellow_logo.style.width = "100%"
            fellow_logo.style.textAlign = "center";
            fellow_logo.style.verticalAlign = "middle"

            // <p>
            const fellow_modo = document.createElement("p");
            fellow_modo.innerHTML += "Seu programa de relacionamento inteligente!";
            fellow_modo.style.fontFamily = "Ubuntu-Bold";
            fellow_modo.style.textAlign = "center";
            fellow_modo.style.verticalAlign = "middle"
            // text.style.display = "table-cell"
            // text.style.height = "50%";

            // Create a form synamically
            var login_form = document.createElement("div");
            login_form.id = "login_form"
            // login_form.setAttribute("method", "post");
            // login_form.setAttribute("action", "/");

                // Create an input element for emailID
                var ID = document.createElement("input");
                ID.setAttribute("id", "email");
                ID.setAttribute("type", "text");
                ID.setAttribute("name", "email");
                ID.setAttribute("placeholder", "E-Mail");

                // Create an input element for password
                var PWD = document.createElement("input");
                PWD.setAttribute("id", "password");
                PWD.setAttribute("type", "password");
                PWD.setAttribute("name", "password");
                PWD.setAttribute("placeholder", "Password");

                // Create a submit button
                var s = document.createElement("input");
                s.setAttribute("id", "submit");
                s.setAttribute("type", "submit");
                s.setAttribute("value", "Submit");

                // Append the email_ID input to the form
                login_form.append(ID);                 
                // Append the password to the form
                login_form.append(PWD);                 
                // Append the button to the form
                login_form.append(s);
                

            // Create a submit button
            var u = document.createElement("input");
            u.id = "first_screen_update"
            // u.setAttribute("type", "submit");
            u.setAttribute("value", "first_screen_update");
            login_form.append(u);
    
    // Insere no HTML
    var nuvem_form = document.getElementsByTagName('form')[0]    
    nuvem_form.insertBefore(div, nuvem_form.children[1]);
        div.appendChild(main_screen);
            main_screen.appendChild(fellow_logo);
            main_screen.appendChild(fellow_modo);
            main_screen.appendChild(login_form);
            main_screen.appendChild(u);
    
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

// ### ATIVA O FELLOE-E NO CHECKOUT DA NUVEM
const DEBUG = true

if(DEBUG){
    myAppJavaScript();
}

document.getElementById('first_screen_update').onclick = fellow_login

function httpGetAsync(theUrl, callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}