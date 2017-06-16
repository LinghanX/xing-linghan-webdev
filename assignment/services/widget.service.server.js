const app = require('../../express');
const Helper = require('../helpers/generateId');
const multer = require('multer');
const upload = multer({ dest: __dirname + '/uploads' });
const widgetModel = require("../models/widget/widget.model.server");
const pageModel = require("../models/page/page.model.server");

app.post('/api/upload', upload.single('myFile'), uploadImage);
app.post('/api/assignment/page/:pageId/widget/order', reOrderWidget);
app.post('/api/assignment/page/:pageId/widget', createWidget);
app.get('/api/assignment/page/:pageId/widget', findAllWidgetsForPage);
app.get('/api/assignment/widget/:widgetId', findWidgetById);
app.put('/api/assignment/widget/:widgetId', updateWidget);
app.delete('/api/assignment/page/:pageId/widget/:widgetId', deleteWidgetFromPage);

function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    // var width         = req.body.width;
    var name          = req.body.name;
    var userId        = req.body.userId;
    var websiteId     = req.body.websiteId;
    var myFile        = req.file;

    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    // widget = getWidgetById(widgetId);
    widgetModel.findById(widgetId)
        .then(function(w) {
            var widget = w;
            widget.url = '/uploads/'+filename;
            w.url = "/uploads/" + filename;
            w.name = name;
            w.save();
        });

    var callbackUrl   = "/assignment/index.html#!/user/website/"+websiteId + "/page";

    res.redirect(callbackUrl);
}

function getWidgetById(widgetId){
    widgetModel.findWidgetById(widgetId)
        .then(function(res) {
            res.json(res);
        });
}

function reOrderWidget(req, res){
    const pageId = req.params['pageId'];
    const newOrder = req.body.elems;
    const num = newOrder.length;
    var index = 0;

    for(var i = 0; i < num; i++) {
        const widgetId = newOrder[i];
        widgetModel.findWidgetById(widgetId)
            .then(function(widget){
                widget.index = index;
                index++;
                widget.save();
            });
    }

    res.sendStatus(200);
}

function deleteWidgetFromPage(req, res) {
    const pageId = req.params['pageId'];
    const widgetId = req.params['widgetId'];

    widgetModel.deleteWidget(pageId, widgetId)
        .then(function(status) {
            res.json(status);
        })

}

function updateWidget(req, res) {
    const widget = req.body;
    const widgetId = req.params['widgetId'];

    widgetModel.updateWidget(widgetId, widget)
        .then(function(response) {
            res.json(response);
        });
}

function findWidgetById(req, res) {
    const widgetId = req.params['widgetId'];

    widgetModel.findWidgetById(widgetId)
        .then(function(widget) {
            res.json(widget);
        });
}

function createWidget(req, res){
    const newWidget = req.body;
    const pageId = req.params['pageId'];

    widgetModel.createWidget(pageId, newWidget)
        .then(function(widget) {
            res.json(widget);
        });
}

function findAllWidgetsForPage(req, res) {
    const pageId = req.params['pageId'];

    widgetModel.findAllWidgetsForPage(pageId)
        .then(function(widgets) {
            res.json(widgets);
        });
}
