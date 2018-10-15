var express = require("express");
var router = express.Router();
var users = require("../db/testdb");

// ROUTES FOR OUR API
// =============================================================================

//api for get all customers
router
  .route("/get")
  .get(function(req, res) {
    setImmediate(function() {
      try {
        console.log("success");
        res.json(users.getAll());
      } catch (e) {
        res.status(400).send("Invalid JSON string");
      }
    });
  });

//api get a customer number
router
  .route("/get/:id")
  //select a record
  .get(function(req, res) {
    setImmediate(function() {
      try {
        res.json(users.getById(req.params.id).phone);
        console.log("success get --> id: " + req.params.id);
      } catch (e) {
        res.status(400).send("Invalid JSON string");
      }
    });
  });

//api to activate phone number
router.route("/:id/update").put(function(req, res) {
  setImmediate(function() {
    try {
      users.activatePhoneNumber(req.params.id);
      res.json(users.getById(req.params.id));
      console.log("success update --> id: " + req.params.id);
    } catch (e) {
      res.status(400).send("Invalid JSON string");
    }
  });
});

//api to get all customers with activated number
router.route("/active")
  .get(function(req, res) {
    setImmediate(function() {
      try {
        res.json(users.getActive());
        console.log("success active users");
      } catch (e) {
        res.status(400).send("Invalid JSON string");
      }
    });
  });

module.exports = router;
