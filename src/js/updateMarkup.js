import refs from './refs';
import createGallery from './createGallery';
import apiService from './apiService';
import loadMore from './loadMore';
import pnotify from './pnotify';
const { searchFormRef, galleryRef, loadMoreRef } = refs;
const clearGallery = () => {
    galleryRef.innerHTML = '';
    loadMore.enable();
};
const searchImage = (event) => {
    event.preventDefault();
    const formContent = event.currentTarget;
    apiService.query = formContent.query.value;
    clearGallery();
    apiService.resetPage();
    renderGallery();
    formContent.reset();

};
const renderGallery = () => {
    apiService.fetchImage()
        .then(
            hits => {
                if (hits.length === 0) {
                    loadMore.enable();
                    return
                }
                createGallery(hits);
                loadMore.show();
                window.scrollTo({
                    top: document.documentElement.offsetHeight,
                    behavior: "smooth"
                });
            }
        )
};

loadMoreRef.addEventListener('click', renderGallery)
searchFormRef.addEventListener('submit', searchImage)