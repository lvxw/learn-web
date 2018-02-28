import obj from "./test"
import './style.css'
import KK from './1.png'
import Data from './data.xml'

var element = document.createElement('div');

// Lodash，现在由此脚本导入
element.innerHTML = obj.randomStr
element.classList.add('hello')

var myIcon = new Image();
myIcon.src=KK;
element.appendChild(myIcon);

document.body.appendChild(element);
document.write(Data);
console.log(Data);