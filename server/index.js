const express = require('express')
const app = express()
const mysql = require("mysql2")
const cors = require("cors")

const port = 3001

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Vasco302829@",
  database: "loginstudy",
});

app.post('/register', (req, res) => {
  console.log(req.body)

  const username = req.body.username
  const password = req.body.password
  const first_name = req.body.first_name

  db.query(
    "INSERT INTO users (username, password, first_name) VALUES (?,?,?)",
    [username, password, first_name],
      (err, result) => {
        if (err) {
          console.log(err)
        } else {
          res.send("Values Inserted")
        }
      }
  )
})

app.get("/users", (req, res) => {
  db.query(
    "SELECT * FROM users", (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})