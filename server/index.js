const express = require('express');
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.json())


const port = process.env.PORT || 5000

const users = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "email": "alice.j@example.com"
  }
]




app.get("/",(req,res) => {
  res.send("User managment App")
})

app.get("/users",(req,res) => {
  res.send(users)
})

app.post("/users", (req,res) => {
  console.log("get Data")

  const id = users.length + 1

  const newUser = {id: id,...req.body}
  users.push(newUser)

  res.send(users)
})


app.listen(port, () => {
  console.log(`app rouning :  localhost:${port}`)
})