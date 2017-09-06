
const chai = require("chai"),
expect = chai.expect,
assert = chai.assert,
personmapper = require("../personmapper"),
personList = require("../data/persons"),
Person = require("../models/Person").Person;

describe("Functions for handling a person object", () => {

    it('should get one person from a list of persons', () => {
        assert.isDefined(personmapper.getFirst(personList), "The person is defined");
    });

    it('The person object should have a name', () => {
        assert.isDefined(personmapper.getFirst(personList).name, "The persons name is defined");
    });

    it('The person object should have an email', () => {
        assert.isDefined(personmapper.getFirst(personList).email, "The persons email is defined");
    });

    it('should map that one person to an object of Person-type', () => {
        expect(personmapper.getFirst(personList)).to.be.instanceof(Person);
    });

});