import { Router } from "express"
import TodoController from "../controllers/TodoController"


export class TodoRoute {
   router = Router()
   controller = new TodoController()

   constructor() {
      this.router.get("/all", this.controller.all)
      this.router.get("/get/:id", this.controller.get)
      this.router.patch("/get/:id", this.controller.update)
      this.router.post("/create", this.controller.create)
   }
}

export default new TodoRoute().router