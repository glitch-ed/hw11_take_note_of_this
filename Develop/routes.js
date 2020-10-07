const path = require("path"); 
const util = require('util'); 
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = function(app) {

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "./public/index.html"));
    });


    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "./public/notes.html"));
    });



    app.get("/api/notes", (req, res) => {

        readFileAsync("./db/db.json", "utf8")
            .then((result, err) => {
                if (err) console.log(err);
                return res.json(JSON.parse(result));
            });
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "public/index.html"));
    });

};
