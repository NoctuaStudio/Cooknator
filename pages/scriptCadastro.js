nomeCadastro = document.getElementById("nomeCadastro")
invalid = document.getElementById("erroNomeCadastro")
MensagemNomeCadastro = document.getElementById("MensagemNomeCadastro")


nomeCadastro.addEventListener("keyup", () => {
    const valor = nomeCadastro.value;
    const isValid = valor.length >= 8 && valor.length <= 20 && /[0-9]/.test(valor) && /[a-z]/.test(valor) && /[A-Z]/.test(valor);
    
    if(isValid){
        invalid.classList.remove("invalid-feedback")
        invalid.classList.add("valid-feedback")
        MensagemNomeCadastro.value = "Nome Válido"
        
    }else{
        invalid.style.display="block"
        invalid.classList.remove("valid-feedback")
        invalid.classList.add("invalid-feedback")
        MensagemNomeCadastro.value = "Nome inválido"
       
    }
})