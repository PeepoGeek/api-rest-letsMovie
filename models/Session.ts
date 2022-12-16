import { prop, Ref } from "@typegoose/typegoose"
import User, { USUARIO } from "./user.model"

export class Session {
    @prop({ ref: () => User })
    user: Ref<USUARIO>


    @prop({ default: true })
    valid: boolean
}