const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("We Got A new Request!")
//         // res.send("Hello, We got your Request! This is a response!! ")
//     res.send('<h1>This is my webpage!</h1>')
// })

app.get('/', (req, res) => {
    res.send("Welcome to the Home page!!!")
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    res.send(`<h1>Browing the ${subreddit} subreddit</h1>`)
})
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params
    res.send(`<h1>Viewing Post id: ${postId} on the ${subreddit} subreddit</h1>`)
})
app.get('/cats', (req, res) => {
    res.send("MEOW!!!")
})

app.post('/cats', (req, res) => {
    res.send('Porst Request to /cats!!!!This is Different than a get Request')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!!')
})
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUUND IF NOTHING SEARCHED!')
    }
    res.send(`<h1>Search Results for : ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send('I dont know that path ')
})



app.listen(8080, () => {
    console.log("Listening On port 8080!!")
})