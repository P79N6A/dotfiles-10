var overlay = '\
<div class="momane_overlay" \
    style="width: 100%; height: 100%;z-index: 1422886768436;display:table; \
    border-radius: 5px; position: absolute; top:0; left: 0; text-align: center;">\
    <div class="momane_cell" style="display:table-cell; vertical-align:middle;">\
        <div class="momanem_content" style="height: 50%;">\
        <div class="momane_welcome" style="font-size: 36px; display: none;padding-top: 132px;">Hey There!</div> \
        <div class="momane_options" style="display: none; padding-top: 30px;">\
        <lable style="font-size: 20px;margin-bottom: 12px;display: inline-block;">Would you like links to lead to <b>SimilarWeb.com</b> or <b>SimilarWeb PRO?</b></lable>\
        <br><br>\
        <input name="isPro" class="notPro" type="radio" id="notPro"><label for="notPro" style="padding-right: 15px;">SimilarWeb.com</label>\
        <input name="isPro" class="isPro" type="radio" id="isPro"><label for="isPro">SimilarWeb PRO (Requires Account)</label>\
        <p style="padding-top: 15px">\
         <a id="learnMoreLink" href="#">Learn More about SimilarWeb PRO</a> </p>\
        </div> \
        </div> \
    </div> \
</div>\
';


function showInfo(action, kw, e){
  var originalContent = $("#content");
  originalContent.css({
    "-webkit-filter": "blur(5px)",
    "border-radius": "5px"
  });
  $(document).ready(function(){
    originalContent.after(overlay);
    sendGAEvents("Hey_message", "shown");
    $(".momane_welcome").fadeIn(1000, function(){
      $(this).animate({
        "padding-top": 96
      }, 600, function(){
        $(".momane_options").fadeIn(1000);
      });
    });
    $("#learnMoreLink").click(function(){
      sendGAEvents("Hey_message", "click", "Lear_more");
      _browser.openTab("https://www.similarweb.com/pro?utm_campaign=addon&utm_keyword=get-more&utm_matchtype=chrome");
    });
    $("input[name='isPro']").click(function(){
      sendGAEvents("Hey_message", "Check box",$(this).attr("class"));
      localStorage.isPro = $(this).attr("id") == "isPro" ? 1 : 0;
      localStorage.showInfo = 0;
      removeOverlay();
      switch (action) {
        case "search":
          performSearch(kw, e);
          break;
        case "lead":
          leadToSW(kw, e);
          break;
        case "footer":
            var openUrl;
            if (localStorage.isPro === "1") {
                openUrl = `https://pro.similarweb.com/?utm_source=addon&utm_medium=chrome&utm_content=footer&from_ext=1#/` +
                    `website/audience-overview/${kw}/*/999/3m/?webSource=Total`;
            } else {
                openUrl = SW_URLS.LITE.websiteAnalysisFooter(kw);
            }
            _browser.openTab(openUrl);
          break;
        case "link":
          var currentTab = $(".tab-active").attr("id").replace("tab-", "");
          switch (currentTab) {
            case "alsoVisited": // though
                if (localStorage.isPro === "1") {
                    openUrl = SW_URLS.PRO.websiteAnalysisAll(currentTab, kw);
                } else {
                    openUrl = SW_URLS.LITE.websiteAnalysisOverview(kw);
                }
                break;
            case "similar":
                if (localStorage.isPro === "1") {
                    openUrl = SW_URLS.PRO.websiteAnalysisAllOverview(currentTab, kw);
                } else {
                    openUrl = SW_URLS.LITE.websiteAnalysisSimilar(kw);
                }
                break;
            case "ads":
                if (localStorage.isPro === "1") {
                    openUrl = SW_URLS.PRO.websiteAnalysisAllOverview(currentTab, kw);
                } else {
                    openUrl = SW_URLS.LITE.websiteAnalysisAds(kw);
                }
                break;
            case "referrals":
              if (localStorage.isPro === "1") {
                openUrl = SW_URLS.PRO.websiteAnalysisAllOverview(currentTab, kw);
              } else {
                openUrl = SW_URLS.LITE.websiteAnalysisReferrals(kw);
              }
              break;
          }
          _browser.openTab(openUrl);
      }
    });
  });
}

var bd = $("body");
bd.on("click", ".js-search", function(e){
  var query = $("#quickSearch").val();
  performSearch(query, e)
});

bd.on("click", "#goToSW", function(e){
    let query = $("#quickSearch").val();
    performSearchFooter(query, e)
});

bd.on("click", ".fulldetailsBtn", function(e){
  leadToSW(swpopup.domain, e);

});

bd.on("keyup", "#quickSearch", function(e){
  var query = $(this).val() || $(this).attr("placeholder");
  if (e.keyCode === 13) {
    performSearch(query, e)
  }
});

bd.on("click", ".kw", function(e){
  if (!swpopup.SEBaseUrl) {
    showSESelector($(this).attr("title"));
  } else {
    _browser.openTab($(this).attr('ref'));
  }
});

function performSearch(keyword, e){
  sendGAEvents("Extension", "Quick_search_GoButton", $("#tabs").find(".tab-active").attr("id"));
  if (localStorage.showInfo === "1") {
    showInfo("search", keyword, e);
  } else {
    var currentTab = $(".tab-active").attr("id").replace("tab-", ""),
      openUrl;
    if (localStorage.isPro === "1") {
      openUrl = SW_URLS.PRO.websiteAnalysisAll(currentTab, keyword);
    } else {
      switch (currentTab) {
        case "geo":
          openUrl = SW_URLS.LITE.websiteAnalysisOverview(keyword);
          break;
        default :
          openUrl = SW_URLS.LITE.websiteAnalysisAll(currentTab, keyword);
      }
    }
    _browser.openTab(openUrl);
  }
}

function performSearchFooter(keyword, e){
    if (localStorage.showInfo === "1") {
        showInfo("footer", keyword, e);
    } else {
        let openUrl;
        if (localStorage.isPro === "1") {
            openUrl = `https://pro.similarweb.com/?utm_source=addon&utm_medium=chrome&utm_content=footer&from_ext=1#/` +
                      `website/audience-overview/${keyword}/*/999/3m/?webSource=Total`;
        } else {
            openUrl = SW_URLS.LITE.websiteAnalysisFooter(keyword);
        }
        _browser.openTab(openUrl);
    }
}


function leadToSW(keyword, e){
  if (localStorage.showInfo === "1") {
    showInfo("lead", keyword, e);
  } else {
    var currentTabSel = $(".tab-active"),
      currentTab = currentTabSel.attr("id").replace("tab-", ""),
      tabName = currentTabSel.text().trim(),
      btnID = $(e.target).attr("id"),
      openUrl;
    sendGAEvents(tabName, "click", btnID);

    if (localStorage.isPro === "1") {
      if ($(e.target).hasClass("des")) {
        openUrl = SW_URLS.PRO.websiteAnalysisOutgoing(keyword);
      } else {
        openUrl = SW_URLS.PRO.websiteAnalysisAll(currentTab, keyword);
      }
    } else {
      var prefix = "https://www.similarweb.com/pro?";
      switch (currentTab) {
        case "geo":
          openUrl = prefix + "utm_source=addon&utm_medium=chrome&utm_content=geo";
          break;
        case "alsoVisited":
          openUrl = prefix + "utm_campaign=addon&utm_keyword=visited&utm_matchtype=chrome";
          break;
        case "ads":
          if ($(e.target).hasClass("adsBtn")) {
            openUrl = prefix + "utm_campaign=addon&utm_keyword=display&utm_matchtype=chrome";
          } else {
            openUrl = prefix + "utm_source=addon&utm_medium=chrome&utm_content=ads";
          }
          break;
        case "referrals":
          openUrl = prefix + "utm_source=addon&utm_medium=chrome&utm_content=referrals";
          break;
        case "search":
          openUrl = prefix + "utm_source=addon&utm_medium=chrome&utm_content=search";
          break;
        case "footer":
          openUrl = prefix + "utm_source=addon&utm_medium=chrome&utm_content=footer";
          break;
        default :
          openUrl = SW_URLS.LITE.websiteAnalysisAll(currentTab, keyword);
      }
    }
    _browser.openTab(openUrl);
  }
}


function removeOverlay(){
  $(".momane_overlay").fadeOut(200, function(){
    $("#content").css({
      "-webkit-filter": "",
      "border-radius": ""
    });
  }).remove();
}