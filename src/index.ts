import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

let element: HTMLHeadingElement = document.createElement('h1');
element.textContent = "Ha ezt látod, és zöld, akkor működik!";
// a text-success egy bootstrapes stílus
element.className = "text-success";
document.body.append(element);
