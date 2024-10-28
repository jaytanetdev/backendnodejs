const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/date', (req, res) => {
  res.send('date')
})

app.get('/test', (req, res) => {
  res.send('tes')
})

app.get('/a', (req, res) => {
  res.send('a')
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})