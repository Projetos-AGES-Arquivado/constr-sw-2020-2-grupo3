import express from 'express';
import * as controller from './controllers/avaliacaoController';
import healthCheck from './controllers/healthController';

const routes = express.Router();

// HealthController
routes.get('/health', healthCheck);

/**
 * Lista todas as avaliação.
 * @route GET /api/v1/avaliacoes
 * @group Avaliacao
 * @param {string} query.param - Query
 * @produces application/json
 * @returns {Array.<Avaliacao>} 200 - OK
 */
// lista todos os objetos
routes.get('/api/v1/avaliacoes', controller.getHandler);

/**
 * Lista uma avaliação passando o id.
 * @route GET /api/v1/avaliacoes/{id}
 * @group Avaliacao
 * @param {number} id.path.required - ID da avaliação
 * @produces application/json
 * @returns {Avaliacao.model} 200 - OK
 */
// lista um objeto
routes.get('/api/v1/avaliacoes/:id', controller.getByIdHandler);

/**
 * Atualiza a avalição.
 * @route DELETE /api/v1/avaliacoes/{id}
 * @group Avaliacao
 * @param {number} id.path.required
 * @produces application/json
 * @returns 200 - OK
 * @returns 404 - NOT FOUND: objeto não encontrado
 */
// exclui o objeto com aquele id
routes.delete('/api/v1/avaliacoes/:id', controller.deleteHandler);

/**
 * Insere uma avaliação.
 * @route POST /api/v1/avaliacoes
 * @group Avaliacao
 * @param {Avaliacao.model} avaliacao.body.required
 * @produces application/json
 * @returns {Avaliacao.model} 201 - CREATED
 * @returns 302 - FOUND: objeto já existente
 */
// insere um objeto
routes.post('/api/v1/avaliacoes', controller.postHandler);

/**
 * Atualiza a avalição.
 * @route PUT /api/v1/avaliacoes/{id}
 * @group Avaliacao
 * @param {number} id.path.required
 * @param {Avaliacao.model} avaliacao.body.required
 * @produces application/json
 * @returns 200 - OK
 * @returns 404 - NOT FOUND: objeto não encontrado
 */
// atualiza o objeto com aquele id
routes.put('/api/v1/avaliacoes/:id', controller.putHandler);

/**
 * Atualiza parcialmente a avalição.
 * @route PATCH /api/v1/avaliacoes/{id}
 * @group Avaliacao
 * @param {number} id.path.required
 * @param {Avaliacao.model} avaliacao.body.required
 * @produces application/json
 * @returns 200 - OK
 * @returns 404 - NOT FOUND: objeto não encontrado
 */
// atualiza parcialmente o objeto com aquele id
routes.patch('/api/v1/avaliacoes/:id', controller.patchHandler);

// redirect para o swagger
routes.get('/', (req, res) => {
  res.redirect('api-docs');
});

/**
 * @typedef Avaliacao
 * @property {string} nome.required - Nome da avaliação - eg: A1 Construção de Software
 * @property {number} peso - Peso da avaliação - eg: 4.0
 * @property {number} grau - Grau da avaliação - eg: 9
 * @property {string} descricao - Descrição da avaliação - eg: Primeira avaliação da cadeira de Construção de Software 2020/2
 * @property {Array.<Questao>} questoes - Questões da avaliação
 */

/**
 * @typedef Questao
 * @property {string} enunciado.required - Enunciado da questão - eg: Qual a alternativa correta? A) B)
 * @property {string} resposta.required - Resposta da questão - eg: A)
 */

export default routes;
