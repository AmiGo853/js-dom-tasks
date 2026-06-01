// BEGIN
const content = document.body.innerHTML;

const paragraphs = content
  .trim()
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line !== '')
  .map((line) => `<p>${line}</p>`)
  .join('');

document.body.innerHTML = paragraphs;
// END