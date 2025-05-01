// ==UserScript==
// @name         Redirect New Reddit to Old Reddit
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Redirects most reddit.com links to old.reddit.com
// @author       Ali Kayra Kaygin
// @match        *://www.reddit.com/*
// @match        *://reddit.com/*
// @grant        none
// @run-at       start
// ==/UserScript==

(function () {
  'use strict';

  let nuke = null;
  function redirectImage() {
    const imageParent = document.getElementsByTagName('zoomable-img')[0];
    const imageSrc = imageParent.getElementsByTagName('img')[0].src;

    document.body.innerHTML = `<div style='display:flex;justify-content:center;align-items:center;height:100vh;'><img src=${imageSrc} style='max-width:80%;max-height:80%' /></div>`;
    document.body.style.backgroundColor = '#000';

    nuke = new MutationObserver(() => {
      const children = document.body.children;
      for (let i = children.length - 1; i >= 1; i--) {
        children[i].remove();
      }
    })
    nuke.observe(document.body, { childList: true, subtree: true });
  }

  function redirect() {
    const currentURL = window.location.href;
    if (currentURL.match(/reddit\.com\/media/) == null) {
      const newURL = currentURL.replace(/(www\.)?reddit\.com/, 'old.reddit.com');
      window.location.replace(newURL);
    } else {
      redirectImage();
    }
  }

  redirect();
})();
