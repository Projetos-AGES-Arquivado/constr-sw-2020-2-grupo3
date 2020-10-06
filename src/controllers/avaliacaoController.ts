import { Request, Response } from "express"
import { Avaliacao, AvaliacaoDocument } from "../models/avaliacaoModel"
import {create, getAll, getById, getByFields, deleteById, replace, update} from "../service/avaliacaoService"

export async function getHandler(request: Request, response: Response) {
    const serviceResponse = await getAll()
    if (request.query){
        return getByQueryHandler(request, response)
    }
    return response.json(serviceResponse).status(200).end()
}

export async function getByIdHandler(request: Request, response: Response) {
    const id = request.params.id
    const serviceResponse = await getById(id)
    if(serviceResponse.data){
        return response.json(serviceResponse.data).status(200).end()
    } else if (serviceResponse.data === null){
        return response.status(404).end()
    } else {
        return response.json({error: serviceResponse.error}).status(500).end()
    }
}

export async function getByQueryHandler(request: Request, response: Response) {
    const serviceResponse = await getByFields(request.query)
    if(serviceResponse.data){
        return response.json(serviceResponse.data).status(200).end()
    } else {
        return response.json({error: serviceResponse.error}).status(404).end()
    }
}

export async function deleteHandler(request: Request, response: Response) {
    const id = request.params.id
    const serviceResponse = await deleteById(id)
    return serviceResponse ? response.status(200).end() : response.status(404).end()
}

export async function postHandler(request: Request, response: Response) {
    const serviceResponse = await create(request.body as Avaliacao);
    if(serviceResponse.data){
        return response.json(serviceResponse.data).status(201).end()
    } else {
        return response.json({error: serviceResponse.error}).status(500).end()
    }
}

export async function putHandler(request: Request, response: Response) {
    const avaliacao = request.body as AvaliacaoDocument
    if(avaliacao._id){
        const serviceResponse = await replace(avaliacao._id, avaliacao);
        if(serviceResponse.data){
            return response.json(serviceResponse.data).status(200).end()
        } else {
            return response.json({error: serviceResponse.error}).status(500).end()
        }
    } else {
        return response.status(404).end()
    }
}

export async function patchHandler(request: Request, response: Response) {
    const avaliacao = request.body as AvaliacaoDocument
    if(avaliacao._id){
        const serviceResponse = await update(avaliacao._id, avaliacao);
        if(serviceResponse.data){
            return response.json(serviceResponse.data).status(200).end()
        } else {
            return response.json({error: serviceResponse.error}).status(500).end()
        }
    } else {
        return response.status(404).end()
    }
}
