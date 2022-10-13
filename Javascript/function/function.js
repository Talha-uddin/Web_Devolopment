// function singSong() {
//     console.log("Do")
//     console.log("RE")
//     console.log("MI")
// }
// singSong()


// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}`);
// }


// function repeat(str, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result);
// }


//Return Keyword
// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     return x + y;
// }
// function lastElement(element) {
//     if (element.length === 0) {
//         return null;
//     } else {
//         return element[element.length - 1];
//     }
// }

// function sumArray(array) {
//     let total = 0
//     for (let i = 0; i < array.length; i++) {
//         total += array[i]
//     }
//     return total;
// }

function returnDay(num) {
    if (num < 1 || num > 7) {
        return null;
    } else if (num == 1) {
        return "Monday"
    } else if (num == 2) {
        return "Tuesday"
    } else if (num == 3) {
        return "Wednesday"
    } else if (num == 4) {
        return "Thursday"
    } else if (num == 5) {
        return "Friday"
    } else if (num == 6) {
        return "Saturday"
    } else if (num == 7) {
        return "Sunday"
    }
}