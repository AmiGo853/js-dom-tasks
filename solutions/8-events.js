export default () => {
  // BEGIN
const button = document.getElementById('alert-generator');
const alerts = document.querySelector('.alerts');

let counter = 0;

button.addEventListener('click', () => {
  counter += 1;

  const alert = document.createElement('div');
  alert.classList.add('alert', 'alert-primary');
  alert.textContent = `Alert ${counter}`;

  alerts.prepend(alert);
});
  // END
};