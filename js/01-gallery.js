import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

galleryItems.forEach((item) => {
  const galleryImage = document.createElement('img');
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryImage.setAttribute('data-source', item.original);
  galleryImage.classList.add('gallery__image');

  galleryImage.addEventListener('click', (event) => {
    const originalImageSrc = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${originalImageSrc}">`);
    instance.show();
  });

  galleryContainer.appendChild(galleryImage);
});
