import { suit } from "./data/costumes.js";

const costumeId = sessionStorage.getItem('costumeId')
let costume = {};
let HTML = ''

suit.forEach((suit) => {
  if(suit.id === costumeId){
    costume = suit
  }
})




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


