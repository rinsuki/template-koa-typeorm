import { CreateDateColumn } from "typeorm"

export class EntityWithTimestamps {
    @CreateDateColumn({ name: "created_at", type: "timestamptz" })
    createdAt!: Date

    @CreateDateColumn({ name: "updated_at", type: "timestamptz" })
    updatedAt!: Date
}
