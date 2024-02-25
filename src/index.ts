import { PrismaClient } from "@prisma/client"
import type { Application } from "express"
import express from "express"
import Server from "./server"

const app: Application = express()
new Server(app)
const PORT: number = process.env.PORT ? Number(process.env.PORT) : 8080

app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
).on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
        console.log("Error: address already in use")
    } else {
        console.log(err)
    }
})
