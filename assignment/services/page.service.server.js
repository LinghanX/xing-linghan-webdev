const app = require('../../express');
const pageModel = require('../models/page/page.model.server');

app.post('/api/assignment/website/:websiteId/page', createPage);
app.get('/api/assignment/website/:websiteId/page', findAllPagesForWebsite);
app.get('/api/assignment/page/:pageId', findPageById);
app.put('/api/assignment/page/:pageId', updatePage);
app.delete('/api/assignment/website/:websiteId/page/:pageId', deletePageFromWebsite);

function deletePageFromWebsite(req, res) {
    const pageId = req.params['pageId'];
    const websiteId = req.params['websiteId'];

    pageModel.deletePageForWebsite(pageId, websiteId)
        .then(function(response) {
            res.json(response);
        });
}

function findPageById(req, res){
    const pageId = req.params['pageId'];

    pageModel.findPageById(pageId)
        .then(function(page){
            res.json(page);
        });
}

function updatePage(req, res){
    const newPage = req.body;
    const pageId = req.params['pageId'];

    pageModel.updatePage(pageId, newPage)
        .then(function(page) {
            res.json(page);
        });
}

function createPage(req, res){
    const page = req.body;
    const websiteId = req.params['websiteId'];

    pageModel.createPage(websiteId, page)
        .then(function(response) {
            res.json(response);
        });
}

function findAllPagesForWebsite(req, res){
    const websiteId = req.params['websiteId'];

    pageModel.findAllPagesForWebsite(websiteId)
        .then(function(response) {
            res.json(response);
        })
}
