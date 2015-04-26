! function() {
    var GIRAFFE = {
        "DOMAIN" = "imgur.com",
        "SCRIPT_URL" = "https://hedgehog1029.github.io/giraffe/mirror/main.js"
    }

    function isSiteValid() {
        var currentDomain = document.domain,
            currentPath = window.location.pathname;
        if (currentDomain.toLowerCase() === GIRAFFE.DOMAIN.toLowerCase()) {
            return !0;
        }
        return !1;
    }

    function loadScript(url, id) {
        var script = document.createElement('script');
        script.setAttribute('id', id);
        script.setAttribute('src', url);
        document.body.appendChild(script);
    }

    function init() {
        if (isSiteValid()) {
            loadScript(GIRAFFE.SCRIPT_URL, "giraffe-main");
            console.log("giraffe successfully loaded :)");
        } else {
            console.log("giraffe not loaded - not imgur!");
        }
    }
    init();
}();
