const { queryDB } = require('../db');

const List = {}

List.findAll = async () => {
    const response = await queryDB('SELECT * FROM items');
    return response.rows;
}

List.ToDoByID = async (id) => {
    const ToDoByID = await queryDB('SELECT * FROM items WHERE owner_id = $1', [id]);
    return ToDoByID.rows;
}

//This is to query for a spesific item
Tool.oneToDo = async (toDoID) => {
    const oneToDo = await queryDB('SELECT * FROM items WHERE id = $1', [toDoID]);
    return oneToDo.rows[0];
}

List.createToDo = async (toDo, ownerID) => {
    const createToDo = await queryDB('INSERT INTO items (item, owner_id) VALUES ($1, $2 ) RETURNING *', [toDo, ownerID]);
    return createToDo.rows;
}

List.deleteToDo = async (toDoID) => {
    const deleteToDo = await queryDB('DELETE FROM items WHERE id = $1 RETURNING *', [toDoID]);
    return deleteToDo.rows;
};

module.exports = List;