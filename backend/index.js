import express from "express"
import connectToMongo from "./db.js"
import router from "./routes/auth.js"

const app = express()
const port = 3000


//db
connectToMongo();

//middleware
app.use(express.json());


//Routes
app.use('/api/auth', router)

//Listener
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})