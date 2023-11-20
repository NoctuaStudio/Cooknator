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

                receitas.forEach(ingrediente => {
                    var ingrediente = document.createElement('option');
                    ingrediente.value = ingrediente.Nome;
                    dataList.appendChild(ingrediente);
                  
                });


            })
