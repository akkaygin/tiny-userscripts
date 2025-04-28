// ==UserScript==
// @name         Xitter Checkmark Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes checkmarks from Xitter
// @author       Ali Kayra Kaygin
// @match        https://x.com/*
// @icon         https://abs.twimg.com/favicons/twitter.ico
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  function removeBlueChecks() {
    const checkmarks = document.querySelectorAll('svg[aria-label="Verified account"]');
    checkmarks.forEach(svgElement => {
      svgElement.remove();
    });
  }

  const observer = new MutationObserver(mutations => {
    removeBlueChecks();
  });

  observer.observe(document, {
    childList: true,
    subtree: true
  });

  removeBlueChecks();
  window.addEventListener('load', removeBlueChecks);
})();