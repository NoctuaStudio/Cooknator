import express from "express";
import { getIngredientes, getIngredientesReceita} from "./controladores/ingredienteController.js";

const roteador = express.Router();

roteador.get("/", getIngredientes)
roteador.get("/:id", getIngredientesReceita)

export default roteador;