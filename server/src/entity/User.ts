import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { EntryList } from "./EntryList"

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

	@Column("varchar", { length: 320 })
	password: string

	@Column("date")
	join_date: string

	@OneToMany(() => EntryList, (entry) => entry.user)
	entries: EntryList[]

}
