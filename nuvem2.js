var loadScript = function(url, callback){

    /* JavaScript that will load the jQuery library on Google's CDN.
       We recommend this code: https://snipplr.com/view/18756/loadscript/.
       Once the jQuery library is loaded, the callback function will be executed. */
  
};

var user = null
var checkins = null
var redeem = null
var company = null
var sheets = null
var coupon = null

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

function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

var Div = function(id, className, style){
    const div = document.createElement("div");
    div.id = id
    div.className = className
    
    css(div, {
        'background-color': 'yellow',
        color: 'red'
    });

    return div
}

var P = function(id){
    const p = document.createElement("div");
    if(id)
        p.id = id
    p.innerHTML += user ? user.name : '';
    p.style.fontFamily = "Ubuntu-Bold";
    p.style.textAlign = "center";
    p.style.verticalAlign = "middle"

    return p
}

var fellow_login = async function(){

    var url = new URL('http://127.0.0.1:8000/profile')

    var params = [
        ['email', document.getElementById('email').value],
        ['pwd', document.getElementById('password').value],
        ['id_nuvem_company', 1643050]
    ]
    
    url.search = new URLSearchParams(params).toString();
    
    let response = await fetch(url);
    let data = await response.json();

    user = data['user']
    sheets = data['chk']
    company = data['company']
    to_expire = data['to_expire']

    console.log(to_expire)

    second_screen();
    third_screen();
    fourth_screen();
}

var fellow_redeem = async function(){
    var url = new URL('http://127.0.0.1:8000/coupons/create')

    var params = [
        ['email', document.getElementById('email').value],
        ['company_nuvem_id', 1643050],
        ['value', sheets[0].value],
    ]
    
    url.search = new URLSearchParams(params).toString();
    
    let response = await fetch(url);
    let data = await response.json();

    console.log(data);

    coupon = data['coupon']

    fifth_screen();
}

var fifth_screen = function(){
    // Nova <div> principal, janela toda na Nuvem
    const fifth_screen = document.createElement("div");
    fifth_screen.id = "fifth_screen"
    fifth_screen.className = "float"
    fifth_screen.style.width = "100%"
    fifth_screen.style.display = "flex"
    fifth_screen.style.flexDirection = "column"
    fifth_screen.style.border = "1px solid rgba(67, 67, 67, 0.3)"
    fifth_screen.style.borderRadius = "5px"
    fifth_screen.style.marginBottom = "15px"

    var nuvem_form = document.getElementsByTagName('form')[0]
    nuvem_form.insertBefore(fifth_screen, nuvem_form.children[4]);

        // <div> lateral esquerda
        const coupon_screen = document.createElement("div");
        coupon_screen.id = "redeem"
        coupon_screen.style.display = "flex"
        coupon_screen.style.flexDirection = "column"
        coupon_screen.style.margin = "0 auto"
        fifth_screen.appendChild(coupon_screen);

            // <p>
            const coupon_text_code = document.createElement("p");
            coupon_text_code.innerHTML = 'Código do cupom resgatado: ' + coupon.code;
            coupon_text_code.style.fontFamily = "Ubuntu-Bold";
            coupon_text_code.style.textAlign = "center";
            coupon_text_code.style.verticalAlign = "middle"
            coupon_screen.appendChild(coupon_text_code);

            // <p>
            const coupon_text_value = document.createElement("p");
            coupon_text_value.innerHTML = 'Valor do cupom resgatado: R$' + coupon.value;
            coupon_text_value.style.fontFamily = "Ubuntu-Bold";
            coupon_text_value.style.textAlign = "center";
            coupon_text_value.style.verticalAlign = "middle"
            coupon_screen.appendChild(coupon_text_value);

            // <p>
            const coupon_text_expiration = document.createElement("p");
            coupon_text_expiration.innerHTML = 'Validade do cupom resgatado: ' + coupon.end_date;
            coupon_text_expiration.style.fontFamily = "Ubuntu-Bold";
            coupon_text_expiration.style.textAlign = "center";
            coupon_text_expiration.style.verticalAlign = "middle"
            coupon_screen.appendChild(coupon_text_expiration);

            // <p>
            const coupon_text_apply = document.createElement("p");
            coupon_text_apply.innerHTML = 'Insira no carrinho antes de finalizar a compra!';
            coupon_text_apply.style.fontFamily = "Ubuntu-Bold";
            coupon_text_apply.style.textAlign = "center";
            coupon_text_apply.style.verticalAlign = "middle"
            coupon_screen.appendChild(coupon_text_apply);
}

var fourth_screen = function(){
    // Nova <div> principal, janela toda na Nuvem
    const fourth_screen = document.createElement("div");
    fourth_screen.id = "fourth_screen"
    fourth_screen.className = "float"
    fourth_screen.style.width = "100%"
    fourth_screen.style.display = "flex"
    fourth_screen.style.flexDirection = "column"
    fourth_screen.style.border = "1px solid rgba(67, 67, 67, 0.3)"
    fourth_screen.style.borderRadius = "5px"
    fourth_screen.style.marginBottom = "15px"

    var nuvem_form = document.getElementsByTagName('form')[0]
    nuvem_form.insertBefore(fourth_screen, nuvem_form.children[4]);

        // <div> lateral esquerda
        const redeem_screen = document.createElement("div");
        redeem_screen.id = "redeem"
        redeem_screen.style.display = "flex"
        redeem_screen.style.flexDirection = "column"
        redeem_screen.style.margin = "0 auto"
        fourth_screen.appendChild(redeem_screen);

            if(sheets[0] != null & sheets[0].eligible){
                // <p>
                const redeem_eligible_text = document.createElement("p");
                redeem_eligible_text.innerHTML += 'Você pode fazer um resgate de R$' + sheets[0].value;
                redeem_eligible_text.style.fontFamily = "Ubuntu-Bold";
                redeem_eligible_text.style.textAlign = "left";
                redeem_eligible_text.style.verticalAlign = "middle"
                redeem_screen.appendChild(redeem_eligible_text);

                // <p>
                const redeem_eligible_button = document.createElement("p");
                redeem_eligible_button.id = "redeem_eligible_button"
                redeem_eligible_button.innerHTML += '<b>Resgatar</b>';
                redeem_eligible_button.style.fontFamily = "Ubuntu-Bold";
                redeem_eligible_button.style.textAlign = "center";
                redeem_eligible_button.style.verticalAlign = "middle"
                redeem_screen.appendChild(redeem_eligible_button);

                document.getElementById('redeem_eligible_button').onclick = fellow_redeem
            }
            else{
                // <p>
                const redeem_eligible_text = document.createElement("p");
                redeem_eligible_text.innerHTML += 'Você não pode fazer nenhum resgate';
                redeem_eligible_text.style.fontFamily = "Ubuntu-Bold";
                redeem_eligible_text.style.textAlign = "left";
                redeem_eligible_text.style.verticalAlign = "middle"
                redeem_screen.appendChild(redeem_eligible_text);
            }
}

var third_screen = function(){
    // Nova <div> principal, janela toda na Nuvem
    const third_main_div = document.createElement("div");
    third_main_div.id = "third_main_div"
    third_main_div.className = "float"
    third_main_div.style.width = "100%"
    third_main_div.style.display = "flex"
    third_main_div.style.flexDirection = "column"
    third_main_div.style.border = "1px solid rgba(67, 67, 67, 0.3)"
    third_main_div.style.borderRadius = "5px"
    third_main_div.style.marginBottom = "15px"

    var nuvem_form = document.getElementsByTagName('form')[0]
    nuvem_form.insertBefore(third_main_div, nuvem_form.children[3]);

        // <div> lateral esquerda
        const sheets_screen = document.createElement("div");
        sheets_screen.id = "sheets"
        sheets_screen.style.display = "flex"
        sheets_screen.style.flexDirection = "column"
        sheets_screen.style.margin = "0 auto"
        third_main_div.appendChild(sheets_screen);

            // <p>
            const sheet_screen_title = document.createElement("p");
            sheet_screen_title.innerHTML += 'Cartelas';
            sheet_screen_title.style.fontFamily = "Ubuntu-Bold";
            sheet_screen_title.style.textAlign = "center";
            sheet_screen_title.style.verticalAlign = "middle"
            sheets_screen.appendChild(sheet_screen_title);

            sheets.forEach(sheet => {
                // <p>
                const sheet_screen = document.createElement("p");
                sheet_screen.innerHTML += 'Cartela: ';
                sheet_screen.style.fontFamily = "Ubuntu-Bold";
                sheet_screen.style.textAlign = "left";
                sheet_screen.style.verticalAlign = "middle"
                sheets_screen.appendChild(sheet_screen);

                sheet.sheet.forEach(stamp => {
                    sheet_screen.innerHTML += '(' + stamp.stamp.value + ') ';
                });

                sheet_screen.innerHTML += '= ' + sheet.value;
            });
}

var second_screen = function(){
    // Nova <div> principal, janela toda na Nuvem
    const second_main_div = document.createElement("div");
    second_main_div.id = "second_main_div"
    second_main_div.className = "float"
    second_main_div.style.width = "100%"
    second_main_div.style.display = "flex"
    second_main_div.style.flexDirection = "column"
    second_main_div.style.border = "1px solid rgba(67, 67, 67, 0.3)"
    second_main_div.style.borderRadius = "5px"
    second_main_div.style.marginBottom = "15px"

    var nuvem_form = document.getElementsByTagName('form')[0]
    nuvem_form.insertBefore(second_main_div, nuvem_form.children[3]);

        // <div> lateral esquerda
        const profile_screen = document.createElement("div");
        profile_screen.id = "sheets"
        profile_screen.style.display = "flex"
        profile_screen.style.flexDirection = "column"
        profile_screen.style.margin = "0 auto"
        second_main_div.appendChild(profile_screen);

            // <p>
            const profile_screen_title = document.createElement("p");
            profile_screen_title.innerHTML += 'Perfil';
            profile_screen_title.style.fontFamily = "Ubuntu-Bold";
            profile_screen_title.style.textAlign = "center";
            profile_screen_title.style.verticalAlign = "middle"
            profile_screen.appendChild(profile_screen_title);
            
            // <p>
            const profile_screen_picture = document.createElement("p");
            profile_screen_picture.innerHTML +=  'Foto: ' + '=D';
            profile_screen_picture.style.fontFamily = "Ubuntu-Bold";
            profile_screen_picture.style.textAlign = "left";
            profile_screen_picture.style.verticalAlign = "middle"
            profile_screen.appendChild(profile_screen_picture);

            // <p>
            const profile_screen_name = document.createElement("p");
            profile_screen_name.innerHTML +=  'Nome: ' + (user ? user.name : '');
            profile_screen_name.style.fontFamily = "Ubuntu-Bold";
            profile_screen_name.style.textAlign = "left";
            profile_screen_name.style.verticalAlign = "middle"
            profile_screen.appendChild(profile_screen_name);

            // <p>
            const profile_screen_next_expiration = document.createElement("p");
            profile_screen_next_expiration.innerHTML +=  'Próximo selo expira em ' + to_expire.stamp.dt_expiration + ' no valor de R$' + to_expire.stamp.value;
            profile_screen_next_expiration.style.fontFamily = "Ubuntu-Bold";
            profile_screen_next_expiration.style.textAlign = "left";
            profile_screen_next_expiration.style.verticalAlign = "middle"
            profile_screen.appendChild(profile_screen_next_expiration);
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
                ID.setAttribute("value", "joao@fellow.com");

                // Create an input element for password
                var PWD = document.createElement("input");
                PWD.setAttribute("id", "password");
                PWD.setAttribute("type", "password");
                PWD.setAttribute("name", "password");
                PWD.setAttribute("placeholder", "Password");

                // // Create a submit button
                // var s = document.createElement("input");
                // s.setAttribute("id", "submit");
                // s.setAttribute("type", "submit");
                // s.setAttribute("value", "Submit");

                // Append the email_ID input to the form
                login_form.append(ID);                 
                // Append the password to the form
                login_form.append(PWD);                 
                // // Append the button to the form
                // login_form.append(s);
                

            // Create a submit button
            var u = document.createElement("input");
            u.id = "first_screen_update"
            // u.setAttribute("type", "submit");
            u.setAttribute("value", "Login");
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