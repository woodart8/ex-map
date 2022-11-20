const express = require('express')
const router = express.Router()
const { pool } = require('../db')
require('dotenv').config(); 
const multer = require('multer');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
})

// single file upload
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'exmap-s3-bucket',
    acl: 'public-read-write',
    key: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
    limits: { fileSize: 5 * 1024 * 1024 },
  }),
});

const docentSignUp = async(req) => {
  const id = req.body.id
  const username = req.body.username
  const password = req.body.password
  const authimage = req.file.location

  const query = 'INSERT INTO docent (docent_id, docent_pwd, docent_name, docent_auth) VALUES (?, ?, ?, ?)'

  try {
    const connection = await pool.getConnection(async conn => conn)

    try {

      const result = await connection.query(query, [id, password, username, authimage])
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

router.post('/signup', upload.single('image'), async (req, res) => {
  let signUpRes = await docentSignUp(req)
  res.send(signUpRes)
})

module.exports = router