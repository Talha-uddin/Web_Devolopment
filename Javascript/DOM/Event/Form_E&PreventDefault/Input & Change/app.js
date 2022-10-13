const input = document.querySelector('#input');
const h1 = document.querySelector('h1');

// input.addEventListner('change', function() {
//     console.log('eifab')
// })

input.addEventListener('input', function() {
    h1.innerText = input.value
})