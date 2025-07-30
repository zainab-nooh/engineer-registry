const RESOURCE_PATH = '/engineers'

const viewController = {
    //Index
    index(req, res, next) {
        res.render('engineers/Index', res.locals.data)
    },

    //New
    newView(req, res, next ) {
        res.render('engineers/New', res.locals.data)
    },
    //Destroy
    // delete(req, res, next) {

    // },
    //Update
    update(req, res, next) {
        res.redirect(`/engineers/${req.params.id}`)
    },
    //Create
    create(req, res, next) {
        res.redirect(`/engineers/${res.locals.data.engineer._id}`)
    },
    //Edit
    edit(req, res, next) {
            res.render('engineers/Edit', res.locals.data)
    
    },
    //Show
    show(req, res, next) {
        res.render('engineers/Show', res.locals.data)
    }, 

    redirectHome(req, res, next) {
        res.redirect(RESOURCE_PATH)
    }
}

module.exports = viewController