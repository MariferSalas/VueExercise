import{o as i,c as r,a as s,w as d,v as u,F as p,r as m,b as h,t as v,d as g}from"./vendor.a7960e30.js";const b=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}};b();var f="/assets/turtle.81812c10.jpeg",_="/assets/cat.983d2901.jpeg",y="/assets/fish.f076f967.jpeg";var k=(n,t)=>{const l=n.__vccOpts||n;for(const[c,e]of t)l[c]=e;return l};const x={data(){return{image:"./src/assets/dog2.jpeg",checkedNames:[],show:!0}},methods:{changeImage:function(){this.image=="./src/assets/dog1.jpeg"?this.image="./src/assets/dog2.jpeg":this.image="./src/assets/dog1.jpeg"}}},w={id:"example"},N=s("h1",{class:"green"},"Human's best friend",-1),I=["src"],E=h('<div class="cardsSection"><div class="card" style="width:18rem;"><div class="card-body"><h5 class="card-title"><a href="https://rescuedpetsmovement.org/">Rescued Pets Movement</a></h5><p class="card-text">Get to know more about the actions of Rescued Pets Movement.</p></div></div><div class="card" style="width:18rem;"><div class="card-body"><h5 class="card-title"><a href="https://rolda.org/?gclid=Cj0KCQjw3IqSBhCoARIsAMBkTb1QdKP9iIIX7qFiyQnx3RIoNyZL2ZJP0BfF5nM_pukaCWWj3bTkmXEaAv1qEALw_wcB">ROLDA</a></h5><p class="card-text">Get to know more about the actions of ROLDA.</p></div></div></div>',1),L={id:"bindingExample"},A=s("h2",null,"Favorite pets",-1),j=s("p",null,"Select your favorite pets from the list below.",-1),S=s("label",{for:"turtle"},"Turtle",-1),C=s("label",{for:"cat"},"Cat",-1),F=s("label",{for:"fish"},"Fish",-1),B={id:"LoopArrayExample"},O={key:0},P={key:1},T={key:2},M=h('<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"><div class="carousel-indicators"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button></div><div class="carousel-inner"><div class="carousel-item active"><img src="'+f+'" class="d-block w-100" alt="turtle"></div><div class="carousel-item"><img src="'+_+'" class="d-block w-100" alt="cat"></div><div class="carousel-item"><img src="'+y+'" class="d-block w-100" alt="fish"></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div><br>',2);function R(n,t,l,c,e,o){return i(),r(p,null,[s("div",w,[N,s("img",{alt:"dog",class:"logo",src:e.image,width:"450",height:"300"},null,8,I),s("button",{onClick:t[0]||(t[0]=(...a)=>o.changeImage&&o.changeImage(...a))},"See more images"),E]),s("div",L,[A,j,d(s("input",{type:"checkbox",id:"turtle",value:"Turtle","onUpdate:modelValue":t[1]||(t[1]=a=>e.checkedNames=a)},null,512),[[u,e.checkedNames]]),S,d(s("input",{type:"checkbox",id:"cat",value:"Cat","onUpdate:modelValue":t[2]||(t[2]=a=>e.checkedNames=a)},null,512),[[u,e.checkedNames]]),C,d(s("input",{type:"checkbox",id:"fish",value:"Fish","onUpdate:modelValue":t[3]||(t[3]=a=>e.checkedNames=a)},null,512),[[u,e.checkedNames]]),F,s("button",{onClick:t[4]||(t[4]=a=>e.show=!e.show)},"Toggle List")]),s("div",B,[e.show&&e.checkedNames.length?(i(),r("ul",O,[(i(!0),r(p,null,m(e.checkedNames,a=>(i(),r("li",null,v(a),1))),256))])):e.checkedNames.length?(i(),r("p",P,"The list is hidden.")):(i(),r("p",T,"The list is empty."))]),M],64)}var V=k(x,[["render",R]]);g(V).mount("#app");
