function getAge(person) {
    const deathYear = person.yearOfDeath || new Date().getFullYear();
    return deathYear - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((oldestSoFar, currentPerson) => {
        return getAge(currentPerson) > getAge(oldestSoFar) ? currentPerson : oldestSoFar;
    }, array[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
