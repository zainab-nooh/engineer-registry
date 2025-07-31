// //Imports (Packages needed)

const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')
const engineerViewcontroller = require('../engineers/viewController')

router.post('/', dataController.createUser ,viewController.redirectLogin) //SignUp User => Login Page
router.get('/', viewController.signUp) //show sign up form
router.post('/login', dataController.loginUser, engineerViewcontroller.redirectHome)
router.get('/login', viewController.signIn) //show up sign in form
router.put('/:id', dataController.updateUser)
router.delete('/:id', dataController.auth, dataController.deleteUser)

module.exports = router