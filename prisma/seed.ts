import { PrismaClient } from "@prisma/client"
import dotenv from "dotenv"
dotenv.config()

const prisma = new PrismaClient()

async function main() {
    await prisma.todo.create({
        data: {
            title: "Buy milk",
            completed: false,
        },
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
