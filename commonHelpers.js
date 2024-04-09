import{i as a,S as p}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(o){const s="https://pixabay.com",r="/api/?",i=new URLSearchParams({key:"43236135-18e22e789778019f0f194eb5c",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${s}${r}${i}`;return fetch(e).then(t=>t.json()).catch(t=>console.log("Error:",t))}function m(o){return` 
    <li class = "photoItem">
        <a class="gallery-link" href="${o.largeImageURL}">
            <img
                class="img"
                src="${o.previewURL}"
                alt="${o.tags}"/>
                
            <div class= "titlePhoto">
            <div class="propertyItem">
                <h5 class="proportyTitle">Likes</h5>
                <p class="propertyQuantety">${o.likes}</p>
            </div>
            <div class="propertyItem">
                <h5 class="proportyTitle">Views</h5>
                <p class="propertyQuantety">${o.views}</p>
            </div>
            <div class="propertyItem">
                <h5 class="proportyTitle">Comments</h5>
                <p class="propertyQuantety">${o.comments}</p>
            </div>
            <div class="propertyItem">
                <h5 class="proportyTitle">Downloads</h5>
                <p class="propertyQuantety">${o.downloads}</p>
            </div>
            </div>
            </a>
            `}function h(o){return o.map(m).join("")}const y="/goit-js-hw-11/assets/logoStop-81eab426.svg",c=document.querySelector(".searchBox"),f=c.querySelector(".searchInput"),l=document.querySelector(".gallery");c.addEventListener("submit",o=>{o.preventDefault();const s=f.value;u(s).then(r=>{const i='<span class="loader"></span>';l.innerHTML=i;const e=h(r.hits);setTimeout(()=>{r.total||a.show({id:"messageError",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:y,messageColor:"white",color:"#EF4040"}),l.innerHTML=e,new p(".gallery a",{captionsData:"alt",captionDelay:250})},2e3)}).catch(r=>{console.log(r),a.error({position:"topRight",title:"Error",message:`${r}`}),c.rest()})});
//# sourceMappingURL=commonHelpers.js.map
