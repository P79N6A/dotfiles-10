var GoogleAnalytics = {};

GoogleAnalytics.tid = "";
GoogleAnalytics.dimension = "dimension1";
GoogleAnalytics.sendEvent = {};
GoogleAnalytics.api = function(data){
  var dimensionInfo = {};
  dimensionInfo[GoogleAnalytics.dimension] = chrome.runtime.getManifest().version;
  ga("send", 'event', data[0], data[1], data[2], dimensionInfo);
};

GoogleAnalytics.trackEvent = function(category, action, label){
  GoogleAnalytics.api([category, action, label]);
};

GoogleAnalytics.init = function(tid){
  (function(i, s, o, g, r, a, m){
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function(){
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
  ga('create', tid, 'auto');
  ga('set', 'checkProtocolTask', null);
};
