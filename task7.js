let itemlist =document.querySelector('#items');
//parentElement
//console.log(itemlist.parenElement);
//itemlist.parentElement.style.backgroundColor='#f4f4f4';

//childNodes
//console.log(itemlist.childNodes);

//firstChild
//console.log(itemlist.firstChild);
//console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.textContent='hello';

//lastElementChild
//console.log(itemlist.lastChild);
//console.log(itemlist.lastElementChild);
//itemlist.lastElementChild.textContent='hello 4';

//nextsibling
//console.log(itemlist.nextSibling);
//console.log(itemlist.nextElementSibling);

//previousSibling
//console.log(itemlist.previousSibling);
//console.log(itemlist.previousElementSibling);
//itemlist.previousElementSibling.style.color='green';

//createlement
//creat a div
let newDiv =document.createElement('div');
//console.log(newDiv);
//add class
newDiv.className='hello'
// add id
newDiv.id='helllo1';
// add attr
newDiv.setAttribute('title','hello div');
//creat a text node
let newDivtext= document.createTextNode('Hello');
//add text to div
newDiv.appendChild(newDivtext);
let container = document.querySelector('header .container');
let h1= document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv ,h1);

let item=document.getElementById('item');

let newli=document.createElement('li');
newli.className='list-group-item';

console.log(newli)
let parentNode=document.getElementById('items')
let newlitext=document.createTextNode('HELLO ');

newli.appendChild(newlitext);
console.log(parentNode)
//parentNode.appendChild(newlitext)
parentNode.innerHTML=newlitext+parentNode.innerHTML