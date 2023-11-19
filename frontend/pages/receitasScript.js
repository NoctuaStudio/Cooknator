console.log("ABRIU A PÁGINA")
console.log("Tentando carregar 3 receitas")

const receitasHTML = document.getElementsByClassName("product-list")[0];


    
fetch("http://localhost:8010/receita", {
            method: "GET",          
            headers:{
                "Content-Type": "application/json"
            }}) 
        .then(resposta => resposta.json())
        .then(receitas => {

            for (let i = 0; i < receitas.length; i++) {
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
                          
            }})      
          

class Receita {
    
    nome = " "
    imagem = " "
    descricao = " "
    tipo = " "
    avaliacao = " "
    tamanho = " "
    dieta = " "
    dono = " "

    receita(nome, imagem, descricao){
        this.nome = nome
        this.imagem = imagem
        this.descricao = descricao
    }
}

