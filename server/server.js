const express = require('express')
const app = express()
const mysql = require('./db')()
const cors = require('cors')
require('dotenv').config(); 
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.listen(port, () => console.log(`${port}`))

app.get('/', (req, res) => {
  res.send("hi")
})

const connection = mysql.init()
mysql.open(connection)