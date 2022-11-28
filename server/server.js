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
const loginRouter = require('./router/login')
const questionRouter = require('./router/question')
const answerRouter = require('./router/answer')
const qnaRouter = require('./router/qna')
const reviewRouter = require('./router/review')
const visitRouter = require('./router/visit')
const promotionRouter = require('./router/promotion')

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
app.use('/api/booking', bookingRouter)

app.use('/api/login', loginRouter)

app.use('/api/qna', qnaRouter)

app.use('/api/question', questionRouter)
app.use('/api/answer', answerRouter)

app.use('/api/review', reviewRouter)

app.use('/api/visit', visitRouter)

app.use('/api/promotion', promotionRouter)