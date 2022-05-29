import express from "express"
import connectToMongo from "./db.js"

const app = express()
const port = 3000 || process.env.PORT


//db

connectToMongo();

//middleware


//Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Listener
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})