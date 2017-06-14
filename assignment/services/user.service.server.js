const app = require('../../express');
const userModel = require("../models/user/user.model.server");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    userModel.findUserById(user._id)
        .then(function(user) {
            done(null, user);
        }, function(err) {
            done(err, null);
        });
});

passport.use(
    new LocalStrategy(
        function(username, password, done) {
            userModel.findUserByCredentials(username, password)
                .then(
                    function(user) {
                        if(user) {
                            console.log(user.username);
                            console.log(user._id);
                            return done(null, user);
                        } else {
                            return done(null, false);
                        }
                    },
                    function(err) {
                        if(err) {
                            return done(err);
                        }
                    }
                );
        }
    )
);


// queryUsers handles both findUserByUserName and findUserByCredentials
app.get('/api/assignment/user/:userId', findUserById);
app.get('/api/assignment/user', queryUsers);
app.post('/api/assignment/user', createUser);
app.put('/api/assignment/user/:userId', updateUser);
app.delete('/api/assignment/user/:userId', deleteUser);
app.post('/api/login', passport.authenticate('local'), login);
app.post('/api/logout', logout);
app.post('/api/register', register);
app.get('/api/loggedin', loggedin);

function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
}

function register(req, res) {
    const user = req.body;
    userModel.createUser(user)
        .then(function(user) {
            if(user) {
                req.login(user, function(err) {
                    if(err) {
                        res.status(400).send(err);
                    } else {
                        res.json(user);
                    }
                });
            }
        });
}

function logout(req, res) {
    req.logOut();
    res.sendStatus(200);
}

function login(req, res) {
    if(req.user) {
        res.json(req.user);
    } else {
        res.sendStatus(404);
    }
}

function findUserById(req, res) {
    const userId = req.params['userId'];

    userModel
        .findUserById(userId)
        .then(function(user) {
            res.json(user);
        });
}

function deleteUser(req, res) {
    const userId = req.params.userId;

    userModel
        .deleteUser(userId)
        .then(function(status) {
            res.send(status);
        });
}

function updateUser(req, res) {
    const user = req.body;

    userModel
        .updateUser(req.params.userId, user)
        .then(function(status) {
            res.send(status);
        });
}

function createUser(req, res) {
    const user = req.body;

    userModel
        .createUser(user)
        .then(function(user){
            res.json(user);
        }, function(err) {
            res.send(err);
        });
}

function queryUsers(req, res){
    const userName = req.query.userName;
    const password = req.query.password;

    if(userName && password){
        userModel.findUserByCredentials(userName, password)
            .then(function(user){
                if(user){
                    res.json(user);
                } else {
                    res.sendStatus(404);
                }
            });
    } else if (userName) {
        userModel.findUserByUsername(userName)
            .then(function(user) {
                if(user) {
                    res.json(user);
                } else {
                    res.sendStatus(404);
                }
            });
    } else {
        userModel.findAllUsers()
            .then(function(users){
                res.json(users);
            });
    }
}