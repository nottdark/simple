const express = require('express')
const app = express()
const port = process.env.PORT || 3003

const { hello } = require('./utils')
const { toDate } = require('./utils/datetime')

app.get('/', (req, res) => {
  res.send({ 
    status: trues
  })
})

app.get('/greet', (req, res) => {
  res.send({ 
    text: hello(),
    fname: req.query.fname,
  })
})

app.get('/today', (req, res) => {
  res.send({ 
    text: toDate()
  })
})

app.listen(port, () => console.log(`Server is running at port ${port}`))