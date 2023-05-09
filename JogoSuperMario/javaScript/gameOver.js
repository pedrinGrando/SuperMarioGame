
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');
const reset = document.querySelector('.reset__button');

    
const validateInput = ({ target }) => {
  if (target.value.length > 3) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
  event.preventDefault();
  window.location = '../pages/game.html';
}

const handleSubmit2 = (event) => {
    
    window.location = '../pages/index.html';
  }

form.addEventListener('submit', handleSubmit);
reset.addEventListener('submit', handleSubmit2);