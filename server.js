const express = require('express')

const app = express()

const appData = require('./data.json')
const articles = appData.articles

const router = express.Router()

router.get('/index', function (req, res) {
  res.json({
    errno: 0,
    data: articles
  })
})

app.use('/api', router)

app.use(express.static('./dist'))

const PORT = process.env.PORT || 4000

module.exports = app.listen(PORT, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('listening at http://localhost:' + PORT + '\n')
})
