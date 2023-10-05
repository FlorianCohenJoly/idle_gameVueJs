export interface UserLogin {
    username: string,
    password: string,
}

export interface UserRegister {
    username: string,
    password: string,
    confirmPassword: string
}

export interface loginResponse {
    token: string,
    success?: boolean,
    message?: string
}