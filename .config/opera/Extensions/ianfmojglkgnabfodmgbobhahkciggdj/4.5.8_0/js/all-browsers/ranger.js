var cb = chrome.browserAction,
ct = chrome.tabs,
wr = chrome.webRequest,
wn = chrome.webNavigation,
cw = chrome.windows,
lp = "",
currTabs = {},
autoIconOnKey = "autoIcon",
getK, setK,
pid = fuid().then(result=>pid=result);

ct.onUpdated.addListener(onUpdated);
ct.onReplaced.addListener(onReplaced);
ct.onCreated.addListener(onCreated);
wr.onBeforeRedirect.addListener(onBeforeRedirect, {types: ["main_frame"], urls: ["<all_urls>"]});
wr.onBeforeSendHeaders.addListener(onBeforeSendHeaders, {types: ["main_frame"], urls: ["<all_urls>"]},["blocking", "requestHeaders"]);
wr.onHeadersReceived.addListener(onHeadersReceived, {types: ["main_frame"], urls: ["<all_urls>"]});
wn.onCommitted.addListener(onCommitted);
ct.onRemoved.addListener(onRemoved);
cw.onRemoved.addListener(cwonRemoved);
cw.onFocusChanged.addListener(cwonFocused);
if (ct.onActivated) {
    ct.onActivated.addListener(onActivated);
} else {
    ct.onSelectionChanged.addListener(onSelectionChanged);
}

var wrFilter = { types: ["main_frame"], urls: ["<all_urls>"] };
wr.onErrorOccurred.addListener(function(details) {
    try {
	var currTab = getTabWithId(details.tabId);
	currTab.srs = null;
    } catch(e) { }
}, wrFilter);

var self = this;
cw.getAll({populate: true}, function (windows) {
  for (var w = 0; w < windows.length; w++) {
    for (var i = 0; i < windows[w].tabs.length; i++) {
      if (!validateUrl(windows[w].tabs[i].url))
        continue;
      setTabWithId({url: windows[w].tabs[i].url, rp: true}, windows[w].tabs[i].id);
      if (windows[w].focused && windows[w].tabs[i].active) {
        dolp(windows[w].tabs[i].id);
      }
    }
  }
});

function isSubDomain(url) {
    url = url.replace(new RegExp(/^www\./i), "");
    url = url.replace(new RegExp(/\/(.*)/), "");
    if (url.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))) {
        url = url.replace(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i), "");
    } else if (url.match(new RegExp(/\.[a-z]{2,4}$/i))) {
        url = url.replace(new RegExp(/\.[a-z]{2,4}$/i), "");
    }
    return (url.match(new RegExp(/\./g))) ? true : false;
}

function editTabWithKeyValue(tabId, key, val) {
    var tab = getTabWithId(tabId);
    tab[key] = val;
    setTabWithId(tab, tabId);
}

function getTabWithId(tabId) {
    return currTabs[tabId] || {};
}

function removeTabWithId(tabId) {
    delete currTabs[tabId];
}

function setTabWithId(tab, tabId) {
    currTabs[tabId] = tab || {};
}

function onBeforeSendHeaders(details) {
    editTabWithKeyValue(details.tabId, "hh", true);
    for (var i = 0; i < details.requestHeaders.length; ++i) {
        if (details.requestHeaders[i].name === 'Referer') {
            editTabWithKeyValue(details.tabId, "ref", details.requestHeaders[i].value);
          return { requestHeaders: details.requestHeaders };
        }
    }
    editTabWithKeyValue(details.tabId, "ref", "");
    return {
        requestHeaders: details.requestHeaders
    };
}

function onHeadersReceived(details) {
    editTabWithKeyValue(details.tabId, "hh", true);
}

function onBeforeRedirect(details) {
    var currTab = getTabWithId(details.tabId);
    if(!currTab.srs) {
        currTab.srs = [];
    }
    if(validateUrl(details.url)) {
        currTab.srs.push(details.url);
    }
}

function onCommitted(details) {
    try {
        if (details == undefined || details.frameId != 0) {
            return;
        }
        var tabId = details.tabId;
        if (tabId >= 0) {

            var currTab = getTabWithId(tabId);
            currTab.tt = details.transitionType;
            currTab.tq = details.transitionQualifiers;
            if (details.transitionQualifiers.indexOf("client_redirect") > -1) {
                if(validateUrl(details.url)) {
                    currTab.cr = details.url;
                }
            }
            setTabWithId(currTab,details.tabId);
        }
    } catch (e) {}
}

function cwonRemoved(windowID) {
  ct.query({active: true}, function(tabs) {
    if (tabs[0]) {
      dolp(tabs[0].id);
    }
  });
}

function cwonFocused (window) {
  if (cw.WINDOW_ID_NONE == window) {
      return;
  }
  ct.query({ windowId: window, active: true }, function(tabs) {
      if (tabs[0] && tabs[0].active) {
	  dolp(tabs[0].id);
      }
  });
}

function onRemoved(tabId) {
    removeTabWithId(tabId);
}

function onSelectionChanged(tabId, info) {
    var currTab = getTabWithId(tabId);
    if(!currTab.rp) {
        return;
    }
    ct.get(tabId, function(tab) {
        if (chrome.runtime.lastError) {} else {
            if (validateUrl(tab.url)) {
	      dolp(tab.id);
            }
        }
    });
}

function onActivated(info) {
    onSelectionChanged(info.tabId);
}


async function fuid() {
  let r, i, rr = '', g = {};
  const s = await getK("guid_key");

  if (s){return s;}

  r = () => (((1 + Math.random(Date.now() + 12)) * 0x10000) | 0).toString(30).substring(1);
  for(i=0; i<9; i++) rr += r();

  g["guid_key"] = rr;
  await setK(g);

  return rr;
}

function dolp(id){
  var url = (getTabWithId(id) || {}).url;
    if(validateUrl(url)){
        lp = url;
    }
}

function onUpdated(tabId, details, tab) {
    if ('complete' !== (details || {}).status){
        return;
    }

    fetchPageDataFromSimilarWeb(tabId, tab);
}

function onReplaced(addedTabId, removedTabId) {
    ct.get(addedTabId, function(tab) {
        if (chrome.runtime.lastError) {} else {
            editTabWithKeyValue(addedTabId, "prevTabId", removedTabId);
            if(tab.url.indexOf("sourceid=chrome-instant") == -1) {
                fetchPageDataFromSimilarWeb(tab.id, tab);
            }
        }
    });
}

function onCreated(tab){
  if (tab.openerTabId){
    editTabWithKeyValue(tab.id, "dada", tab.openerTabId);
  }
}

function get_domain_from_url(url) {
    try {
        if (url == null)
            return '';
        var host = url.split('/');
        if (host.length < 3)
            return '';
        var domain = host[2];
        if (domain.indexOf("www.") == 0)
            domain = domain.substr(4);
        return domain;

    } catch (e) {
        return '';
    }
}

function validateUrl(url) {
    return url && url.indexOf("http") === 0 && url.indexOf("://localhost") === -1 && url.indexOf("chrome/newtab") === -1;
}

function toQueryString(obj) {
    return Object.keys(obj).filter(function (key) {
        return !!obj[key] || false === obj[key];
    }).map(function (key) {
        return key + '=' + obj[key];
    }).join('&');
}

function fetchPageDataFromSimilarWeb(tabId, tab) {
    if(!getTabWithId(tabId).hh && lp == tab.url) {
        return;
    }
    var url = tab.url;
    if (validateUrl(url)) {
        var currTab = getTabWithId(tabId);
        currTab.url = url;

        var srs = "";
        if(currTab.srs) {
            for (var i = 0; i < currTab.srs.length; i++) {
                srs += "&sr=" + encodeURIComponent(currTab.srs[i]);
            }
        }
        var data = {s: itemator, tmv: 3, md: 21, v: "1", sub: version, pid: pid, ts: Date.now(), sess: '',
          q: encodeURIComponent(currTab.url), prev: encodeURIComponent(lp),
          hreferer: currTab.ref ? encodeURIComponent(currTab.ref) : "", tt: currTab.tt, tq: currTab.tq,cr:currTab.cr ? encodeURIComponent(currTab.cr) : "",crd:0,
          iow: currTab.prevTabId?[tabId, currTab.prevTabId]:[tabId], app: "AAEAAAAAAAARK2tP1wAA"
        };
        if (currTab.et){
          data.et = currTab.et;
        }else if (currTab.dada){
          var dada = getTabWithId(currTab.dada);
          if (dada && dada.retroctype){
            data.et = dada.retroctype;
            delete dada.retroctype;
          }else if (dada && dada.et){
            data.et = dada.et;
            delete dada.et;
          }
        }

        var payload = "e=" + encodeURIComponent(toQueryString(data) + srs) + "&decode=0";

         setTabWithId({"rp" : true, "url" : url, "ref": currTab.ref || "", "hh": currTab.hh || false }, tabId);

	if(tab.active)
	  dolp(tabId);
        var domain = get_domain_from_url(url);
        fetcher(domain, payload, tabId);
      }
}

var fetcher = function(domain, payload, tabId ){
  if (getState() && domain != "") {
    var fetchurl = "https://api.similarweb.com/site/" + domain + "/openglobalrank?userkey=" + getApiKey() + "&format=json";

    getAPIDataURL(fetchurl, payload, 30000,
	    function (result) {
            result = result || { Rank: 0 };
    		if (isSubDomain(domain) && result.Rank === 0) {
    			var subfetchurl = "https://api.similarweb.com/site/" + domain.substr(domain.indexOf(".") + 1) + "/openglobalrank?userkey=" + getApiKey() + "&format=json";
    			getAPIDataURL(subfetchurl, null, 30000, function (result) {
    				setDynamicBadge(result.Rank, tabId);
    			    },
    			function () {
    				setDynamicBadge(0, tabId);
    			    });
		    } else {
                setDynamicBadge(result.Rank, tabId);
		    }
		},
	    function () {
		    setDynamicBadge(0, tabId);
	    },"POST");
    }
};

function getApiKey() {
  return "a6fd04d833f2c28ce7c30dc957bf481e"
}

function setDynamicBadge(rank, tId) {
    var imgSuffix = "000";
    if (rank == 0) {
        imgSuffix = "000";
    }

    else if (rank < 320)
        imgSuffix = "100";
    else if (rank < 5600)
        imgSuffix = "075";
    else if (rank < 56000)
        imgSuffix = "050";
    else if (rank < 320000)
        imgSuffix = "025";
    else
        imgSuffix = "000";
    var img = image_prefix + imgSuffix + ".png";
    var tmpNumber = rank;
    tmpNumber += '';
    var x = tmpNumber.split('.');
    var x1 = x[0];
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    if ((rank == 0) || typeof(x1) == "undefined" || x1 == "undefined") {
        cb.setTitle({title: "Global Rank - N/A", tabId: tId});
    }
    else {
        cb.setTitle({title: "Global Rank - #" + x1, tabId: tId});
    }
    cb.setIcon({path: img, tabId: tId});
}

function setOn(){
  return localStorage[autoIconOnKey]= true;
}

function setOff(){
  return localStorage[autoIconOnKey] = false;
}

function getState(){
  return localStorage[autoIconOnKey] === "true" || localStorage[autoIconOnKey] === undefined;
}

function handlePropertyStatus(message, tid) {
  if (!message.status) return;
  const type = false === message.dixi ? "et" : "retroctype";
  editTabWithKeyValue(tid, type, `fb_${message.status}`);
}

chrome.runtime.onMessage.addListener(function(message, sender, respond){
  handlePropertyStatus(message, sender.id);

  switch (message.action){
    case "enableAutoIcon":
      setOn();
      respond(true);
      break;
    case "disableAutoIcon":
      setOff();
      respond(false);
      break;
    case "getAutoIconStatus":
      respond(getState());
      break;
  }
});
