const mongoose = require("mongoose");
const pageSchema = require("./page.schema.server");
const pageModel = mongoose.model("PageModel", pageSchema);
const widgetSchema = require("../widget/widget.schema.server");
const widgetModel = mongoose.model("WidgetModel", widgetSchema);

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePageForWebsite = deletePageForWebsite;
pageModel.addWidget = addWidget;
pageModel.deleteWidget = deleteWidget;
pageModel.reorderWidgets = reorderWidgets;

module.exports = pageModel;

function reorderWidgets(pageId, newOrder) {
    return pageModel.findById(pageId)
        .then(function(page) {
            page.widgets = newOrder;
            return page.save();
        });
}

function deleteWidget(pageId, widgetId) {
    return pageModel.findById(pageId)
        .then(function(page) {
            const index = page.widgets.indexOf(widgetId);
            page.widgets.splice(index, 1);
            return page.save();
        })
}

function addWidget(pageId, widgetId) {
    return pageModel.findById(pageId)
        .then(function(response) {
            response.widgets.push(widgetId);
            response.save();

            return widgetModel.findById(widgetId);
        })
}

function createPage(websiteId, page) {
    page._website = websiteId;

    return pageModel.create(page)
        .then(function(response) {
            return websiteModel.addPage(websiteId, response._id);
        });
}

function findAllPagesForWebsite(websiteId) {
    return pageModel
        .find({_website: websiteId})
        .populate('_website')
        .exec();
}

function findPageById(pageId) {
    return pageModel.findById(pageId);
}

function updatePage(pageId, page) {
    return pageModel.update({_id: pageId}, {$set: page});
}

function deletePageForWebsite(pageId, websiteId) {
    return pageModel.remove({_id: pageId})
        .then(function(status) {
            return websiteModel.deletePage(websiteId, pageId);
        });
}