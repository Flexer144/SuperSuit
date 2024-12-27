import { suit } from "./data/costumes.js";


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
          <button class="button-view">Быстрый просмотр</button>
          <p class="suit-stock-text ${stockClass}">${stock}</p>
        </div>
      </div>
    </div>
  `
});

document.querySelector('.Grid-product-main').innerHTML = suitHTML;
