import { db } from "../db.js";


 export const getUsuarios = (req, res) => { 
    const q = "SELECT * FROM Usuarios";
    db.query(q, (erro, data) => {
        if(erro) return res.json("Deu um erro aqui: "+ erro);
        return res.status(200).json(data);
    })
 }

 export const getUsuario = (req, res) => { 
    const q = "SELECT * FROM Usuarios WHERE ID = ?";
    db.query(q, [req.params.id], (erro, data) => {
        if(erro) return res.json("Deu um erro aqui: "+ erro);
        return res.status(200).json(data);
    })
 }

 export const postLogin = (req, res) => { 
    const q = "SELECT * FROM Usuarios WHERE Email = ? AND Senha = ?";

    const values = [
        req.body.Email,
        req.body.Senha
    ]   

    db.query(q, [...values], (erro, data) => {
        if(erro) return res.json("Deu um erro aqui: "+ erro);
        else{
            if(data.length != 0){
                console.log(data)
                return res.status(200).json(true);
            }
            else
                return res.status(200).json(false);
        }  
    })
 }

 
 export const postUsuarios = (req, res) => {
    const q =  "INSERT INTO Usuarios (Nome, Senha, Email, Username, Sobrenome) VALUES(?)";
    const values = [
        req.body.Nome,
        req.body.Senha,
        req.body.Email,
        req.body.Username,
        req.body.Sobrenome,
    ]   
    
    db.query(q, [values], (erro) => {
        if(erro) return res.json("Deu um erro aqui: "+ erro);
        return res.status(200).json("Usuário cadastrado com sucesso!");
    })
}

export const putUsuarios = (req, res) => {
    const q = "UPDATE Usuarios SET `Nome` = ?, `Senha` = ?, `Email` = ?, `Username` = ?, `Sobrenome` = ? WHERE `ID` = ?";

    const values = [
        req.body.Nome,
        req.body.Senha,
        req.body.Email,
        req.body.Username,
        req.body.Sobrenome,
    ] 

    db.query(q, [...values, req.params.id], (error) =>{
        if(error) return res.json(error);

        return res.status(200).json("Usuário alterado com sucesso!");
    })
}

export const deleteUsuarios = (req, res) => {
    const q = "DELETE FROM Usuarios WHERE `ID` = ?";

    db.query(q, [req.params.id], (error) =>{
        if(error) return res.json(error);

        return res.status(200).json("Usuário deletado com sucesso!");
    })
}
 

// export const postCadastro = (req, res) => { 
//     const q = "SELECT * FROM Usuarios WHERE Email = ?";

//     const values = [
//         req.body.Email,
//     ]   

//     db.query(q, [...values], (erro, data) => {
//         if(erro){
//             if(data.length != 0){
//                 console.log(data)
//                 return res.status(200).json(true);
//             }
//             else
//                 return res.status(200).json(false);
//         } 
//         else{
//             return res.json("Deu um erro aqui: "+ erro);
//         }  
//     })
//  }   