import Express from "express"






export const login = (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {

    console.log(req.body)
    res.json({ ok: "login" })
}

export const register = (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {

    console.log(req.body)

    res.json({ ok: "register" })

}