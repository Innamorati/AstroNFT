const express = require('express')
require('dotenv').config()
const PORT = 4000
const app = express()
require('./config/database')

app.use(express.json())


app.listen(PORT, () => console.log('server ready on PORT ' + PORT))
