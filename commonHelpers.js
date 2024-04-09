import{S as a}from"./assets/vendor-10cb7c31.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(r){const o="https://pixabay.com",s="/api/?",n=new URLSearchParams({key:"43236135-18e22e789778019f0f194eb5c",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${o}${s}${n}`;return fetch(e).then(t=>t.json()).catch(t=>console.log("Error:",t))}function u(r){return` 
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
            `}function m(r){return r.map(u).join("")}const c=document.querySelector(".searchBox"),y=c.querySelector(".searchInput"),l=document.querySelector(".gallery");c.addEventListener("submit",r=>{r.preventDefault();const o=y.value;p(o).then(s=>{const n='<span class="loader"></span>';l.innerHTML=n;const e=m(s.hits);setTimeout(()=>{l.innerHTML=e,new a(".gallery a",{captionsData:"alt",captionDelay:250})},2e3)}).then(s=>{s||console.error("Stop")}),c.reset()});
//# sourceMappingURL=commonHelpers.js.map
