import express from "express";
import { getReceitas, getReceita, postReceitas, putReceitas, deleteReceitas } from "./controladores/receitasController.js";

const roteador = express.Router();

roteador.get("/", getReceitas)
roteador.get("/:id", getReceita)

roteador.post("/", postReceitas)

roteador.put("/:id", putReceitas)

roteador.delete("/:id",deleteReceitas)

export default roteador;