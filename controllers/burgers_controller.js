var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js")


//creating routes and setting up logic
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

