// const sing = async() => {
//     throw 'Oh NO, Problem!'
//     return 'LA LA LA LA'
// }

// sing().then((data) => {
//         console.log("Promise Resolved with: ", data)
//     })
//     .catch(err => {
//         console.log("OH NO, PROMISE REJECTED!")
//         console.log(err)
//     })

// const login = async(username, password) => {
//     if (!username || !password) throw 'Missing Crenentials'
//     if (password === 'corgifeetarecute') return 'Welcome!'
//     throw 'Invalid Password'
// }

// login('dygaeyfea', 'corgifeetarecute')
//     .then(msg => {
//         console.log('LOGGED IN')
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log("ERROR!")
//         console.log(err)
//     })
// const delayedColorchange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }
// async function rainbow() {
//     await delayedColorchange('red', 1000)
//     await delayedColorchange('orange', 1000)
//     await delayedColorchange('yellow', 1000)
//     await delayedColorchange('green', 1000)
//     await delayedColorchange('blue', 1000)
//     await delayedColorchange('indigo', 1000)
//     await delayedColorchange('violet', 1000)
//     return "ALL DONE!"
// }

// rainbow().then(() => console.log("End Of Rainbow!!"))

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor((Math.random() * 4500) + 500)
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(');
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        let data2 = await fakeRequest('/page2');
        console.log(data1)
    } catch (e) {
        console.log("CAUGHT AN ERROR")
        console.log('error is:', e)
    }
}