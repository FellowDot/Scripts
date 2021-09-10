
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;
        var email;
        var pwd;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
            else{
                if($(input[i]).attr('name') == 'email'){
                    email = $(input[i]).val();
                }
                else if($(input[i]).attr('name') == 'pass'){
                    pwd = $(input[i]).val();
                }
            }
        }
        
        console.log("email", email);
        console.log("pwd", pwd);

        // if(email == "joao@fellow.com" && pwd == "123"){
        //     alert("É usuário Fellow!");
        // }
        // else{
        //     alert("Não é usuário Fellow!");
        // }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
            else{
                var rx = /^([\w\.]+)@([\w\.]+)$/;
                var email = $(input).val();
                var match = rx.exec(email)[1]

                if(match || match != "fellow"){
                    return false;
                }                
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function userValidate (input) {
        var rx = /^([\w\.]+)@([\w\.]+)$/;
        var email = $(input).val();
        var match = rx.exec(email)[1]

        if(match || match != "fellow"){
            return false;
        }                
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);
