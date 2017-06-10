const mongoose = require("mongoose");
const widgetSchema = require("./widget.schema.server");
const widgetModel = mongoose.model("WidgetModel", widgetSchema);
const pageSchema = require("../page/page.schema.server");
const pageModel = mongoose.model("PageModel", pageSchema);

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;

module.exports = widgetModel;

function createWidget(pageId, widget) {
    widget._page = pageId;
    return widgetModel
        .create(widget)
        .then(function(response) {
            return pageModel.addWidget(pageId, response._id);
        });
}

function findAllWidgetsForPage(pageId) {
    return widgetModel.find({_page: pageId}).populate('_page').exec();
}

function findWidgetById(widgetId) {
    return widgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
    return widgetModel.update({_id: widgetId}, {$set: widget});
}

function deleteWidget(pageId, widgetId) {
    return widgetModel.remove({_id: widgetId})
        .then(function(status) {
            return pageModel.deleteWidget(pageId, widgetId);
        });
}
