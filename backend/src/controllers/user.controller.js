const User = require('../models/user.model');
const bcrypt = require('bcrypt')


//this is how you map through all the users for username(copy this for todo list to only return the todo item)
module.exports.getAll = async (req, res) => {
    const allUsers = await User.findAll();
    res.json(allUsers.map((original) => {
        return {
            user_name: original.user_name
        }
    }));
}

module.exports.find = async (req, res) => {
    res.json(await User.findUser(req.user.id));
}

module.exports.createUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, parseInt (process.env.TO_DO_SALT, 10))
        res.json(await User.createUser(req.body.username, hashedPassword)).send()
        console.log('hey')
    } catch (e) { 
        console.error(e)
        res.status(500).send()
    }
}

module.exports.deleteUser = async (req, res) => {
    try {
        res.json(await User.deleteUser(req.body.id))
        console.log('user deleted')
    } catch (e) { 
        console.error(e)
        res.status(500).send()
    }
}