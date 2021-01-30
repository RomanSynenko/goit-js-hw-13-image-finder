import refs from './refs';
const { searchFormRef, galleryRef, loadMoreRef } = refs;
const loadMore = {
    enable() {
        loadMoreRef.disabled = false;
        loadMoreRef.classList.add('is-hidden');
    },
    disable() {
        loadMoreRef.disabled = true;
        loadMoreRef.classList.remove('is-hidden');
    },
    show() {
        loadMoreRef.classList.remove('is-hidden');
    }
};

export default loadMore;