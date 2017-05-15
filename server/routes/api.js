const express = require('express');
const router = express.Router();

router.get('/', testConnection);

function testConnection(req, res) {
  res.send('api works!');
}

router.get("/test", findAllMessages);
router.post("/test", createMessage);
router.delete("/test/:id", deleteMessage);

var connectionString = 'mongodb://127.0.0.1:27017/test';

if(process.env.MLAB_USERNAME) {
  connectionString = process.env.MONGODB_URI;
}

var mongoose = require("mongoose");
mongoose.connect(connectionString);

var TestSchema = mongoose.Schema({
  message: String
});

var TestModel = mongoose.model("TestModel", TestSchema);

function findAllMessages(req, res) {
  TestModel
    .find()
    .then(
      function(tests) {
        res.json(tests);
      },
      function(err) {
        res.status(400).send(err);
      }
    );
}

function createMessage(req, res) {
  TestModel
    .create(req.body)
    .then(
      function(test) {
        res.json(test);
      },
      function(err) {
        res.status(400).send(err);
      }
    );
}

function deleteMessage(req, res) {
  TestModel
    .remove({_id: req.params.id})
    .then(
      function(result) {
        res.json(result);
      },
      function(err) {
        res.status(400).send(err);
      }
    );
}

module.exports = router;