const app = require('../../express');
const Helper = require('../helpers/generateId');

var pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem", "createdAt": "12/29/17", "lastVisited": "12/29/18" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem", "createdAt": "12/29/17", "lastVisited": "12/29/18" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem", "createdAt": "12/29/17", "lastVisited": "12/29/18" }
];

app.post('/api/assignment/website/:websiteId/page', createPage);
app.get('/api/assignment/website/:websiteId/page', findAllPagesForWebsite);
app.get('/api/assignment/page/:pageId', findPageById);
app.put('/api/assignment/page/:pageId', updatePage);
app.delete('/api/assignment/page/:pageId', deletePage);

function deletePage(req, res) {
    const pageId = req.params['pageId'];

    for(var i in pages){
        if(pages[i]._id === pageId){
            pages.splice(i, 1);
            res.sendStatus(200);
            return ;
        }
    }

    res.sendStatus(404);
}

function findPageById(req, res){
    const pageId = req.params['pageId'];

    for(var i in pages){
        if(pages[i]._id === pageId){
            res.json(pages[i]);
            return ;
        }
    }

    res.sendStatus(404);
}

function updatePage(req, res){
    const newPage = req.body;
    const pageId = req.params['pageId'];

    for(var i in pages){
        if(pages[i]._id === pageId){
            pages[i] = newPage;
            res.json(newPage);
            return;
        }
    }

    res.sendStatus(404);
}

function createPage(req, res){
    const page = req.body;
    const websiteId = req.params['websiteId'];

    page._id = Helper.generateId();
    page.websiteId = websiteId;

    pages.push(page);
    res.json(page);
}

function findAllPagesForWebsite(req, res){
    const websiteId = req.params['websiteId'];
    var retPages = [];

    for(var i in pages){
        if(pages[i].websiteId === websiteId){
            retPages.push(pages[i]);
        }
    }
    res.json(retPages);
}
