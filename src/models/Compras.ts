import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, OneToMany, CreateDateColumn, UpdateDateColumn, JoinColumn, JoinTable } from 'typeorm';
import { Usuario } from './Usuario';
import { Productos } from './Productos';
import { DetalladoCompras } from './DetalladoCompras';
@Entity('compras')
export class Compras extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: true })
    descripcion: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    nombre_del_cliente: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, default:0 })
    precio_total: number;

    @Column({ type: 'int', default:0})
    total_de_productos: number;

    @CreateDateColumn({ type: 'datetime', nullable: true })
    fecha_de_creacion: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    usuario_de_creacion: string;

    @UpdateDateColumn({ type: 'datetime', nullable: true })
    fecha_de_actualizacion: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    usuario_de_actualizacion: string;

    @Column({ type: 'tinyint', nullable: true, default:true })
    activo: boolean;

    @Column({type: 'varchar', length: 255, nullable: false, default: "Activo"})
    status:string;

    @ManyToOne(() => Usuario, usuario => usuario.compras)
    @JoinColumn()
    usuario: Usuario;

    @OneToMany(() => DetalladoCompras, detalladoCompras => detalladoCompras.compra)
    detalladoCompras: DetalladoCompras[];

}
