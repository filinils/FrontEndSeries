const express = require("express"),
router = express.Router();

let persons = [
	{
		name: "Nils",
		age: 32,
		email: null
	},
	{
		name: "Nils",
		age: 32,
		email: "nils@nilsern.no"
	},
	{
		name: "Nils",
		age: 32,
		email: "nils@nilsern.no"
	}
]

router.get('/persons', (req, res) => {
	res.json({result: persons});
});

module.exports = router;
