import {Column, PrimaryGeneratedColumn, Entity, OneToMany, UpdateDateColumn,CreateDateColumn, BaseEntity, OneToOne} from 'typeorm'

import { Compras } from './Compras';
import { CarritoItem } from './CarritoItem';
import { Carrito } from './Carrito';
@Entity('Usuario')
export class Usuario extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    nombre: string;

    @Column({ type: 'varchar', length: 255, nullable: true, unique: true})
    correo_electronico: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    contrasenia: string;

    @CreateDateColumn({ type: 'datetime', nullable: true })
    fecha_de_creacion: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    usuario_de_creacion: string;

    @UpdateDateColumn({ type: 'datetime', nullable: true })
    fecha_de_actualizacion: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    usuario_de_actualizacion: string;

    @Column({ type: 'tinyint', nullable: true, default:true})
    activo: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    extra1: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    extra2: string;

    @OneToOne(() => Carrito, carrito => carrito.usuario)
    carrito: Carrito;

    @OneToMany(() => Compras, compras => compras.usuario)
    compras: Compras[];

}