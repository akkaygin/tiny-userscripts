// ==UserScript==
// @name         Redirect New Reddit to Old Reddit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirects all reddit.com links to old.reddit.com
// @author       Ali Kayra Kaygin
// @match        *://www.reddit.com/*
// @match        *://reddit.com/*
// @grant        none
// @run-at       start
// ==/UserScript==

(function () {
  'use strict';

  const redirect = () => {
    const currentURL = window.location.href;
    const newURL = currentURL.replace(/(www\.)?reddit\.com/, "old.reddit.com");
    window.location.href = newURL;
  }

  redirect();
})();
