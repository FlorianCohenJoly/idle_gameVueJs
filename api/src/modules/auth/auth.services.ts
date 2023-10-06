import {AuthRegisterBody, SimpleUser} from "@/types/auth.types";
import {Users} from "@/db/models/User";
import crypto from 'crypto'
import {ObjectId, WithId} from "mongodb";

export async function register(body: AuthRegisterBody) {
    const alreadyExist = await Users.findOne({username: body.username})
    if (alreadyExist) {
        return {success: false, message: 'User already exists'}
    }

    const hashedPassword = crypto.createHash('sha256').update(body.password).digest('hex')
    const token = crypto.randomBytes(32).toString('hex')

    await Users.insertOne({
        username: body.username,
        password: hashedPassword,
        token: token,
        pessinos: 10,
        createdAt: new Date()
    })

    return {success: true, token}
}

export async function login(body: AuthRegisterBody) {
    const user = await Users.findOne({username: body.username})
    if (!user) {
        return {success: false, message: 'Bad password'}
    }

    const hashedPassword = crypto.createHash('sha256').update(body.password).digest('hex')
    if (user.password !== hashedPassword) {
        return {success: false, message: 'Bad password'}
    }

    const token = crypto.randomBytes(32).toString('hex')
    await Users.updateOne({_id: user._id}, {$set: {token}})

    return {success: true, token, username: user.username, pessinos: user.pessinos, user_id: user._id}
}

export async function getMeById(user_id: ObjectId) {
    const user = await Users.findOne({_id: user_id})
    if (!user) {
        return {success: false, message: 'Error user not found'}
    }
    return {success: true, message: 'Trouver', user: user}
}

export function findByToken(token: string) {
    return Users.findOne<WithId<SimpleUser>>({token}, {projection: {password: 0, token: 0}})
}
