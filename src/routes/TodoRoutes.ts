import { Router } from "express"
import TodoController from "../controllers/TodoController"

export class TodoRoutes {
    router = Router()
    controller = new TodoController()

    constructor() {
        this.router.get("/todos", this.controller.all)
        this.router.post("/todos", this.controller.create)
        this.router.get("/todos/:id", this.controller.get)
        this.router.patch("/todos/:id", this.controller.update)
    }
}

export default new TodoRoutes().router
