// const userInput = prompt("Say something");
// if (userInput) {
//     console.log("Truthy")
// } else {
//     console.log("Falsy!")
// }

// if (-5) {
//     console.log("Truthy!")
// } else {
//     console.log("Falsy")
// }

// const day = 1
// switch (day) {

//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Thusday")
//         break
//     case 3:
//         console.log("Wednesday")
//         break
//     case 4:
//         console.log("Thursday")
//         break
//     case 5:
//         console.log("friday")
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     default:
//         console.log("I dont Know that!!")

// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:

// for (let i = 5; i < people.length; i--) {
//     console.log(people[i].toUpperCase())
// }
// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffre', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i]
//     console.log(`ROW #${i+1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// let maximum = parseInt(prompt("Enter the maximum number!"));

// while (!maximum) {
//     maximum = parseInt(prompt("Enter the valid number "));
// }

// let targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);
// let guess = prompt("Enter your first guess!");

// let attempts = 1;
// while (parseInt(guess) !== targetNum) {
//     if (guess == 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("too high! Enter a new guess:")
//     } else {
//         guess = prompt("Too low! Enter a new guess:");
//     }
// }

// if (guess == 'q') {
//     console.log("Ok, You quit!")

// } else {
//     console.log("Congrats, YOU WIN!!")
//     console.log(`You got it! It took you ${attempts} guesses`)
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffery', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]
// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student)
//     }
// }