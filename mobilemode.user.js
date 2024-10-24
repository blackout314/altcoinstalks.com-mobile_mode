// ==UserScript==
// @name     altcointalk mobile
// @author   babo
// @version  1.0
// @namespace https://www.altcoinstalks.com/
// @include https://www.altcoinstalks.com/*
// @require https://code.jquery.com/jquery-2.2.4.min.js
// @grant window.focus
// @grant GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

  	var mobile = window.screen.width;
  	if (true && mobile < 400) {
      var meta = document.createElement('meta');
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1.0";
      document.head.appendChild(meta);
      
			window.addEventListener('load', function() {
        var css = `
        body {
          margin: 0;
          padding: 0;
          max-width: 100%;
        }
        body div#wrapper
        {
        	min-width: 100% !important;
          max-width: 100% !important;
        }

        img {
          max-width: 98%;
        }
        
        #upper_section,
        #footer_section,
				#main_content_section a[rel=nofollow],
        .cat_bar,
        .icon.windowbg,
        .stats.windowbg,
        .lastpost,
        #siteslogan
        {
        	display:none;
        }
        
        #content_section,
        .frame,
        #header
        {
        	padding: 0 !important;
        }
    		`;

        var style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
      
			}, false);
    }
})();
