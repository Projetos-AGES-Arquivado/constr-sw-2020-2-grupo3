import { ServiceResponse as ApiResponse } from '../models/models';
import avaliacaoModel, { Avaliacao, AvaliacaoDocument } from '../models/avaliacaoModel'

export async function getAll(): Promise<any[]> {
    return await avaliacaoModel.find({})
}

export async function create(avaliacao: Avaliacao): Promise<ApiResponse<AvaliacaoDocument>> {
    const newEntity = new avaliacaoModel(avaliacao);
    try {
        const document = await newEntity.save()
        return { data: document as AvaliacaoDocument }
    } catch (error) {
        const message = (error instanceof Error) ? error.message : error
        console.error(message)
        return { error : message}
    }
}
