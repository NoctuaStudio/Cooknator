import { db } from "../db.js";


 export const getUsuarios = (req, res) => { 
    const q = "SELECT * FROM Usuarios";
    db.query(q, (erro, data) => {
        if(erro) return res.json("Deu um erro aqui: "+ erro);
        return res.status(200).json(data);
    })
 }
 
 export const postUsuarios = (req, res) => { res.send("Você realizou um post")}
 
 export const putUsuarios = (req, res) => { res.send("Você realizou um put")}
  
 export const deleteUsuarios = (req, res) => { res.send("Você realizou um delete")}
 

    