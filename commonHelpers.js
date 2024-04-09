import{i as c,S as p}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(r){const s="https://pixabay.com",o="/api/?",n=new URLSearchParams({key:"43236135-18e22e789778019f0f194eb5c",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${s}${o}${n}`;return fetch(e).then(t=>t.json()).catch(t=>console.log("Error:",t))}function m(r){return` 
    <li class = "photoItem">
        <a class="gallery-link" href="${r.largeImageURL}">
            <img
                class="img"
                src="${r.previewURL}"
                alt="${r.tags}"/>
                
            <div class= "titlePhoto">
            <div class="propertyItem">
                <h5 class="proportyTitle">Likes</h5>
                <p class="propertyQuantety">${r.likes}</p>
            </div>
            <div class="propertyItem">
                <h5 class="proportyTitle">Views</h5>
                <p class="propertyQuantety">${r.views}</p>
            </div>
            <div class="propertyItem">
                <h5 class="proportyTitle">Comments</h5>
                <p class="propertyQuantety">${r.comments}</p>
            </div>
            <div class="propertyItem">
                <h5 class="proportyTitle">Downloads</h5>
                <p class="propertyQuantety">${r.downloads}</p>
            </div>
            </div>
            </a>
            `}function y(r){return r.map(m).join("")}const l=document.querySelector(".searchBox"),h=l.querySelector(".searchInput"),a=document.querySelector(".gallery");l.addEventListener("submit",r=>{r.preventDefault();const s=h.value;u(s).then(o=>{const n='<span class="loader"></span>';a.innerHTML=n;const e=y(o.hits);setTimeout(()=>{o.total||(console.log("Catch"),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})),a.innerHTML=e,new p(".gallery a",{captionsData:"alt",captionDelay:250})},2e3)}).catch(o=>{console.log(o),c.error({title:"Error",message:`${o}`})})});
//# sourceMappingURL=commonHelpers.js.map
