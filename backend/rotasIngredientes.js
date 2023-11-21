import express from "express";
import { getIngredientes, getIngredientesReceita, getIngredientesNome} from "./controladores/ingredienteController.js";

const roteador = express.Router();

roteador.get("/", getIngredientes)
roteador.get("/:id", getIngredientesReceita)
roteador.get("/nome/:id", getIngredientesNome)

export default roteador;