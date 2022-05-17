const userAuth = require('./routes/auth.routes')
const {checkIsAuthenticated} = require('./controllers/auth.controller')


// Server stuff
const { config } = require('dotenv');
config();
const express = require('express')
const app = express()



app.use(express.json())
app.use(checkIsAuthenticated)
app.use(express.urlencoded({ extended: false }))

userAuth(app);


console.log("hello");
app.listen(3000)