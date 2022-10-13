// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext();
//     }, delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('green', 1000, () => {
//             delayedColorChange('blue', 1000, () => {

//             })
//         })
//     })
// });



// searchMoviesAPI('madeus', () => {
//     saveToMyDB(movies, () => {
//         //if works,run this
//     }, () => {
//         //if it dosent work,run this
//     })
// }, () => {
//     //if API is down, or request failed
// })


const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`here is yout fake data from ${url}`)
        }
    }, delay)
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500) + 500);
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout:(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// fakeRequestCallback('books.com', function(response) {
//     console.log('IT WORKED!!!')
//     console.log(response)
//     fakeRequestCallback('book.com/page2',
//         function(response) {
//             console.log('IT WORKED Again!!!')
//             console.log(response)
//             fakeRequestCallback('book.com/page3',
//                 function(response) {
//                     console.log('IT WORKED AGAIN!!!')
//                     console.log(response)
//                 })
//         },
//         function(err) {
//             console.log("Error (2nd req)!!!", err)
//         })
// }, function(err) {
//     console.log("ERROR!", err)
// })

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('It Worked!!!');
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('It Worked!!!(2)')
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log('It Worked!!!(3)');
//                     }).catch(() => {
//                         console.log('OH NO,ERROR!!!(3)')
//                     })
//             })
//     })
//     .catch(() => {
//         console.log("Oh NO, ERROR!!!");
//     })

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log('IT WORKED!!!!(PAGE 1)')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("IT WORKED!!!!(PAGE 2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log('IT WORKED!!!!(PAGE 3)')
        console.log(data)
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!")
        console.log(err)
    })