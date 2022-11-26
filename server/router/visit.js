const express = require('express')
const router = express.Router()
const { pool } = require('../db')

const addVisit = async(req) => {
  const exId = req.body.exId
	const userId = req.body.userId

  const query = `INSERT INTO visit (visit_user, visit_ex) VALUES (?, ?)`

  try {
    const connection = await pool.getConnection(async conn => conn)

		try{

	    const result = await connection.query(query, [userId, exId])
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

const removeVisit = async(req) => {
  const exId = req.body.exId
	const userId = req.body.userId

  const query = `DELETE FROM visit WHERE visit_user = ? AND visit_ex = ?`

  try {
    const connection = await pool.getConnection(async conn => conn)

		try{

	    const result = await connection.query(query, [userId, exId])
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

router.post('/add', async (req, res) => {
  let addRes = await addVisit(req)
  res.send(addRes)
})

router.post('/remove', async (req, res) => {
  let removeRes = await removeVisit(req)
  res.send(removeRes)
})

module.exports = router;