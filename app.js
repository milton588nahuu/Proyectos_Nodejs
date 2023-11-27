const express = require('express')
require('./Routes/err')
const app = express()
const router = require('./Routes/router')
const errUrl = require('./Routes/err')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'));



app.set('views engine','ejs');


app.use("/api",router)
app.use('/',errUrl)

app.listen(3000,()=>{
    console.log('server up!')
})