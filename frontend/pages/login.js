
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
    event.preventDefault()
    console.log("Login interrompido...")

    let validado4 = true;
    validaçõesLogin.forEach(validação => {
        if (!validação) {
            validado4 = false;
        }
    });
    if (!validado4) {
        event.stopPropagation()
        console.log("Login incorreto!!!!!")
    }else{
        console.log("Login Correto!!!!!")
        fetch("http://localhost:8010/usuario/3", {
            method: "GET",           
            headers:{
                "Content-Type": "application/json"
            }}) 
        .then(resposta => resposta.json())
        .then(resultado => console.log(resultado))
    }
})


function buscarUsuario(email) {
    fetch("http://localhost:8010/usuario", {
            method: "GET",           
            headers:{
                "Content-Type": "application/json"
            }}) 
        .then(resposta => resposta.json())
        .then(resultado => console.log(resultado))        
        }

