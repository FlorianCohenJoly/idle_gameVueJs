import {AuthRegisterBody} from "@/types/auth.types";
import {Express, Request, Response} from "express";
import {getMeById, login, register} from "./auth.services";
import {requireLogin} from "./auth.middleware";
import {ObjectId} from "mongodb";

export function registerAuthRoutes(app: Express) {

    // on enregistre une route /auth/register
    // TypeParams, TypeQuery, TypeBody
    app.post('/auth/register', async (req: Request<unknown, unknown, AuthRegisterBody>, res: Response) => {

        // on call le service auth.register
        const result = await register(req.body)

        // on set un cookie si on a un token dans le result
        if (result.token) {
            res.cookie('token', result.token, {expires: new Date(+new Date() + 1000000000), sameSite: 'none'})
        }
        // on reponds a la requete http avec le result
        res.json(result)
    })

    app.post('/auth/login', async (req, res) => {
        const result = await login(req.body)
        // on set un cookie si on a un token dans le result
        if (result.token) {
            res.cookie('token', result.token, {expires: new Date(+new Date() + 1000000000), sameSite: 'none'})
        }
        res.json(result)
    })

    app.get('/me/:userId', async (req, res) => {
        const userId: ObjectId = new ObjectId(req.params.userId)
        try {
            const result = await getMeById(userId)
            if (result.success) {
                res.status(200).json({data: result});
            } else {
                res.status(404).json({message: result.message});
            }
        } catch (error) {
            res.status(500).json({message: "Internal Server Error", error});
        }
    })

    app.get('/auth/me', requireLogin, (req, res) => {
        res.json(req.user)
    })
}
