const express = require('express')
const app = express()
const port = 3000

const { readFile } = require('fs').promises;


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', async (req, res) => {
  // res.send('Hello About!')
  res.send(await readFile('./about.html', 'utf8'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


