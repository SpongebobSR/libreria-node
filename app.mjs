import express from "express"
import dotenv from "dotenv"
import index_router from "./routes/index_router.mjs"
dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(index_router)

app.listen(PORT,()=>{
    console.log("The app is running")
})