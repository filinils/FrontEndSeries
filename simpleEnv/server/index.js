const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/api/experience', function (req, res) {
    res.send('{"data":[{"title":"Capgemini","description":"Some text"},{title:"Capgemini",description:"Some text"}]}')
  })

app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})