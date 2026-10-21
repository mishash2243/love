// Комплименты (можешь добавить свои)
const compliments = [
  "Ты самая красивая! 😍",
  "Я тебя очень люблю! ❤️",
  "Ты мой самый близкий человек",
  "С тобой каждый день — праздник ✨",
  "Твоя улыбка сводит меня с ума",
  "Ты лучше всех на свете!",
  "Я самый счастливый, когда ты рядом",
  "Спасибо, что ты есть у меня",
  "Ты — моя вселенная 🌌",
  "Люблю тебя до луны и обратно 🌙",
  "Ты делаешь этот мир добрее",
  "Мое сердце бьется только для тебя",
  "Ты мое самое любимое чудо",
  "С тобой я чувствую себя дома",
  "Ты — мой идеал"
];

function startCompliments() {
  // Убираем стрелку после нажатия
  const arrow = document.querySelector('.arrow-container');
  if (arrow) arrow.style.display = 'none';

  // Запускаем дождь из комплиментов
  let count = 0;
  const interval = setInterval(() => {
    createCompliment();
    count++;
    // Выпустим 50 штук и остановимся
    if (count > 50) clearInterval(interval);
  }, 150); // Каждые 150 миллисекунд
}

function createCompliment() {
  const container = document.getElementById('compliments-container');
  
  // Создаем элемент
  const el = document.createElement('div');
  el.className = 'compliment';
  
  // Выбираем случайный комплимент
  el.innerText = compliments[Math.floor(Math.random() * compliments.length)];
  
  // Случайная позиция по горизонтали
  el.style.left = Math.random() * 90 + 'vw';
  
  // Начальная позиция (за верхним краем экрана)
  el.style.top = '-50px';
  
  // Случайная скорость падения (от 3 до 6 секунд)
  const duration = Math.random() * 3 + 3;
  el.style.animationDuration = duration + 's';
  
  // Добавляем на страницу
  container.appendChild(el);
  
  // Удаляем элемент после завершения, чтобы не грузить телефон
  setTimeout(() => {
    el.remove();
  }, duration * 1000);
}
