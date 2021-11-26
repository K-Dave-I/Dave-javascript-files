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

if(age%2===0) {
    alert(' Your age input is even')
}
else if(age%2===1) {
    alert('Your age input is odd')
}
else{
    alert('please enter a valid age input')
}
