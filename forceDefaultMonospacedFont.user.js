// ==UserScript==
// @name         Force Default Monospaced Font?
// @description  Tries to force all monospaced fonts to the default monospaced font.
// @version      1.0
// @match        *://*/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';
  GM_addStyle(`
    code, kbd, pre, samp, tt, var {
      font-family: monospaced !important;
    }
  `);
})();