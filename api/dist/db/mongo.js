"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDb = exports.db = void 0;
const mongodb_1 = require("mongodb");
const mongoUri = (_a = process.env.MONGO_URI) !== null && _a !== void 0 ? _a : '';
const mongoDbName = (_b = process.env.MONGO_DBNAME) !== null && _b !== void 0 ? _b : '';
async function initDb() {
    console.log('Tentative de connexion à mongo');
    const mongoClient = new mongodb_1.MongoClient(mongoUri);
    await mongoClient.connect();
    exports.db = mongoClient.db(mongoDbName);
    console.log('Connexion réussie');
}
exports.initDb = initDb;
//# sourceMappingURL=mongo.js.map