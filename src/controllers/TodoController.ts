import type { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default class TodoController {
   get = async (req: Request, res: Response) => {
      try {
         const { id } = req.params
         const todos = await prisma.todo.findFirstOrThrow({
            where: {
               id: id
            }
         })
   
         res.json({todos})
      } catch(e: any) {
         res.status(500).json({error: e.message})
      }
   }

   create = async (req: Request, res: Response) => {
      const { title } = req.body
      try {
         const todo = await prisma.todo.create({
            data: {
               title,
               completed: false,
            }
         })
   
         res.json({todo})
      } catch(e: any) {
         res.status(500).json({error: e.message})
      }
   }

   update = async (req: Request, res: Response) => {
      const { id } = req.params
      const { title, completed } = req.body
      try {
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
      } catch(e: any) {
         res.status(500).json({error: e.message})
      }
   }
   
   all = async (req: Request, res: Response) => {
      try {
         const todos = await prisma.todo.findMany()
   
         res.json({ todos })
      } catch(e: any) {
         res.status(500).json({error: e.message})
      }
   }
}