import express from "express";
import { getIngredientes, getIngredientesReceita, getIngredientesNome, getIngredientesID, postIngredientesReceita} from "./controladores/ingredienteController.js";

const roteador = express.Router();

roteador.get("/", getIngredientes)
roteador.get("/:id", getIngredientesReceita)
roteador.get("/nome/:id", getIngredientesNome)
roteador.get("/nome_ID_Ingrediente/:nome", getIngredientesID)

roteador.post("/", postIngredientesReceita)

export default roteador;