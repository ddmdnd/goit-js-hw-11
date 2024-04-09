import {getPhotoServer} from "./js/pixabay-api.js";
import {photosResponse} from "./js/render-function.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// import {photoResponse} from "./js/render-function.js";



const form = document.querySelector('.searchBox');
const inputSearch = form.querySelector('.searchInput');
// const buttonSubmit = form.querySelector('.button-search')
const gallery = document.querySelector('.gallery')
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const inputData = inputSearch.value;
    getPhotoServer(inputData).then((photo) =>{
        const loadingText = `<span class="loader"></span>`
        gallery.innerHTML = loadingText;
        const markup = photosResponse(photo.hits);
        setTimeout(()=>{
        gallery.innerHTML = markup;
        const lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt', captionDelay: 250
          });
        },2000)
    })
    .then((error)=>{
        if(!error){
        console.error("Stop")
        }

    })
    
    form.reset();
})



// ("hits": [
//     {
//         "id": 8579067,
//         "pageURL": "https://pixabay.com/photos/supermarine-spitfire-toy-plane-8579067/",
//         "type": "photo",
//         "tags": "supermarine spitfire, toy, plane",
//         "previewURL": "https://cdn.pixabay.com/photo/2024/02/17/10/18/supermarine-spitfire-8579067_150.jpg",
//         "previewWidth": 150,
//         "previewHeight": 84,
//         "webformatURL": "https://pixabay.com/get/g3c409e2fb1c46710ac32104df91d7482c8cc89f9e068ebc4ef399fbf33bb32acad6b8495ebb5fdb0348005940984f2175d99a40008f1d67e8f9c08875e86ee4f_640.jpg",
//         "webformatWidth": 640,
//         "webformatHeight": 360,
//         "largeImageURL": "https://pixabay.com/get/gd5940172a40e3cbee4fbda6a2dc697bdaf5c78d76dabac289b75b0777958c76f9ebc60ec8e0a055d1be74ec72d9c9075ec0e0b89cb8808af1934af89a28d4ca1_1280.jpg",
//         "imageWidth": 4592,
//         "imageHeight": 2584,
//         "imageSize": 4042978,
//         "views": 2099,
//         "downloads": 1547,
//         "collections": 12,
//         "likes": 24,
//         "comments": 6,
//         "user_id": 4388604,
//         "user": "Matias_Luge",
//         "userImageURL": "https://cdn.pixabay.com/user/2017/03/11/23-37-36-481_250x250.png"
//     },)



// ` 
// <li class = "photoItem">
//     <a class="gallery-link" href="${data.largeImageURL}">
//         <img
//             class="imgPhotoList"
//             src="${data.previewURL}"
//             alt="${data.tags}"/>
//      </a>
//     <ul class="propertyList">
//         <li class="propertyItem">
//             <h5 class="proportyTitle">"${data.likes}"</h5>
//             <p class="propertyQuantety">1</p>
//         </li>
//         <li class="propertyItem">
//             <h5 class="proportyTitle">${data.views}</h5>
//             <p class="propertyQuantety">2</p>
//         </li>
//         <li class="propertyItem">
//             <h5 class="proportyTitle">${data.comments}</h5>
//             <p class="propertyQuantety">3</p>
//         </li>
//         <li class="propertyItem">
//             <h5 class="proportyTitle">${data.downloads}</h5>
//             <p class="propertyQuantety">4</p>
// </li>`;



