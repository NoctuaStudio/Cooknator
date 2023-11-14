const formReceita = document.getElementById("formReceita")

const nomeReceita = document.getElementById("nomeReceita")
const descricaoReceita = document.getElementById("descricaoReceita")
const tipoReceita = document.getElementById("tipoReceita")
const imagemReceita = document.getElementById("imagemReceita")
const avaliacaoReceita = document.getElementById("avaliacaoReceita")
const tamanhoReceita = document.getElementById("tamanhoReceita")
const dietaReceita = document.getElementById("dietaReceita")

formReceita.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log("Teste -")
    let validado3 = true;
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
            Avaliacao: avaliacaoReceita.value,
            Tamanho: tamanhoReceita.value,
            Dieta: dietaReceita.values,
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