// Função para obter parâmetros de consulta da URL
function obterParametroDeConsulta(nome) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(nome);
}

const receitaId = obterParametroDeConsulta('id');


    fetch("http://localhost:8010/receita/"+receitaId, {
                method: "GET",          
                headers:{
                    "Content-Type": "application/json"
                }}) 
            .then(resposta => resposta.json())
            .then(receitas => {
            console.log(JSON.stringify(receitas));
            receita = receitas[0]
            console.log('Nome da Receita:', receita.Nome);

            // PREPARANDO PARA EXIBIR A RECEITA:           
            

            const nomeHTML = document.getElementById("nome-receita")
            nomeHTML.textContent = receita.Nome;
            const imgHTML = document.getElementById("imagem-receita")
            imgHTML.src = receita.Imagem;
            const 
            });




        
