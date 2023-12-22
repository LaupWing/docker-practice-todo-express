import type { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default class TodoController {
   get = async (req: Request, res: Response) => {
      const todos = await prisma.todo.findMany()

      res.json({todos})
   }

   create = async (req: Request, res: Response) => {

   }

   update = async (req: Request, res: Response) => {

   }
   
   all = async (req: Request, res: Response) => {
      
   }
}