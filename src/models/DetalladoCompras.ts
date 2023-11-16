import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToOne, JoinTable, JoinColumn } from 'typeorm';
import { Compras } from './Compras';
import { Productos } from './Productos';


@Entity('detallado_compras')
export class DetalladoCompras extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: true })
    cantidad: number;
    
    @CreateDateColumn({ type: 'datetime', nullable: true })
    fecha_de_creacion: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    usuario_de_creacion: string;

    @UpdateDateColumn({ type: 'datetime', nullable: true })
    fecha_de_actualizacion: Date;

    @ManyToOne(() => Compras, compra => compra.detalladoCompras)
    @JoinColumn()
    compra: Compras;

    @OneToOne(() => Productos)
    @JoinColumn()
    producto: Productos;

}

