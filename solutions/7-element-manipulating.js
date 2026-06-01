import camelCase from 'lodash/camelCase';

// BEGIN
const toCamelCase = (name) => {
  const parts = name.split('-');

  return parts
    .map((part, index) => {
      if (index === 0) {
        return part;
      }

      return part[0].toUpperCase() + part.slice(1);
    })
    .join('');
};

export default (document) => {
  const elements = document.body.getElementsByTagName('*');

  Array.from(elements).forEach((element) => {
    Array.from(element.classList).forEach((className) => {
      element.classList.replace(className, toCamelCase(className));
    });
  });
};
// END