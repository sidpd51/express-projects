require('dotenv').config()
require('express-async-errors')

// async errors 

const express = require('express')
const app = express()

const errorMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')
const connectDB = require('./db/connect')
const productRouter = require('./routes/products')

//middleware 
app.use(express.json())

// routes 

app.get('/', (req,res)=>{
    res.send('<h1>Store Api</h1><a href="/api/v1/products">products route</a>')
})

app.use('/api/v1/products', productRouter)

const port = process.env.PORT || 3000
  
// products route

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`server is running at port no: ${port}`)
        })
    }catch(error) {
        console.log(error)
    }
}

start()