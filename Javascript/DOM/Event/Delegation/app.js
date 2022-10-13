const tweetForm = document.querySelector('#tweetForm')
const tweetContainer = document.querySelector("#tweets")

// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.addEventListener('click', function() {
//         li.remove();
//     })
// }
tweetForm.addEventListener('submit', function(e) {
    // const usernameInput = document.querySelectorAll('input')[0]
    // const tweetInput = document.querySelectorAll('input')[1]
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
    // console.log(usernameInput.value, tweetInput.value)

    // console.log("Submitted!!")
    e.preventDefault();
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`-${tweet}`)
    tweetContainer.append(newTweet)
}

tweetContainer.addEventListener('click', function(e) {
    e.target.remove();
})