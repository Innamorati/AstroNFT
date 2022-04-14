const express = require('express')
const Router = require('./routes/Routes')
const cors = require('cors')
require('dotenv').config()
const PORT = 4000
const app = express()
require('dotenv').config();
require('./config/database')

const path = require('path');

app.use(cors())
app.use(express.json())
app.use('/api', Router)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
}


app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0', () => console.log(`server ready on PORT ${process.env.PORT || 4000}`))
