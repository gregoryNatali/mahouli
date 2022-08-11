import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { default: '' })
    profile_picture: string

    @Column("varchar", { length: 50 })
    name: string

    @Column("varchar", { length: 320 })
    email: string

    @Column("boolean", { default: false })
    confirmed_email: boolean

		@Column("varchar", { length: 8 })
		confirm_code: string

		@Column('boolean', { default: false })
		private_lists: boolean

    @Column("varchar", { length: 320 })
    password: string

    @Column("date")
    join_date: string

}
