import { PrismaClient } from "@prisma/client"
import type { Application } from "express"
import express from "express"
import Server from "./server"

const app: Application = express()
new Server(app)
const PORT: number = process.env.PORT ? Number(process.env.PORT) : 8080
const prisma = new PrismaClient()

app.get("/", async (req, res) => {
    const todos = await prisma.todo.findMany()
    res.json({
        message: "Hello World",
        todos,
    })
}).listen(PORT, () => console.log("Server is running on http://localhost:3000"))
