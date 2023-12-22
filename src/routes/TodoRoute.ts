import { Application, Router } from "express"
import TodoController from "../controllers/TodoController"


export default class TodoRoute {
   router = Router()
   controller = new TodoController()

   constructor(app: Application) {
      this.router = app.get("/all", this.controller.all)
      this.router = app.get("/get/:id", this.controller.get)
      this.router = app.patch("/get/:id", this.controller.update)
      this.router = app.post("/create", this.controller.create)
   }
}