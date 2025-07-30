// Connection to  the app where all the routes 
//And pachakges are in there + to the mongoDataBase

require('dotenv').config()
const app = require('./app')
const db = require('./models/db')
const PORT =  process.env.PORT || 3000

// once connected to db

db.once('open' ,( )=> {
    console.log('Connected to mongoDB')
})


// If error shappen show error message
db.on('error', (error) => {
    console.error(error.message)
})


// Connect to app on port 3000
app.listen(PORT, () => {
    console.log('app is running on port 3000')
})