// BEGIN
export default (root) => {
  const result = [];

  const walk = (node) => {
    for (const child of node.children) {
      if (child.tagName === 'P') {
        result.push(child.textContent.trim());
      }

      walk(child);
    }
  };

  walk(root);

  return result;
};
// END