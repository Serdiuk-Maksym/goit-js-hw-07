import { galleryItems } from './gallery-items.js';

const ulEl = document.querySelector('.gallery');
function createGalleryMarkUp(items) {
  return items
    .map(
      (item) =>
        `<li class="gallery__item">
   <a class="gallery__link" 
   href ="${item.original}">
   <img
   class="gallery__image" 
   src="${item.preview}"
   alt="${item.description}"/></a></li>`
    )
    .join(' ');
}
const addGalleryMarkUp = createGalleryMarkUp(galleryItems);
ulEl.innerHTML = addGalleryMarkUp;

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  enableKeyboard: true,
  close: true,
});
