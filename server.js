const express = require('express')
const Router = require('./routes/Routes')
const cors = require('cors')
require('dotenv').config()
const PORT = 4000
const app = express()
require('dotenv').config();
require('./config/database')

app.use(cors())
app.use(express.json())
app.use('/api', Router)


app.listen(PORT, () => console.log('server ready on PORT ' + PORT))
