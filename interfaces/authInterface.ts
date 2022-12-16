import Express from 'express'

export interface UserAuth {
    email: string,
    password: string,
}

export interface RequestBody<T> extends Express.Request {
    body: T
}