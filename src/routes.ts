import express from 'express'
import * as controller from './controllers/avaliacaoController';
import healthCheck from './controllers/healthController';

const routes = express.Router();

//HealthController
routes.get('/health', healthCheck);

//lista todos os objetos
routes.get("/api/v1/avaliacoes", controller.getHandler)

//lista um objeto
routes.get("/api/v1/avaliacoes/:id", controller.getByIdHandler)

//exclui o objeto com aquele id
routes.delete("/api/v1/avaliacoes/:id", controller.deleteHandler)

//insere um objeto
routes.post("/api/v1/avaliacoes", controller.postHandler)

//atualiza o objeto com aquele id
routes.put("/api/v1/avaliacoes", controller.putHandler)

//atualiza parcialmente o objeto com aquele id
routes.patch("/api/v1/avaliacoes", controller.patchHandler)

export default routes;
