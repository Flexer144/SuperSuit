import { suit } from "../data/costumes.js";


let suitHTML = '';

suit.forEach((suit) => {
  let stockClass = ''
  let stock = ''
  if(suit.stock === 0){
    stock = 'Нет в наличии'
    stockClass = 'not-stock'
  }
  else{
    stock = `В наличии: ${suit.stock}`
  }

  suitHTML += `
    <div class="card">
      <div class="content">
        <div class="image">
          <img src="${suit.image}" alt="">
        </div>
        <div class="description">
          <p class="card-name-text">${suit.name}</p>
          <p class="suit-size-text">Размеры: 48-52</p>
          <p class="suit-price-text">${suit.price}₽/день.</p>
          <a href="descriptionSuit.html">
            <button data-suit-id="${suit.id}" class="button-view">Быстрый просмотр</button>
          </a>
          <p class="suit-stock-text ${stockClass}">${stock}</p>
        </div>
      </div>
    </div>
  `
});

document.querySelector('.Grid-product-main').innerHTML = suitHTML;

document.querySelectorAll('.button-view')
  .forEach((suit) => {
    suit.addEventListener('click', () => {
      const suitId = suit.dataset.suitId;
      sessionStorage.setItem('costumeId', suitId)
    })
  })

function two() {
  document.querySelectorAll('[data-scroll-from]').forEach(function(button) {
    button.addEventListener('click', function() {
      const targetElement = this.getAttribute('data-scroll-to');
      document.getElementById(targetElement).scrollIntoView({ behavior: 'smooth' });
    });
  });
}
two();

