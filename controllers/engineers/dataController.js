    const Engineer = require('../../models/engineer')

    const dataController = {}
    //Index
    dataController.index = async (req, res, next) => {
        try {
            res.locals.data =  {engineers : await Engineer.find({}) }
            next()
        }
        catch(error) { 
            res.status(400).send({message: error.message})}
    }
    //New 
    // dataController.newView = async(req, res, next) => {
    //     try {
    //         next()  
    //     }
    //     catch(error) { 
    //         res.status(400).send({message: error.message})}
    // }

    //Destroy
    dataController.delete = async (req, res, next) => {
        try {
            await Engineer.findOneAndDelete({'_id' : req.params.id})
            next()
        }
        catch(error) { 
            res.status(400).send({message: error.message})}
    }
    //Update
    dataController.update = async (req, res, next) => {
        if(req.body.available === 'on' ) {
            req.body.available = true
        } else if (req.body.available !== true) {
            req.body.available = false
        }    
        try {
        res.locals.data.engineer = await Engineer.findOneAndUpdate({ '_id': req.params.id}, req.body, { new: true} )
            next()   
        }
        catch(error) { 
            res.status(400).send({message: error.message})}
    }
    //Create
    dataController.create = async (req, res, next) => {
        if(req.body.available === 'on' ) {
            req.body.available = true
        } else if (req.body.available !== true) {
            req.body.available = false
        }
        try {
            res.locals.data.engineer = await Engineer.create(req.body) 
            next()
        }
        catch(error) { 
            res.status(400).send({message: error.message})}
    }
    //Edit

    //Show
    dataController.show = async (req, res, next) => {
        try {
            res.locals.data.engineer = await Engineer.findById(req.params.id)
            if (!res.locals.data.engineer) {
                throw new Error('There is no Engineer with that Id in our database')
            }else{
                next()
                }
            }
        catch(error) { 
            res.status(400).send({message: error.message})}
        }

        module.exports = dataController