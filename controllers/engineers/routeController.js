const express = require('express') 
const router = express.Router()
const viewController = require('./viewController')
const dataController = require('./dataController')


//Index -> Get 
router.get('/', dataController.index, viewController.index )
//New -> Get No data needed just view
router.get('/new', viewController.newView)
//Destroy -> delete
router.delete('/:id', dataController.delete, viewController.redirectHome)
//Update -> PUT
router.put('/:id', dataController.update, viewController.update)
//Create -> POST
router.post('/', dataController.create, viewController.create)
//Edit -> Get
router.get('/:id/edit', dataController.show, viewController.edit)
//Show -> Get
router.get('/:id', dataController.show, viewController.show)

module.exports = router