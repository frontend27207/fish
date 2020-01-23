window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.nav_menu'),
  menuItem = document.querySelectorAll('.nav_menu-item'),
  hamburger = document.querySelector('.burger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('burger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('burger_active');
          menu.classList.toggle('menu_active');
      })
  })
})