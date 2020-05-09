# React Essentials

## The React Virtual DOM

React does not write directly with the browser DOM, it uses its own virtual DOM first. Then, it will compare the virtual DOM with the real one and will write in an optimal way in the browser DOM. Hence, next statements becomes for instance irrelevant:
<ul>
	<li>document.getElementById('id')</li>
	<li>document.createElement('li')</li>
	<li>ul.appendChild(li)</li>
</ul>

The virtual DOM results in a considerable gain of performance.

## ES6 Syntax
 
| Before | Now | Symplified & Explanation & Next | Command executed |
| ------ | ----- | ---------- | ---------------- |
| function add() { return 2+4 }  | len add = () => { return 2+4}   |  len add= () => (2+4) | console.log(add()) |
| function add(n1, n2) { return n1 + n2 } | - | len add = (n1, n2) => (n1 + n2) | console.log(add(2,4)) |
| var newColors = colors.concat('pink') |  let newColors = [...colors, 'pink'] |            | console.log(newColors) | 
|  var name = 'Damien'; if(1===1){ var name = 'Tom' };  |  let name = 'Damien'; if (1===1){ let name = 'Tom' }; | let is sensible with the scope of the variable | console.log(name) |
| - | let person = { fName: 'Damien', lName: 'Durant' } | function logName({fName, lName}) { console.log(`You are ${fName} ${lName}`) } |  logName(person) |

## Getting started

	1) In server folder, copy .env.dev into a new file .env
	2) Build and start containers with docker-compose up --build
	
## Particular dependencies used during this course
 - react-router-dom
 - uniqueid
 - babel
 - popper.js
 - bootstrap
 
## Components lifecycle methods
![diagram](https://github.com/OmarATARI/ReactEssentialsCourse/blob/master/react-lifecycle-methods-diagram.png?raw=true)
