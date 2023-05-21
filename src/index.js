import printMe from './print.js';
import './styles/style.css';
import './styles/style.less';
import './styles/style.scss';
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