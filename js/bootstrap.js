! function() {
    var GIRAFFE_BOOTSTRAP = {
        "DOMAIN": "imgur.com",
        "SCRIPT_URL": "https://hedgehog1029.github.io/giraffe/mirror/main.js"
    };
    
    GIRAFFE_BOOTSTRAP.FUNCTIONS = {
      
      "isSiteValid": function() {
        var currentDomain = document.domain,
            currentPath = window.location.pathname;
            if (currentDomain.toLowerCase() === GIRAFFE_BOOTSTRAP.DOMAIN.toLowerCase()) {
              return !0;
            }
            return !1;
      },
      "loadScript": function(url, id) {
        var script = document.createElement('script');
        script.setAttribute('id', id);
        script.setAttribute('src', url);
        document.body.appendChild(script);
      },
      "init": function() {
        if (isSiteValid()) {
          loadScript(GIRAFFE_BOOTSTRAP.SCRIPT_URL, "giraffe-main");
          console.log("giraffe successfully loaded :)");
        } else {
          console.log("giraffe not loaded - not imgur!");
        }
      }
    };
    
    GIRAFFE_BOOTSTRAP.FUNCTIONS.init();
}();