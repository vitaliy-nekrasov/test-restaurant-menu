document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const navWrapper = document.querySelector('.nav-wrapper');

  if (toggle && navWrapper) {
    toggle.addEventListener('click', function () {
      const isActive = navWrapper.classList.toggle('active');
      toggle.classList.toggle('active', isActive);
      toggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    document.addEventListener('click', function (e) {
      if (navWrapper.classList.contains('active') &&
          !navWrapper.contains(e.target) &&
          !toggle.contains(e.target)) {
        navWrapper.classList.remove('active');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        navWrapper.classList.remove('active');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
