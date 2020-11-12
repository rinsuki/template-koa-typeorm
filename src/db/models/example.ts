import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { EntityWithTimestamps } from "../utils/entity-with-timestamps";

@Entity()
export class Example extends EntityWithTimestamps {
    @PrimaryGeneratedColumn("increment")
    id!: number

    @Column("text")
    text!: string
}