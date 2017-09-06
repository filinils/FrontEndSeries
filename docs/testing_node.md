# Testing Node with TDD

## Project setup

1.Initiate projects
	1. Open your terminal and navigate to your desired project-folder
	2. Run command: npm init

    This will create a package.json file with the basic information. Just follow along and provide what is required

2.Install your dependencies:

    1. run command: npm install gulp --save

        1. install some gulp dependancies e.g:
            * Express
			* Mocha
			* Chai
			* Supertest

        Look into the documentation for theses packages. We will use Express to create a simple webserver and routing for our app.
		We will use Mocha as a testing framework and add Chai to have some extra assertion-options like should and expect.
		To create integration tests against our webserver we will use Supertest.

3.Setup testing environment
	1. open package.json and add "mocha" to the test-field
	2. In the project root, add a folder named "test"
	3. In the test folder, add your first test-file named index.ITest.js

## Write integration tests and implement express routes
In this first example you shall now write an integration test for an expected endpoint
	1. /api/persons

	```javascript
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
	```

	The first task is to get the test running, and make it fail. You will at the very least need to import mocha,chai, and supertest.

	
	2. When the tests fails successfully ;), we will go ahead and implement the express endpoint. To do this we will create an index.js file in the root of the project-folder. Use what you have learned in the project setup task to do this. The express-route may look something like this:

	```javascript
	router.get('/persons', (req, res) => {
		res.json({result: persons});
	});
	```
	The result of this route should be an object containing a list of persons

	3. Finally you should make two more tests and implement their endpoints based on the json-files in ```testing-node/data``` folder. You don't have to test for everything, choose what you might find important.


## Unit testing