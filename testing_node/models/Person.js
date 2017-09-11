
//Same object - different wrapping
/*class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}*/
function Person(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
}

module.exports = {
    Person
}