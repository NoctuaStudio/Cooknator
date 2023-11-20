import express from "express";
import { getReceitas, getReceita, postReceitasFiltro, postReceitas, putReceitas, deleteReceitas } from "./controladores/receitasController.js";

const roteador = express.Router();

roteador.get("/", getReceitas)
roteador.get("/:id", getReceita)


roteador.post("/filtro", postReceitasFiltro)
roteador.post("/", postReceitas)

roteador.put("/:id", putReceitas)

roteador.delete("/:id",deleteReceitas)

export default roteador;