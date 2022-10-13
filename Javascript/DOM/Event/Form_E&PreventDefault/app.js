const form = document.querySelector('#shelterForm');
const input = document.querySelector('#product');
const list = document.querySelector('#cats')
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const catName = input.value;
    const newLI = document.createElement('li');
    newLI.innerText = catName;
    list.append(newLI)
    input.value = "";
})



// const tweetForm = document.querySelector('#tweetForm')
// const tweetContainer = document.querySelector("#tweets")
// tweetForm.addEventListener('submit', function(e) {
//     // const usernameInput = document.querySelectorAll('input')[0]
//     // const tweetInput = document.querySelectorAll('input')[1]
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value = '';
//     tweetInput.value = '';
//     // console.log(usernameInput.value, tweetInput.value)

//     // console.log("Submitted!!")
//     e.preventDefault();
// })

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`-${tweet}`)
//     tweetContainer.append(newTweet)
// }