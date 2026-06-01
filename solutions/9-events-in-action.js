export default () => {
  // BEGIN
document.addEventListener('click', (e) => {
  const tab = e.target.closest('[data-bs-target]');

  if (!tab) {
    return;
  }

  const nav = tab.closest('.nav');
  if (!nav) {
    return;
  }

  const targetPane = document.querySelector(tab.dataset.bsTarget);
  if (!targetPane) {
    return;
  }

  const content = targetPane.closest('.tab-content');
  if (!content) {
    return;
  }

  nav.querySelectorAll('[data-bs-target]').forEach((item) => {
    item.classList.remove('active');
  });
  tab.classList.add('active');

  content.querySelectorAll('.tab-pane').forEach((pane) => {
    pane.classList.remove('active');
  });
  targetPane.classList.add('active');
});
  // END
};
