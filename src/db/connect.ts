import { createConnection, getConnectionOptions } from "typeorm";

export async function connectDB() {
    await createConnection({
        ...await getConnectionOptions(),
        migrations: [],
        entities: [__dirname+"/models/*.js"],
    })
}