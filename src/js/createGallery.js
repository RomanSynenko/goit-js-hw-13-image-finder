import refs from './refs';
import markupGallery from '../templates/markupList.hbs';
const { galleryRef } = refs;

const createMarkup = (hits) => {
    const markup = markupGallery(hits);
    galleryRef.insertAdjacentHTML('beforeend', markup);
};
export default createMarkup;