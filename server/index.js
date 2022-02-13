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

app.post("/users", (req, res) => {
  const username = req.body.username
  const password = req.body.password

  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
    if (err) {
      res.send({err: err})
    } 
    if (result.length > 0) {
      res.send(result)
    } else {
      res.send({message: "Login Error: Wrong username/password combination"})
    }
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})