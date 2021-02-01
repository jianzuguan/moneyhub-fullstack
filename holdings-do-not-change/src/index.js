const express = require("express")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")
const config = require("config")
const holdings = require("./data")

const app = express()

app.use(bodyParser.json({limit: "10mb"}))

app.get("/holdings", (req, res) => {
  res.send(holdings)
})

app.get("/holdings/:userId", (req, res) => {
  const {userId: requestedUserId} = req.params
  const holding = holdings.filter(({userId}) => userId === requestedUserId)
  res.send(holding)
})

app.post("/holdings/export", (req, res) => {
  console.log("Body received", req.body)
  res.sendStatus(204)
})

app.listen(config.port, (err) => {
  if (err) {
    console.error("Error occurred starting the server", err)
    process.exit(1)
  }
  console.log(`Server running on port ${config.port}`)
})
