const app = require('../../express');
const Helper = require('../helpers/generateId');

const users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
];

// queryUsers handles both findUserByUserName and findUserByCredentials
app.get('/api/assignment/user/:userId', findUserById);
app.get('/api/assignment/user', queryUsers);
app.post('/api/assignment/user', createUser);
app.put('/api/assignment/user/:userId', updateUser);
app.delete('/api/assignment/user/:userId', deleteUserById);

function findUserById(req, res) {
    const userId = req.params['userId'];

    for(var u in users) {
        if(users[u]._id === userId) {
            res.send(users[u]);
            return;
        }
    }

    res.sendStatus(404);
}

function deleteUserById(req, res) {
    const userId = req.params.userId;

    for(var u in users){
        if(users[u]._id === userId) {
            users.splice(u, 1);
            res.sendStatus(200);
            return ;
        }
    }

    res.sendStatus(404);
}

function updateUser(req, res) {
    const user = req.body;
    for(var u in users) {
        if(users[u]._id === req.params.userId) {
            users[u] = user;
            console.log('the new user is: ' + user);
            res.sendStatus(200);
            return;
        }
    }

    res.sendStatus(404);
}

function createUser(req, res) {
    const user = req.body;
    // To do:
    // create static method generateId() to abstract;
    user._id = Helper.generateId();
    users.push(user);
    res.json(user);
}

function queryUsers(req, res){
    const userName = req.query.userName;
    const password = req.query.password;

    if(userName === undefined && password === undefined){
        res.json(users);
    }
    else if (userName !== undefined && password === undefined){
        for(var u in users){
            if(users[u].username === userName){
                res.json(users[u]);
                return;
            }
        }
        res.sendStatus(404);
    }
    else if (userName !== undefined && password !== undefined){
        for(var u in users) {
            if(users[u].username === userName
                && users[u].password === password){
                res.json(users[u]);
                return;
            }
        }
        res.sendStatus(404);
    }
}