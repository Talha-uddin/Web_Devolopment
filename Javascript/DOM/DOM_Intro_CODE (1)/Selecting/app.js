// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg"
// }

// const squareImage = document.getElementsByClassName('square');

// for (let img of squareImage) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }

// const links = document.querySelectorAll('p a');
// for (let link of links) {
//     console.log(link.href)
// }

const allLinks = document.querySelectorAll('a')

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK'
// }

// document.querySelector('h1').innerHTML = "asduefua"

for (let link of allLinks) {
    link.style.color = "#1d464d"
    link.style.textDecorationColor = 'magenta'


}