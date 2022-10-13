// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand < 0.7) {
//                 resolve('YOUR FAKE DATA HERE');
//             }
//             reject('Request Error!!');
//         }, 1000)

//     })

// }
// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log("Done with Request")
//         console.log('data is:', data)
//     }).catch((err) => {
//         console.log("OH NO!!", err);
//     })


const delayedColorchange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorchange('red', 1000)
    .then(() => delayedColorchange('orange', 1000))
    .then(() => delayedColorchange('yellow', 1000))
    .then(() => delayedColorchange('green', 1000))
    .then(() => delayedColorchange('blue', 1000))
    .then(() => delayedColorchange('indigo', 1000))
    .then(() => delayedColorchange('violet', 1000))