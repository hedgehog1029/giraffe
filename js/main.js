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
    ""
  }
}

var settings = {};

function loadSettingsFromCookies() {
  settings.SETTINGS.LOADING_GIF["24"] = getCookie("0x211") | defaults.SETTINGS.LOADING_GIF["24"];
  settings.SETTINGS.LOADING_GIF["48"] = getCookie("0x212") | defaults.SETTINGS.LOADING_GIF["48"];
  settings.SETTINGS.CUSTOM_CSS = getCookie("0x121") | defaults.SETTINGS.CUSTOM_CSS;
}

function applySettings() {
  if (settings.SETTINGS.LOADING_GIF["24"]) {
    
  }
}

function applyLoader(url) {
  
}

function getCookie(id) {
  var cookieid = id + "=";
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var c = cookies[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(cookieid) === 0) return c.substring(cookieid.length, c.length);
  }
  return "";
}

function setCookie(id, value) {
  document.cookie = id + "=" + value + ";";
}
