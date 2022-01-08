
let button = document.getElementById('button');
let input = document.getElementById('input');
button.addEventListener('click',function(){
let par = document.createElement('p')
par.innerText = input.value

let div =document.getElementById('division')
let buttonElement = document.createElement('button')
buttonElement.innerHTML= '<i class="fas fa-trash-alt"></i>'
div.appendChild(par);
par.style.padding = '10px'
par.style.marginLeft = '450px'
par.style.backgroundColor = 'orange'
par.style.color = 'black'
par.style.borderRadius = '1rem'
par.style.width = '500px'
par.style.paddingLeft = '15px'
par.appendChild(buttonElement);
buttonElement.style.marginBottom = '12px'
buttonElement.style.marginTop = '13px'
buttonElement.style.marginLeft = '400px'
buttonElement.style.height = '30px'
buttonElement.style.alignItems = 'centre'
buttonElement.addEventListener('click',function(){
par.parentNode.removeChild(par)
})
input.value = ''
})


let redTheme = document.getElementById('red')
let body = document.getElementById('bod')
redTheme.addEventListener('click',function(){
body.style.backgroundColor = 'maroon'
body.style.color = 'white'
})

let heading = document.getElementById('heading')
let greenTheme = document.getElementById('green')
greenTheme.addEventListener('click',function(){
body.style.backgroundColor = 'darkgreen'
body.style.color = 'black'
heading.style.color = 'black'
})

let defaulty = document.getElementById('default')
defaulty.addEventListener('click',function(){
body.style.backgroundColor = 'rgb(4, 27, 51)'
body.style.color = 'black'
heading.style.color = 'white'
})

