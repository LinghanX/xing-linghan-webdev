const app = require('../../express');
const Helper = require('../helpers/generateId');

const widgets = [
    { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO", "index": 1},
    { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum", "index": 2},
    { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
        "url": "http://lorempixel.com/400/200/", "index": 3},
    { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>", "index": 4},
    { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum", "index": 5},
    { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
        "url": "https://youtu.be/AM2Ivdi9c4E", "index": 6},
    { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>", "index": 7}
];

app.post('/api/assignment/page/:pageId/widget/order', reOrderWidget);
app.post('/api/assignment/page/:pageId/widget', createWidget);
app.get('/api/assignment/page/:pageId/widget', findAllWidgetsForPage);
app.get('/api/assignment/widget/:widgetId', findWidgetById);
app.put('/api/assignment/widget/:widgetId', updateWidget);
app.delete('/api/assignment/widget/:widgetId', deleteWidget);

function reOrderWidget(req, res){
    const pageId = req.params['pageId'];
    const newOrder = req.body.elems;
    for(var i in newOrder){
        for(var j in widgets){
            if(widgets[j]._id == newOrder[i]){
                widgets[j].index = i;
            }
        }
    }

    res.sendStatus(200);
}

function deleteWidget(req, res) {
    const widgetId = req.params['widgetId'];

    for(var i in widgets) {
        if(widgets[i]._id === widgetId){
            widgets.splice(i, 1);
            res.sendStatus(200);
            return;
        }
    }

    res.sendStatus(404);
}

function updateWidget(req, res) {
    const widget = req.body;
    const widgetId = req.params['widgetId'];

    for(var i in widgets) {
        if(widgets[i]._id === widgetId) {
            widgets[i] = widget;
            res.sendStatus(200);
            return;
        }
    }

    res.sendStatus(404);
}

function findWidgetById(req, res) {
    const widgetId = req.params['widgetId'];

    for(var i in widgets) {
        if(widgets[i]._id === widgetId) {
            res.json(widgets[i]);

            return ;
        }
    }

    res.sendStatus(404);
}

function createWidget(req, res){
    const newWidget = req.body;
    const pageId = req.params['pageId'];

    newWidget.pageId = pageId;
    newWidget._id = Helper.generateId();

    widgets.push(newWidget);
    res.json(newWidget);
}

function findAllWidgetsForPage(req, res) {
    const pageId = req.params['pageId'];
    const retWidgets = [];

    for(var i in widgets) {
        if(widgets[i].pageId === pageId){
            retWidgets.push(widgets[i]);
        }
    }

    res.json(retWidgets);
}
