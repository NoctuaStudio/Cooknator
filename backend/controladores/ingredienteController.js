import { db } from "../db.js";

 export const getIngredientes = (req, res) => { 
    const q = "SELECT * FROM Ingredientes";
    db.query(q, (erro, data) => {
        if(erro) return res.json("Deu um erro aqui: "+ erro);
        return res.status(200).json(data);
    })
 }

 export const getIngredientesReceita = (req, res) => { 
    const q = "SELECT * FROM Ingredientes_Da_Receita WHERE ID_Receita = ?";
    db.query(q, [req.params.id], (erro, data) => {
        if(erro) return res.json("Deu um erro aqui: "+ erro);
        return res.status(200).json(data);
    })
 }

 export const getIngredientesNome = (req, res) => { 
    const q = "SELECT * FROM Ingredientes WHERE ID = ?";
    db.query(q, [req.params.id], (erro, data) => {
        if(erro) return res.json("Deu um erro aqui: "+ erro);
        return res.status(200).json(data);
    })
 }
 

 export const getIngredientesID = (req, res) => { 
    const q = "SELECT * FROM Ingredientes WHERE Nome = ?";
    db.query(q, [req.params.id], (erro, data) => {
        if(erro) return res.json("Deu um erro aqui: "+ erro);
        return res.status(200).json(data);
    })
 }


 export const postIngredientesReceita = (req, res) => { 
    const q = "INSERT INTO Ingredientes_Da_Receita (ID_Receita, ID_Ingrediente, Quantidade) VALUES (?)";
    const values = [
        req.body.ID_Receita,
        req.body.ID_Ingrediente,
        req.body.Quantidade
    ]   
    db.query(q, [values], (erro) => {
        if(erro) return res.json("Deu um erro aqui: "+ erro);
        return res.status(200).json("Ingrediente cadastrado com sucesso!");
    })
 }