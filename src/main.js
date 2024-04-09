import {getPhotoServer} from "./js/pixabay-api.js";
import {photosResponse} from "./js/render-function.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.searchBox');
const inputSearch = form.querySelector('.searchInput');
const gallery = document.querySelector('.gallery')
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const inputData = inputSearch.value;
    getPhotoServer(inputData).then((photo) =>{
        const loadingText = `<span class="loader"></span>`;
        gallery.innerHTML = loadingText;
        const markup = photosResponse(photo.hits);
        setTimeout(()=>{
            if(!photo.total){
                console.log("Catch")
                iziToast.error({
                        title: 'Error',
                        message: 'Sorry, there are no images matching your search query. Please try again!',
                    })}
        gallery.innerHTML = markup;
        const lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt', captionDelay: 250
          });
        },2000)
    })

    .catch((error) => {
        console.log(error)
        iziToast.error({
            title: 'Error',
            message: `${error}`,
    });

});
})
