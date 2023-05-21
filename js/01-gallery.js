import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');

for (var i = 0; i < galleryItems.length; i++) {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');
  list.appendChild(listItem);

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.setAttribute('href', galleryItems[i].original);
  listItem.appendChild(link);

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.setAttribute('src', galleryItems[i].preview);
  image.setAttribute('data-source', galleryItems[i].original);
  image.setAttribute('alt', galleryItems[i].description);
  link.appendChild(image);

  link.addEventListener(
    'click',
    (function (index) {
      return function (event) {
        event.preventDefault();

        const lightbox = basicLightbox.create(
          `<img src="${galleryItems[index].original}">`
        );

        const closeLightbox = function () {
          lightbox.close();
          document.removeEventListener('keydown', handleKeyDown);
        };

        const handleKeyDown = function (event) {
          if (event.key === 'Escape') {
            closeLightbox();
          }
        };

        lightbox.show();
        document.addEventListener('keydown', handleKeyDown);
        lightbox
          .element()
          .querySelector('.basicLightbox')
          .addEventListener('click', closeLightbox);
      };
    })(i)
  );
}
