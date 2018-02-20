const User = require('../model/user')
const { rot13 } = require('../helper')

exports.saveUser = async (req, res) => {
  const email =  req.body.email
  const password = req.body.password

  try {
    const newuser = new User({email, password})
    await newuser.save()
    res.json(newuser.email)
  }
  catch(err) {
    res.json({error: `Oops! some error happened! ${err}`})
  }
}

exports.checkuser = async (req, res) => {
  const email =  req.body.email
  const password = req.body.password

  try {
    const newuser = await User.findOne({email, password})
    if (newuser) {
      res.json(newuser.email)
    }
    else {
      res.json({error: `Oops! some error happened!`})
    }
  }
  catch(err) {
    res.json({error: `Oops! some error happened! ${err}`})
  }
}
