const mongoose = require("mongoose");
const connectDb = process.env.MLAB_USERNAME
    ? process.env.MONGODB_URI : "mongodb://localhost/test";

mongoose.connect(connectDb);
mongoose.Promise = require("q").Promise;


require('./services/user.service.server');
require('./services/web.service.server');
require('./services/page.service.server');
require('./services/widget.service.server');

