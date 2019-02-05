function classToggle() {
  const navs = document.querySelectorAll('.main-nav')

  navs.forEach(nav => nav.classList.toggle('nav-toggle-show'));
}
document.querySelector('.nav-link-toggle')
  .addEventListener('click', classToggle);
