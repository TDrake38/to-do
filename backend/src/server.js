const userAuth = require('./routes/auth.routes')
const {checkIsAuthenticated} = require('./controllers/auth.controller')
const registerToDo = require('./routes/list.routes')
const registerUsers = require('./routes/user.routes')

// Server stuff
const { config } = require('dotenv');
config();
const express = require('express')
const app = express()

app.use(express.json())
app.use(checkIsAuthenticated)
app.use(express.urlencoded({ extended: false }))

userAuth(app);
registerToDo(app);
registerUsers(app);

console.log("Sup!");
app.listen(3000)