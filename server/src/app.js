const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const dbconnect = require('./dbconnect')

const app = express()

app.use(bodyparser.json())
app.use(cors())
app.use(morgan('combined'))

dbconnect()

routes(app)

app.listen(8000,() => {
    console.log('Server started at port 8000')
})