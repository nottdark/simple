const express = require('express')
const app = express()
const port = process.env.PORT || 3003

app.get('/', (req, res) => {
  res.send({ 
    status: true
  })
})

app.listen(port, () => console.log(`Server is running at port ${port}`))