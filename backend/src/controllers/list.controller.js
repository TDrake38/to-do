const List = require('../models/list.model');

// this is a test to see if I can find all items
module.exports.findItems = async (req, res) => {
    res.json(await List.findAll());
}

module.exports.getItemsByID = async (req, res) => {
    res.json(await List.ToDoByID(req.user.id));
}

module.exports.createToDo = async (req, res) => {
    console.log(req.body)
    try {
        res.json(await List.createToDo(req.body.toDo, req.user.id)).send()
        console.log('item created')
    } catch (e) { 
        console.error(e)
        res.status(500).send()
    }
}

module.exports.deleteToDo = async (req, res) => {
    
    try {
        const item = await List.oneToDo(req.params.id)
        if (item === undefined) return res.sendStatus(404)
        if (parseInt(req.user.id, 10) !== item.owner_id){
            res.status(401).send()
            console.log('No match')
        } else {
            res.json(await List.deleteToDo(req.params.id))
            console.log("Match, item deleted")
        }
    } catch (e) { 
        console.error(e)
        res.status(500).send()
    }
}