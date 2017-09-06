const express = require("express"),
router = express.Router(),
persons = require("../data/persons");

router.get('/persons', (req, res) => {
	res.json({result: persons});
});

module.exports = router;
