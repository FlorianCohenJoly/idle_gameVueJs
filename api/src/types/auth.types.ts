export interface AuthRegisterBody {
    username: string
    password: string
}

export interface User {
    username: string
    password: string
    token: string
    pessinos: number
    createdAt: Date
}

export interface SimpleUser {
    username: string
    createdAt: Date
}

