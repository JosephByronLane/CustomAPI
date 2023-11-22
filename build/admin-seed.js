"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const Usuario_1 = require("./models/Usuario");
const createAdminUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = new Usuario_1.Usuario();
    usuario.nombre = 'admin';
    usuario.contrasenia = yield bcrypt_1.default.hash('admin', 10);
    //const userRepository = getRepository(Usuario);
    //const admin = new Usuario();
    //admin.nombre = 'admin';
    //admin.contrasenia = await bcrypt.hash('admin', 10); 
    const adminExists = yield Usuario_1.Usuario.findOneBy({ nombre: usuario.nombre });
    if (!adminExists) {
        yield usuario.save();
        console.log('Admin user seeded');
    }
});
exports.createAdminUser = createAdminUser;
