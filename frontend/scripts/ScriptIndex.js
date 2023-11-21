const botaoCadastroLogin = document.getElementById("loginCadastro")

botaoCadastroLogin.addEventListener('submit', function (event) {
    event.preventDefault()
    location.href = "singin-up.html"
})

// FAZENDO APARECER AS RECEITAS:

  
    fetch("http://localhost:8010/receita", {
            method: "GET",          
            headers:{
                "Content-Type": "application/json"
            }}) 
        .then(resposta => resposta.json())
        .then(receitas => {
            console.log("COLOCANDO RECEITAS PADRAO")
            console.log(" RECEITAS DO PREENCHER RECEITAS:" + receitas)
    const LocalReceitasDiv = document.getElementById("ApresentarReceitas")

    
    for (let i = 0; i < 3; i++) {
        const div = document.createElement('div');
        const card = document.createElement('div');
        const img = document.createElement('img');
        const cardBody = document.createElement('div');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        div.classList.add('col-md-4');
        div.classList.add('pt-md-4');
        card.classList.add('card');
        img.classList.add('img-fluid');
        img.classList.add('tamanho-imagem')
        cardBody.classList.add('card-body');
        h4.classList.add('card-title');
        p.classList.add('card-text');
        img.src = receitas[i].Imagem; 
        h4.textContent = receitas[i].Nome
        p.textContent = receitas[i].Descricao
        div.appendChild(card);
        card.appendChild(img);
        card.appendChild(cardBody);
        cardBody.appendChild(h4);
        cardBody.appendChild(p);
        LocalReceitasDiv.appendChild(div);   
        
        div.addEventListener('click', function (event) {
            const receitaId = receitas[i].ID; // Substitua isso com o ID ou identificador da receita
            location.href = `receita.html?id=${receitaId}`;
        })}
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

