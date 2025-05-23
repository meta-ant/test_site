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

      // Self-hosted version — remove load() to prevent double execution
      analytics.SNIPPET_VERSION = '4.13.1';

      // Call page on initial load
      analytics.page();
    }
  }
})();
