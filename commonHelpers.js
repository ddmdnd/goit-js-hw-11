import{i as a,S as p}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function u(t){const s="https://pixabay.com",r="/api/?",i=new URLSearchParams({key:"43236135-18e22e789778019f0f194eb5c",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${s}${r}${i}`;return fetch(e).then(o=>o.json()).catch(o=>console.log("Error:",o))}function h(t){return` 
    <li class = "photoItem">
        <a class="gallery-link" href="${t.largeImageURL}">
            <img
                class="img"
                src="${t.previewURL}"
                alt="${t.tags}"/>
                
            <div class= "titlePhoto">
            <div class="propertyItem">
                <h5 class="proportyTitle">Likes</h5>
                <p class="propertyQuantety">${t.likes}</p>
            </div>
            <div class="propertyItem">
                <h5 class="proportyTitle">Views</h5>
                <p class="propertyQuantety">${t.views}</p>
            </div>
            <div class="propertyItem">
                <h5 class="proportyTitle">Comments</h5>
                <p class="propertyQuantety">${t.comments}</p>
            </div>
            <div class="propertyItem">
                <h5 class="proportyTitle">Downloads</h5>
                <p class="propertyQuantety">${t.downloads}</p>
            </div>
            </div>
            </a>
            `}function m(t){return t.map(h).join("")}const y="/goit-js-hw-11/assets/logoStop-81eab426.svg",c=document.querySelector(".searchBox"),f=c.querySelector(".searchInput"),l=document.querySelector(".gallery");function d(){const t='<span class="loader"></span>';l.innerHTML=t}c.addEventListener("submit",t=>{t.preventDefault();const s=f.value;d(),u(s).then(r=>{const i=m(r.hits);r.total||a.show({id:"messageError",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:y,messageColor:"white",color:"#EF4040"}),l.innerHTML=i,new p(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(r=>{console.log(r),a.error({position:"topRight",title:"Error",message:`${r}`}),c.reset()})});
//# sourceMappingURL=commonHelpers.js.map
