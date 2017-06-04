const app = require('../../express');
const Helper = require('../helpers/generateId');

const websites = [
    { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
];

app.post('/api/assignment/user/:userId/website', createWebsite);
app.get('/api/assignment/user/:userId/website', findAllWebsitesForUser);
app.get('/api/assignment/website/:websiteId', findWebsiteById);
app.put('/api/assignment/website/:websiteId', updateWebsite);
app.delete('/api/assignment/website/:websiteId', deleteWebsite);

function deleteWebsite(req, res) {
    const websiteId = req.params['websiteId'];

    for(var i in websites){
        if(websites[i]._id === websiteId){
            websites.splice(i, 1);
            res.sendStatus(200);
            return ;
        }
    }
    res.sendStatus(404);
}

function updateWebsite(req, res){
    const websiteId = req.params['websiteId'];
    const website = req.body;

    for(var i in websites){
        if(websites[i]._id === websiteId){
            websites[i] = website;
            res.sendStatus(200);
            return;
        }
    }

    res.sendStatus(404);
}

function findWebsiteById(req, res){
    const websiteId = req.params['websiteId'];

    for(var i in websites){
        if(websites[i]._id === websiteId){
            res.json(websites[i]);
            return;
        }
    }

    res.sendStatus(404);
}

function createWebsite(req, res) {
    const userId = req.params['userId'];
    const website = req.body;

    website.developerId = userId;
    website._id = Helper.generateId();

    websites.push(website);
    res.json(website);
}

function findAllWebsitesForUser(req, res) {
    const userId = req.params['userId'];
    const retWebsites = [];

    for(var i in websites) {
        if(websites[i].developerId === userId){
            retWebsites.push(websites[i]);
        }
    }
    res.json(retWebsites);
}