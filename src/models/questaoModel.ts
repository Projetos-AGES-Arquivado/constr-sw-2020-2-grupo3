import mongoose from "mongoose"

export interface Questao {
    enunciado: String,
    resposta: String
}

interface QuestaoDocument extends Questao, mongoose.Document { }

interface QuestaoModel extends mongoose.Model<QuestaoDocument> {
    constructor(attributes: Questao): QuestaoDocument
}

const schema = new mongoose.Schema({
    enunciado: {
        type: String,
        required: true
    },
    resposta: {
        type: String,
        required: true
    }
})

export default mongoose.model<QuestaoDocument, QuestaoModel>('Questao', schema);
