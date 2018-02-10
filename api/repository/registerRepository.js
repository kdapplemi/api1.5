var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');

module.exports = {
    newUer(name, email, username, password) {
        var connection = new Sequelize('NorthStar', 'mLinux', 'Password@123', {
            host: 'localhost',
            dialect: 'postgres'
        });

        const User1 = Sequelize.define('user1', {
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            }
        });

        // force: true will drop the table if it already exists
        User.sync({ force: true }).then(() => {
            // Table created
            return User1.create({
                firstName: 'John',
                lastName: 'Hancock'
            });
        });

        res.json('login');
    }
}