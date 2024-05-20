import{a as L,i as u,S as v}from"./assets/vendor-bffe7c41.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const b=o=>o.reduce((t,{tags:r,webformatURL:i,largeImageURL:e,likes:s,views:a,comments:y,downloads:g})=>t+`<li class="photo-container zoom-on-hover">
    <a href=${e} class="card-link js-card-link">
        <img class="photo " src="${i}" alt="${r}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${s}</span>
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
    `,""),w="https://pixabay.com/api/",S="43762394-e72429fa5e3e409aeb4eb6170",P=async(o,t)=>(await L(w,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:12}})).data,f=document.querySelector(".gallery"),E=document.querySelector(".search-form"),c=document.querySelector(".loader"),n=document.querySelector(".photo-btn");let l=1,q=15,p="";function M(){n.classList.remove("is-hidden-btn")}function h(){n.classList.add("is-hidden-btn")}async function m(o,t){c.classList.remove("is-hidden");try{const r=await P(o,t);r.hits.length===0?(u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topLeft",color:"red"}),h(),n.removeEventListener("click",d)):(f.innerHTML+=b(r.hits),new v(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh(),t*q>=r.totalHits?(h(),n.removeEventListener("click",d),u.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter",color:"blue"})):M())}catch(r){console.log(r)}finally{c.classList.add("is-hidden")}}async function d(){l++,await m(p,l),B()}n.addEventListener("click",d);async function $(o){o.preventDefault();const t=o.target.elements.searchKeyword.value.trim();if(f.innerHTML="",t==="")return h(),n.removeEventListener("click",d),u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"yellow"});p=t,c.classList.remove("is-hidden");try{l=1,await m(t,l)}catch(r){console.log(r)}finally{o.target.reset(),c.classList.add("is-hidden")}}E.addEventListener("submit",$);function B(){const{height:o}=document.querySelector(".photo-container").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
