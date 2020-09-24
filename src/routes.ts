import express from 'express'
import { deleteHandler, getHandler, patchHandler, postHandler, putHandler } from './controllers/avaliacaoController';
import { healthCheck } from './controllers/HealthController';

const routes = express.Router();

//HealthController
routes.get('/health', healthCheck);

//AvaliacaoController
routes.get("/api/v1/avaliacoes", getHandler)
routes.delete("/api/v1/avaliacoes", deleteHandler)
routes.post("/api/v1/avaliacoes", postHandler)
routes.put("/api/v1/avaliacoes", putHandler)
routes.patch("/api/v1/avaliacoes", patchHandler)

export default routes;
