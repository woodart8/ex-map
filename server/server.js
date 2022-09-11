const express = require('express')
const app = express()
// const mysql = require('mysql')
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

// const db = mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
//   port: process.env.PORT
// })

// db.connect(function(err) {
//   // if (err) throw err
//   // console.log('Connected!')
//   if(err) {
//     console.log('mysql connection error: '+err)
//     res.send(err.toString())
//   } else {
//     console.log('mysql is connected successfully.')
//   }
// })