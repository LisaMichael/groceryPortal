 // *****************************************************************************
 // Server.js - This file is the initial starting point for the Node/Express server.
 //
 // ******************************************************************************
 // *** Dependencies
 // =============================================================
 var express = require("express");
 var bodyParser = require("body-parser");

 // Sets up the Express App
 // =============================================================
 var app = express();

 var PORT = process.env.PORT || 8080;

 // Requiring our models for syncing
 var db = require("./models");

 // Sets up the Express app to handle data parsing
 app.use(bodyParser.urlencoded({
   extended: true
 }));
 app.use(bodyParser.json());
 app.use(bodyParser.text());
 app.use(bodyParser.json({type:"application/vnd.api+json"}));


 // Static directory
 app.use(express.static("public"));

 // Routes
 // =============================================================
 // HTML routes
 require("./routes/html-routes")(app);

 // API routes 
 require("./routes/api-routes")(app);


 // Syncing our sequelize models and then starting our Express app
 // =============================================================
 db.sequelize.sync().then(function () {
   app.listen(PORT, function () {
     console.log("App listening on PORT " + PORT);
   });

   return true;
   // check if db has data
   //if no records, create else do nothing
   // db.Inventories
 }).then(() => {
   db.Inventories.findAll({}).then((data) => {
     if (!data) {
       db.Inventories.create({
         item_name: "grapes",
         department: "produce",
         price: 6.99,
         quantity: 100,
         aisle_number: 5
       })
     }
   });
 })
