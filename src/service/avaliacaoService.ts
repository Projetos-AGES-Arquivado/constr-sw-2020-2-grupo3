import { ServiceResponse } from '../models/models';
import avaliacaoModel, { Avaliacao, AvaliacaoDocument } from '../models/avaliacaoModel'

export async function getAll(): Promise<any[]> {
    return avaliacaoModel.find({});
}

export async function getById(id: String): Promise<ServiceResponse<AvaliacaoDocument>> {
    try {
        const document = await avaliacaoModel.findById({ _id: id });
        return { data: document as AvaliacaoDocument };
    } catch (error) {
        const message = (error instanceof Error) ? error.message : error
        console.error(message)
        return { error: message }
    }
}

export async function getByFields(fields: any): Promise<ServiceResponse<any[]>> {
    try {
        const documents = await avaliacaoModel.find(fields);
        return { data: documents };

    } catch (error) {
        const message = (error instanceof Error) ? error.message : error
        console.error(message)
        return { error: message }
    }
}

export async function deleteById(id: String): Promise<Boolean> {
    const deleteCount = (await avaliacaoModel.deleteOne({ _id: id })).deletedCount
    return (deleteCount && deleteCount > 0) ? true : false
}

export async function replace(id: String, avaliacao: Avaliacao): Promise<Handler<AvaliacaoDocument>> {
    return Handler.handleCatching(async () => {
        const result = await avaliacaoModel.replaceOne({ _id: id }, avaliacao)
        return result as AvaliacaoDocument
    })
}

export async function update(id: String, avaliacao: Avaliacao): Promise<ServiceResponse<AvaliacaoDocument>> {
    try {
        const document = await avaliacaoModel.updateOne({_id: id}, avaliacao)
        return { data: document as AvaliacaoDocument }
    } catch (error) {
        const message = (error instanceof Error) ? error.message : error
        console.error(message)
        return { error: message }
    }
}

export async function create(avaliacao: Avaliacao): Promise<ServiceResponse<AvaliacaoDocument>> {
    const newEntity = new avaliacaoModel(avaliacao);
    try {
        const document = await newEntity.save()
        return { data: document as AvaliacaoDocument }
    } catch (error) {
        const message = (error instanceof Error) ? error.message : error
        console.error(message)
        return { error: message }
    }
}
