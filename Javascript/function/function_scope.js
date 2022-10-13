// const num = function(x, y) {
//     return x + y;
// }

// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTimes(f) {
//     for (i = 0; i < 10; i++) {
//         f()
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// callTwice(rollDie)


// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function() {
//             console.log("Congrats,, I AM A GOOD FUNCTION!!");
//             console.log("YOU WIN A MILLION DOLLAR$$")
//         }
//     } else {
//         return function() {
//             alert("You have been infected by a computer virus!!!");
//             alert("Stop Trying to close this window!!!")
//             alert("Stop Trying to close this window!!!")
//             alert("Stop Trying to close this window!!!")
//             alert("Stop Trying to close this window!!!")
//             alert("Stop Trying to close this window!!!")
//         }
//     }

// }

//Method
const cat = {
    name: 'Blue Steeke',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says MEOWWWWW`);
    }
}
const meow2 = cat.meow;