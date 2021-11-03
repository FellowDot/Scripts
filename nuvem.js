var loadScript = function(url, callback){

    /* JavaScript that will load the jQuery library on Google's CDN.
       We recommend this code: https://snipplr.com/view/18756/loadscript/.
       Once the jQuery library is loaded, the callback function will be executed. */
  
};

// const BASE_URI = "http://127.0.0.1:8000/"
const BASE_URI = "https://e.fellowdot.com/"

var email = 'joao@fellow.com'
var user = null
var sheets = null
var company = null
var to_expire = null

var fellow_login = async function(){

    var url = new URL(BASE_URI +  'profile')

    var params = [
        ['email', email],
        ['pwd', '123'],
        ['id_nuvem_company', LS.store.id]
    ]
    
    url.search = new URLSearchParams(params).toString();
    
    let response = await fetch(url);
    let data = await response.json();

    user = data['user'];
    sheets = data['chk'];
    company = data['company'];
    to_expire = data['to_expire'];

    myAppJavaScript();
}

var fillSheets = function(modal_content){
    // <div> lateral esquerda
    const sheets_screen = document.createElement("div");
    sheets_screen.id = "sheets"
    sheets_screen.style.display = "flex"
    sheets_screen.style.flexDirection = "column"
    sheets_screen.style.margin = "0 auto"

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

            if(sheet.eligible){
                sheet_screen.innerHTML += ' esperando você resgatar!';
            }
        });
    
    modal_content.appendChild(sheets_screen);
}

var fillProfile = function(modal_content){
    // <div> lateral esquerda
    const profile_screen = document.createElement("div");
    profile_screen.id = "sheets"
    profile_screen.style.display = "flex"
    profile_screen.style.flexDirection = "column"
    profile_screen.style.margin = "0 auto"

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
    
    modal_content.appendChild(profile_screen);

    fillSheets(modal_content);
}

var fillProfileLogin = function(modal_content){
    // LS.fellow = {
    //     user: "joao@fellow.com",
    // }

    // <div> lateral esquerda
    const profile_screen = document.createElement("div");
    profile_screen.id = "sheets"
    profile_screen.style.display = "flex"
    profile_screen.style.flexDirection = "column"
    profile_screen.style.margin = "0 auto"

        // <p>
        const profile_screen_title = document.createElement("p");
        profile_screen_title.innerHTML += 'Faça login para visualizar sua carteira Fellow!';
        profile_screen_title.style.fontFamily = "Ubuntu-Bold";
        profile_screen_title.style.textAlign = "center";
        profile_screen_title.style.verticalAlign = "middle"
        profile_screen.appendChild(profile_screen_title);

        // Create a form synamically
        var login_form = document.createElement("div");
        login_form.id = "login_form"
        profile_screen.appendChild(login_form);

            // Create an input element for emailID
            var ID = document.createElement("input");
            ID.setAttribute("id", "email");
            ID.setAttribute("type", "text");
            ID.setAttribute("name", "email");
            ID.setAttribute("placeholder", "E-Mail");
            login_form.appendChild(ID);

            // Create an input element for password
            var PWD = document.createElement("input");
            PWD.setAttribute("id", "password");
            PWD.setAttribute("type", "password");
            PWD.setAttribute("name", "password");
            PWD.setAttribute("placeholder", "Password");
            login_form.appendChild(PWD);            

            // Create a submit button
            var BUTTON = document.createElement("button");
            BUTTON.id = "fellow_login_button"
            BUTTON.type = "button"
            BUTTON.innerHTML += "Login";
            login_form.append(BUTTON);

            BUTTON.onclick = function() {
                LS.fellow = {
                    user: "joao@fellow.com",
                }
                
                console.log("Fiz login");

                modal_content.innerHTML = '';
                fillModal(modal_content);
            }
    
    modal_content.appendChild(profile_screen);
}

var fillModal = function(modal_content){
    // <img>
    const fellow_logo = document.createElement("img");
    fellow_logo.src = "https://gestao.fellowdot.com/static/geral/media/theme/Fellow-02.png";
    fellow_logo.style.width = "15%"
    fellow_logo.style.textAlign = "center";
    fellow_logo.style.verticalAlign = "middle"

    modal_content.appendChild(fellow_logo);

    if(LS?.fellow?.user != null){
        fillProfile(modal_content);
    }
    else{
        fillProfileLogin(modal_content);
    }
}

var createModal = function(modal_link){
    /// HTML e CSS
    const modal = document.createElement("div");
    modal.id = "fellow_modal"
    modal.class = "modal"
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.zIndex = "1";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.overflow = "auto";
    modal.style.backgroundColor = "rgb(0,0,0)";
    modal.style.backgroundColor = "rgba(0,0,0,0.4)";

        // <div>
        const modal_content = document.createElement("div");
        modal_content.id = "fellow_modal";
        modal_content.class = "modal-content";
        modal_content.style.backgroundColor = "#fefefe";
        modal_content.style.margin = "15% auto";
        modal_content.style.textAlign = "center";
        modal_content.style.padding = "20px";
        modal_content.style.border = "1px solid #888";
        modal_content.style.width = "80%";
        
        modal.appendChild(modal_content);

            // <span>
            const modal_span = document.createElement("span");
            modal_span.id = "fellow_modal_span";
            modal_span.class = "close";
            modal_span.innerHTML += '&times;';
            modal_span.style.color = "#aaa";
            modal_span.style.float = "right";
            modal_span.style.fontSize = "28px";
            modal_span.style.fontWeight = "bold";

            modal_content.appendChild(modal_span);

            // // <p>
            // const modal_text = document.createElement("p");
            // modal_text.innerHTML = 'Meu Fellow';
            // modal_text.style.fontFamily = "Ubuntu-Bold";
            // modal_text.style.textAlign = "center";
            // modal_text.style.verticalAlign = "middle";
            // modal_content.appendChild(modal_text);

    document.body.appendChild(modal);

    /// JS
    // Abre o modal quando clica no Meu Fellow
        // When the user clicks on the button, open the modal
        modal_link.onclick = function() {
            modal.style.display = "block";
            console.log("Abre modal");
        }

        // When the user clicks on <span> (x), close the modal
        modal_span.onclick = function() {
            modal.style.display = "none";
            console.log("Fecha modal");
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                console.log("Fecha modal por fora");
            }
        }
    
    fillModal(modal_content);
}

var myAppJavaScript = function(){
    /* Your app's JavaScript here.
       $ in this scope references the jQuery object we'll use.
       Don't use 'jQuery', or 'jQuery191', here. Use the dollar sign
       that was passed as argument.*/

    console.log("Entrou na função store");
    
    // Menu do Meu Fellow
    var menu = document.getElementById('auth');
    // console.log(menu.children[1]);
    menu.childNodes[1].class = 'border-right p-left-quarter';

        // <a>
        const modal_link = document.createElement("a");
        modal_link.id = "fellow_modal_link"
        modal_link.class = "p-left-quarter"
        // modal_link.href = "#"
        modal_link.innerHTML += 'Meu Fellow'
        menu.appendChild(modal_link);

    // Modal
    createModal(modal_link);
}

// ### ATIVA O FELLOE-E NA STORE DA NUVEM
const DEBUG = true

if(DEBUG){
    fellow_login();
    document.cookie = 'token=tokenhere; expires=3 Nov 2021 17:51:00 UTC; path=/'
}

// console.log(LS);
