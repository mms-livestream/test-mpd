var express = require("express");
var app = express();
var bodyParser = require("body-parser");




app.use(express.static('public'));
app.use("/segment", express.static("segment"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/mpd.mpd", function(req, res){
  res.sendFile(__dirname+"/mpd.mpd");
})



app.get("/index.html", function(req, res){
  res.sendFile(__dirname+"/views/index.html");
})






var port=8080;
app.listen(port, function() {
  console.log("Express Node.js server running on port 8080");
});
