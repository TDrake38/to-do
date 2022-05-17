const { queryDB } = require('../db');

const User = function (user) {
    this.username = user.username;
    // ...
}

module.exports = User;