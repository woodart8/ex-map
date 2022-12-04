const express = require('express')
const router = express.Router()
const { pool } = require('../db')

const Provider = require('../src/Provider')
const provider = new Provider()
const web3 = provider.web3

const userSignUp = async(req) => {
  const id = req.body.id
  const username = req.body.username
  const password = req.body.password

  const query = 'INSERT INTO user (user_id, user_pwd, user_name, user_addr) VALUES (?, ?, ?, ?)'

  try {
    const connection = await pool.getConnection(async conn => conn)

    try {

      const newAccount = await web3.eth.personal.newAccount(password)
      const result = await connection.query(query, [id, password, username, newAccount])
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

const getQuestionsByUser = async(req) => {
  const id = req.body.id

  const query = `SELECT question_content, question_title FROM question WHERE question_writer = ?`

  try {
    const connection = await pool.getConnection(async conn => conn)
		try{
	    const [questionResult] = await connection.query(query, id)
			connection.release()
			return questionResult
		} catch(err) {
			console.log('Query error')
      connection.release()
      return false
		}
  } catch(err) {
    console.log(err)
    return { err: err, success: false }
  }
  
}

const getReviewsByUser = async(req) => {
  const id = req.body.id

  const query = `SELECT rev_content, rev_title FROM review WHERE rev_writer = ?`

  try {
    const connection = await pool.getConnection(async conn => conn)
		try{
	    const [reviewResult] = await connection.query(query, id)
			connection.release()
			return reviewResult
		} catch(err) {
			console.log('Query error')
      connection.release()
      return false
		}
  } catch(err) {
    console.log(err)
    return { err: err, success: false }
  }
  
}

const getExhibitionsByUser = async(req) => {
  const id = req.body.id

  const queryForVisit = `SELECT visit_ex FROM visit WHERE visit_user = ?`
	const queryForExhibition = `SELECT ex_id, ex_img, ex_keyword FROM exhibition WHERE ex_id = ?`

  try {
    const connection = await pool.getConnection(async conn => conn)
		try{
	    const [visitResult] = await connection.query(queryForVisit, id)

			if(visitResult.length == 0) {
				connection.release()
				return { msg: 'There are no exhibitions visited by this user.' }
			}

			let exhibitionResult = []

			for(let i = 0; i < visitResult.length; i++) {
				const [result] = await connection.query(queryForExhibition, visitResult[i].visit_ex)
				exhibitionResult.push(result) 
			}

			connection.release()
			return exhibitionResult
		} catch(err) {
			console.log('Query error')
      connection.release()
      return false
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

router.post('/question', async (req, res) => {
  let questionRes = await getQuestionsByUser(req)
  res.send(questionRes)
})

router.post('/review', async (req, res) => {
  let reviewRes = await getReviewsByUser(req)
  res.send(reviewRes)
})

router.post('/exhibition', async (req, res) => {
  let exhibitionRes = await getExhibitionsByUser(req)
  res.send(exhibitionRes)
})

module.exports = router