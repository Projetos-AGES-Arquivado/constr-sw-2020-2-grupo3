import { Response } from "express"

export default class ResponseHandler<T> {

    private data?: T
    private error?: any

    constructor(params: { data?: T, error?: any }) {
        this.data = params.data
        this.error = params.error
    }

    static async handleCatching<T>(expression: () => Promise<T>): Promise<ResponseHandler<T>> {
        try {
            const data = await expression()
            return new ResponseHandler({ data })
        } catch (exception) {
            const error = (exception instanceof Error) ? exception.message : exception
            console.error(error)
            return new ResponseHandler({ error })
        }
    }

    handle(response: Response, successStatus: number = 200): Response {
        if (this.error) {
            response.status(500).json({ error: this.error }).end()
        } else if (this.data == null) {
            response.status(404).end()
        } else {
            response.status(successStatus).json(this.data).end()
        }

        return response
    }

}
