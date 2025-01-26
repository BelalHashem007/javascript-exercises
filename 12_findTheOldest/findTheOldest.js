const findTheOldest = function(arr) {
   const highestAge = arr.reduce((max,person) =>{
        if (!person.yearOfDeath)
            person.yearOfDeath= (new Date()).getFullYear();
        personAge = person.yearOfDeath-person.yearOfBirth;
        return personAge > max ? personAge : max;
    },0)
    console.log(highestAge);
    const filArr = arr.filter((person)=> {
        if (!person.yearOfDeath)
            person.yearOfDeath= (new Date()).getFullYear();
        personAge = person.yearOfDeath-person.yearOfBirth;
        return highestAge == personAge;
    })
    return filArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
