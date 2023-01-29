import { Request, Response } from "express";

class ProductController {
    findAll(request: Request, resonse: Response): Response {
        return resonse.status(200).send({
            data: []
        })
    }
}

export default new ProductController
