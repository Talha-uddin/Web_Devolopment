const btn = document.querySelector('#v2')

btn.onclick = function() {
    console.log("You Clicked Me!")
    console.log("I Hope It Worked")
}

function scream() {
    console.log("AAAAAHHHH");

    console.log("Stop Touching Me")
}
btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function() {
    alert("CLICKED")
})

function twist() {
    console.log('TWIST')
}

function shout() {
    console.log('SHOUT')
}
const tasButton = document.querySelector('#tas')
    // tasButton.onclick = twist;
    // tasButton.onclick = shout;

tasButton.addEventListener('click', twist, { once: true })
tasButton.addEventListener('click', shout)