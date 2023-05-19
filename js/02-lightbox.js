import { galleryItems } from './gallery-items.js';
// Change code below this line

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = new SimpleLightbox('.gallery');

  const galleryContainer = document.querySelector('.gallery');

  galleryItems.forEach((item) => {
    const galleryLink = document.createElement('a');
    galleryLink.href = item.original;
    galleryLink.classList.add('gallery__item');

    const galleryImage = document.createElement('img');
    galleryImage.src = item.preview;
    galleryImage.alt = item.description;
    galleryImage.classList.add('gallery__image');

    galleryLink.appendChild(galleryImage);
    galleryContainer.appendChild(galleryLink);
  });

  const lightboxImages = galleryContainer.querySelectorAll('.gallery__image');

  lightboxImages.forEach((image) => {
    image.addEventListener('click', () => {
      setTimeout(() => {
        const caption = document.createElement('div');
        caption.classList.add('caption');
        caption.textContent = image.alt;
        image.parentNode.appendChild(caption);
      }, 250);
    });
  });
});
