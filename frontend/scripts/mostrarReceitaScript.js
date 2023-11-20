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
            
            const modoPreparoHTML = document.getElementById("preparo-receita")
            modoPreparoHTML.textContent = receita.Modo_de_Preparo
            const tempoPreparoHTML = document.getElementById("tempo-receita")
            tempoPreparoHTML.textContent = receita.Tempo_de_Preparo
            const tamanhoHTML = document.getElementById("tamanho-receita")
            tamanhoHTML.textContent = receita.Tamanho
            const nomeHTML = document.getElementById("nome-receita")
            nomeHTML.textContent = receita.Nome;
            const imgHTML = document.getElementById("imagem-receita")
            imgHTML.src = receita.Imagem;           
            const descricaoHTML = document.getElementById("descricao-receita")  
            descricaoHTML.textContent = receita.Descricao;
            const categoriaHTML = document.getElementById("categoria-receita") 
            
            

            fetch("http://localhost:8010/categoria/"+receitaId, {
                method: "GET",          
                headers:{
                    "Content-Type": "application/json"
                }}) 
                .then(resposta => resposta.json())
                .then(categorias => {
                    categoriaHTML.textContent = categorias[0].Tipo
                    console.log(JSON.stringify(categorias))
                })
            });




        
