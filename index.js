const express = require('express')
const app = express()
const port = process.env.PORT || 3003
const { hello } = require('./helpers/index')
const { user } = require('./helpers/user')

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

app.get('/user', (req, res) => {
  res.send({ 
    msg: user()
  })
})

app.listen(port, () => console.log(`Server is running at port ${port}`))