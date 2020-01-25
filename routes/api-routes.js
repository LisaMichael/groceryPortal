// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models/");
let express = require("express");
let router = express.Router();

// Routes
// =============================================================
module.exports = function (app) {

    //display all items in the frocery table
    app.get("/api/all", function (req, res) {
        db.Inventories.findAll({}).then(function (results) {
            res.json(results);

        });
    });

    //get displays items whose names matches users query as a JSON object 
    app.get("/api/search", function (req, res) {
        if (req.params.item_name) {
            db.Inventories.findAll({
                where: {
                    name: req.params.item_name
                }
            }).then(function (results) {
                res.json(results);
            });
        }
    });

    //get location data
    app.get("/api/location/:location", function (req, res) {
        if (req.params.aisle_number) {
            db.Inventories.findAll({
                where: {
                    location: req.param.aisle_number
                }
            }).then(function (results) {
                res.json(results);
            });
        }
    });





    //notify about item data

    // Delete a book
    app.delete("/api/item/:id", function (req, res) {
        console.log("Inventory ID:");
        console.log(req.params.id);
        Inventories.destroy({
            where: {
                id
            }
        }).then(function () {
            res.end();
        });
    });

    //add grocery data
    // add a book  - video - time ; 8:51 
    //https://www.youtube.com/watch?v=dt9mXaEEAkM
    app.post("/api/posts", function (req, res) {
        db.Inventories.create({
            item_name: req.body.item_name,
            department: req.body.department,
            price: req.body.price,
            quantity: req.body.quantity,
            aisle_number: req.body.aisle_number
        }).then(function (result) {
            res.json(result);
        })
    })

    //get dept by department
    app.get("/deptSearch:dept", function (req, res) {
        if (req.params.dept) {
            db.Inventories.findAll({
                where: {
                    department:
                        req.params.dept

                }
            }).then(function (results) {
                res.json(results);
            });
        }
    });


};