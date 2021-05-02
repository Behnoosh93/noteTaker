const express = require("express");
const path = require("path");
const util = require("util");
const app = express();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const notes = [
	{
		test: "Success....",
	},
];


// HTML Routes
//Returns the index.html files
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/public/index.html"));
});
//Returns the notes file
app.get("/notes", (req, res) => {
	res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.listen(PORT, () => {
	console.log(`App listening on http://localhost:${PORT}`);
});


