const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}

const colorbtn = document.querySelector('#color');
const h1 = document.querySelector('h1');

colorbtn.addEventListener('click', () => {
    const newColor = makeRandomColor()
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function scream() {
    console.log("AAAAAAAAAAAAAAAAHHHHHHHHHHHHHHH");
    console.log("STOP TOUCHING ME!!!");
}
btn.onmouseenter = scream;



const btn3 = document.querySelector('#v3');
btn3.addEventListener('dblclick', () => {
    alert("CLICKED!");
})

function twist() {
    console.log("TWIST!");
}

function shout() {
    console.log("SHOUT!");
}

const tnsButton = document.querySelector('#tns');

// tnsButton.onclick = twist;
// tnsButton.onclick = shout;

tnsButton.addEventListener('click', twist)
tnsButton.addEventListener('click', shout)

