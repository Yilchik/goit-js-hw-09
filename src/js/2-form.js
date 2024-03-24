const registerForm = document.querySelector('form');
const localStorageKey = 'feedback-form-state';

registerForm.addEventListener('input', () => {
  const saveInfo = {
    email: registerForm.email.value,
    message: registerForm.message.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(saveInfo));
});

registerForm.addEventListener('submit', handlerSubmit);

const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
  const { email, message } = JSON.parse(savedData);
  registerForm.email.value = email;
  registerForm.message.value = message;
}

function handlerSubmit(event) {
  event.preventDefault();

  const data = {
    email: event.target.elements.email.value,
    message: event.target.elements.message.value,
  };

  console.log(data);
  localStorage.removeItem(localStorageKey);
  registerForm.reset();
}
