import express from "express";
import { getUsuarios, getUsuario, postLogin, postUsuarios, putUsuarios, deleteUsuarios, postCadastro } from "./controladores/usuarioController.js";

const roteador = express.Router();

roteador.get("/", getUsuarios)
roteador.get("/:id", getUsuario)

roteador.post("/", postUsuarios)
roteador.post("/login", postLogin)
//roteador.post("/cadastro", postCadastro)

roteador.put("/:id", putUsuarios)

roteador.delete("/:id",deleteUsuarios)

export default roteador;