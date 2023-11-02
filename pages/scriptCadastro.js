
var form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }

    form.classList.add('was-validated')
})


nomeCadastro = document.getElementById("nomeCadastro")
invalid = document.getElementById("erroNomeCadastro")

nomeCadastro.addEventListener("keyup", () => {
    const valor = nomeCadastro.value;
    //OBS: Essa validação é para senha
    const isValid = valor.length >= 8 && valor.length <= 20 && /[0-9]/.test(valor) && /[a-z]/.test(valor) && /[A-Z]/.test(valor);
    
    if(isValid){
        invalid.classList.remove("invalid-feedback")
        invalid.classList.add("valid-feedback")
        
    }else{
        invalid.classList.remove("valid-feedback")
        invalid.classList.add("invalid-feedback")
       
    }
})