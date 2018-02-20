require('./database')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const { saveUser, checkuser } = require('./controller/authController')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))
app.post('/signup', saveUser)
app.post('/login', checkuser)
app.get('/dashboard', (req, res) => res.send('dashboard'))

const port = process.env.PORT || 4567
app.listen(port, () => console.log(`listening on port ${port}!`))