import { db } from "../db.js";

 export const getReceitas = (req, res) => { 
    const q = "SELECT * FROM Receitas";
    db.query(q, (erro, data) => {
        if(erro) return res.json("Deu um erro aqui: "+ erro);
        return res.status(200).json(data);
    })
 }

 export const getReceita = (req, res) => { 
    const q = "SELECT * FROM Receitas WHERE ID = ?";
    db.query(q, [req.params.id], (erro, data) => {
        if(erro) return res.json("Deu um erro aqui: "+ erro);
        return res.status(200).json(data);
    })
 }

 
 export const postReceitas = (req, res) => {
    const q =  "INSERT INTO Receitas (Nome, Descricao, ID_Tipo, Imagem, Avaliacao, ID_Usuario, Tamanho, Dieta) VALUES(?)";
    const values = [
        req.body.Nome,
        req.body.Descricao,
        req.body.Tipo,
        req.body.Imagem,
        req.body.Avaliacao,
        5,
        req.body.Tamanho,
        req.body.Dieta,
    ]   
    
    db.query(q, [values], (erro) => {
        if(erro) return res.json("Deu um erro aqui: "+ erro);
        return res.status(200).json("Receita cadastrada com sucesso!");
    })
}

export const putReceitas = (req, res) => {
    const q = "UPDATE Receitas SET `Nome` = ?, `Descricao` = ?, `ID_Tipo` = ?, `Imagem` = ?, `Avaliacao` = ?, `ID_Usuario` = ?, `Tamanho` = ?, `Dieta` = ? WHERE `ID` = ?";

    const values = [
        req.body.Nome,
        req.body.Descricao,
        req.body.Tipo,
        req.body.Imagem,
        req.body.Avaliacao,
        req.body.Tamanho,
        req.body.Dieta,
    ] 

    db.query(q, [...values, req.params.id], (error) =>{
        if(error) return res.json(error);

        return res.status(200).json("Receita alterada com sucesso!");
    })
}

export const deleteReceitas = (req, res) => {
    const q = "DELETE FROM Receitas WHERE `ID` = ?";

    db.query(q, [req.params.id], (error) =>{
        if(error) return res.json(error);

        return res.status(200).json("Receita deletada com sucesso!");
    })
}
 

    