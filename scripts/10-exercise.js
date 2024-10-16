function hasClass(classe){
  const button = document.querySelector(`.${classe}`);
      console.log(button.classList.contains('js-button'));
}

function ligarDesligar(elemento){
  elemento = document.querySelector(`.${elemento}`);
    if(elemento.classList.contains('is-toggled')){
      elemento.classList.remove('is-toggled');
    }else {
      document.querySelector('.gamingButton').classList.remove('is-toggled');

      document.querySelector('.musicButton').classList.remove('is-toggled');

      document.querySelector('.techButton').classList.remove('is-toggled');

      elemento.classList.add('is-toggled');
      
    }
}

function handCostKeydown(event){
  if (event.key === 'Enter') {
  calculateTotal();
}
}
function calculateTotal(){
  error = document.querySelector('.error-message');
  error.innerHTML = '';
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);
  
  if (cost <= 0) {
    error.innerHTML =  `Error: cost cannot be less than $0`;
    return;
  } else if (cost < 40) {
    cost += 10;
  };
  

  document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`;
}

function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button');
if (buttonElement.innerText === 'Subscribe') {
  buttonElement.innerHTML = 'Subscribed';
  buttonElement.classList.add('is-subscribed');
} else {
  buttonElement.innerHTML = 'Subscribe';
  buttonElement.classList.remove('is-subscribed');
}
}

let calculation = localStorage.getItem('calculation') || '';

      function updateCalculation(value) {
        calculation += value;
        console.log(calculation);
        localStorage.setItem('calculation', calculation);
        document.querySelector('.calculationShow').innerHTML = calculation;

      }

      // Optional: you can also create a function in order
      // to reuse this code.
      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }
