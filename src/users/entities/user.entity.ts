import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: '255'})
    username: string

    @Column({type: 'varchar', length: '255'})
    email: string

    @Column({type: 'varchar', length: '255'})
    password: string
}