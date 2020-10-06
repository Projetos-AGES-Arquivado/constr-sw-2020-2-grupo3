import Handler from '../handlers/responseHandler';
import avaliacaoModel, { Avaliacao, AvaliacaoDocument } from '../models/avaliacaoModel'

export async function getAll(): Promise<Handler<any[]>> {
    return Handler.handleCatching(async () => await avaliacaoModel.find({}))
}

export async function getById(id: String): Promise<Handler<AvaliacaoDocument>> {
    return Handler.handleCatching(async () => await avaliacaoModel.findById({ _id: id }) as AvaliacaoDocument)
}

export async function getByFields(fields: any): Promise<Handler<any[]>> {
    return Handler.handleCatching(async () => await avaliacaoModel.find(fields))
}

export async function deleteById(id: String): Promise<Boolean> {
    const deleteCount = (await avaliacaoModel.deleteOne({ _id: id })).deletedCount
    return (deleteCount && deleteCount > 0) ? true : false
}

export async function replace(id: String, avaliacao: Avaliacao): Promise<Handler<AvaliacaoDocument>> {
    return Handler.handleCatching(async () => {
        await avaliacaoModel.replaceOne({ _id: id }, avaliacao) as AvaliacaoDocument
        return await avaliacaoModel.findById({ _id: id }) as AvaliacaoDocument
    })
}

export async function update(id: String, avaliacao: Avaliacao): Promise<Handler<AvaliacaoDocument>> {
    return Handler.handleCatching(async () => {
        await avaliacaoModel.updateOne({ _id: id }, avaliacao) as AvaliacaoDocument
        return await avaliacaoModel.findById({ _id: id }) as AvaliacaoDocument
    })
}

export async function create(avaliacao: Avaliacao): Promise<Handler<AvaliacaoDocument>> {
    return Handler.handleCatching(async () => await new avaliacaoModel(avaliacao).save() as AvaliacaoDocument)
}
