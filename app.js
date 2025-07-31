//Add ALll pacjkages needed 
// + links to all routes like data ,views routes
//Will not add require('dotenv').config() <- added in serevr.js + db.js

const express = require('express')
const morgan = require('morgan')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const userRoutes = require('./controllers/auth/routeController')
const engineerRoutes = require('./controllers/engineers/routeController')
const apiRoutes = require('./routes/apiRoutes')

//const engineer
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.use(express.json())
app.use(express.urlencoded({ extended: true})) //req.body
app.use(methodOverride( '_method'))
app.use( (req,res,next) => {
    res.locals.data = {}
    next()
})


app.use(express.static('public'))
app.use(morgan('dev'))


// Web routes (for views)
app.use('/engineers',engineerRoutes)
app.use('/users', userRoutes)


// API routes (for JSON responses)
app.use('/api', apiRoutes)

module.exports = app