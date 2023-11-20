const btnAdicionar = document.getElementById("btnAdcionarIngrediente")
const listaIngredientes = document.getElementById("inputsIngredientes")
let contador = Number(1);

btnAdicionar.addEventListener('mouseover', function (event) { 
    console.log("Adicionando ingrediente...")
})  

btnAdicionar.addEventListener('click', function (event) {
    console.log("Adicionando ingrediente...");
    let divIngredienteERemover = document.createElement("div");
    divIngredienteERemover.setAttribute("id", `divIngredienteERemover${contador}`) ;
    divIngredienteERemover.classList.add("d-flex");
    divIngredienteERemover.classList.add("flex-row"); 
    divIngredienteERemover.classList.add("justify-content-between");
    divIngredienteERemover.classList.add("align-items-center");
    divIngredienteERemover.classList.add("mb-2");
    divIngredienteERemover.classList.add("mt-2");
    let divIngrediente = document.createElement("div");
    divIngrediente.classList.add("col-10");
    let novoIngrediente = document.createElement("input");
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
    divIngrediente.appendChild(novoIngrediente);
    divRemover.appendChild(btnRemover);
    divIngredienteERemover.appendChild(divIngrediente);
    divIngredienteERemover.appendChild(divRemover);
    btnRemover.addEventListener('click', function (event) {
        divIngredienteERemover.remove()
    });
    console.log("vai pfv");
    listaIngredientes.appendChild(divIngredienteERemover);
    contador++;
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
    console.log("Teste -")
    //let validado3 = true;
    // validações.forEach(validação => {
    //     if (!validação) {
    //         validado2 = false;
    //     }
    // });
    // if (!validado3) {        
    //     event.stopPropagation()
    // } else{
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
    //}
})

