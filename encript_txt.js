const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".btn-copiar");
const txtEncripta = document.querySelector(".encripta");
const mensajetxt = document.querySelector(".texto_message");
const evalua = document.querySelector(".evaluar");
const contenido = document.querySelector(".cuadro_dibujo");

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncripta.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        mensajetxt.style.background = "#0A3871";
        mensajetxt.style.color = "#FFFF";
        mensajetxt.style.fontWeight = "800";
        mensajetxt.textContent = "El campo de texto no debe estar vacio";
        
        setTimeout(()=>{
            mensajetxt.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        mensajetxt.style.background = "#0A3871";
        mensajetxt.style.color = "#FFFF";
        mensajetxt.style.fontWeight = "800";
        mensajetxt.textContent = "No debe tener tildes y caracteres especiales";
        
        setTimeout(()=>{
            mensajetxt.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        mensajetxt.style.background = "#0A3871";
        mensajetxt.style.color = "#FFFF";
        mensajetxt.style.fontWeight = "800";
        mensajetxt.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(()=>{
            mensajetxt.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        evalua.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove(); 
    }
});
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncripta.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        mensajetxt.style.background = "#0A3871";
        mensajetxt.style.color = "#FFFF";
        mensajetxt.style.fontWeight = "800";
        mensajetxt.textContent = "El campo de texto no debe estar vacio";
        
        setTimeout(()=>{
            mensajetxt.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        mensajetxt.style.background = "#0A3871";
        mensajetxt.style.color = "#FFFF";
        mensajetxt.style.fontWeight = "800";
        mensajetxt.textContent = "No debe tener tildes y caracteres especiales";
        
        setTimeout(()=>{
            mensajetxt.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        mensajetxt.style.background = "#0A3871";
        mensajetxt.style.color = "#FFFF";
        mensajetxt.style.fontWeight = "800";
        mensajetxt.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(()=>{
            mensajetxt.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        evalua.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove(); 
    }
});
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = evalua;
    copiar.select();
        document.execCommand("copy"); 
});

