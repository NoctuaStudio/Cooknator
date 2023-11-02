nomeCadastro = document.getElementById("nomeCadastro")
invalid = document.getElementById("erroNomeCadastro")
MensagemNomeCadastro = document.getElementById("MensagemNomeCadastro")


nomeCadastro.addEventListener("keyup", () => {
    const valor = nomeCadastro.value;
    const isValid = valor.length >= 3 && valor.length <= 20;
    
    if(isValid){
        invalid.classList.remove("invalid-feedback")
        invalid.classList.add("valid-feedback")
        MensagemNomeCadastro.innerText = "Nome válido"
    }else{
        invalid.style.display="block"
        invalid.classList.remove("valid-feedback")
        invalid.classList.add("invalid-feedback")
        MensagemNomeCadastro.innerText = "Nome inválido"
    }
})


sobrenomeCadastro = document.getElementById("sobrenomeCadastro")
erroSobrenomeCadastro = document.getElementById("erroSobrenomeCadastro")
MensagemSobrenomeCadastro = document.getElementById("MensagemSobrenomeCadastro")


sobrenomeCadastro.addEventListener("keyup", () => {
    const valor = sobrenomeCadastro.value;
    const isValid = valor.length >= 3 && valor.length <= 20;
    
    if(isValid){
        erroSobrenomeCadastro.classList.remove("invalid-feedback")
        erroSobrenomeCadastro.classList.add("valid-feedback")
        MensagemSobrenomeCadastro.innerText = "Sobrenome válido"  
    }else{
        erroSobrenomeCadastro.style.display="block"
        erroSobrenomeCadastro.classList.remove("valid-feedback")
        erroSobrenomeCadastro.classList.add("invalid-feedback")
        MensagemSobrenomeCadastro.innerText = "Sobrenome inválido"
    }
})


usuarioCadastro = document.getElementById("usuarioCadastro")
erroUsuarioCadastro = document.getElementById("erroUsuarioCadastro")
MensagemUsuarioCadastro = document.getElementById("MensagemUsuarioCadastro")


usuarioCadastro.addEventListener("keyup", () => {
    const valor = usuarioCadastro.value;
    const isValid = valor.length >= 3 && valor.length <= 20;
    
    if(isValid){
        erroUsuarioCadastro.classList.remove("invalid-feedback")
        erroUsuarioCadastro.classList.add("valid-feedback")
        MensagemUsuarioCadastro.innerText = "Usuário válido"  
    }else{
        erroUsuarioCadastro.style.display="block"
        erroUsuarioCadastro.classList.remove("valid-feedback")
        erroUsuarioCadastro.classList.add("invalid-feedback")
        MensagemUsuarioCadastro.innerText = "Usuário inválido"
    }
})


emailCadastro = document.getElementById("emailCadastro")
erroEmailCadastro = document.getElementById("erroEmailCadastro")
MensagemEmailCadastro = document.getElementById("MensagemEmailCadastro")


emailCadastro.addEventListener("keyup", () => {
    const valor = emailCadastro.value;
    const isValid = validateEmail(valor);
    
    if(isValid){
        erroEmailCadastro.classList.remove("invalid-feedback")
        erroEmailCadastro.classList.add("valid-feedback")
        MensagemEmailCadastro.innerText = "Email válido"  
    }else{
        erroEmailCadastro.style.display="block"
        erroEmailCadastro.classList.remove("valid-feedback")
        erroEmailCadastro.classList.add("invalid-feedback")
        MensagemEmailCadastro.innerText = "Email inválido"
    }
})

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


senhaCadastro = document.getElementById("senhaCadastro")
erroSenhaCadastro = document.getElementById("erroSenhaCadastro")
MensagemSenhaCadastro = document.getElementById("MensagemSenhaCadastro")


senhaCadastro.addEventListener("keyup", () => {
    const valor = senhaCadastro.value;
    const isValid = valor.length >= 8 && valor.length <= 20 && /[0-9]/.test(valor) && /[a-z]/.test(valor) && /[A-Z]/.test(valor) && /[!|@|#|$|%|^|&|*|(|)|-|_]/.test(valor);
    
    if(isValid){
        erroSenhaCadastro.classList.remove("invalid-feedback")
        erroSenhaCadastro.classList.add("valid-feedback")
        MensagemSenhaCadastro.innerText = "Senha válida"  
    }else{
        erroSenhaCadastro.style.display="block"
        erroSenhaCadastro.classList.remove("valid-feedback")
        erroSenhaCadastro.classList.add("invalid-feedback")
        MensagemSenhaCadastro.innerText = "Senha inválida"
    }
})


confirmarCadastro = document.getElementById("confirmarCadastro")
erroConfirmarCadastro = document.getElementById("erroConfirmarCadastro")
MensagemConfirmarCadastro = document.getElementById("MensagemConfirmarCadastro")


confirmarCadastro.addEventListener("keyup", () => {
    const valor = confirmarCadastro.value;
    const isValid = valor===senhaCadastro.value && valor.length >= 8 && valor.length <= 20 && /[0-9]/.test(valor) && /[a-z]/.test(valor) && /[A-Z]/.test(valor) && /[!|@|#|$|%|^|&|*|(|)|-|_]/.test(valor);
    
    if(isValid){
        erroConfirmarCadastro.classList.remove("invalid-feedback")
        erroConfirmarCadastro.classList.add("valid-feedback")
        MensagemConfirmarCadastro.innerText = "Senha válida"  
    }else{
        erroConfirmarCadastro.style.display="block"
        erroConfirmarCadastro.classList.remove("valid-feedback")
        erroConfirmarCadastro.classList.add("invalid-feedback")
        MensagemConfirmarCadastro.innerText = "Senha inválida"
    }
})