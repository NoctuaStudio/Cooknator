let validações = [false, false, false, false, false, false, false]

const nomeCadastro = document.getElementById("nomeCadastro")
const invalid = document.getElementById("erroNomeCadastro")
const MensagemNomeCadastro = document.getElementById("MensagemNomeCadastro")

nomeCadastro.addEventListener("keyup", () => {
    const valor = nomeCadastro.value;
    validações[0] = valor.length >= 3 && valor.length <= 20;
    
    if(validações[0]){
        invalid.classList.remove("invalid-feedback")
        invalid.classList.add("valid-feedback")
        nomeCadastro.style.border = "2px solid green"
        MensagemNomeCadastro.innerText = ""
    }else{
        invalid.style.display="block"
        invalid.classList.remove("valid-feedback")
        invalid.classList.add("invalid-feedback")
        nomeCadastro.style.border = "2px solid red"
        MensagemNomeCadastro.innerText = "Nome inválido"
    }
})


const sobrenomeCadastro = document.getElementById("sobrenomeCadastro")
const erroSobrenomeCadastro = document.getElementById("erroSobrenomeCadastro")
const MensagemSobrenomeCadastro = document.getElementById("MensagemSobrenomeCadastro")


sobrenomeCadastro.addEventListener("keyup", () => {
    const valor = sobrenomeCadastro.value;
    validações[1] = valor.length >= 3 && valor.length <= 20;
    
    if( validações[1]){
        erroSobrenomeCadastro.classList.remove("invalid-feedback")
        erroSobrenomeCadastro.classList.add("valid-feedback")
        sobrenomeCadastro.style.border = "2px solid green"
        MensagemSobrenomeCadastro.innerText = ""  
    }else{
        erroSobrenomeCadastro.style.display="block"
        erroSobrenomeCadastro.classList.remove("valid-feedback")
        erroSobrenomeCadastro.classList.add("invalid-feedback")
        sobrenomeCadastro.style.border = "2px solid red"
        MensagemSobrenomeCadastro.innerText = "Sobrenome inválido"
    }
})


const usuarioCadastro = document.getElementById("usuarioCadastro")
const erroUsuarioCadastro = document.getElementById("erroUsuarioCadastro")
const MensagemUsuarioCadastro = document.getElementById("MensagemUsuarioCadastro")


usuarioCadastro.addEventListener("keyup", () => {
    const valor = usuarioCadastro.value;
    validações[2] = valor.length >= 3 && valor.length <= 20;
    
    if( validações[2]){
        erroUsuarioCadastro.classList.remove("invalid-feedback")
        erroUsuarioCadastro.classList.add("valid-feedback")
        usuarioCadastro.style.border = "2px solid green"   
        MensagemUsuarioCadastro.innerText = ""  
    }else{
        erroUsuarioCadastro.style.display="block"
        erroUsuarioCadastro.classList.remove("valid-feedback")
        erroUsuarioCadastro.classList.add("invalid-feedback")
        usuarioCadastro.style.border = "2px solid red"
        MensagemUsuarioCadastro.innerText = "Usuário inválido"
    }
})


const emailCadastro = document.getElementById("emailCadastro")
const erroEmailCadastro = document.getElementById("erroEmailCadastro")
const MensagemEmailCadastro = document.getElementById("MensagemEmailCadastro")


emailCadastro.addEventListener("input", () => {
    const valor = emailCadastro.value;
    validações[3] = validateEmail(valor);

    fetch("http://localhost:8010/usuario", {
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(resposta => resposta.json())
    .then(usuarios =>  {
        let existe = false
        validações[4] = false
        console.log("VERIFICANDO EMAIL")
        console.log("USUARIOS:"+ JSON.stringify(usuarios))

        usuarios.forEach(usuario => {
              if (usuario.Email == valor    ) {
                console.log("JA EXISTE ESSE EMAIL!!")
                existe = true
                validações[4] = true
                }
            });
            if (existe==false) {
                console.log("NAO EXISTE ESSE EMAIL!!")
                validações[4] = false 
            }
       
    console.log("valor validação:" + validações[4])     
    if(validações[3] && !validações[4]){
        erroEmailCadastro.classList.remove("invalid-feedback")
        erroEmailCadastro.classList.add("valid-feedback")
        emailCadastro.style.border = "2px solid green"
        MensagemEmailCadastro.innerText = ""  
    }
    else if(validações[4]){
        erroEmailCadastro.style.display="block"
        erroEmailCadastro.classList.remove("valid-feedback")
        erroEmailCadastro.classList.add("invalid-feedback")
        emailCadastro.style.border = "2px solid red"
        MensagemEmailCadastro.innerText = "Email já cadastrado"
    }
    else {
        erroEmailCadastro.style.display="block"
        erroEmailCadastro.classList.remove("valid-feedback")
        erroEmailCadastro.classList.add("invalid-feedback")
        emailCadastro.style.border = "2px solid red"
        MensagemEmailCadastro.innerText = "Email inválido"
    }
})
})




function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


const senhaCadastro = document.getElementById("senhaCadastro")
const erroSenhaCadastro = document.getElementById("erroSenhaCadastro")
const MensagemSenhaCadastro = document.getElementById("MensagemSenhaCadastro")


senhaCadastro.addEventListener("keyup", () => {
    const valor = senhaCadastro.value;
    validações[5] = valor.length >= 8 && valor.length <= 20 && /[0-9]/.test(valor) && /[a-z]/.test(valor) && /[A-Z]/.test(valor) && /[!|@|#|$|%|^|&|*|(|)|-|_]/.test(valor);
    
    if( validações[5]){
        erroSenhaCadastro.classList.remove("invalid-feedback")
        erroSenhaCadastro.classList.add("valid-feedback")
        senhaCadastro.style.border = "2px solid green"  
        MensagemSenhaCadastro.innerText = ""  
    }else{
        erroSenhaCadastro.style.display="block"
        erroSenhaCadastro.classList.remove("valid-feedback")
        erroSenhaCadastro.classList.add("invalid-feedback")
        senhaCadastro.style.border = "2px solid red"
        MensagemSenhaCadastro.innerText = "Senha inválida"
    }
})


const confirmarCadastro = document.getElementById("confirmarCadastro")
const erroConfirmarCadastro = document.getElementById("erroConfirmarCadastro")
const MensagemConfirmarCadastro = document.getElementById("MensagemConfirmarCadastro")


confirmarCadastro.addEventListener("keyup", () => {
    const valor = confirmarCadastro.value;
    validações[6] = valor===senhaCadastro.value && valor.length >= 8 && valor.length <= 20 && /[0-9]/.test(valor) && /[a-z]/.test(valor) && /[A-Z]/.test(valor) && /[!|@|#|$|%|^|&|*|(|)|-|_]/.test(valor);
    
    if( validações[6]){
        erroConfirmarCadastro.classList.remove("invalid-feedback")
        erroConfirmarCadastro.classList.add("valid-feedback")
        confirmarCadastro.style.border = "2px solid green"
        MensagemConfirmarCadastro.innerText = ""  
    }else{
        erroConfirmarCadastro.style.display="block"
        erroConfirmarCadastro.classList.remove("valid-feedback")
        erroConfirmarCadastro.classList.add("invalid-feedback")
        confirmarCadastro.style.border = "2px solid red"
        MensagemConfirmarCadastro.innerText = "Senha inválida"
    }
})



const formCadastro = document.getElementById("formCadastro")
const cadastrarBtn = document.getElementById("cadastrarButton")

cadastrarBtn.addEventListener('mouseover', function (event) {
    let validado1 = true;
    validações.forEach(validação => {
        if (!validação) {
            validado1 = false;
        }
    });
    if (!validado1) {
        cadastrarBtn.classList.add("btn-disabled")
    } else {
        cadastrarBtn.classList.remove("btn-disabled");
        cadastrarBtn.classList.add("active");
    }
})



formCadastro.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log("Teste -")
    let validado2 = true;

    let existeComEmail=false;
    fetch("http://localhost:8010/usuario", {
        method: "GET",
        body: JSON.stringify(dados),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(resposta => resposta.json())
    .then(usuarios =>  {
        usuarios.forEach(usuario => {
           if (usuario.Email == emailCadastro) {
            existeComEmail = true
           } 
        });
        
    })
    

    validações.forEach(validação => {        
        if (!validação) {
            validado2 = false;
        }
    });
    if (!validado2 || existeComEmail) {        
        event.stopPropagation()
    } else{
        let dados = {
            Nome: nomeCadastro.value,
            Senha: senhaCadastro.value,
            Email: emailCadastro.value,
            Username: usuarioCadastro.value,
            Sobrenome: sobrenomeCadastro.value,
        }

        console.log(JSON.stringify(dados))

        fetch("http://localhost:8010/usuario", {
        method: "POST",
        body: JSON.stringify(dados),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(resposta => resposta.json())
    .then(resultado => console.log(resultado))
    }
})

