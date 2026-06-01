// BEGIN
export default (document) => {
  const divs = document.querySelectorAll('div');

  divs.forEach((div) => {
    Array.from(div.childNodes).forEach((node) => {
      if (node instanceof Text && node.textContent.trim() !== '') {
        const p = document.createElement('p');
        p.textContent = node.textContent;
        node.replaceWith(p);
      }
    });
  });
};
// END