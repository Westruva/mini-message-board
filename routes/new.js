const { Router } = require("express");

// Receive the shared messages array so new messages remain visible on the home page.
const newMessageRouter = (messages) => {
	const router = Router();

	// Show the form when a user visits /new in their browser.
	router.get("/new", (req, res) => {
		res.render("formTemplate", {
			title: "New Message",
			footer: "© 2024 Message Board",
		});
	});

	// Process the submitted form and create the timestamp on the server.
	router.post("/new", (req, res) => {
		messages.push({
			user: req.body.name,
			text: req.body.message,
			added: new Date(),
		});
		res.redirect("/");
	});

	return router;
};

module.exports = newMessageRouter;
