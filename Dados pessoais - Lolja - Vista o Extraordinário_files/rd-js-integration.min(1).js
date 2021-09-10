/*! Resultados Digitais - Mon Aug 30 2021 17:00:25 GMT+0000 (UTC) */
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _typeof(e){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function RDStationFormIntegration(e,t,n){RdIntegration.integrate(e,t,n)}function doRequest(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=new XMLHttpRequest;a&&(a.open(e,t,!0),r.withCredentials&&(a.withCredentials=r.withCredentials),r.json&&(a.setRequestHeader("Accept","application/json; charset=UTF-8"),a.setRequestHeader("Content-Type","application/json; charset=UTF-8")),r.headers&&r.headers.forEach(function(e){a.setRequestHeader(e.key,e.value)}),a.send(n),a.onreadystatechange=function(){4===a.readyState&&(a.status>=200&&a.status<300?null!=o&&o(a):null!=i&&i(a))})}var FormFields=function(){function e(e,t,n){return SensitiveDataFilter.filter([{name:n(t,e),value:e.value,sensitive:e.dataset.sensitive}]).length>0}function t(t,n){var r=t.querySelectorAll('select, textarea, button, input:not([type="password"])');return l(Array.from(r).map(function(e){return a(e)}).filter(function(t,r){return e(t,r,n)}))}function n(e){return e.replace(/[\s_-]/g,"").toLowerCase().indexOf("email")>-1}function r(e){var t=!1,n=e.type;return n&&(t="email"===n),t}function o(e){return new RegExp(s).test(e)}function i(e){var t=e.filter(function(e){return"email"===e.name.toLowerCase()});if(t.length>0)return t[0].name="email",!0;var i=!1;return e.forEach(function(e){!i&&r(e)&&(e.name="email",i=!0)}),i||e.forEach(function(e){!i&&n(e.name)&&(e.name="email",i=!0)}),i||e.forEach(function(e){!i&&o(e.value)&&(e.name="email",i=!0)}),i}function a(e){var t=e.cloneNode(!0);return e.labels&&e.labels.length>0&&(t.name||(t.name=e.labels[0].innerText.trim())),"file"!==t.type&&t.value!==e.node&&(t.value=e.value),t}function u(e){return!0!==["password","submit","button","reset","checkbox","radio"].includes(e.type)}function c(t,n){return Array.from(t.querySelectorAll('select:not([multiple="multiple"]), textarea, input')).map(function(e){return a(e)}).filter(function(e){return u(e)}).filter(function(t,r){return e(t,r,n)})}function l(e){var t=[];return e.forEach(function(e){if(!(!e.name||e.disabled||["file","reset","submit","button"].indexOf(e.type)>-1))return"select-multiple"===e.type?void Array.from(e.options).forEach(function(n){n.selected&&t.push({name:e.name,value:n.value})}):void(["checkbox","radio"].indexOf(e.type)>-1&&!e.checked||t.push({name:e.name,value:e.value}))}),t}var s=/^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;return{cloneField:a,findEmail:i,singleFields:c,retrieveAllowedFields:t}}(),RDErrorNotifier=function(){function e(t,n){_classCallCheck(this,e),this.requestStatus=t,this.requestBody=n}return _createClass(e,[{key:"notify",value:function(){var e=JSON.stringify({status:this.requestStatus,body:this.requestBody});return doRequest("POST",this.URL,e,{options:{json:!0}})}}]),e}();RDErrorNotifier.prototype.URL="https://qtmlugypw3.execute-api.us-east-1.amazonaws.com/production";var RDIntegrationCookieConsent=function(){function e(e){if(null===window.RDCookieControl.configuration)return e;if(!r())return e;var t={analytics:window.RDCookieControl.analytics.track,functional:window.RDCookieControl.functional.track,banner_type:window.RDCookieControl.configuration.type};return e.push({name:"privacy_data[browser]",value:JSON.stringify(t)}),e}var t=["cookieconsent_status_ANALYTICS","cookieconsent_status_ESSENTIAL","cookieconsent_status_MARKETING","cookieconsent_status_PERSONALIZATION","cookieconsent_status_UNCATEGORIZED"],n=function(e){return document.cookie.split(";").some(function(t){return 0===t.trim().indexOf("".concat(e,"="))})},r=function(){return t.some(n)};return{insertCookieConsentData:e}}();"undefined"!=typeof module&&module.hasOwnProperty("exports")&&(module.exports=RDIntegrationCookieConsent);var RDIntegrationCreditCard=function(){function e(e){var t,n,r,o=0,i=0;if("string"!=typeof e)return!1;if(n=e.replace(/\D/g,""),(r=n.length)<14)return!1;for(;r--;)t=parseInt(n.charAt(r),10)<<i,o+=t-9*(t>9),i^=1;return o%10==0&&o>0}return{validNumber:e}}(),SensitiveDataFilter=function(){function e(e){return RDIntegrationCreditCard.validNumber(e.value)}function t(e,t){return t.test(e.name)}function n(e){return new RegExp(e.join("|"),"i")}function r(r){var i=n(o);return r.filter(function(e){return"true"!==e.sensitive}).filter(function(t){return!1===e(t)}).filter(function(e){return!1===t(e,i)})}var o=["captcha","_wpcf7","_wpnonce","_viewstate","_previouspage","_viewstategenerator","creditcard","credit_card","credit_number","cardnumber","cvv","cvc","securitycode","pagseguro","cielo","pagarme","billing","erede_api","cartao_credito","cartaocredito","cartão","checkout","rede_credit","cardholder"];return{filter:r}}();"undefined"!=typeof module&&module.hasOwnProperty("exports")&&(module.exports={RDIntegrationCreditCard:RDIntegrationCreditCard,SensitiveDataFilter:SensitiveDataFilter});var RDIntegrationDataPrivacy=function(){function e(e){return!!e.dataset.privacy}function t(t){return e(t)&&"checkbox"===t.getAttribute("type")}function n(e){var t=[];return Array.from(e.querySelectorAll('input[type="checkbox"][data-privacy]')).map(function(e){return e.cloneNode()}).forEach(function(e){e.value=Number(e.checked),t.push(e)}),t}return{isPrivacyCheckboxField:t,findDataPrivacyCheckboxesFields:n}}();"undefined"!=typeof module&&module.hasOwnProperty("exports")&&(module.exports=RDIntegrationDataPrivacy);var FieldMapping=function(){function e(){m=[]}function t(e){var t,n,r=e.getAttribute("name")||e.name,o=/\[/g,i=/\]/g;return!!r&&(t=r.replace(o,"_"),n=t.replace(i,""),RDIntegrationDataPrivacy.isPrivacyCheckboxField(e)?n:["checkbox","select-multiple"].indexOf(e.type)>-1?"".concat(n,"[]"):n)}function n(e){try{var t=e.labels[0];return!!t&&t.innerText.trim()}catch(e){return!1}}function r(e,r){var o=r.getAttribute("type")||r.type,i="Field "+e+" "+o;return t(r)||n(r)||r.getAttribute("id")||i}function o(e){return"string"==typeof e.value&&"textarea"!==e.type?e.value.slice(0,255):e.value}function i(e){if("string"==typeof e){var t=/\\u0*/g;return e.replace(t,"")}return e}function a(e){Array.from(e).forEach(function(e,t){m.push({name:r(t,e),value:i(o(e)),type:e.type})})}function u(e){a(FormFields.singleFields(e,r))}function c(e){var t=Array.from(e.querySelectorAll('input[type="checkbox"]:checked:not([data-privacy])')).map(function(e){return FormFields.cloneField(e)});t.forEach(function(e){e.name=e.name.split(".")[0]}),a(t)}function l(e){a(RDIntegrationDataPrivacy.findDataPrivacyCheckboxesFields(e))}function s(e){a(Array.from(e.querySelectorAll('input[type="radio"]:checked')).map(function(e){return FormFields.cloneField(e)}))}function f(e){a(Array.from(e.querySelectorAll("select[multiple] > option:checked")).map(function(e){var t=e.cloneNode(!0);return t.name=e.parentNode.name,t.type="select-multiple",t}))}function d(t){return e(),u(t),c(t),l(t),s(t),f(t),m}var m=[];return{mapFields:d,truncateStringValue:o,findFieldName:r}}(),RdIntegrationIdentifier=function(){function e(e){var t=e.action;return"object"===_typeof(t)?t.value:void 0!==t?t:""}function t(t){var n,r=!1,o=["squarespace.com","realty_ajax_shortcode_contact_form"];for(n=0;n<o.length;n+=1)e(t).indexOf(o[n])>-1&&(r=!0);return r}function n(e){return!t(e)&&e.getAttribute("id")}function r(e){var t="/"===window.location.pathname?"home":window.location.pathname,r=e.getAttribute("name")||n(e)||t;return FieldMapping.truncateStringValue({value:r})}return{identifier:r}}(),RdIntegration=function(){var e,t,n,r,o,i=function(e,t,n){a(e,t,n),u(),w()},a=function(e,o,i){r=i||{},t=e,n=o},u=function(){document.querySelector('input[type="submit"], button').addEventListener("click",c)},c=function(t){if(o=v(),e=l(t.target)){var n=FormFields.retrieveAllowedFields(e,FieldMapping.findFieldName);if(FormFields.findEmail(n)){var r=s(n);("function"!=typeof e.checkValidity||e.checkValidity())&&(C(r,m),t.preventDefault())}}},l=function(e){return e.closest("form:not([data-internal-rdstation-form])")},s=function(e){var t=f(e);return t.push(o.identifier,o.token,g()),t},f=function(e){return r.fieldMapping&&(e=d(e)),e},d=function(e){return e.map(function(e,t){var n=r.fieldMapping[e.name];return n&&(e.name=n),e})},m=function(){if(p(e))e.dispatchEvent(new Event("submit"));else{var t=e.querySelector('input[type="submit"], button');t&&(t.removeEventListener("click",c),t.click())}},p=function(e){var t=e.getAttribute("action");return void 0!==t&&""!==t.trim()},v=function(){return{identifier:{name:"identificador",value:n},token:{name:"token_rdstation",value:t}}},y=function(e){var t,n,r=document.cookie.split(";");for(e+="=",t=0;t<r.length;t++){for(n=r[t];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(e))return n.substring(e.length,n.length)}return null},g=function(){return{name:"query_params",value:location.search.substring(1)}},h=function(){var e=y("rdtrk");if(null!==e)return e=JSON.parse(unescape(e)),e.id},b=function(e){var t=h();return void 0!==t&&e.push({name:"client_id",value:t}),e},_=function(e){var t=y("__utmz"),n=y("__trf.src");return t&&e.push({name:"c_utmz",value:t}),n&&e.push({name:"traffic_source",value:n}),e},k=function(e,t){return e.push({name:"_is",value:t}),e},C=function(e,t,n){var r,o;n=n||3,r=10===n?"form-integrations":"conversions",e=b(e),e=_(e),e=k(e,n),e=RDIntegrationCookieConsent.insertCookieConsentData(e);var i=[];e.forEach(function(e,t){i.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),doRequest("POST","https://www.rdstation.com.br/api/1.3/"+r,i.join("&").replace(/%20/g,"+"),{withCredentials:!1,headers:[{key:"Content-Type",value:"application/x-www-form-urlencoded; charset=UTF-8"},{key:"Referrer-Policy",value:"strict-origin-when-cross-origin"}]},function(e){t&&t(e,e.statusText)},function(e){if(e.status>=500)return o=new RDErrorNotifier(e.status,i),void o.notify();t&&e.status>0&&t(e,e.statusText)})},w=function(){!0===r.debugMode&&F()},F=function(){r=r||{},console.info("Iniciando");var e=_getElementSubmit(),t=l(e);0===e.length?console.warn("Nenhum botao de submit encontrado"):console.info("Botoes de submit encontrados: "+e.length),0===t.length?console.warn("Nenhum formulario encontrado"):console.info("Formularios encontrados: "+t.length),A(t),console.info("Finalizado")},A=function(e){o=v(),e.forEach(function(e,t){var n=s(e),r=[];console.log(""),console.info(t+1+" formulario"),FormFields.findEmail(e)?console.info("Campo de email encontrado"):console.warn("Campo de email nao encontrado"),n.forEach(function(e,t){r.push(e.name)}),console.info("Campos mapeados: "+r.join(", "))}),console.log("")},S=function(e,n){r=n||{},t=e,localStorage.getItem("RdIntegrationFormData")&&N(),R()},R=function(){document.querySelectorAll("form").forEach(function(e){if(!e.querySelector('input[name="internal_source"], input[name="_is"]')){var t=e.querySelectorAll("input[type=submit], button");if(0===t.length){var n=e.id||e.getAttribute("id")||e.getAttribute("name");n&&(t=document.querySelectorAll("input[type=submit][form="+n+"], button[form="+n+"]"))}if(t){var r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done);r=!0)a.value.addEventListener("click",D,!0)}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}}}})},D=function(e){var t=I(e.target),r=FieldMapping.mapFields(t);FormFields.findEmail(r)&&(n=RdIntegrationIdentifier.identifier(t),x(r))},I=function(e){return e.form||e.closest("form")||document.getElementById(e.getAttribute("form"))},x=function(e){e=E(e),q(e),C(e,function(e){O(e)},10)},E=function(e){return e.push({name:"identificador",value:n},{name:"token_rdstation",value:t},{name:"form_url",value:location.href.split("?")[0]},{name:"page_title",value:document.title}),e},q=function(e){localStorage.setItem("RdIntegrationFormData",JSON.stringify(e))},N=function(){var e=JSON.parse(localStorage.getItem("RdIntegrationFormData"));C(e,function(e){O(e)},10)},O=function(e){4===e.readyState&&localStorage.removeItem("RdIntegrationFormData")};return{integrate:i,post:C,analyse:F,integrateAll:S}}();