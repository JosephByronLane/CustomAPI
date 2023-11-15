"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controllers_1 = require("../controllers/usuario.controllers");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
const index_1 = require("../index");
if (index_1.needlogin) {
    router.post('/usuario', auth_middleware_1.verifyToken, usuario_controllers_1.createUser);
    router.get('/usuario', auth_middleware_1.verifyToken, usuario_controllers_1.getUsers);
    router.put('/usuario/:id', auth_middleware_1.verifyToken, usuario_controllers_1.updateUser);
    router.delete('/usuario/:id', auth_middleware_1.verifyToken, usuario_controllers_1.deleteUser);
    router.get('/usuario/:id', auth_middleware_1.verifyToken, usuario_controllers_1.getUser);
}
else {
    router.post('/usuario', usuario_controllers_1.createUser);
    router.get('/usuario', usuario_controllers_1.getUsers);
    router.put('/usuario/:id', usuario_controllers_1.updateUser);
    router.delete('/usuario/:id', usuario_controllers_1.deleteUser);
    router.get('/usuario/:id', usuario_controllers_1.getUser);
}
exports.default = router;
