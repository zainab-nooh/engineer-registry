// Connection to mongoDb
require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)

module.exports = mongoose.connection

//This will be linked to the server.js 
//So the only thing that happens in server.js 
// Is the connection to the port whicghh is the browser 
//And to the mongo database 