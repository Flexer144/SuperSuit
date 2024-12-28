

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


const costumeId = sessionStorage.getItem('costumeId')
console.log(costumeId)