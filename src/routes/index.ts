import type { Application } from "express"
import todoRoutes from "./TodoRoutes"

export default class Routes {
    constructor(app: Application) {
        app.use("/todos", todoRoutes)
    }
}
