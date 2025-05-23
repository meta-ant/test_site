!(function () {
  var analytics = (window.analytics = window.analytics || []);
  if (!analytics.initialize) {
    if (analytics.invoked) {
      window.console &&
        console.error &&
        console.error("Analytics.js snippet included twice.");
    } else {
      analytics.invoked = true;
      analytics.methods = [
        "trackSubmit",
        "trackClick",
        "trackLink",
        "trackForm",
        "pageview",
        "identify",
        "reset",
        "group",
        "track",
        "ready",
        "alias",
        "debug",
        "page",
        "once",
        "off",
        "on",
        "addSourceMiddleware",
        "addIntegrationMiddleware",
        "setAnonymousId",
        "addDestinationMiddleware",
      ];
      analytics.factory = function (method) {
        return function () {
          var args = Array.prototype.slice.call(arguments);
          args.unshift(method);
          analytics.push(args);
          return analytics;
        };
      };
      for (var i = 0; i < analytics.methods.length; i++) {
        var key = analytics.methods[i];
        analytics[key] = analytics.factory(key);
      }
      analytics.load = function (writeKey, options) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://replaceme.com/" + writeKey + ".js"; // CHANGE THIS
        var first = document.getElementsByTagName("script")[0];
        first.parentNode.insertBefore(script, first);
        analytics._loadOptions = options;
      };
      analytics.SNIPPET_VERSION = "4.13.1";
    }
  }
})();
