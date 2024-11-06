import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'user'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    mail: string;
    @Column()
    htag: string;
    @Column()
    mdp: string;
}
