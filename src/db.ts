import {DataSource} from 'typeorm'
import {Usuario} from './entities/Usuario'
import {Compras} from './entities/Compras'
import {DetalladoCompras} from './entities/DetalladoCompras'
import {Productos} from './entities/Productos'
import {ProductosEnPromocion} from './entities/ProductosEnPromocion'
import {TipoPromocion} from './entities/TipoPromocion'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

export const AppDataSource= new DataSource({
    type: 'mysql',
    host:  'localhost',
    username: 'root',
    password:'Adminadmin1!',
    database: 'api_equipo2',
    port:3306,
    entities: [Usuario, Compras, DetalladoCompras, Productos, ProductosEnPromocion, TipoPromocion/**/],
    logging: true,
    synchronize: false
})
