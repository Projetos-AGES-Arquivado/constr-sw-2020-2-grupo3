import express from 'express'

const routes = express.Router();

routes.get('/health', (request, response) => response.json({ status: "UP" }));

export default routes;
