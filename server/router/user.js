const express = require('express')
const router = express.Router()
const { pool } = require('../db')

const userSignUp = async(req) => {
  const id = req.body.id
  const username = req.body.username
  const password = req.body.password

  const query = 'INSERT INTO user (user_id, user_pwd, user_name) VALUES (?, ?, ?)'

  try {
    const connection = await pool.getConnection(async conn => conn)

    try {

      const result = await connection.query(query, [id, password, username])
      connection.release()
      return { success: true }

    } catch(err) {

      console.log(err)
      connection.release()
      return { message: "fail", success: false }

    }

  } catch(err) {
    console.log(err)
    return { err: err, success: false }
  }
}

router.post('/signup', async (req, res) => {
  let signUpRes = await userSignUp(req)
  res.send(signUpRes)
})

module.exports = router