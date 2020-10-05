import { Request, Response } from "express"
import { Avaliacao } from "../models/avaliacaoModel"
import {create, getAll, getById} from "../service/avaliacaoService"

export async function getHandler(request: Request, response: Response) {
    
    const serviceResponse = await getAll()
    console.log(serviceResponse)

    return response.json(serviceResponse)
}

export async function getByIdHandler(request: Request, response: Response) {

    let id = request.params.id
    const serviceResponse = await getById(Number(id))
    console.log(serviceResponse)
    return response.json(serviceResponse)
}

export function deleteHandler(request: Request, response: Response) {
    return response.json()
}

export async function postHandler(request: Request, response: Response) {

    const serviceResponse = await create(request.body as Avaliacao);
    if(serviceResponse.data){
        return response.json(serviceResponse.data)
    } else {
        return response.json({error: serviceResponse.error}).status(500)
    }
}

export function putHandler(request: Request, response: Response) {
    return response.json()
}

export function patchHandler(request: Request, response: Response) {
    return response.json()
}
