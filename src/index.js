import printMe from './print.js';
import css from './styles.css';
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = 'hello'

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());