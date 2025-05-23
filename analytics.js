!(function() {
  var analytics = (window.analytics = window.analytics || []);
  if (!analytics.initialize) {
    if (analytics.invoked) {
      window.console &&
        console.error &&
        console.error('Analytics.js snippet included twice.');
    } else {
      analytics.invoked = !0;
      analytics.methods = [
        'trackSubmit',
        'trackClick',
        'trackLink',
        'trackForm',
        'pageview',
        'identify',
        'reset',
        'group',
        'track',
        'ready',
        'alias',
        'debug',
        'page',
        'once',
        'off',
        'on',
        'addSourceMiddleware',
        'addIntegrationMiddleware',
        'setAnonymousId',
        'addDestinationMiddleware'
      ];
      analytics.factory = function(e) {
        return function() {
          var t = Array.prototype.slice.call(arguments);
          t.unshift(e);
          analytics.push(t);
          return analytics;
        };
      };
      for (var e = 0; e < analytics.methods.length; e++) {
        var key = analytics.methods[e];
        analytics[key] = analytics.factory(key);
      }

      analytics.load = function(key, options) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = "https://ajs.metarouter.io/" + key + ".js";
        var first = document.getElementsByTagName('script')[0];
        first.parentNode.insertBefore(script, first);
        analytics._loadOptions = options;
      };

      analytics.SNIPPET_VERSION = '4.13.1';
      analytics.load("demo_anthony");
      analytics.page();
    }
  }
})();
