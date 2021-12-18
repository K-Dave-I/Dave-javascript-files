let diameterInput = prompt('Enter the diameter of the circle')

function calculateArea(diameterInput){
  const Pi = 22/7;
  let radius = diameterInput/2
  let area = Pi * radius **2
  alert(`The area is ${area}`)
}

calculateArea(diameterInput);