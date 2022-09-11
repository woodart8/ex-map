const mysql = require('mysql')
require('dotenv').config(); 

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

module.exports = function() {
  return {
    init: function () {
      return mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        port: process.env.DB_PORT
      })
    },

    open: function(con) {
      con.connect(function(err) {
        // if (err) throw err
        // console.log('Connected!')
        if(err) {
          console.log('mysql connection error: '+err)
        } else {
          console.log('mysql is connected successfully.')
        }
      })
    }
  }
}