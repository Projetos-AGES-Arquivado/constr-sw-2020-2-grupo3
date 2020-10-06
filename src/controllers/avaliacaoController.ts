import { Request, Response } from "express"
import { Avaliacao, AvaliacaoDocument } from "../models/avaliacaoModel"
import * as service from "../service/avaliacaoService"

export async function getHandler(request: Request, response: Response) {
    if (request.query) {
        return getByQueryHandler(request, response)
    }
    const handler = await service.getAll()
    return handler.handle(response);
}

export async function getByIdHandler(request: Request, response: Response) {
    const handler = await service.getById(request.params.id)
    return handler.handle(response);
}

export async function getByQueryHandler(request: Request, response: Response) {
    const handler = await service.getByFields(request.query)
    return handler.handle(response);
}

export async function deleteHandler(request: Request, response: Response) {
    const id = request.params.id
    const serviceResponse = await service.deleteById(id)
    return serviceResponse ? response.status(200).end() : response.status(404).end()
}

export async function postHandler(request: Request, response: Response) {

    const handler = await service.create(request.body as Avaliacao);
    return handler.handle(response, 201);
}

export async function putHandler(request: Request, response: Response) {
    const avaliacao = request.body as AvaliacaoDocument
    const handler = await service.replace(avaliacao._id, avaliacao);
    return handler.handle(response);
}

export async function patchHandler(request: Request, response: Response) {
    const avaliacao = request.body as AvaliacaoDocument
    const handler = await service.update(avaliacao._id, avaliacao);
    return handler.handle(response);
}
