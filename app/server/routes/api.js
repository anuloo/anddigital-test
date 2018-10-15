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

module.exports = router;
