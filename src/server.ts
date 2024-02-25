import type { Application } from "express"
import express from "express"
import cors from "cors"
import Routes from "./routes"

export default class Server {
    constructor(app: Application) {
        this.config(app)
        new Routes(app)
    }

    private config(app: Application) {
        const cors_options = {
            origin: "http://localhost:8081",
        }

        app.use(express.json({ limit: "50mb" }))
        app.use(cors(cors_options))
    }
}
