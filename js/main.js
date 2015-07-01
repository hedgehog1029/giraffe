var defaults = {
  "USER": null,
  "SETTINGS": {
    "LOADING_GIF": {
      "24": "http://s.imgur.com/images/loaders/ddddd1_181817/24.gif",
      "48": "http://s.imgur.com/images/loaders/ddddd1_181817/48.gif"
    },
    "CUSTOM_CSS": ""
  },
  "CUSTOMIZATION": {
    
  }
};

var settings = {};

var GIRAFFE = {
	"LOAD": {
		"loadSettingsFromCookies": function() {
			settings.SETTINGS.LOADING_GIF["24"] = GIRAFFE.COOKIE.getCookie("0x211") | defaults.SETTINGS.LOADING_GIF["24"];
			settings.SETTINGS.LOADING_GIF["48"] = GIRAFFE.COOKIE.getCookie("0x212") | defaults.SETTINGS.LOADING_GIF["48"];
			settings.SETTINGS.CUSTOM_CSS = GIRAFFE.COOKIE.getCookie("0x121") | defaults.SETTINGS.CUSTOM_CSS;
		},
		"loadCSS": function(id, href) {
			var css = document.createElement("link");
			css.setAttribute("id", id);
			css.setAttribute("href", href);
			document.head.appendChild(css);
		}
	},
	"SAVE": {
		"saveSettings": function() {
			GIRAFFE.COOKIE.setCookie("0x211", settings.SETTINGS.LOADING_GIF["24"]);
			GIRAFFE.COOKIE.setCookie("0x212", settings.SETTINGS.LOADING_GIF["48"]);
			GIRAFFE.COOKIE.setCookie("0x121", settings.SETTINGS.CUSTOM_CSS);
		}
	},
	"APPLY": {
		"applySettings": function() {
			if (settings.SETTINGS.LOADING_GIF["24"] !== null && settings.SETTINGS.LOADING_GIF["48"] !== null) {
				GIRAFFE.APPLY.applyLoader(settings.SETTINGS.LOADING_GIF["24"], settings.SETTINGS.LOADING_GIF["48"]);
			}
			
			if (settings.SETTINGS.CUSTOM_CSS !== "") {
				GIRAFFE.LOAD.loadCSS("customcss", settings.SETTINGS.CUSTOM_CSS);
			}
		},
		"applyLoader": function(url24, url48) {
			
		}
	},
	"COOKIE": {
		"getCookie": function(id) {
			var cookieid = id + "=";
			var cookies = document.cookie.split(";");
			for (var i = 0; i < cookies.length; i++) {
				var c = cookies[i];
				while (c.charAt(0) == " ") c = c.substring(1);
				if (c.indexOf(cookieid) === 0) return c.substring(cookieid.length, c.length);
			}
			return "";
		},
		"setCookie": function(id, value) {
			
 			document.cookie += id + "=" + value + ";";
		}
	}
};
