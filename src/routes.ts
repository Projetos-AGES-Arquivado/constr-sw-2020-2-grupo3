import express from 'express'
import {
    deleteHandler,
    getByIdHandler,
    getHandler,
    getByQueryHandler,
    patchHandler,
    postHandler,
    putHandler,
} from './controllers/avaliacaoController';
import { healthCheck } from './controllers/HealthController';

const routes = express.Router();

//HealthController
routes.get('/health', healthCheck);

//lista todos os objetos
routes.get("/api/v1/avaliacoes", getHandler)

//lista um objeto
routes.get("/api/v1/avaliacoes/:id", getByIdHandler)

//exclui o objeto com aquele id
routes.delete("/api/v1/avaliacoes/:id", deleteHandler)

//insere um objeto
routes.post("/api/v1/avaliacoes", postHandler)

//atualiza o objeto com aquele id
routes.put("/api/v1/avaliacoes", putHandler)

//atualiza parcialmente o objeto com aquele id
routes.patch("/api/v1/avaliacoes", patchHandler)

export default routes;
