nomeCadastro = document.getElementById("nomeCadastro")
invalid = document.getElementById("erroNomeCadastro")
MensagemNomeCadastro = document.getElementById("MensagemNomeCadastro")


nomeCadastro.addEventListener("keyup", () => {
    const valor = nomeCadastro.value;
    const isValid = valor.length >= 8 && valor.length <= 20 && /[0-9]/.test(valor) && /[a-z]/.test(valor) && /[A-Z]/.test(valor);
    
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