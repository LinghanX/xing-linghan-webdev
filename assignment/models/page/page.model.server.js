const mongoose = require("mongoose");
const pageSchema = require("./page.schema.server");
const pageModel = mongoose.model("PageModel", pageSchema);

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePageForWebsite = deletePageForWebsite;

module.exports = pageModel;

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