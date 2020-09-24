import mongoose from "mongoose"
import questaoModel, { Questao } from "./questaoModel"

export interface Avaliacao {
    nome: String,
    peso: Number,
    grau: Number,
    descricao: String,
    questoes: [Questao]
}

interface AvaliacaoDocument extends Avaliacao, mongoose.Document { }

interface AvaliacaoModel extends mongoose.Model<AvaliacaoDocument> {
    constructor(attributes: Avaliacao): AvaliacaoDocument
}

const schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    peso: {
        type: Number,
        required: true,
        default: 1
    },
    grau: {
        type: Number,
        required: true
    },
    descricao: {
        type: String,
        required: false
    },
    questoes: [questaoModel]
})

export default mongoose.model<AvaliacaoDocument, AvaliacaoModel>('Avaliacao', schema)
