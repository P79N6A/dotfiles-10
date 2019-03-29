_browser = {
    name: "chrome",
    url_logo: "https://www.similarweb.com?utm_source=addon&utm_medium=chrome&utm_content=logo",
    url_gopro: "https://www.similarweb.com/pro?utm_source=addon&utm_medium=chrome&utm_content=get-more",
    url_referrals: "https://www.similarweb.com/pro?utm_source=addon&utm_medium=chrome&utm_content=referrals",
    url_search: "https://www.similarweb.com/pro?utm_source=addon&utm_medium=chrome&utm_content=search",
    openTab: function (url, callback) {
        if (isFirefox) {
            const link = url.replace("medium=chrome","medium=firefox");
            if (swpopup.openInbg) {
                chrome.tabs.create({url: link, active: swpopup.openInbg}, function (tab) {
                    if (callback) {
                        callback(tab);
                    }
                    //closing popup programmatically, because firefox don't close it automatically
                    window.close();
                });
            } else {
                chrome.tabs.create({url: link, active: swpopup.openInbg}, function (tab) {
                    if (callback) {
                        callback(tab);
                    }
                });
            }
        } else if (isOpera) {
            const link = url.replace("medium=chrome","medium=opera");
            chrome.tabs.create({url: link, active: swpopup.openInbg}, function (tab) {
                if (callback) {
                    callback(tab);
                }
            });
        } else {
            chrome.tabs.create({url: url, active: swpopup.openInbg}, function (tab) {
                if (callback) {
                    callback(tab);
                }
            });
        }
    }
};
