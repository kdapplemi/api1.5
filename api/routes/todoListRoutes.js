'use strict';
module.exports = function(app) {
    var todoList = require('../controllers/todoListController');
    var users = require('../controllers/userController');
    var autenticate = require('../controllers/authenticateController');
    var register = require('../controllers/registerController');


    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);


    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);


    // Users Routes
    app.route('/users')
        .get(users.list_all_users)
        .post(users.create_a_user);

    // Users Routes
    app.route('/register')
        // .get(register.list_all_users)
        .post(register.create_a_user);

    app.route('/login')
        .post(autenticate.login);
};