const navMain = document.querySelector('.main-nav');
const headerToggle = document.querySelector('.main-header__toggle');

// Burger menu
navMain.classList.remove('main-nav--nojs');
headerToggle.classList.remove('main-header__toggle--nojs');

headerToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    headerToggle.classList.remove('main-header__toggle--nav-closed');
    navMain.classList.add('main-nav--opened');
    headerToggle.classList.add('main-header__toggle--nav-opened')
  } else {
    navMain.classList.add('main-nav--closed');
    headerToggle.classList.add('main-header__toggle--nav-closed')
    navMain.classList.remove('main-nav--opened');
    headerToggle.classList.remove('main-header__toggle--nav-opened')
  }
});


