const express = require('express')
const app = express()
const port = process.env.PORT || 3003
const { hello } = require('./helpers/index')

app.get('/', (req, res) => {
  res.send({ 
    status: true
  })
})

app.get('/hello', (req, res) => {
  res.send({ 
    msg: hello()
  })
})

app.listen(port, () => console.log(`Server is running at port ${port}`))