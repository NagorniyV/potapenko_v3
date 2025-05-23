async function loadHTML(selector, file) {
  const response = await fetch(file);
  const html = await response.text();
  document.querySelector(selector).innerHTML = html;
}

loadHTML("#header", "partials/header.html");
loadHTML("#footer", "partials/footer.html");


document.getElementById('callbackForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const phoneNumber = document.getElementById('phoneInput').value.trim();
  
  if(!phoneNumber) {
    alert('Пожалуйста, введите номер телефона');
    return;
  }
  
  // Ваш Telegram ID или username
  const telegramUsername = 'EEduarDDD';
  
  // Формируем сообщение
  const message = `Обратный звонок на номер: ${encodeURIComponent(phoneNumber)}`;
  
  // Ссылка для открытия Telegram
  const telegramUrl = `https://t.me/${telegramUsername}?text=${message}`;
  
  // Открываем Telegram
  window.open(telegramUrl, '_blank');
  
  // Очищаем поле ввода
  document.getElementById('phoneInput').value = '';
  
  // Сообщение пользователю
  alert('Сейчас откроется Telegram с готовым сообщением. Просто нажмите "Отправить"!');
});

//BREND SECTION

// JavaScript для бесконечного эффекта
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-track');
  const logos = track.querySelectorAll('img');
  const logosCount = logos.length;
  
  // Клонируем логотипы для бесшовности
  logos.forEach(logo => {
    const clone = logo.cloneNode(true);
    track.appendChild(clone);
  });
  
  // Перезапуск анимации при скролле
  track.addEventListener('animationiteration', () => {
    track.style.animation = 'none';
    void track.offsetWidth; // Trigger reflow
    track.style.animation = 'scroll 40s linear infinite';
  });
});

// section parts 

document.addEventListener('DOMContentLoaded', function() {
  const cardItems = document.querySelectorAll('.card-item');
  
  cardItems.forEach(item => {
    item.addEventListener('click', function() {
      const details = this.querySelector('.card-details');
      const isActive = details.classList.contains('active');
      
      // Закрываем все другие элементы
      document.querySelectorAll('.card-details').forEach(el => {
        if (el !== details) {
          el.classList.remove('active');
          el.parentElement.classList.remove('active');
        }
      });
      
      // Переключаем текущий элемент
      details.classList.toggle('active');
      this.classList.toggle('active', !isActive);
      
      // Альтернатива с динамической высотой
      if (!isActive) {
        details.style.maxHeight = details.scrollHeight + 'px';
      } else {
        details.style.maxHeight = '0';
      }
    });
  });
});