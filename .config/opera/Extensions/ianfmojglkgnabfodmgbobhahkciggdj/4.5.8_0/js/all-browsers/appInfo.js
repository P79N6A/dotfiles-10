/**
 * to get app info from app store and google play
 * show info when user on these pages
 */
var curDomain = window.location.host;
var appInfo = {};

if (curDomain.indexOf("play.google.com") !== -1) {
    getGoogleAppInfo();
    var target = document.querySelector('#body-content');
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            getGoogleAppInfo();
        });
    });
    var config = {attributes: true, childList: true, characterData: true};
    observer.observe(target, config);

} else {
    getAppleAppinfo();
}


chrome.runtime.onMessage.addListener(function (req, sender, sr) {
    if (req.cmd == "getAppInfo") {
        sr(appInfo);
    }
});


function getGoogleAppInfo() {
    var appArea = document.querySelector(".id-track-partial-impression");
    appInfo.AppId = appArea.getAttribute("data-docid");
    appInfo.Title = appArea.querySelector(".id-app-title").textContent.trim();
    appInfo.Cover = appArea.querySelector("img.cover-image").getAttribute("src");
    appInfo.Cover = appInfo.Cover.indexOf("http") == -1 ? "http:" + appInfo.Cover : appInfo.Cover;
    appInfo.Author = appArea.querySelector("span[itemprop='name']").textContent;
    var ratingText = appArea.querySelector("div.tiny-star").getAttribute("aria-label").trim();
    if (ratingText != "") {
        appInfo.Rating = ratingText.match(/Rated ([\d\.]*) /)[1];
    } else {
        appInfo.Rating = 0;
    }
    appInfo.RatingCount = appArea.querySelector(".rating-count").textContent;
    var buyBtnText = appArea.querySelector(".price.id-track-click").textContent.trim();
    if (buyBtnText == "Install") {
        appInfo.Price = "Free";
    } else {
        appInfo.Price = buyBtnText.match(/.+[\d\.]+/)[0];
    }
}


function getAppleAppinfo() {
    appInfo.AppId = window.location.href.match(/\/id(\d+)/)[1];
    var appArea = document.querySelector("#content");
    appInfo.Title = appArea.querySelector("h1[itemprop='name']").textContent.trim();
    appInfo.Cover = appArea.querySelector("meta[itemprop='image']").getAttribute("content");
    appInfo.Author = appArea.querySelector("h2").textContent;
    var ratingArea = appArea.querySelectorAll(".customer-ratings .rating"),
        ratingText = ratingArea[ratingArea.length - 1].getAttribute("aria-label").trim();
    if (ratingText != "") {
        appInfo.Rating = ratingText.match(/(\d).*stars/)[1];
        if (ratingText.indexOf("half") !== -1) {
            appInfo.Rating = appInfo.Rating + ".5";
        }
    } else {
        appInfo.Rating = 0;
    }
    appInfo.RatingCount = ratingText.match(/(\d+) Ratings/)[1];
    appInfo.Price = appArea.querySelector("div.price").textContent.trim();
    //if (buyBtnText == "Free") {
    //    appInfo.Price = "Free";
    //} else {
    //    appInfo.Price = buyBtnText.match(/.+[\d\.]+/)[0];
    //}
}
