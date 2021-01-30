import pnotify from './pnotify';
import loadMore from './loadMore';
const KEY = '20020370-9a83858931624ea8d777f9f7a';
export default {
    inputValue: '',
    pageNumber: 1,
    fetchImage() {
        const baseUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.inputValue}&page=${this.pageNumber}&per_page=12&key=${KEY}`;
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
        };
        return fetch(baseUrl, options)
            .then(response => response.json())
            .then(({ hits }) => {
                this.incrementPage();
                if (hits.length === 0) {
                    pnotify.error();
                }
                if (hits.length > 1) {
                    pnotify.goodRequest()
                }
                return hits
            })
    },
    resetPage() {
        this.pageNumber = 1;
    },
    incrementPage() {
        this.pageNumber += 1;
    },
    get query() {
        return this.inputValue;
    },
    set query(newValue) {
        this.inputValue = newValue;
    },
}