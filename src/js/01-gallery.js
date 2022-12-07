// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import templateFunction from '../templates/item-markup.hbs';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryRefs = document.querySelector('.gallery');

(function createImages() {
 const itemMarkup = galleryItems.map(templateFunction).join('');
  galleryRefs.insertAdjacentHTML('beforeend', itemMarkup);
})()
      
  new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
})