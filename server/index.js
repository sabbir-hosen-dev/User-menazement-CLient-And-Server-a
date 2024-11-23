const express = require('express');

const app = express()


const port = process.env.PORT || 5000

const user = 



app.get("/",(req,res) => {
  res.send("User managment App")
})



app.listen(port, () => {
  console.log(`app rouning :  localhost:${port}`)
})