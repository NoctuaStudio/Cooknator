console.log("ABRIU A PÁGINA")
console.log("Tentando carregar 3 receitas")

const divGigante = document.getElementById("divGigante");
const receitasHTML = document.getElementsByClassName("product-list")[0];
const receitasMensagem = document.getElementById("receitasMensagem");
const filtrosCategoriaHTML = document.querySelectorAll('[name="FiltroCategoria"]');
const LabelCategoriaHTML = document.querySelectorAll('[name="LabelCategoria"]');
const categorias = [];


function atualizarNoFiltro(elemento, filtro) {
    console.log("CLICOU NO FILTRO")
    

    if (!filtro.includes(elemento)) {
        filtro.push(elemento);
    } else {        
        const index = filtro.indexOf(elemento);
        if (index > -1) {
            filtro.splice(index, 1);
        }
    }
    console.log("LISTA DE FILTROS SELECIONADOS:"+ JSON.stringify(categorias)) 
    
    
}

function tirarReceitas() {
    
    while (receitasHTML.firstChild) {
        receitasHTML.removeChild(receitasHTML.firstChild);
    }
    receitasMensagem.classList.remove("d-none");
    receitasMensagem.classList.add("d-flex");
    divGigante.classList.add("h-55vh");
}

function preencherReceitas(receitas) {
    console.log(" RECEITAS DO PREENCHER RECEITAS:" + receitas)
    divGigante.classList.remove("h-55vh");
    receitasMensagem.classList.add("d-none");
    receitasMensagem.classList.remove("d-flex");
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
        receitasHTML.appendChild(div);   
        
        div.addEventListener('click', function (event) {
            const receitaId = receitas[i].ID; // Substitua isso com o ID ou identificador da receita
            location.href = `receita.html?id=${receitaId}`;
        })
    }}

    function mostrarReceitasFiltradas()
    {
        filtrosConcatenados = ""
        primeiro = true
        categorias.forEach(categoria => {
            if (primeiro) {
            filtrosConcatenados = "Tipo_Receita.Tipo = "+"\'"+categoria+"\'"
            }        
            else{    
            filtrosConcatenados = filtrosConcatenados+" OR Tipo_Receita.Tipo =  "+"\'"+categoria+"\'"
            }
            primeiro = false
        });


        console.log("FILTRO CONCATENADO: "+filtrosConcatenados)

        
        let values = {
            Tipo: filtrosConcatenados
         };
        tirarReceitas();     

        console.log("INDO FAZER O POST")
        fetch("http://localhost:8010/receita/filtro", {
    method: "POST", 
    body: JSON.stringify(values),
    headers: {
        "Content-Type": "application/json"
    }
})
.then(resposta => {
    console.log('Resposta do servidor:', resposta);
    return resposta.json();
})
.then(receitasFiltradas => {
    console.log("CONSEGUI FAZER O POST", receitasFiltradas);
    preencherReceitas(receitasFiltradas);
})

}

    // PROGRAMANDO OS FILTROS:
    console.log("CATEGORIAS =  "+ filtrosCategoriaHTML.length )
    console.log("LENDO FILTROS  ")
    for (let index = 0; index < filtrosCategoriaHTML.length; index++) {
        console.log(LabelCategoriaHTML[index].textContent)

        filtrosCategoriaHTML[index].addEventListener("change", () => {
        atualizarNoFiltro(LabelCategoriaHTML[index].textContent, categorias)
        mostrarReceitasFiltradas();

        })
    }
console.log("TERMINANDO DE ADICIONAR EVENTOS")



    
fetch("http://localhost:8010/receita", {
            method: "GET",          
            headers:{
                "Content-Type": "application/json"
            }}) 
        .then(resposta => resposta.json())
        .then(receitas => {
            preencherReceitas(receitas);
        })

   
                
                          
          
            
               
          