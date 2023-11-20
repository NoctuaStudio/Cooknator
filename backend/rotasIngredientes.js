import express from "express";
import { getIngredientes} from "./controladores/ingredienteController.js";

const roteador = express.Router();

roteador.get("/", getIngredientes)

export default roteador;