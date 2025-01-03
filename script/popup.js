

const costume = JSON.parse(sessionStorage.getItem('costumeName'))


let HTML = ''

HTML = `
  <div class="main">
    <p class="name-suit">Аренда костюма "${costume.name}"</p>
    <p class="text">Пожалуйста, укажите ваши контактные данные, чтобы мы забронировали костюм на ваше имя</p>
    
    <div class="input-container">
      <input id="input-name" class="input-name" placeholder="" type="text" >
      <label for="name">Как вас зовут?</label>
    </div>
    <div class="input-container">
      <input id="input-phone" class="input-number" placeholder="" type="text">
      <label for="phone">Ваш номер телефона</label>
    </div>
    
    <select class="dropdown" id="rental-duration">
      <option value="" disabled selected>На сколько дней арендуете?</option>
      <option value="1 День">1 День</option>
      <option value="2 Дня">2 Дня</option>
      <option value="3 Дня">3 Дня</option>
      <option value="1 Неделя">1 Неделя</option>
      <option value="2 Недели">2 Недели</option>
    </select>
    <div class="checkbox">
      <input id="check-box" type="checkbox">
      <p>Я согласен на обработку моих персональных данных</p>
    </div>
    <button class="button-apply">Оставить заявку</button>
  </div>
`
document.querySelector('.form').innerHTML = HTML


const buttonApply = document.querySelector('.button-apply');
const inputName = document.getElementById('input-name')
let inputPhone = document.getElementById('input-phone')
const rentalDuration = document.getElementById('rental-duration');
const check = document.getElementById('check-box')

  inputName.addEventListener('input', () => {
    if (inputName.value.trim() !== '' && inputPhone.value.trim() !== '') {
      buttonApply.disabled = false;
      buttonApply.classList.add('enabled');
    } else {
      buttonApply.disabled = true;
      buttonApply.classList.remove('enabled');
    }
  })
  inputPhone.addEventListener('input', () => {
    inputPhone.value = inputPhone.value.replace(/[^0-9]/g,'')
    if (inputPhone.value.trim() !== '' && check.checked === true) {
      buttonApply.disabled = false;
      buttonApply.classList.add('enabled');
    } else {
      buttonApply.disabled = true;
      buttonApply.classList.remove('enabled');
    }
  })
  check.addEventListener('input', () => {
    if (check.checked === true && inputPhone.value.trim() !== '') {
      buttonApply.disabled = false;
      buttonApply.classList.add('enabled');
    } else {
      buttonApply.disabled = true;
      buttonApply.classList.remove('enabled');
    }
  })

  buttonApply.addEventListener('click', ()=>{
    let phone = Number(inputPhone.value)
    if(isNaN(phone)){
      alert('Введите корректный номер телефона')
    }else{
      let existingApplications = JSON.parse(localStorage.getItem('application'))
      existingApplications.push({
        nameSuit: costume.name,
        name: inputName.value,
        phone: phone,
        rentalDuration: rentalDuration.value
      })
      localStorage.setItem('application', JSON.stringify(existingApplications))
      alert(`${inputName.value}, благодорим за оставленную заявку! \nВ ближайшее время с вами свяжутся.`)
      window.location.href = '/index.html'
      inputName.value = '';
      inputPhone.value = '';
      rentalDuration.value = '';
    }
  })

  


