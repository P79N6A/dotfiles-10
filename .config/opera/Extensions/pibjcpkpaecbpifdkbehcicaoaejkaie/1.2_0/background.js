chrome.browserAction.onClicked.addListener(function(id,changeInfo,tab){extracttabs()
function parse(url){
    var u = new URL(url);
	switch (u.protocol) {
    case 'opera:':
	case 'browser:':
    return '~' + u.protocol;
    }
	var fixed = url.substring(url.indexOf('://')+3);
	var index = fixed.indexOf('/');
	index = index === -1 ? fixed.length:index;
	fixed = fixed.substring(0,index);
	index = fixed.lastIndexOf('.');
	if(index === -1){
		return fixed;
	}
	index = fixed.lastIndexOf('.',index-1);
	return index === -1 ? fixed:fixed.substring(index+1);
}
function extracttabs() {
  chrome.tabs.getSelected(function(tab) {
    var target = parse(tab.url);
    chrome.windows.create({
      'tabId': tab.id,
      'focused': true,
    }, function(win) {
      var q = {'windowType': 'normal'};
      chrome.tabs.query(q, function(tabs) {
        for (var i = 0; i < tabs.length; i++) {
          var tab = tabs[i];
          var host = parse(tab.url);
          if (host != target) {
            continue;
          }
          chrome.tabs.move(tab.id, {
            'windowId': win.id,
            'index': -1,
          });
           chrome.windows.update(win.id, {
             state: 'maximized'
            });		  
        }
      });
    });
  });
}
});