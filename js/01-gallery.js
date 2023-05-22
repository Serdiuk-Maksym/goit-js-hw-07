import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

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
   data-source="${item.original}"
   alt="${item.description}"/></a></li>`
    )
    .join('');
}
const addGalleryMarkUp = createGalleryMarkUp(galleryItems);
ulEl.innerHTML = addGalleryMarkUp;
ulEl.addEventListener('click', onGalleryItemClick);
function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`<img src=
      "${event.target.dataset.source}"
       width="800" height ="600"/>`);
  instance.show();

  ulEl.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      document.removeEventListener('keydown', event);
      instance.close();
    }
  });
}
