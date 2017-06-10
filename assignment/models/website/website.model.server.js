const mongoose = require("mongoose");
const websiteSchema = require("./website.schema.server");
const websiteModel = mongoose.model("WebsiteModel", websiteSchema);
const userModel = require("../user/user.model.server");

websiteModel.deleteWebsiteFromUser = deleteWebsiteFromUser;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.createWebsiteForUser = createWebsiteForUser;
websiteModel.findAllWebsites = findAllWebsites;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.addPage = addPage;
websiteModel.deletePage = deletePage;

module.exports = websiteModel;

function addPage(websiteId, pageId) {
    return websiteModel
        .findById(websiteId)
        .then(function(website) {
            website.pages.push(pageId);
            return website.save();
        });
}

function deletePage(websiteId, pageId) {
    return websiteModel.findById(websiteId)
        .then(function(website) {
            const index = website.pages.indexOf(pageId);
            website.pages.splice(index, 1);
            return website.save();
        })
}

function updateWebsite(websiteId, newWebsite) {
    return websiteModel.update({_id: websiteId}, { $set: newWebsite});
}

function deleteWebsiteFromUser(userId, websiteId){
    return websiteModel
        .remove({_id: websiteId})
        .then(function(status){
            return userModel
                .deleteWebsite(userId, websiteId);
        });
}

function findAllWebsitesForUser(userId) {
    return websiteModel
        .find({_user: userId})
        .populate('_user')
        .exec();
}

function findWebsiteById(websiteId) {
    return websiteModel.findById(websiteId);
}

function createWebsiteForUser(userId, website) {
    website._user = userId;

    return websiteModel
        .create(website)
        .then(function(website) {
            return userModel
                .addWebsite(userId, website._id);
        })
}

function findAllWebsites() {
    return websiteModel.find();
}
