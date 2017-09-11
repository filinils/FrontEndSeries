const express = require("express"),
router = express.Router(),
persons = require("../data/persons"),
getFirst = require("../personmapper").getFirst;

router.get('/persons', (req, res) => {
	res.json({result: persons});
});

router.get('/persons/1', (req, res) => {
	let person = getFirst(persons);
	res.json(person);
})

module.exports = router;
