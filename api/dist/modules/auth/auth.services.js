"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByToken = exports.login = exports.register = void 0;
const User_1 = require("../../db/models/User");
const crypto_1 = __importDefault(require("crypto"));
async function register(body) {
    const alreadyExist = await User_1.Users.findOne({ username: body.username });
    if (alreadyExist) {
        return { success: false, message: 'User already exists' };
    }
    const hashedPassword = crypto_1.default.createHash('sha256').update(body.password).digest('hex');
    const token = crypto_1.default.randomBytes(32).toString('hex');
    await User_1.Users.insertOne({
        username: body.username,
        password: hashedPassword,
        token: token,
        createdAt: new Date()
    });
    return { success: true, token };
}
exports.register = register;
async function login(body) {
    const user = await User_1.Users.findOne({ username: body.username });
    if (!user) {
        return { success: false, message: 'Bad password' };
    }
    const hashedPassword = crypto_1.default.createHash('sha256').update(body.password).digest('hex');
    if (user.password !== hashedPassword) {
        return { success: false, message: 'Bad password' };
    }
    const token = crypto_1.default.randomBytes(32).toString('hex');
    await User_1.Users.updateOne({ _id: user._id }, { $set: { token } });
    return { success: true, token };
}
exports.login = login;
function findByToken(token) {
    return User_1.Users.findOne({ token }, { projection: { password: 0, token: 0 } });
}
exports.findByToken = findByToken;
//# sourceMappingURL=auth.services.js.map