const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/date', (req, res) => {
  res.send('date')
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})