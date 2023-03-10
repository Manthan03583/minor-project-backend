const express = require('express')
const path = require('path')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.port || 8000
const propertiesRouter = require('./routes/propertiesRoutes')
const userRouter = require('./routes/userRoutes')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')


connectDB()
const app = express()
var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) =>{
    res.header("Content-Security-Policy", "default-src 'none'; img-src 'self' data:");
    next();
  });
app.use('/backend/uploads',express.static(path.join(__dirname, 'uploads').split('\\').join('/')))


app.use('/api/properties', propertiesRouter)
app.use('/api/users', userRouter)


app.use(errorHandler)

app.listen(port,console.log(`server started at port ${port}`))