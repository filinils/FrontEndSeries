const request = require("supertest"),
express = require("express"),
chai = require("chai"),
expect = chai.expect,
app = express(),
api = require('../routers/api');

app.use('/api', api);
app.listen(3000);

describe("Test api endpoints", () => {
	it("/api/persons", () => {
		return request(app)
		.get("/api/persons")
		.expect(200)
		.then(res => {
			expect(res.body.result).to.be.an("array");
			expect(res.body.result[0].name).to.exist;
			expect(res.body.result[0].age).to.exist;
			expect(res.body.result[0].email).to.not.be.undefined;
		});
	});
});
