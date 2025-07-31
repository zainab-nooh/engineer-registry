const User = require('../../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const dataController = {}

//  Auth middleware with correct token handling
dataController.auth = async (req, res, next) => {
  try {
    let token

    if (req.query.token) {
      token = req.query.token
    } else if (req.header('Authorization')) {
      token = req.header('Authorization').replace('Bearer ', '')
    } else {
      throw new Error('No token provided')
    }

    const data = jwt.verify(token, 'secret')
    const user = await User.findOne({ _id: data._id })
  
    if (!user) {
      throw new Error('User not found')
    }

    req.user = user
    res.locals.data.token = token // Store token for views or redirects
    next()
  } catch (error) {
    res.status(401).send('Not authorized')
  }
}

//  Create User and return token
dataController.createUser = async (req, res, next) => {
  try {
    const user = new User(req.body)
    await user.save()
    const token = await user.generateAuthToken()
    res.locals.data.token = token
    req.body = user
    next()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

//  Login User and return token
dataController.loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })

    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
      return res.status(400).send('Invalid login credentials')
    }

    const token = await user.generateAuthToken()
    res.locals.data.token = token
    req.user = user
    next()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

//  Update User
dataController.updateUser = async (req, res) => {
  try {
    const updates = Object.keys(req.body)
    const user = await User.findOne({ _id: req.params.id })

    updates.forEach(update => user[update] = req.body[update])
    await user.save()
    res.json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

//  Delete User
dataController.deleteUser = async (req, res) => {
  try {
    await req.user.deleteOne()
    res.json({ message: 'User deleted' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = dataController
