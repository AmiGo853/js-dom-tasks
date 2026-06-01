import 'whatwg-fetch';

export default () => {
  // BEGIN
  const inputs = document.querySelectorAll('[data-autocomplete]');

inputs.forEach((input) => {
  input.addEventListener('input', async (e) => {
    const { value } = e.target;
    const url = new URL(input.dataset.autocomplete, window.location.origin);
    url.searchParams.set('search', value);

    const response = await fetch(url);
    const items = await response.json();

    const list = document.querySelector(
      `[data-autocomplete-name="${input.dataset.autocompleteName}"]`
    );

    const data = items.length === 0 ? ['Nothing'] : items;

    list.innerHTML = '';
    data.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.append(li);
    });
  });
});
  // END
};
