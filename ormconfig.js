// @ts-check
require("dotenv").config()
/** @type {import("typeorm").ConnectionOptions} */
module.exports = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    migrations: ["src/db/migrations/*.ts"],
    entities: ["src/db/models/*.ts"],
    cli: {
        migrationsDir: "src/db/migrations",
        entitiesDir: "src/db/models",
    }
}
