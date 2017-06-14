const mongoose = require("mongoose");
const userSchema = require("./user.schema.server");
const findOrCreate = require('mongoose-findorcreate');
userSchema.plugin(findOrCreate);
const userModel = mongoose.model("UserModel", userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findAllUsers = findAllUsers;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;
userModel.deleteWebsite = deleteWebsite;
userModel.addWebsite = addWebsite;
userModel.findUserByFacebookId = findUserByFacebookId;

module.exports = userModel;

function findUserByFacebookId(facebookId) {
    return userModel.findOne({'facebook.id': facebookId});
}

function deleteWebsite(userId, websiteId){
    return userModel
        .findById(userId)
        .then(function(user) {
            const index = user.websites.indexOf(websiteId);
            user.websites.splice(index, 1);
            return user.save();
        });
}

function addWebsite(userId, websiteId) {
    return userModel
        .findById(userId)
        .then(function(user) {
            user.websites.push(websiteId);
            return user.save();
        })
}

function createUser(user) {
    return userModel.create(user);
}

function findUserById(userId) {
    return userModel.findById(userId);
}

function findAllUsers() {
    return userModel.find();
}

function findUserByUsername(username) {
    return userModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
    return userModel.findOne({username: username, password: password});
}

function updateUser(userId, newUser) {
    return userModel.update({ _id: userId }, { $set: newUser });
}

function deleteUser(userId) {
    return userModel.remove({_id: userId});
}

