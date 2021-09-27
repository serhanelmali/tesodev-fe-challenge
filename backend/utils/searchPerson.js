const Person = require("../models/person");

const searchPerson = (persons, searchValue, results) => {
  results.splice(0, results.length);

  for (let i = 0; i < persons.length; i++) {
    const person = persons[i];

    for (let j = 0; j < person.length; j++) {
      if (
        person[j].toLowerCase().includes(searchValue.toLowerCase()) &&
        !results.includes(person)
      ) {
        results.push(
          new Person(
            person[0],
            person[1],
            person[2],
            person[3],
            person[4],
            person[5]
          )
        );
      }
    }
  }

  console.log(results);
};

module.exports = searchPerson;
