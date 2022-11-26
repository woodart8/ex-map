const express = require('express')
const router = express.Router()
const { pool } = require('../db')
const upload = require('../modules/multer')

const loadProInfo = async() => {
  try {
    const connection = await pool.getConnection(async conn => conn)

		const query = `SELECT pro_id, pro_title, pro_content, pro_img FROM promotion`

    try {
      const [rows] = await connection.query(query)
      connection.release()
      return rows
    } catch(err) {
      console.log('Query error')
      connection.release()
      return false
    }

  } catch(err) {
    console.log('DB error')
    return false
  }
}

const getProInfoByProId = async(req) => {
  const proId = req.body.proId

  const query = `SELECT pro_title, pro_writer, pro_period, pro_place, pro_content FROM promotion WHERE pro_id = ?`

  try {
    const connection = await pool.getConnection(async conn => conn)
		try{
	    const [promotionResult] = await connection.query(query, proId)
			connection.release()
			return promotionResult
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

const proUploadWithImg = async(req) => {
  const title = req.body.title
  const writer = req.body.writer
  const content = req.body.content
	const period = req.body.period
	const place = req.body.place
  const image = req.file.location

  const query = `INSERT INTO promotion (pro_title, pro_writer, pro_content, pro_period, pro_place, pro_img) VALUES (?, ?, ?, ?, ?, ?)`

  try {
    const connection = await pool.getConnection(async conn => conn)

    try {

      const result = await connection.query(query, [title, writer, content, period, place, image])
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

const proUpload = async(req) => {
  const title = req.body.title
  const writer = req.body.writer
  const content = req.body.content
	const period = req.body.period
	const place = req.body.place

  const query = `INSERT INTO promotion (pro_title, pro_writer, pro_content, pro_period, pro_place) VALUES (?, ?, ?, ?, ?)`

  try {
    const connection = await pool.getConnection(async conn => conn)

    try {

      const result = await connection.query(query, [title, writer, content, period, place])
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

router.get('/', async (req, res) => {
  let proData = await loadProInfo()
  res.send(proData)
})

router.post('/proid', async (req, res) => {
  let promotionRes = await getProInfoByProId(req)
  res.send(promotionRes)
})

router.post('/post/image', upload.single('image'), async (req, res) => {
  let uploadRes = await proUploadWithImg(req)
  res.send(uploadRes)
})

router.post('/post', async (req, res) => {
  let uploadRes = await proUpload(req)
  res.send(uploadRes)
})

module.exports = router