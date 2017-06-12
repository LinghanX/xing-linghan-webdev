const mongoose = require("mongoose");

const widgetSchema = mongoose.Schema({
    _page: {type: mongoose.Schema.Types.ObjectId, ref: "PageModel"},
    name: String,
    text: String,
    type: {type: String},
    placeholder: String,
    description: String,
    url: String,
    width: String,
    height: String,
    rows: Number,
    size: Number,
    class: String,
    icon: String,
    deletable: Boolean,
    formatted: Boolean,
    dateCreated: {type: Date, default: Date.now},
    index: {type: Number, default: 0}
}, {collection: "widget"});

module.exports = widgetSchema;