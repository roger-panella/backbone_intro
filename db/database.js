var mongoose = require('mongoose');

var connectionString = "mongodb://localhost/pancakes";

mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
  console.log("We are connected to the pancake source!")
});

mongoose.connection.on('error', function(error){
  console.log("Uh oh.  This isn't working.  Error: " + error)
});

mongoose.connection.on('disconnected', function(){
  console.log("You were disconnected from the pancakes source.")
});
