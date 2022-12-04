import { validationResult } from "express-validator"

import Express from 'express'









export const validationResultsCheck = (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    next()


}