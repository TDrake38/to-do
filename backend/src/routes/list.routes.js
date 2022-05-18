const { findItems, createToDo, deleteToDo, getItemsByID } = require('../controllers/list.controller');

const registerToDo = (app) => { 
    app.get('/findItem', findItems)
    app.post('/toDo', createToDo)
    app.delete('/toDo/:id', deleteToDo)
    app.get('/getList', getItemsByID)
};

module.exports = registerToDo;
