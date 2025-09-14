document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const navWrapper = document.querySelector('.nav-wrapper');

  if (toggle && navWrapper) {
    toggle.addEventListener('click', function () {
      navWrapper.classList.toggle('active');
    });

    // Optional: close menu when clicking outside nav or pressing ESC
    document.addEventListener('click', function (e) {
      if (navWrapper.classList.contains('active') &&
          !navWrapper.contains(e.target) &&
          !toggle.contains(e.target)) {
        navWrapper.classList.remove('active');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        navWrapper.classList.remove('active');
      }
    });
  }
});
