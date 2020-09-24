import avaliacaoModel, { Avaliacao } from '../models/avaliacaoModel'

export async function getAll(): Promise<any> {
    return await avaliacaoModel.find({})
}

export async function createNew(avaliacao : Avaliacao): Promise<any> {
    const newEntity = avaliacaoModel.constructor(avaliacao);
    await newEntity.save();
    return newEntity;
}