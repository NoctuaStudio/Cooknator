const dataList = document.getElementById('ingredientes');

fetch("http://localhost:8010/ingrediente", {
                method: "GET",          
                headers:{
                    "Content-Type": "application/json"
                }}) 
            .then(resposta => resposta.json())
            .then(ingrediente => {
                console.log(JSON.stringify(ingrediente))
                // AQUI 

                ingrediente.forEach(ingredient => {
                    var opcao = document.createElement('option');
                    opcao.value = ingredient.Nome;
                    dataList.appendChild(opcao);
                  
                });


            })
