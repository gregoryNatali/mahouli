import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar")
    profile_picture: string

    @Column("varchar", { length: 50 })
    name: string

    @Column("varchar", { length: 320 })
    email: string

    @Column("boolean")
    confirmed_email: boolean

    @Column("varchar", { length: 320 })
    password: string

    @Column("date")
    join_date: string

}
