import express from 'express'
import path from 'path'
import authRouter from './routes/auth/auth.router'
import cookieParser from 'cookie-parser'
import profileRouter from './routes/profile/profile.router'
import layoutRouter from './routes/layout/layout.router'
import dashboardRouter from './routes/dashboard/dashboard.router'
import analysisRouter from './routes/analysis/analysis.router'
import { checkAuth } from './routes/auth/auth.controller'
import dotenv from 'dotenv'
import cors from "cors"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: [`${process.env.CLIENT_URL}`],
    credentials: true
}))

app.use('/auth' , authRouter)
app.get('/' , (req , res) => {
    res.json({
        message: "hello world",
        clientURL: `${process.env.CLIENT_URL}`
    })
})
app.use('/api' , checkAuth , profileRouter)
app.use('/api', checkAuth , layoutRouter)
app.use('/api', checkAuth , dashboardRouter)
app.use('/api' , checkAuth , analysisRouter)

app.use('/api/images', express.static(path.join(__dirname, '..' , 'uploads')))
// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static(path.join(__dirname , '..' , 'public')));
//     app.use('/*' , (req , res) => {
//         return res.sendFile(path.join(__dirname , '..' , 'public' , 'index.html'));
//     })
// }
export default app