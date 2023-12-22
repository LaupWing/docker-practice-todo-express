import type { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default class TodoController {
   get = async (req: Request, res: Response) => {
      const todos = await prisma.todo.findMany()

      res.json({todos})
   }

   create = async (req: Request, res: Response) => {
      const { title } = req.body

      const todo = await prisma.todo.create({
         data: {
            title,
            completed: false,
         }
      })

      res.json({todo})
   }

   update = async (req: Request, res: Response) => {
      const { id } = req.params
      const { title, completed } = req.body

      const todo = await prisma.todo.update({
         where: {
            id: id
         },
         data: {
            title,
            completed
         }
      })

      res.json({ todo })
   }
   
   all = async (req: Request, res: Response) => {
      
   }
}