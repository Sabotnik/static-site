function classToggle() {
  const navs = document.querySelectorAll('.main-nav')

  navs.forEach(nav => nav.classList.toggle('nav-toggle-show'));
}
document.querySelector('.nav-link-toggle')
  .addEventListener('click', classToggle);

$( "#dropdown" ).hover(
  function() {
    $( "#dropdown a i" ).addClass( "fa-rotate-90" );
  }, function() {
    $( "#dropdown a i" ).removeClass( "fa-rotate-90" );
  }
);