// Return how old someone who is currently this age was (or will be) during this year
const howOld = (age, year) => {
    // Automatically calculate the current date
    const currentYear = new Date().getFullYear();
    // Subtract the age from the current year to calculate the year of birth
    const birthYear = currentYear - age;
    // Subtract the year of birth from this year
    const calcAge = year - birthYear;
    // Subtract the birth year from this year to calculate how many years before it was
    const calcBeforeBorn = birthYear - year;

    // If the year is in the future, return their age in that year:
    if (year > currentYear) {
        return `You will be ${calcAge} in the year ${year}.`
    }
    // If the year is before they were born, return the number of years before their birth:
    if (year < birthYear) {
        return `The year ${year} was ${calcBeforeBorn} years before you were born.`
    }
    // If the year is in the past, return their age in that year:
    if (year < currentYear && year > birthYear) {
        return `You were ${calcAge} in the year ${year}.`
    }
};

console.log(howOld(31, 350));