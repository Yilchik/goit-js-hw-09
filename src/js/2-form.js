const registerForm = document.querySelector('form');
const localStorageKey = 'feedback-form-state';

const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
  const { email, message } = JSON.parse(savedData);
  registerForm.email.value = email;
  registerForm.message.value = message;
}

registerForm.addEventListener('input', () => {
  const saveInfo = {
    email: registerForm.email.value.trim(),
    message: registerForm.message.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(saveInfo));
});

registerForm.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const data = {
    email: event.target.elements.email.value.trim(),
    message: event.target.elements.message.value.trim(),
  };

  console.log(data);
  localStorage.removeItem(localStorageKey);
  registerForm.reset();
}
