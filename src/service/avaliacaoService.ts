import { ServiceResponse as ApiResponse } from '../models/models';
import avaliacaoModel, { Avaliacao, AvaliacaoDocument } from '../models/avaliacaoModel'

export async function getAll(): Promise<any[]> {
    return avaliacaoModel.find({});
}

export async function getById(id: Number): Promise<ApiResponse<AvaliacaoDocument>> {

    try {
        const document = await avaliacaoModel.findById({id});
        return { data: document as AvaliacaoDocument};

    } catch (error){
        const message = (error instanceof Error) ? error.message : error
        console.error(message)
        return { error : message}
    }
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
