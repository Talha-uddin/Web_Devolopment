const express = require('express');
const app = express();
// const path = require('path')


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.listen(3000, () => {
    console.log("LISTENING TO THE PORT 3000")
})