const franc = require("franc");

const langs = require("langs");

const input = process.argv[2];
const langCode = franc('Alle menslike wesens word vry ');

if (langCode == 'und') {
    console.log("Sorry, Couldn't Figure Out!!Try With More Simple Text")
} else {
    const language = langs.where("3", langCode)
    console.log(language.name)
}