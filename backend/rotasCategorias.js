import express from "express";
import { getCategorias, getCategoria} from "./controladores/categoriaController.js";

const roteador = express.Router();

roteador.get("/", getCategorias)
roteador.get("/:id", getCategoria)

export default roteador;
