// demo_anthony.js

(function () {
  var analytics = window.analytics || [];

  // Flush any queued analytics calls made before the script loaded
  while (analytics.length > 0) {
    var args = analytics.shift();
    mockAnalytics(args);
  }

  function mockAnalytics(args) {
    const [method, ...params] = args;
    console.log(`Mock Analytics.${method} called with:`, ...params);
  }

  // Define the public API methods
  const methods = [
    "track", "identify", "page", "group", "alias", "ready", "on", "off"
  ];

  window.analytics = {};
  methods.forEach(method => {
    window.analytics[method] = function (...params) {
      console.log(`analytics.${method}()`, ...params);
    };
  });

  console.log("✅ Mock MetaRouter analytics.js loaded.");
})();
