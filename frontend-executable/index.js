const express = require('express')
const app = express()
const port = 8080
app.use('/', express.static(__dirname + '/pwa'));

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})