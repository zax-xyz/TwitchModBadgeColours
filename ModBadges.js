// ==UserScript==
// @name         Twitch Mod Badge Colours
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Make mod badges in Twitch chat the same colour as the username
// @author       Zaxu__
// @match        https://www.twitch.tv/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @require      https://raw.githubusercontent.com/uzairfarooq/arrive/2a6ccfc7f069222b260c52225a812317b0aa06c3/minified/arrive.min.js
// ==/UserScript==

(function() {
  'use strict';

  // Your code here...
  $(document).arrive(".chat-line__message", function() {
    console.log($(this));
    var badge = $(this).find("[data-badge='moderator']");
    if (badge.length) {
      var name = $(this).find(".chat-author__display-name");
      badge.css("background", name.css("color"));
    }
  });
})();
