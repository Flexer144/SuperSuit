

const costume = JSON.parse(sessionStorage.getItem('costumeName'))

let HTML = ''

HTML = `
  <div class="main">
    <p class="name-suit">Аренда костюма "${costume.name}"</p>
    <p class="text">Пожалуйста, укажите ваши контактные данные, чтобы мы забронировали костюм на ваше имя</p>
    
    <div class="input-container">
      <input class="input-name" placeholder="" type="text" >
      <label for="name">Как вас зовут?</label>
    </div>
    <div class="input-container">
      <input id="phone" class="input-number" placeholder="" type="text">
      <label for="phone">+7 909 444-33-22</label>
    </div>
    
    <select class="dropdown" id="rental-duration">
      <option value="" disabled selected>На сколько дней арендуете?</option>
      <option value="1">1 День</option>
      <option value="2">2 Дня</option>
      <option value="3">3 Дня</option>
      <option value="7">1 Неделя</option>
      <option value="14">2 Недели</option>
    </select>
    <div class="checkbox">
      <input type="checkbox">
      <p>Я согласен на обработку моих персональных данных</p>
    </div>
    <button class="button-apply">Оставить заявку</button>
  </div>
`
document.querySelector('.form').innerHTML = HTML