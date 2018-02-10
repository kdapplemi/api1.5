var express = require('express'),
    expressValidator = require('express-validator'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'), //created model loading here
    User = require('./api/models/userModel'), //created model loading here
    Login = require('./api/models/loginModel'), //created model loading here
    bodyParser = require('body-parser');
var cors = require('cors');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/NorthStar');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});
app.listen(port);


console.log('todo list RESTful API server started on: ' + port);