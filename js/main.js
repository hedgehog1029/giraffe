var defaults = {
  "USER": null,
  "SETTINGS": {
    "LOADING_GIF": {
      "24": "http://s.imgur.com/images/loaders/ddddd1_181817/24.gif",
      "48": "http://s.imgur.com/images/loaders/ddddd1_181817/48.gif"
    }
  }
}

var settings = {};

function loadUserSettings(user) {
  settings.SETTINGS.LOADING_GIF["24"] = getCookie("0x211") | defaults.SETTINGS.LOADING_GIF["24"];
  settings.SETTINGS.LOADING_GIF["48"] = getCookie("0x212") | defaults.SETTINGS.LOADING_GIF["48"];
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