"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const Usuario_routes_1 = __importDefault(require("./routes/Usuario.routes"));
const Login_routes_1 = __importDefault(require("./routes/Login.routes"));
const Productos_routes_1 = __importDefault(require("./routes/Productos.routes"));
const ProductosEnPromocion_routes_1 = __importDefault(require("./routes/ProductosEnPromocion.routes"));
const app = (0, express_1.default)();
app.disable('x-powered-by');
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(Usuario_routes_1.default);
app.use(Login_routes_1.default);
app.use(Productos_routes_1.default);
app.use(ProductosEnPromocion_routes_1.default);
exports.default = app;