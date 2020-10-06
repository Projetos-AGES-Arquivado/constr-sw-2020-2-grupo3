import { Request, Response } from "express"
import { status } from "../database/database"

export default function healthCheck(request: Request, response: Response): Response {
    return response.json({
        status: "UP",
        database: status()
    });
}
