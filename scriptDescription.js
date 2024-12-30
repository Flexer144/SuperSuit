import { suit } from "./data/costumes.js";

const costumeId = sessionStorage.getItem('costumeId')
let costume = {};
let HTML = ''

suit.forEach((suit) => {
  if(suit.id === costumeId){
    costume = suit
  }
})

let stockClass = ''
let stock = ''
let notClick = ''
if(costume.stock === 0){
  stock = 'Нет в наличии'
  stockClass = 'not-stock'
  notClick = 'not-click'
}
else{
  stock = `В наличии: ${costume.stock}`
  stockClass = 'stock-suit'
}


HTML = `
<div class="name-section container">
    <a href="index.html"><p>Главная </a>/ <span>${costume.name}</span></p>
  </div>

  <section class="main-section container">
    <div class="content">
      <div class="main-image">
        <img id="currentImage" src="${costume.image}" alt="Current Image">
      </div>
      <div class="thumbnails">
        <img class="thumbnail" src="${costume.image}" alt="Image 1">
        <img class="thumbnail" src="${costume.image}" alt="Image 2">
        <img class="thumbnail" src="${costume.image}" alt="Image 3">
        <img class="thumbnail" src="${costume.image}" alt="Image 4">
      </div>
    </div>

    <div class="right">
      <p class="name-suit">${costume.name}</p>
      <p class="id-suit">${costume.id}</p>
      <p class="price-suit">${costume.price}₽/сутки</p>
        <div class="complect">
          <p class="complect-suit">Комплектация:</p>
          <p class="complect-suit-enumeration">${costume.complectSuit}</p>  
        </div>
      <div class="size">
        <p class="size-suit-text">Размер:</p>
        <p class="size-suit">48-52</p>
      </div>
      <div class="sumbit">
        <button class="button-submit ${notClick}">Оставить заявку</button>
        <p class="${stockClass}">${stock}</p>
      </div>
    </div>
  </section>

  <section class="description-section container">
    <div class="description">
      <p>Описание</p>
    </div>
    <div class="description-text">
      <p>
        ${costume.description.one} <br>
      </p>
      <p>
        ${costume.description.two} <br>
      </p>
      <p>
        ${costume.description.three}
      </p>
    </div>
  </section>
`

document.querySelector('.main-content').innerHTML = HTML

let button = document.querySelector('.not-click')
if(notClick === 'not-click'){
  button.disabled = true;
}


function changeImage(imageSrc) {
  const currentImage = document.getElementById('currentImage');
  if (currentImage) {
      currentImage.src = imageSrc;
  } else {
      console.error('Element with id "currentImage" not found');
  }
}
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        changeImage(thumbnail.src);
    });
});


