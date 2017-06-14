const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    roles: [{type: String, default: 'USER', enum: ['USER', 'ADMIN']}],
    phone: String,
    websites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "WebsiteModel"
        }
    ],
    dateCreated: {type: Date, default: Date.now},
    facebook: {
        id: String,
        token: String
    }
}, {collection: "user"});

module.exports = userSchema;