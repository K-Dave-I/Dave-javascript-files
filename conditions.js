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