import { prop, getModelForClass, modelOptions, Severity, pre, DocumentType } from "@typegoose/typegoose";
import { nanoid } from 'nanoid'
import argon2 from "argon2"





@pre<User>("save", async function () {
    if (!this.isModified('password')) {
        return
    }

    const hash = await argon2.hash(this.password)
    this.password = hash

    return

})
@modelOptions({
    schemaOptions: {
        timestamps: true,

    },
    options: {
        allowMixed: Severity.ALLOW
    }
})

export class User {



    @prop({ trim: true, lowercase: true, required: true, unique: true, })
    email: string

    @prop({ required: true, trim: true, minlength: 8, })
    password: string

    @prop({ required: true, default: () => nanoid() })
    verificationCode: string

    @prop()
    passwordResetCode: string | null

    @prop({ required: true })
    firstName: string

    @prop({ required: true })
    lastName: string

    @prop({ default: false })
    verified: boolean;


    async validatePassword(this: DocumentType<User>, candidatePassword: string) {
        try {
            return await argon2.verify(this.password, candidatePassword)

        } catch (error) {
            console.log(error, "Could not validate password")
            return false
        }
    }
}





export const UserModel = getModelForClass(User)



export default UserModel