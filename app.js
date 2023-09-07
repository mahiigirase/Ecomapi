const express = require('express');
const mongoose = require('mongoose')
const productRoute = require('./Route/productRoute')
const categoryRoute = require('./Route/categoryRoute')
require('dotenv/config');

const app = express()

app.use(express.json())

app.use('/api/product',productRoute)
app.use('/api/category',categoryRoute)



app.listen(process.env.PORT,()=>{
    console.log("app is live now")
})

async function data(){
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.default.STATES.connected)
    } catch (error) {
        console.log(error.message)
    }
}
data()
