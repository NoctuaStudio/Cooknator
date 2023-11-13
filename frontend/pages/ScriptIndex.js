const botaoCadastro = document.getElementById("BotaoCadastro")
const botaoLogin = document.getElementById("BotaoLogin")

botaoCadastro.addEventListener('click', function (event) {
    window.location.href = "singin-up.html"
})

botaoLogin.addEventListener('click', function (event) {
    window.location.href = "singin-up.html"
})

//Nao faço ideia de como faz isso, peguei no Google e não foi. Por favor ajudar. KKKKKKKKK eu n sou bom de backend, vim fazer o modal aparecer

var botaoCriarReceita = document.getElementById("adcionarReceita");
var modal = document.getElementById("modalReceita");
var botaoFechar = document.getElementById("fecharModal");
var body = document.getElementsByTagName("body")[0];
var fundoEscuro = document.getElementById("fundoEscuro");

botaoCriarReceita.addEventListener('click', function (event) {
    modal.classList.add("d-block");
    body.style.overflow = "hidden";
    fundoEscuro.classList.remove("d-none");
    fundoEscuro.classList.add("d-block");

})

botaoFechar.addEventListener('click', function (event) {
    modal.classList.remove("d-block");
    body.style.overflow = "auto";
    fundoEscuro.classList.remove("d-block");
    fundoEscuro.classList.add("d-none");
})

