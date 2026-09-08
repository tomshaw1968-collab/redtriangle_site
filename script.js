document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var header = document.querySelector('header');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      header.classList.toggle('open');
    });
    document.querySelectorAll('.mobile-panel a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('open');
      });
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
