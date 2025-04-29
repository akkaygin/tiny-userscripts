// ==UserScript==
// @name         Declutter old.reddit.com
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Declutters old.reddit.com
// @author       Ali Kayra Kaygin
// @match        *://old.reddit.com/*
// @grant        none
// @run-at       start
// ==/UserScript==

(function () {
  'use strict';

  function declutter() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", declutter());
      return;
    }

    const header = document.getElementById('header');
    header.remove();

    const sidebar = document.getElementsByClassName('side')[0];
    sidebar.remove();

    const infobars = document.getElementsByClassName('infobar');
    for (let i = infobars.length - 1; i >= 0; i--) { infobars[i].remove(); }

    const footer = document.getElementsByClassName('footer-parent')[0];
    footer.remove();
    
    const bottommenu = document.getElementsByClassName('bottommenu')[0];
    bottommenu.remove();

    const contents = document.getElementsByClassName('content');
    for (const content of contents) {
      content.style.maxWidth = '1200px';
      content.style.margin = '20px auto';
    }
  }

  declutter();
})();
