
const Person = require("./models/Person").Person;

module.exports = {
    getFirst(personList) {
        let firstPerson = personList[0];
        return new Person(firstPerson.name, firstPerson.age, firstPerson.email);
    }
}