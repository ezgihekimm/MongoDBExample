import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './router/router.js'
import hakem from './db/kimlik.js'

dotenv.config()

mongoose.connect("mongodb://localhost:27017/futbol").then(async() => {
    console.log('connected to db')
})
.catch((err)=> console.log(err))

const app = express()
app.use(cors())
app.use(express.json())

app.use('/',router)

app.listen(process.env.PORT)