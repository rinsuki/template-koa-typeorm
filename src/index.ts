import Koa from "koa"
import Router from "@koa/router"
import { createConnection, getConnectionOptions } from "typeorm"
import { connectDB } from "./db/connect"

const app = new Koa()
const router = new Router()

router.get("/", async ctx => {
    ctx.body = "Hello, world!"
})

app.use(router.routes())

const PORT = process.env.PORT ?? 3000
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`listen at http://localhost:${PORT}`)
        })
    })
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
