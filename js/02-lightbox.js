import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery');

for (let i = 0; i < galleryItems.length; i++) {
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
  image.setAttribute('alt', galleryItems[i].description);
  link.appendChild(image);

  link.addEventListener(
    'click',
    (function (index) {
      return function (event) {
        event.preventDefault();

        const gallery = new SimpleLightbox('.gallery a', {
          captions: true,
          captionDelay: 250,
          captionsData: 'alt',
          captionType: 'data',
          captionPosition: 'bottom',
        });

        const closeLightbox = function () {
          gallery.close();
          document.removeEventListener('keydown', handleKeyDown);
        };

        const handleKeyDown = function (event) {
          if (event.key === 'Escape') {
            closeLightbox();
          }
        };

        gallery.on('show.simplelightbox', function (e) {
          document.addEventListener('keydown', handleKeyDown);
          const altText = e.caption;
          const captionElement = document.createElement('div');
          captionElement.className = 'slb-caption';
          captionElement.innerHTML = altText;
          captionElement.style.opacity = '0';
          const captionContainer = gallery.captionContainer;
          if (captionContainer) {
            captionContainer.appendChild(captionElement);
            setTimeout(function () {
              captionElement.style.opacity = '1';
            }, 250);
          }
        });

        gallery.on('close.simplelightbox', function () {
          document.removeEventListener('keydown', handleKeyDown);
        });

        gallery.open(index);
      };
    })(i)
  );
}
