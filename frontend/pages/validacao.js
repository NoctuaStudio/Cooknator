let validações = [false, false, false, false, false, false]
let validaçõesLogin = [false, false]

const emailLogin = document.getElementById("emailLogin")
const erroEmailLogin = document.getElementById("erroEmailLogin")
const MensagemEmailLogin = document.getElementById("MensagemEmailLogin")

emailLogin.addEventListener("keyup", () => {
    const valor = emailLogin.value;
    validaçõesLogin[0] = validateEmail(valor);

    if (validaçõesLogin[0]) {
        erroEmailLogin.classList.remove("invalid-feedback")
        erroEmailLogin.classList.add("valid-feedback")
        emailLogin.style.border = "2px solid green"
        MensagemEmailLogin.innerText = "Email válido"
    }
    else {
        erroEmailLogin.style.display = "block"
        erroEmailLogin.classList.remove("valid-feedback")
        erroEmailLogin.classList.add("invalid-feedback")
        emailLogin.style.border = "2px solid red"
        MensagemEmailLogin.innerText = "Email inválido"
    }
})

const senhaLogin = document.getElementById("senhaLogin")
const erroSenhaLogin = document.getElementById("erroSenhaLogin")
const MensagemSenhaLogin = document.getElementById("MensagemSenhaLogin")

senhaLogin.addEventListener("keyup", () => {
    const valor = senhaLogin.value;
    validaçõesLogin[1] = valor.length >= 8 && valor.length <= 20 && /[0-9]/.test(valor) && /[a-z]/.test(valor) && /[A-Z]/.test(valor) && /[!|@|#|$|%|^|&|*|(|)|-|_]/.test(valor);

    if (validaçõesLogin[1]) {
        erroSenhaLogin.classList.remove("invalid-feedback")
        erroSenhaLogin.classList.add("valid-feedback")
        senhaLogin.style.border = "2px solid green"
        MensagemSenhaLogin.innerText = "Senha válida"
    }
    else {
        erroSenhaLogin.style.display = "block"
        erroSenhaLogin.classList.remove("valid-feedback")
        erroSenhaLogin.classList.add("invalid-feedback")
        senhaLogin.style.border = "2px solid red"
        MensagemSenhaLogin.innerText = "Senha inválida"
    }
})


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


emailCadastro.addEventListener("keyup", () => {
    const valor = emailCadastro.value;
    validações[3] = validateEmail(valor);
    
    if( validações[3]){
        erroEmailCadastro.classList.remove("invalid-feedback")
        erroEmailCadastro.classList.add("valid-feedback")
        emailCadastro.style.border = "2px solid green"
        MensagemEmailCadastro.innerText = ""  
    }else{
        erroEmailCadastro.style.display="block"
        erroEmailCadastro.classList.remove("valid-feedback")
        erroEmailCadastro.classList.add("invalid-feedback")
        emailCadastro.style.border = "2px solid red"
        MensagemEmailCadastro.innerText = "Email inválido"
    }
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
    validações[4] = valor.length >= 8 && valor.length <= 20 && /[0-9]/.test(valor) && /[a-z]/.test(valor) && /[A-Z]/.test(valor) && /[!|@|#|$|%|^|&|*|(|)|-|_]/.test(valor);
    
    if( validações[4]){
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
    validações[5] = valor===senhaCadastro.value && valor.length >= 8 && valor.length <= 20 && /[0-9]/.test(valor) && /[a-z]/.test(valor) && /[A-Z]/.test(valor) && /[!|@|#|$|%|^|&|*|(|)|-|_]/.test(valor);
    
    if( validações[5]){
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

const formLogin = document.getElementById("formLogin")
const loginBtn = document.getElementById("loginButton")

loginBtn.addEventListener('mouseover', function (event) {
    let validado3 = true;
    validaçõesLogin.forEach(validação => {
        if (!validação) {
            validado3 = false;
        }
    });
    if (!validado3) {
        loginBtn.style.backgroundColor = "#FCE38A"
        loginBtn.style.color = '#1C1C1C'
        loginBtn.style.border = 'none'
        loginBtn.style.cursor = "default"
    } else {
        loginBtn.style.backgroundColor = "#1C1C1C"
        loginBtn.style.color = '#faf0d2'
        loginBtn.style.border = 'none'
        loginBtn.style.cursor = "pointer"
    }
}
)

formLogin.addEventListener('submit', function (event) {
    let validado4 = true;
    validaçõesLogin.forEach(validação => {
        if (!validação) {
            validado4 = false;
        }
    });
    if (!validado4) {
        event.preventDefault()
        event.stopPropagation()
    }
}
)

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
        cadastrarBtn.style.backgroundColor = "#FCE38A"
        cadastrarBtn.style.color = '#1C1C1C'
        cadastrarBtn.style.border = 'none'
        cadastrarBtn.style.cursor = "default"
    } else {
        cadastrarBtn.style.backgroundColor = "#1C1C1C"
        cadastrarBtn.style.color = '#faf0d2'
        cadastrarBtn.style.border = 'none'
        cadastrarBtn.style.cursor = "pointer"
    }
})

formCadastro.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log("Teste -")
    let validado2 = true;
    validações.forEach(validação => {
        if (!validação) {
            validado2 = false;
        }
    });
    if (!validado2) {        
        event.stopPropagation()
    } else{
        let dados = {
            Nome: nomeCadastro.value,
            Senha: senhaCadastro.value,
            Email: emailCadastro.value,
            Usuario: usuarioCadastro.value,
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

