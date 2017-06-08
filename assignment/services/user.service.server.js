const app = require('../../express');
const Helper = require('../helpers/generateId');
const userModel = require("../models/user/user.model.server");

// queryUsers handles both findUserByUserName and findUserByCredentials
app.get('/api/assignment/user/:userId', findUserById);
app.get('/api/assignment/user', queryUsers);
app.post('/api/assignment/user', createUser);
app.put('/api/assignment/user/:userId', updateUser);
app.delete('/api/assignment/user/:userId', deleteUser);

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