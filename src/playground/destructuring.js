// Object destructuring

const person = {
    name : 'Jaya',
    Age : 25,
    location : {
        city : 'Nellore',
        state : 'Andhra'
    }
} 

const { city : cityName = 'unknown', state : stateHood = 'Human' } = person.location;
console.log(cityName, stateHood);


// Array destructuring

const items = ['Hot Coffee', '$2.00', '$3.50', '$4.50'];

const [item, , cost] = items;
console.log(`The ${item} costs ${cost}!`);
