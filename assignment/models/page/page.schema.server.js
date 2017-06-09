const mongoose = require("mongoose");

const pageSchema = mongoose.Schema({
    _website: {type: mongoose.Schema.Types.ObjectId, ref: "WebsiteModel"},
    name: String,
    title: String,
    description: String,
    dateCreated: {type: Date, default: Date.now},
    widgets: [{type: mongoose.Schema.Types.ObjectId, ref: "WidgetModel"}]
}, {collection: "page"});

module.exports = pageSchema;