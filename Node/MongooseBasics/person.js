const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => {
        console.log("CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!");
        console.log(err);
    })


const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function() {
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function() {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log("ABOUT TO SAVE!!!")
})
personSchema.post('save', async function() {
    console.log("Just Save!!!")
})

const Person = mongoose.model('Person', personSchema);