// ==UserScript==
// @id           twitchmodbadgecolours
// @name         Twitch Mod Badge Colours
// @namespace    Twitch Mod Badge Colours
//
// @homepage     https://github.com/zaxutic/TwitchModBadgeColours
// @updateURL    https://raw.githubusercontent.com/zaxutic/TwitchModBadgeColours/master/ModBadges.js
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

  $(document).arrive(".chat-line__message", function() {
    const ffzBadge = $(this).find("[data-badge='moderator']");
    const name = $(this).find(".chat-author__display-name");
    const color = name.css("color");

    if (ffzBadge.length) {
      if (ffz.settings.provider._cached.get('p:0:chat.badges.style') === 6) {
        // transparent (colored) badges
        ffzBadge.css('background', color);
      } else {
        // other
        ffzBadge.css("background-color", color);
      }
    } else {
      const otherBadge = $(this).find("[aria-label='Moderator badge']");

      if (otherBadge.length) {
        const img = otherBadge.replaceWith(`
          <span
            class='chat-badge'
            aria-label='Moderator badge'
            style='background-blend-mode: color; display: inline-block; width:18px; height:18px'
          ></span>
        `);
        $(this).find("[aria-label='Moderator badge']")
          .css(
            "background",
            `linear-gradient(${color}, ${color}), url(${img.attr('src')})`
          );
      }
    };
  });
})();
