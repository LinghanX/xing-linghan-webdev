const app = require('../../express');
const websiteModel = require("../models/website/website.model.server");

app.post('/api/assignment/user/:userId/website', createWebsite);
app.get('/api/assignment/user/:userId/website', findAllWebsitesForUser);
app.get('/api/assignment/website/:websiteId', findWebsiteById);
app.put('/api/assignment/website/:websiteId', updateWebsite);
app.delete('/api/assignment/user/:userId/website/:websiteId',
    deleteWebsiteFromUser);

function deleteWebsiteFromUser(req, res) {
    const userId = req.params['userId'];
    const websiteId = req.params['websiteId'];

    websiteModel.deleteWebsiteFromUser(userId, websiteId)
        .then(function(response) {
            res.json(response);
        });
}

function updateWebsite(req, res){
    const websiteId = req.params['websiteId'];
    const website = req.body;

    websiteModel.updateWebsite(websiteId, website)
        .then(function(response) {
            res.json(response);
        });
}

function findWebsiteById(req, res){
    const websiteId = req.params['websiteId'];

    websiteModel.findWebsiteById(websiteId)
        .then(function(website) {
            res.json(website);
        }, function(err) {
            res.json(err);
        });
}

function createWebsite(req, res) {
    const userId = req.params['userId'];
    const website = req.body;

    websiteModel.createWebsiteForUser(userId, website)
        .then(function(response) {
            res.json(response);
        });
}

function findAllWebsitesForUser(req, res) {
    const userId = req.params['userId'];

    websiteModel.findAllWebsitesForUser(userId)
        .then(function(response) {
            res.json(response);
        });
}