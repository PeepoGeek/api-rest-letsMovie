import { Request, Response } from "express"
import { CreateUserInput, VerifyUserInput } from "../schema/user.schema";
import { createUser, findUserById } from "../service/user.service";
import sendEmail from "../utils/mailer";
import { MongoError } from 'mongodb'

export async function createUserHandler(req: Request<{}, {}, CreateUserInput>, res: Response) {
    const body = req.body


    try {
        const user = await createUser(body)
        await sendEmail({
            from: "test@example.com",
            to: user.email,
            subject: "Please verify your account",
            text: `verification code ${user.verificationCode} Id:${user._id}`


        })
        return res.send("User successfully created")
    } catch (error) {
        if ((error as MongoError).code === 11000) {
            return res.status(409).send("Accoount already exists")
        }
        return res.status(500).send(error)
    }
}

export async function verifyUserHandler(req: Request<VerifyUserInput>, res: Response) {
    const id = req.params.id
    const verificationCode = req.params.verificationCode

    //find user by id
    const user = await findUserById(id)

    if (!user) {
        return res.send('Could not verified user')
    }

    if (user.verified) {
        return res.send('User already verified')
    }

    if (user.verificationCode === verificationCode) {
        user.verified = true
        user.save()

        return res.send("User successfully verified")
    }

    return res.send('Could not verified user')
}