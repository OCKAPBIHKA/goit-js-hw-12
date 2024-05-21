import{a as L,i as c,S as v}from"./assets/vendor-bffe7c41.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const b=s=>s.reduce((t,{tags:r,webformatURL:i,largeImageURL:e,likes:o,views:a,comments:y,downloads:g})=>t+`<li class="photo-container zoom-on-hover">
    <a href=${e} class="card-link js-card-link">
        <img class="photo " src="${i}" alt="${r}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${o}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${a}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${y}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${g}</span>
        </div>
    </div>
</li>
    `,""),w="https://pixabay.com/api/",P="43762394-e72429fa5e3e409aeb4eb6170",S=async(s,t)=>(await L(w,{params:{key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:12}})).data,p=document.querySelector(".gallery"),E=document.querySelector(".search-form"),l=document.querySelector(".loader"),n=document.querySelector(".photo-btn");let d=1,q=15,f="";function A(){n.classList.remove("is-hidden-btn")}function h(){n.classList.add("is-hidden-btn")}async function m(s,t){l.classList.remove("is-hidden");try{const r=await S(s,t);r.hits.length===0?(c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topLeft",color:"red"}),h(),n.removeEventListener("click",u)):(p.insertAdjacentHTML("beforeend",b(r.hits)),new v(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh(),t*q>=r.totalHits?(h(),n.removeEventListener("click",u),c.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter",color:"blue"})):A())}catch{c.error({message:"An error occurred while fetching and displaying photos. Please try again later.",position:"topCenter",color:"blue"})}finally{l.classList.add("is-hidden")}}async function u(){d++,await m(f,d),M()}n.addEventListener("click",u);async function C(s){s.preventDefault();const t=s.target.elements.searchKeyword.value.trim();if(p.innerHTML="",t==="")return h(),n.removeEventListener("click",u),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"yellow"});f=t,l.classList.remove("is-hidden");try{d=1,await m(t,d)}catch{c.error({message:"An error occurred while fetching and displaying photos. Please try again later.",position:"topCenter",color:"red"})}finally{s.target.reset(),l.classList.add("is-hidden")}}E.addEventListener("submit",C);function M(){const{height:s}=document.querySelector(".photo-container").firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
