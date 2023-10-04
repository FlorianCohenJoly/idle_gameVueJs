"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initWebServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_controller_1 = require("./modules/auth/auth.controller");
const auth_middleware_1 = require("./modules/auth/auth.middleware");
function initWebServer() {
    // Creation du serveur http
    const app = (0, express_1.default)();
    // Utilise le plugin CORS
    app.use((0, cors_1.default)({
        credentials: true,
    }));
    // lire les cookies
    app.use((0, cookie_parser_1.default)());
    // permet de décoder le contenu des requetes http (de type JSON)
    app.use(express_1.default.json());
    // Add isLogin middleware
    app.use(auth_middleware_1.isLogin);
    // On enregistre nos controllers
    (0, auth_controller_1.registerAuthRoutes)(app);
    // On ecoute sur le port configuré avec le .env
    app.listen(process.env.NODE_PORT, () => {
        console.log(`Listening on http://localhost:${process.env.NODE_PORT}`);
    });
    return app;
}
exports.initWebServer = initWebServer;
//# sourceMappingURL=server.js.map