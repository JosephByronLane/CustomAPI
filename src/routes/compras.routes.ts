import {Router} from 'express'
import { addToCart, cancelarPedido, finalizarCompra, getCartItems, removeFromCart, updateCartItem} from '../controllers/compras.controller';
import { verifyToken } from '../middleware/auth.middleware';

const router = Router();


router.post('/equipo-2/purchases', verifyToken, addToCart)
router.get('/equipo-2/purchases', verifyToken, getCartItems)
router.delete('/equipo-2/purchases', verifyToken, removeFromCart)
router.put('/equipo-2/purchases', verifyToken, updateCartItem)

router.post('/equipo-2/purchases/finalizar', verifyToken, finalizarCompra)
router.post('/equipo-2/purchases/finalizar', verifyToken, cancelarPedido)
export default router