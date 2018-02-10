var userRepository = require('../repository/userRepository');
var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.list_all_users = function(req, res) {
    userRepository.listallusers(User, res);
};

exports.create_a_user = function(req, res) {
    var new_user = new User(req.body);
    userRepository.createUser(new_user, res);
};