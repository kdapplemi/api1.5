var registerRepository = require('../repository/registerRepository');

exports.create_a_user = function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    // Validation
    console.log('name = ' + name);
    console.log('email = ' + email);
    console.log('username = ' + username);
    console.log('password = ' + password);
    console.log('password2 = ' + password2);

    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();

    var result = registerRepository.newUer(name, email, username, password);
    res.json(result);

};