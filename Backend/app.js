const dotenv=require('dotenv')
dotenv.config();

const express=require('express')
const cors=require('cors')
const app=express()
const connectToDb=require('./db/db')
const userRoutes=require('./Routes/user.routes')
const captainRoutes=require('./Routes/captain.routes')  
const cookieParser=require('cookie-parser')
 connectToDb()
app.use(cors())
app.use(express.json()); 
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.use('/users',userRoutes)
app.use('/captain',captainRoutes)


module.exports=app
