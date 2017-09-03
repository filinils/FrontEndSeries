# Testing Node with TDD

## Session 1 -- project setup

1.Initiate projects
	1. Run command: npm init

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

4. You will now write a test for an expected endpoints
	1. /api/persons
