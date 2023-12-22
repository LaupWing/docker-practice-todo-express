import type { Application } from "express"
import express from "express"
import cors from "cors"

export default class Server {
   constructor(app: Application) {
      this.config(app)
   }

   private config(app: Application) {
      const cors_options = {
         origin: "http://localhost:8081",
      }

      app.use(express.json({ limit: "50mb" }))
      app.use(cors(cors_options))
   }
}
