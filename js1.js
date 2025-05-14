const toggleBtn = document.getElementById('toggleMenu');
const menu = document.getElementById('productMenu');

// افزودن event listener برای باز و بسته کردن منو
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});
