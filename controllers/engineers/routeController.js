const express = require('express') 
const router = express.Router()
const viewController = require('./viewController')
const dataController = require('./dataController')
const authDataController = require('../auth/dataController')


//Index -> Get 
router.get('/', authDataController.auth, /*check if the token exists in the header or query, set req.user and res.locals.data.token */ 
    dataController.index, /*grab and save login user's fruits */
    viewController.index); /*Display the logged in users fruits and also teh link the new page with the token */
// New
router.get('/new', authDataController.auth, viewController.newView );
// Delete
router.delete('/:id', authDataController.auth, dataController.destroy, viewController.redirectHome);
// Update
router.put('/:id', authDataController.auth, dataController.update, viewController.redirectShow);
// Create
router.post('/', authDataController.auth, dataController.create, viewController.redirectHome);
// Edit
router.get('/:id/edit',authDataController.auth, dataController.show, viewController.edit);
// Show
router.get('/:id', authDataController.auth, dataController.show, viewController.show);

// Export my router
module.exports = router