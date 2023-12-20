import { PrismaClient } from "@prisma/client"
import type { Application } from "express"
import express from "express"

const app: Application = express()
const prisma = new PrismaClient()

app
   .get("/", async (req, res) => {
      const todos = await prisma.todo.findMany()
      res.json({
         message: "Hello World",
         todos
      })
   })
   .listen(3000, () => console.log("Server is running on http://localhost:3000"))