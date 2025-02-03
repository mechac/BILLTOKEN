document.addEventListener("DOMContentLoaded", function() {
 const spinner = document.getElementById('spinner');
 
 // Удаляем анимацию через 3 секунды
 setTimeout(() => {
 spinner.style.animation = 'none';
 spinner.style.display = 'none'; // Скрываем изображение после анимации
 }, 1500);
});