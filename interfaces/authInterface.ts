import Express from 'express'

export interface AuthData {
    email: string,
    password: string,
}

export interface TypedRequestBody<T> extends Express.Request {
    body: T
}