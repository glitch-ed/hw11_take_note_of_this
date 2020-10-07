const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
//pure-cliffs-1976o
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes.js");

app.use(express.static("public"));


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
