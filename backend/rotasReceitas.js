import express from "express";
import { getReceitas, getReceita, getReceitasFiltro, postReceitas, putReceitas, deleteReceitas } from "./controladores/receitasController.js";

const roteador = express.Router();

roteador.get("/", getReceitas)
roteador.get("/:id", getReceita)
roteador.get("/filtro", getReceitasFiltro)


roteador.post("/", postReceitas)

roteador.put("/:id", putReceitas)

roteador.delete("/:id",deleteReceitas)

export default roteador;