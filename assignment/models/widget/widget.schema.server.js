const mongoose = require("mongoose");

const widgetSchema = mongoose.Schema({
    _page: {tupe: mongoose.Schema.Types.ObjectId, ref: "PageModel"}
});

module.exports = widgetSchema;