$("document").ready(function () {

    if (localStorage.isPro === "0") {
        $(".notPro").prop("checked", true);
    } else {
        $(".isPro").prop("checked", true);
    }
    if (localStorage.openInBg === "1") {
        $("#openInBg").prop("checked", true);
    } else {
        $("#openInBg").prop("checked", false);
    }

    $("input[name='isPro']").click(function () {
        localStorage.isPro = $(this).attr("id") == "isPro" ? 1 : 0;
        localStorage.showInfo = 0;
        showSuccessInfo();
    });
    var SES = {
        "google": "https://www.google.com/search?q=",
        "bing": "https://www.bing.com/search?q=",
        "yahoo": "https://search.yahoo.com/search;_ylt=Aql0BWm86x8TaumZxJCH0v.bvZx4?p=",
        "baidu": "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=",
        "sogou": "https://www.sogou.com/web?query=",
        "youdao": "https://www.youdao.com/search?q=",
        "wolframalpha": "https://www.wolframalpha.com/input/?i=",
        "duckduckgo": "https://duckduckgo.com/?q=",
        "yandex": "https://www.yandex.com/search/?lr=87&text="
    };
    if (localStorage.se) {
        $("#defaultSE").val(localStorage.se);
    }

    $("#set").click(function () {
        var se = $("#defaultSE").val();
        localStorage.SEBaseUrl = SES[se];
        localStorage.se = se;
        showSuccessInfo();

    });

    $("#openInBg").change(function () {
        localStorage.openInBg = $(this).is(":checked") ? 1 : 0;
        showSuccessInfo();
    });


    function showSuccessInfo() {
        var infobar = $(".info");
        infobar.text("Settings Saved").slideDown();
        setTimeout(function () {
            infobar.slideUp();
        }, 2000);
    }

    var $autoicon = $("#autoIcon");
    chrome.runtime.sendMessage({
      action: "getAutoIconStatus"
    }, function(value){
      if (value){
        $autoicon.attr("checked", "checked");
      }else{
        $autoicon.removeAttr("checked");
      }

      $autoicon.on("change", function(){
        chrome.runtime.sendMessage({
          action: $autoicon.is(":checked") ? "enableAutoIcon" : "disableAutoIcon"
        }, function(){
          showSuccessInfo();
        });
      });
    });
});