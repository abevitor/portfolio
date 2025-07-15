document.addEventListener('DOMContentLoaded', () => {
  const spotlight = document.getElementById('spotlight');
  if (!spotlight) return;

  window.addEventListener('mousemove', e => {
    spotlight.style.setProperty('--x', e.clientX + 'px');
    spotlight.style.setProperty('--y', e.clientY + 'px');
  });
});


