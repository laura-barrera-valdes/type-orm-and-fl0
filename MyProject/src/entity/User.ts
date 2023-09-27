import { Entity, PrimaryGeneratedColumn, Column } from "typeorm" // Es importante usar Column para que divida el objeto en columnas

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
