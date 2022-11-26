const express = require('express')
const app = express()
const mysql = require('./db')
const cors = require('cors')
require('dotenv').config(); 
const port = process.env.PORT || 5000
const exhibitionRouter = require('./router/exhibition');
const userRouter = require('./router/user')
const docentRouter = require('./router/docent')
const bookingRouter = require('./router/booking')
const ethRouter = require('./router/ethereum')

app.use(express.json())
app.use(cors())
app.use(express.static('client'))

app.listen(port, () => console.log(`${port}`))

app.get('/', (req, res) => {
  res.send("hi")
})

app.use('/api/exhibition', exhibitionRouter)

app.use('/api/user', userRouter)
app.use('/api/docent', docentRouter)

app.use('/api/eth', ethRouter)
app.use('/booking', bookingRouter)