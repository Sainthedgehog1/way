"use strict";(()=>{const e=document.querySelector(".page-header"),a=e.querySelector(".toggler"),t=e.querySelector(".page-nav"),s=()=>{a.classList.contains("toggler--active")?(a.classList.remove("toggler--active"),a.setAttribute("aria-expanded",!1)):(a.classList.add("toggler--active"),a.setAttribute("aria-expanded",!0)),t.classList.contains("page-nav--opened")?t.classList.remove("page-nav--opened"):t.classList.add("page-nav--opened")};a.addEventListener("click",s),t.addEventListener("click",e=>{e.target.classList.contains("page-nav__link")&&s()}),e.classList.contains("page-header--nojs")&&e.classList.remove("page-header--nojs")})();