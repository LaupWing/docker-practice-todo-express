import type { Application } from "express"

export default class Routes {
    constructor(app: Application) {
        app.use("/todos")
    }
}
