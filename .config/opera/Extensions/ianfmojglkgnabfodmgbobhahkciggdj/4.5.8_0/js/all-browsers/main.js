var domainData = {},
  api = "https://api.similarweb.com/v1/SimilarWebAddon/",
  cr = chrome.runtime;
image_prefix = "images/icon/sw-addon-icon-";
itemator = Config.refetchTimeout;
version = cr.getManifest().version;
GoogleAnalytics.init(Config.GAID);
cr.onMessage.addListener(function(request, sender, sendResponse) {
  switch(request.message) {
    case 'GetDomainData':
      var dm = request.domain;
      if(domainData[dm]) {
        if(request.forceReload) {
          delete domainData[dm];
        } else if(domainData[dm].timestamp && domainData[dm].timestamp + 10 * 60 * 1000 < Date.now()) {
          delete domainData[dm];
        } else {
          sendResponse(domainData[dm].data);
          return false;
        }
      }
      var timeout = 30000, isSB = isSubDomain(dm), rootTried = false;

      getAPIDataDomain(dm, null, timeout, function(data) {
        if(data) {
          sendResponse(data);
          saveDataOfDomain(data, dm);
        } else {
          if(isSB && !rootTried) {
            rootTried = true;
            var rootDomain = dm.substr(dm.indexOf(".") + 1);
            getAPIDataDomain(rootDomain, null, 30000, function(data) {
              if(data) {
                sendResponse(data);
                saveDataOfDomain(data, dm);
              } else {
                sendResponse(null);
              }
            }, function() {
              // console.log("subdomain error!");
              sendResponse(null);
            });
          }
        }

      }, function() {
        // console.log("serror!");
        sendResponse(null);
      });

      return true;
      break;
    case "sendGA":
      GoogleAnalytics.trackEvent(request.category, request.action, request.label);
      break;
  }
});

cr.onInstalled.addListener(function(event) {
    if(localStorage.showInfo === undefined && localStorage.isPro === undefined) {
        localStorage.showInfo = 1;
    }
  GoogleAnalytics.trackEvent("General", "Install");
});

// Extension-welcome page
cr.onInstalled.addListener(function (details) {
  if(details.reason === "install"){
    chrome.tabs.create({url: "https://www.similarweb.com/extension-welcome"});
  }
});
// Extension-uninstall page
cr.setUninstallURL("https://www.similarweb.com/extension-uninstall");

function saveDataOfDomain (data, dm) {
  // console.log("responce saver~!", dm, data);
  if(!domainData[dm]) domainData[dm] = {};
  domainData[dm].timestamp = Date.now();
  domainData[dm].data = data;
}

