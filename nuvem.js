var loadScript = function(url, callback){

    /* JavaScript that will load the jQuery library on Google's CDN.
       We recommend this code: https://snipplr.com/view/18756/loadscript/.
       Once the jQuery library is loaded, the callback function will be executed. */
  
};

// const BASE_URI = "http://127.0.0.1:8000/"
const BASE_URI = "https://e.fellowdot.com/"

var modalElement = function(){
    // <!-- The Modal -->
    // <div id="myModal" class="modal">

    //     <!-- Modal content -->
    //     <div class="modal-content">
    //         <span class="close">&times;</span>
    //         <p>Some text in the Modal..</p>
    //     </div>

    // </div>

    // <div> lateral esquerda
}

var fillModal = function(modal_content){
    // <img>
    const fellow_logo = document.createElement("img");
    fellow_logo.src = "https://gestao.fellowdot.com/static/geral/media/theme/Fellow-02.png";
    fellow_logo.style.width = "15%"
    fellow_logo.style.textAlign = "center";
    fellow_logo.style.verticalAlign = "middle"

    modal_content.appendChild(fellow_logo);
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

            // <p>
            const modal_text = document.createElement("p");
            modal_text.innerHTML = 'Meu Fellow';
            modal_text.style.fontFamily = "Ubuntu-Bold";
            modal_text.style.textAlign = "center";
            modal_text.style.verticalAlign = "middle";
            modal_content.appendChild(modal_text);

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
    myAppJavaScript();
}