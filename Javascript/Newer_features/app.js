//Default params
function rolldie(numsides = 6) {
    return Math.floor(Math.random() * numsides) + 1
}

function greet(person, msg = 'Hiiii, ') {
    console.log(`${msg}, ${person}`)
}

//SPREAD
//console.log(...'hello');

const cats = ['Blue', 'Scout', 'Rocket']
const dogs = ['Rusty', 'Whatt'];

const allPets = [...cats, ...dogs]

//SPREAD with object 
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}
const newUser = {...dataFromForm, id: 2345, asAdmin: false };

//REST Params
function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

function raseResults(gold, silver, ...everyoneElse) {
    console.log(`Gold  MADEL GOES TO: ${gold}`)
    console.log(`silver  MADEL GOES TO: ${silver}`)
    console.log(`everyoneElse  MADEL GOES TO: ${everyoneElse}`)
}

//destructing array
const scores = [929321, 855535, 537452, 6453234, 645234, 646744, 745425];
const highScore = scores[0];

const secondHighScore = scores[1];

const [gold, silver, bronze, ...everythingElse] = scores;

//object destructing

const user = {
    email: 'harvey@gmail.com',
    password: 'uhfuerfhf',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

//const firstName = user.firstName;
//const email = user.email;
//const { email, firstName, lastName, city, bio } = user;

//const { city, state, died = 'N/A' } = user2;

//distructuring Param
// function fullName(user) {
//     //const { firstName, lastName } = user;
//     return `${user.firstName} ${user.lastName}`
// }
// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }
function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}



const movies = [{
            title: 'Amadeus',
            score: 99,
            year: 1984
        },
        {
            title: 'Sharknado',
            score: 99,
            year: 2012
        },
        {
            title: '!3 Going On 30',
            score: 70,
            year: 2014
        }, {
            title: 'Stand By Me',
            score: '85',
            year: 1986
        },
        {
            title: 'Waterworld',
            score: 85,
            year: 1986

        },
        {
            title: 'Parasite',
            score: 95,
            year: 2019
        },
        {
            title: 'Notting Hill',
            score: 77,
            year: 1999
        },
        {
            title: 'Alien',
            score: 90,
            year: 1979
        }
    ]
    //movies.filter((movie)=>movie.score>=90)
    //movies.filter(({ score }) => score >= 90);
    // movies.map(movie => {
    //     return `${movie.title} (${movie.year}) is rated ${movie.score}`
    // })

movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})