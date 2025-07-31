//Imports
const express = require('express')
const router = express.Router()
const userApiController = require('../controllers/auth/apiController')
const engineerApiController = require('../controllers/engineers/apiController')
const enginerrDataController = require('../controllers/engineers/dataController')
const userDataController = require('../controllers/auth/dataController') //Not used now

// User API Routes
router.post('/users', userApiController.createUser)
router.post('/users/login', userApiController.loginUser)
router.get('/users/profile', userApiController.auth, userApiController.getProfile)
router.put('/users/:id', userApiController.auth, userApiController.updateUser)
router.delete('/users/:id', userApiController.auth, userApiController.deleteUser)

// Engineer API Routes
router.get('/fruits', userApiController.auth, enginerrDataController.index, engineerApiController.index)
router.get('/fruits/:id', userApiController.auth, enginerrDataController.show, engineerApiController.show)
router.post('/fruits', userApiController.auth, enginerrDataController.create, engineerApiController.create)
router.put('/fruits/:id', userApiController.auth, enginerrDataController.update, engineerApiController.update)
router.delete('/fruits/:id', userApiController.auth, enginerrDataController.destroy, engineerApiController.destroy)

module.exports = router 

