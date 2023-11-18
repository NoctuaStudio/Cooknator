console.log("ABRIU A PÁGINA")
console.log("Tentando carregar 3 receitas")

receitasHTML = document.getElementsByClassName("pt-md-4")


    
fetch("http://localhost:8010/receita", {
            method: "GET",          
            headers:{
                "Content-Type": "application/json"
            }}) 
        .then(resposta => resposta.json())
        .then(receitas => {

            for (let i = 0; i < receitas.length; i++) {
                const receitaHTML = receitasHTML[i];
                const img = receitaHTML.querySelector('img');
                const h4 = receitaHTML.querySelector('h4');
                const p = receitaHTML.querySelector('p'); 
                img.src = receitas[i].Imagem; 
                h4.textContent = receitas[i].Nome
                p.textContent = receitas[i].Descricao    
                          
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

