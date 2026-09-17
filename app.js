const express = require("express");
const app = express();
const path = require("path");
const newMessageRouter = require("./routes/new");

const assetsPath = path.join(__dirname, "public");

const messages = [
	{ text: "Hie everyone!", user: "Wayne", added: new Date() },
	{ text: "Hello again!", user: "Alice", added: new Date() },
];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use("/", newMessageRouter(messages));
app.use(express.static(assetsPath));

app.get("/", (req, res) => {
	res.render("index", {
		title: "Message Board",
		messages: messages,
		footer: "© 2024 Message Board",
	});
});

app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});
