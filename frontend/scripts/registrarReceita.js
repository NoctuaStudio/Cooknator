const btnAdicionar = document.getElementById("btnAdcionarIngrediente")
const listaIngredientes = document.getElementById("inputsIngredientes")
let contador = Number(1);
let contador2 = Number(0);

function getContador(){
    return Number(this.contador)
}

btnAdicionar.addEventListener('mouseover', function (event) { 
    console.log("Adicionando ingrediente...")
})  

btnAdicionar.addEventListener('click', function (event) {
    let c = contador
    c = c+1;
    contador = c
    console.log("Adicionando ingrediente...");
    let divIngredienteERemover = document.createElement("div");
    divIngredienteERemover.setAttribute("id", `divIngredienteERemover${contador}`) ;
    divIngredienteERemover.classList.add("d-flex");
    divIngredienteERemover.classList.add("flex-row"); 
    divIngredienteERemover.classList.add("justify-content-between");
    divIngredienteERemover.classList.add("align-items-center");
    divIngredienteERemover.classList.add("mb-2");
    divIngredienteERemover.classList.add("mt-2");
    let divQuantidade = document.createElement("div");
    divQuantidade.classList.add("col-4");
    let novaQuantidade = document.createElement("input");
    novaQuantidade.setAttribute("type", "text");
    novaQuantidade.setAttribute("id", `quantidade${contador}`);
    novaQuantidade.setAttribute("name", "novaQuantidade");
    novaQuantidade.classList.add("form-control");
    novaQuantidade.classList.add("rounded-3");
    novaQuantidade.classList.add("col-4");
    let divIngrediente = document.createElement("div");
    divIngrediente.classList.add("col-6");
    let novoIngrediente = document.createElement("input");
    novoIngrediente.setAttribute("name", "novoIngrediente")
    novoIngrediente.setAttribute("type", "list");
    novoIngrediente.setAttribute("id", `ingrediente${contador}`);
    novoIngrediente.setAttribute("list", `ingredientes`);
    novoIngrediente.classList.add("form-control");
    novoIngrediente.classList.add("rounded-3");
    novoIngrediente.classList.add("col-6");
    let divRemover = document.createElement("div");
    let btnRemover = document.createElement("button");
    btnRemover.setAttribute("type", "button");
    btnRemover.classList.add("btn");
    btnRemover.classList.add("btn-dark");
    btnRemover.classList.add("d-flex");
    btnRemover.classList.add("justify-content-center");
    btnRemover.classList.add("align-items-center");
    btnRemover.setAttribute("id", `btnRemoverIngrediente${contador}`);
    btnRemover.innerHTML = `<svg class="text-light" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>`;
    divQuantidade.appendChild(novaQuantidade);
    divIngrediente.appendChild(novoIngrediente);
    divRemover.appendChild(btnRemover);
    divIngredienteERemover.appendChild(divIngrediente);
    divIngredienteERemover.appendChild(divQuantidade);
    divIngredienteERemover.appendChild(divRemover);
    btnRemover.addEventListener('click', function (event) {
        divIngredienteERemover.remove()
        console.log("contador antes: "+ contador)
        c=c-1
        contador=c
        console.log("contador depois: "+ contador)
    });
    console.log("vai pfv");
    listaIngredientes.appendChild(divIngredienteERemover);
    contador2 = contador
})

const formReceita = document.getElementById("formReceita")

const nomeReceita = document.getElementById("nomeReceita")
const descricaoReceita = document.getElementById("descricaoReceita")
const tipoReceita = document.getElementById("tipoReceita")
const imagemReceita = document.getElementById("imagemReceita")
const tamanhoReceita = document.getElementById("tamanhoReceita")
const dietaReceita = document.getElementById("dietaReceita")



formReceita.addEventListener('submit', function (event) {
    event.preventDefault()

     
   
    console.log("contador2: " + contador2)

    console.log("Teste -")
        let dados = {
            Nome: nomeReceita.value,
            Descricao: descricaoReceita.value,
            Tipo: tipoReceita.value,
            Imagem: imagemReceita.value,
            //Avaliacao: avaliacaoReceita.value,
            Tamanho: tamanhoReceita.value,
            Dieta: dietaReceita.value,
        }

        console.log(JSON.stringify(dados))

        fetch("http://localhost:8010/receita", {
        method: "POST",
        body: JSON.stringify(dados),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(resposta => resposta.json())
    .then(resultado => console.log(resultado))
})


formReceita.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log("Adicionando ingredientes...")

    const ingredienteChato = document.getElementById("ingrediente1")
    const quantidadeChata = document.getElementById("quantidade1")

    const ingredientesAdicionados = document.getElementsByName("novoIngrediente")
    const quantidadesAdicionadas = document.getElementsByName("novaQuantidade")
    
    const ingredientesArray = Array.from(ingredientesAdicionados);
    const quantidadesArray = Array.from(quantidadesAdicionadas);


    ingredientesArray.push(ingredienteChato);
    quantidadesArray.push(quantidadeChata);


    console.log("Peguei os ingredientes, exibindo:")
    console.log("Quantidade de ingredientes: " + ingredientesArray.length)
    console.log("Quantidade de quantidades: " + quantidadesArray.length)

    for (let index = 0; index < ingredientesArray.length; index++) {
        console.log(ingredientesArray[index].value)
        console.log(quantidadesArray[index].value)

        fetch("http://localhost:8010/ingrediente/"+ingredientesArray[index], {
                    method: "GET",
                    headers:{
                        "Content-Type": "application/json"
                    }
                    .then(resposta => resposta.json())
                    .then(ingredientes => {
                        
                        
                        ingredientes[0].ID 
                        quantidadesArray[index].value

                        let values = {
                            Nome: nomeReceita.value,
                            Descricao: descricaoReceita.value,
                            Tipo: tipoReceita.value,
                            Imagem: imagemReceita.value,
                            Tamanho: tamanhoReceita.value,
                            Dieta: dietaReceita.value,
                        }

                         fetch("http://localhost:8010/receita/ingrediente", {
                          method: "POST",
                          body: JSON.stringify(values),  
                          headers:{
                             "Content-Type": "application/json"
                         }
                         .then(resposta => resposta.json())
                         .then(receitas => { 
                            console.log("ID DA RECEITA: " + receitas[0].ID)

                         })





                    })})})}})


    /*

    

    
    
            const idReceita = receitas[0].ID
            console.log("ID da receita: "+idReceita)
            for(i=1; i<=contador2; i++){
                console.log("quantidade de ingredientes: "+contador2)
                const ingrediente = document.getElementById(`ingrediente${i}`)
                console.log(JSON.stringify(ingrediente))
                const quantidade = document.getElementById(`quantidade${i}`)

            })


                // PEGANDO ID
                


            
                    
                        /*
                        let dados2 = {
                            ID_Receita: idReceita,
                            ID_Ingrediente: idIngrediente,
                            Quantidade: quantidade.value
                        }

                        fetch("http://localhost:8010/receita/ingrediente", {
                            method: "POST",
                            body: JSON.stringify(dados2),
                            headers:{
                                "Content-Type": "application/json"
                            }}) 
                        .then(resposta => resposta.json())
                        .then(resultado => {
                            console.log("RETORNANDO:" + resultado );
                            return (resultado);       
                        })
                    })
                })
            }
            
            

        })
    })
    */ 

