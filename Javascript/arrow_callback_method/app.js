// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// numbers.forEach(function(element) {
//     console.log(element)
// })






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
    //forEach
    // movies.forEach(function(el) {
    //     console.log(el)
    // })

//MAP
// const titles = movies.map(function(movie) {
//     return movie.title.toUpperCase()
// })


//Arrow Funtion
// const add = (x) => {
//         return x * x;
//     }
// Arrow function implicit return
// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

//Arrow function wrapup
// const newMovies = movies.map(movie => {
//     return `${movie.title} - ${movie.score / 10}`
// })

//set TimeOut

// console.log("HELLO!!!...")
// setTimeout(() => {
//     console.log("are you still there...")
// }, 3000)

// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000);


//USing Filter
// const goodMovies = movies.filter(movie => movie.score > 80)
// const badMovies = movies.filter(movie => movie.score < 80)

// const recentMovies = movies.filter(movie => movie.year > 2000)

// function validUserName(usernames) {
//     return usernames.filter(function(username) {
//             if (username.length < 10) {
//                 return username;
//             }
//         }
//     }


//some and every method
// const exams = [80, 98, 92, 78, 77, 90, 89, 84, 82, 77]

// exams.every(score => score >= 75)

//movies.some(movie => movie > 2015)

//SUMMING AN ARRAY

//const prices = [9.99, 1.50, 19.99, 49.99, 30.50]
// let total = 0;
// for (let price of prices) {
//     total += price;
// }
//console.log(total);

// const total = prices.reduce((total, price) => {
//     return total + price
// })

// const highestRated = movies.reduce((bestMovies, currMovies) => {
//     if (currMovies.score > bestMovies) {
//         return currMovies;
//     }
//     return bestMovies;
// })

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function() {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName)
        }, 3000)
    }
}