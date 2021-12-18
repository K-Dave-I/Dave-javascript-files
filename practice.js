alert('Hey there, welcome');
let year = 2021;
let descripton = 9;
console.log(year % descripton);

let firstname=prompt('State your first name');
let secondname=prompt('State your second name');
alert(` That's great to hear ${firstname} ${secondname}`);

let question=prompt("Why are you visiting this page?" );
alert('Alright, that is great to know');

let isSleeping= false;
let isEating= false;

if(isSleeping||isEating){
    console.log('User is sleeping');
}
else{
    console.log('user is not sleeping')
}
let age=prompt('How old are you?')

if (age<0) {
   console.log('Enter a positive number')
}
else if(age%2===0) {
    alert(' Your age input is even')
}
else if(age%2===1) {
    alert('Your age input is odd')
}
else{
    alert('please enter a valid age input')
}
let list= ['boys','girls','broom'];
list[0]
console.log (list[0]);

list.unshift('home');
console.log(list);

list.push('bool');
console.log (list);

list.shift();
console.log(list);

list.pop();
console.log(list);

let myDog = {
    name : "Jackson",
    age : "12",
    eyes : 2
}
console.log (myDog)

//Dave
let evenNumbers = [2,4,6,8,14];
evenNumbers[0];
console.log(evenNumbers[0]);
evenNumbers.push(40);
console.log(evenNumbers);
evenNumbers.shift();
console.log(evenNumbers);
let myProfile = {
  name:"Dave",
  age:16,
  favourite pet:"Dog"
};
console.log(myprofile.name);
let diameterInput = prompt('Enter the diameter of the circle')

function calculateArea(diameterInput){
  const Pi = 22/7;
  let radius = diameterInput/2
  let area = Pi * radius **2
  alert(`The area is ${area}`)
}

calculateArea(diameterInput);
Dave
let numbers = [0,1,2,3,4,5,6,7,8,9]
for(let m = 0; m < numbers.length; m++ ){
  if (numbers[m] % 2 === 0){
    console.log('Even Numbers :'+ numbers[m])
  }
}

let gy = document.getElementById('git')
gy.innerText = 'poker'

gy.parentNode.removeChild(git)

let paragraph = document.createElement('p');
paragraph.innerText='ok yuj';
let bj = document.getElementById('body');
// bj.appendChild(paragraph)

 let button = document.getElementById('button')
 button.addEventListener('click',
 let colors= ['red','white','blue','purple','orange']
  body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
})
button.addEventListener("click", function () {
body.style.backgroundColor = "yellow";
body.style.fontFamily = "fantasy";
heading.innerText = "hey nerds";
heading.style.color = "blue",
button.addEventListener("click", function () {
body.style.backgroundColor = "skyblue";
body.style.fontFamily = "sans-serif";
heading.innerText = "hey noobs";
heading.style.color = "orange";
});
});
