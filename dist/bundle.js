(()=>{"use strict";const e=["seagreen","royalblue","cadetblue","darkslategrey","dodgerblue","#9B2335"],t=(document.getElementById("clickme").addEventListener("click",(()=>{document.body.style.backgroundColor=e[t()]})),function(){return Math.floor(Math.random()*(e.length+1))}),n=document.querySelector(".temp_num"),c=document.querySelector(".comment"),a=document.querySelector(".wind_km"),r=document.querySelector(".weather"),l=document.querySelector(".dayhour");(async()=>{const{currentConditions:e}=await fetch("https://weatherdbi.herokuapp.com/data/weather/tbilisi").then((e=>e.json()));n.innerHTML=e.temp.c,c.innerHTML=e.comment,a.innerHTML=e.wind.km,r.style.backgroundImage=`url(${e.iconURL})`,l.innerHTML=e.dayhour,console.log(e)})();const d=document.createElement("div");document.body.appendChild(d);let i=document.querySelector(".entered-list"),o=document.querySelector(".add-list"),s=document.querySelector(".tasks");i.addEventListener("keyup",(()=>{0!=i.value?o.classList.add("active"):o.classList.remove("active")})),o.addEventListener("click",(()=>{if(0!=i.value){let e=document.createElement("div");e.classList.add("item"),e.innerHTML=`<p> ${i.value}<p>\n        <div class="item completed">\n            <div class="item-btn">\n                <i class="fa-solid fa-check"></i>\n                <i class="fa-solid fa-circle-minus"></i>\n            </div>\n        </div>`,s.appendChild(e),i.value=" "}else alert("გთხოვთ შეავსოთ ველი")})),s.addEventListener("click",(e=>{e.target.classList.contains("fa-circle-minus")&&e.target.parentElement.parentElement.parentElement.remove()})),s.addEventListener("click",(e=>{e.target.classList.contains("fa-check")&&e.target.parentElement.parentElement.parentElement.classList.toggle("completed")}))})();