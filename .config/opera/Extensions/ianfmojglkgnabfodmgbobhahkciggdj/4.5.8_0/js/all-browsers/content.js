var originUrl = window.location.href;
if (originUrl.indexOf("from_ext=1") !== -1) {
    var reloaded = false;
    window.onload = function () {
        if (originUrl !== window.location.href && !reloaded) {
            reloaded = true;
            var tabName = originUrl.match(/\#(\w+)/);
            if (tabName) {
                tabName = tabName[1];
                var anchor = document.querySelectorAll("a[data-section='" + tabName + "']");
                if (anchor.length !== 0) {
                    anchor[0].click();
                }
            }

        }
    };
}
