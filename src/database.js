const mongoose = require('mongoose')
require('dotenv').config()
const User = require('./model/user')

mongoose.Promise = global.Promise
// connect
mongoose.connect(process.env.MONGO_URL)
const db = mongoose.connection
db.on('error', e => console.log(`failed to connect the database, maybe it's not configured properly`))
db.once('open', e => console.log('connected to database'))

module.exports = mongoose