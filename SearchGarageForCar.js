// ==UserScript==
// @name         Search Bar For Garage
// @namespace    http://tampermonkey.net/
// @version      2025-06-16
// @description  try to take over the world!
// @author       Henrik
// @match        https://klavia.io/racer/garage
// @icon         https://www.google.com/s2/favicons?sz=64&domain=klavia.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let title = document.querySelector("#content > div:nth-child(3) > div.col-lg-8 > h4");
    let cars = document.querySelector("#content > div:nth-child(3) > div.col-lg-8 > div");
    let searchBar = document.createElement("input");
    searchBar.type = "search";
    searchBar.style.width = "300px";
    searchBar.style.margin = "0px 20px 0px 0px";
    searchBar.onchange = function() {
        Array.from(cars.children).forEach((child) => {
            let carLink = child.children[0].children[0].children[0];
            carLink.style.visibility = carLink.title.toLowerCase().includes(searchBar.value.toLowerCase()) ? "visible" : "hidden";
        });
    }

    title.insertBefore(searchBar, title.firstChild);
})();
