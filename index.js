const express = require('express')
const app = express()
const port = process.env.PORT || 3003

const { hello } = require('./utils')

app.get('/', (req, res) => {
  res.send({ 
    status: trues
  })
})

app.get('/greet', (req, res) => {
  res.send({ 
    text: hello(),
    fname: req.query.fname,
    lname: req.query.lname,
    grade: req.query.grade,
  })
})

app.listen(port, () => console.log(`Server is running at port ${port}`))