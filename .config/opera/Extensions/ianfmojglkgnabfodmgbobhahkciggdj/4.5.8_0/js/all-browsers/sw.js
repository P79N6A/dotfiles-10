var isFirefox = typeof InstallTrigger !== 'undefined';
var isOpera = (navigator.userAgent.match(/Opera|OPR\//) ? true : false);
var Countries = {
  999: {name: "World", iso2: "WO"},
  4: {name: "Afghanistan", iso2: "AF"},
  8: {name: "Albania", iso2: "AL"},
  10: {name: "Antarctica", iso2: "AQ"},
  12: {name: "Algeria", iso2: "DZ"},
  16: {name: "American Samoa", iso2: "AS"},
  20: {name: "Andorra", iso2: "AD"},
  24: {name: "Angola", iso2: "AO"},
  28: {name: "Antigua and Barbuda", iso2: "AG"},
  31: {name: "Azerbaijan", iso2: "AZ"},
  32: {name: "Argentina", iso2: "AR"},
  36: {name: "Australia", iso2: "AU"},
  40: {name: "Austria", iso2: "AT"},
  44: {name: "Bahamas", iso2: "BS"},
  48: {name: "Bahrain", iso2: "BH"},
  50: {name: "Bangladesh", iso2: "BD"},
  51: {name: "Armenia", iso2: "AM"},
  52: {name: "Barbados", iso2: "BB"},
  56: {name: "Belgium", iso2: "BE"},
  60: {name: "Bermuda", iso2: "BM"},
  64: {name: "Bhutan", iso2: "BT"},
  68: {name: "Bolivia", iso2: "BO"},
  70: {name: "Bosnia", iso2: "BA"},
  72: {name: "Botswana", iso2: "BW"},
  74: {name: "Bouvet Island", iso2: "BV"},
  76: {name: "Brazil", iso2: "BR"},
  84: {name: "Belize", iso2: "BZ"},
  86: {name: "British Indian Territory", iso2: "IO"},
  90: {name: "Solomon Islands", iso2: "SB"},
  92: {name: "Virgin Islands", iso2: "VG"},
  96: {name: "Brunei", iso2: "BN"},
  100: {name: "Bulgaria", iso2: "BG"},
  104: {name: "Myanmar", iso2: "MM"},
  108: {name: "Burundi", iso2: "BI"},
  112: {name: "Belarus", iso2: "BY"},
  116: {name: "Cambodia", iso2: "KH"},
  120: {name: "Cameroon", iso2: "CM"},
  124: {name: "Canada", iso2: "CA"},
  132: {name: "Cape Verde", iso2: "CV"},
  136: {name: "Cayman Islands", iso2: "KY"},
  140: {name: "Central African", iso2: "CF"},
  144: {name: "Sri Lanka", iso2: "LK"},
  148: {name: "Chad", iso2: "TD"},
  152: {name: "Chile", iso2: "CL"},
  156: {name: "China", iso2: "CN"},
  158: {name: "Taiwan", iso2: "TW"},
  162: {name: "Christmas Island", iso2: "CX"},
  166: {name: "Cocos Islands", iso2: "CC"},
  170: {name: "Colombia", iso2: "CO"},
  174: {name: "Comoros", iso2: "KM"},
  175: {name: "Mayotte", iso2: "YT"},
  178: {name: "Congo", iso2: "CG"},
  180: {name: "Congo Republic", iso2: "CD"},
  184: {name: "Cook Islands", iso2: "CK"},
  188: {name: "Costa Rica", iso2: "CR"},
  191: {name: "Croatia", iso2: "HR"},
  192: {name: "Cuba", iso2: "CU"},
  196: {name: "Cyprus", iso2: "CY"},
  203: {name: "Czech Republic", iso2: "CZ"},
  204: {name: "Benin", iso2: "BJ"},
  208: {name: "Denmark", iso2: "DK"},
  212: {name: "Dominica", iso2: "DM"},
  214: {name: "Dominican Republic", iso2: "DO"},
  218: {name: "Ecuador", iso2: "EC"},
  222: {name: "El Salvador", iso2: "SV"},
  226: {name: "Equatorial Guinea", iso2: "GQ"},
  231: {name: "Ethiopia", iso2: "ET"},
  232: {name: "Eritrea", iso2: "ER"},
  233: {name: "Estonia", iso2: "EE"},
  234: {name: "Faroe Islands", iso2: "FO"},
  238: {name: "Falkland Islands (Malvinas)", iso2: "FK"},
  239: {name: "South Georgia Islands", iso2: "GS"},
  242: {name: "Fiji", iso2: "FJ"},
  246: {name: "Finland", iso2: "FI"},
  248: {name: "Aland Islands", iso2: "AX"},
  250: {name: "France", iso2: "FR"},
  254: {name: "French Guiana", iso2: "GF"},
  258: {name: "French Polynesia", iso2: "PF"},
  260: {name: "French Territories", iso2: "TF"},
  262: {name: "Djibouti", iso2: "DJ"},
  266: {name: "Gabon", iso2: "GA"},
  268: {name: "Georgia", iso2: "GE"},
  270: {name: "Gambia", iso2: "GM"},
  275: {name: "Palestinian", iso2: "PS"},
  276: {name: "Germany", iso2: "DE"},
  288: {name: "Ghana", iso2: "GH"},
  292: {name: "Gibraltar", iso2: "GI"},
  296: {name: "Kiribati", iso2: "KI"},
  300: {name: "Greece", iso2: "GR"},
  304: {name: "Greenland", iso2: "GL"},
  308: {name: "Grenada", iso2: "GD"},
  312: {name: "Guadeloupe", iso2: "GP"},
  316: {name: "Guam", iso2: "GU"},
  320: {name: "Guatemala", iso2: "GT"},
  324: {name: "Guinea", iso2: "GN"},
  328: {name: "Guyana", iso2: "GY"},
  332: {name: "Haiti", iso2: "HT"},
  334: {name: "Heard Islands", iso2: "HM"},
  336: {name: "Vatican City", iso2: "VA"},
  340: {name: "Honduras", iso2: "HN"},
  344: {name: "Hong Kong", iso2: "HK"},
  348: {name: "Hungary", iso2: "HU"},
  352: {name: "Iceland", iso2: "IS"},
  356: {name: "India", iso2: "IN"},
  360: {name: "Indonesia", iso2: "ID"},
  364: {name: "Iran", iso2: "IR"},
  368: {name: "Iraq", iso2: "IQ"},
  372: {name: "Ireland", iso2: "IE"},
  376: {name: "Israel", iso2: "IL"},
  380: {name: "Italy", iso2: "IT"},
  384: {name: "Cote d Ivoire", iso2: "CI"},
  388: {name: "Jamaica", iso2: "JM"},
  392: {name: "Japan", iso2: "JP"},
  398: {name: "Kazakhstan", iso2: "KZ"},
  400: {name: "Jordan", iso2: "JO"},
  404: {name: "Kenya", iso2: "KE"},
  408: {name: "Korea", iso2: "KP"},
  410: {name: "Korea Republic", iso2: "KR"},
  414: {name: "Kuwait", iso2: "KW"},
  417: {name: "Kyrgyzstan", iso2: "KG"},
  418: {name: "Lao", iso2: "LA"},
  422: {name: "Lebanon", iso2: "LB"},
  426: {name: "Lesotho", iso2: "LS"},
  428: {name: "Latvia", iso2: "LV"},
  430: {name: "Liberia", iso2: "LR"},
  434: {name: "Libyan", iso2: "LY"},
  438: {name: "Liechtenstein", iso2: "LI"},
  440: {name: "Lithuania", iso2: "LT"},
  442: {name: "Luxembourg", iso2: "LU"},
  446: {name: "Macao", iso2: "MO"},
  450: {name: "Madagascar", iso2: "MG"},
  454: {name: "Malawi", iso2: "MW"},
  458: {name: "Malaysia", iso2: "MY"},
  462: {name: "Maldives", iso2: "MV"},
  466: {name: "Mali", iso2: "ML"},
  470: {name: "Malta", iso2: "MT"},
  474: {name: "Martinique", iso2: "MQ"},
  478: {name: "Mauritania", iso2: "MR"},
  480: {name: "Mauritius", iso2: "MU"},
  484: {name: "Mexico", iso2: "MX"},
  492: {name: "Monaco", iso2: "MC"},
  496: {name: "Mongolia", iso2: "MN"},
  498: {name: "Moldova", iso2: "MD"},
  499: {name: "Montenegro", iso2: "ME"},
  500: {name: "Montserrat", iso2: "MS"},
  504: {name: "Morocco", iso2: "MA"},
  508: {name: "Mozambique", iso2: "MZ"},
  512: {name: "Oman", iso2: "OM"},
  516: {name: "Namibia", iso2: "NA"},
  520: {name: "Nauru", iso2: "NR"},
  524: {name: "Nepal", iso2: "NP"},
  528: {name: "Netherlands", iso2: "NL"},
  530: {name: "Netherlands Antilles", iso2: "AN"},
  533: {name: "Aruba", iso2: "AW"},
  540: {name: "New Caledonia", iso2: "NC"},
  548: {name: "Vanuatu", iso2: "VU"},
  554: {name: "New Zealand", iso2: "NZ"},
  558: {name: "Nicaragua", iso2: "NI"},
  562: {name: "Niger", iso2: "NE"},
  566: {name: "Nigeria", iso2: "NG"},
  570: {name: "Niue", iso2: "NU"},
  574: {name: "Norfolk Island", iso2: "NF"},
  578: {name: "Norway", iso2: "NO"},
  580: {name: "Northern Mariana Islands", iso2: "MP"},
  581: {name: "United States Outlying Islands", iso2: "UM"},
  583: {name: "Micronesia", iso2: "FM"},
  584: {name: "Marshall Islands", iso2: "MH"},
  585: {name: "Palau", iso2: "PW"},
  586: {name: "Pakistan", iso2: "PK"},
  591: {name: "Panama", iso2: "PA"},
  598: {name: "Papua New Guinea", iso2: "PG"},
  600: {name: "Paraguay", iso2: "PY"},
  604: {name: "Peru", iso2: "PE"},
  608: {name: "Philippines", iso2: "PH"},
  612: {name: "Pitcairn", iso2: "PN"},
  616: {name: "Poland", iso2: "PL"},
  620: {name: "Portugal", iso2: "PT"},
  624: {name: "Guinea-Bissau", iso2: "GW"},
  626: {name: "Timor-Leste", iso2: "TL"},
  630: {name: "Puerto Rico", iso2: "PR"},
  634: {name: "Qatar", iso2: "QA"},
  638: {name: "Reunion", iso2: "RE"},
  642: {name: "Romania", iso2: "RO"},
  643: {name: "Russian Federation", iso2: "RU"},
  646: {name: "Rwanda", iso2: "RW"},
  652: {name: "Saint Barthelemy", iso2: "BL"},
  654: {name: "Saint Helena ", iso2: "SH"},
  659: {name: "Saint Kitts and Nevis", iso2: "KN"},
  660: {name: "Anguilla", iso2: "AI"},
  662: {name: "Saint Lucia", iso2: "LC"},
  663: {name: "Saint Martin (French part)", iso2: "MF"},
  666: {name: "Saint Pierre and Miquelon", iso2: "PM"},
  670: {name: "Saint Vincent", iso2: "VC"},
  674: {name: "San Marino", iso2: "SM"},
  678: {name: "Sao Tome and Principe", iso2: "ST"},
  682: {name: "Saudi Arabia", iso2: "SA"},
  686: {name: "Senegal", iso2: "SN"},
  688: {name: "Serbia", iso2: "RS"},
  690: {name: "Seychelles", iso2: "SC"},
  694: {name: "Sierra Leone", iso2: "SL"},
  702: {name: "Singapore", iso2: "SG"},
  703: {name: "Slovakia", iso2: "SK"},
  704: {name: "Viet Nam", iso2: "VN"},
  705: {name: "Slovenia", iso2: "SI"},
  706: {name: "Somalia", iso2: "SO"},
  710: {name: "South Africa", iso2: "ZA"},
  716: {name: "Zimbabwe", iso2: "ZW"},
  724: {name: "Spain", iso2: "ES"},
  732: {name: "Western Sahara", iso2: "EH"},
  736: {name: "Sudan", iso2: "SD"},
  740: {name: "Suriname", iso2: "SR"},
  744: {name: "Svalbard and Jan Mayen", iso2: "SJ"},
  748: {name: "Swaziland", iso2: "SZ"},
  752: {name: "Sweden", iso2: "SE"},
  756: {name: "Switzerland", iso2: "CH"},
  760: {name: "Syrian Arab Republic", iso2: "SY"},
  762: {name: "Tajikistan", iso2: "TJ"},
  764: {name: "Thailand", iso2: "TH"},
  768: {name: "Togo", iso2: "TG"},
  772: {name: "Tokelau", iso2: "TK"},
  776: {name: "Tonga", iso2: "TO"},
  780: {name: "Trinidad and Tobago", iso2: "TT"},
  784: {name: "United Arab Emirates", iso2: "AE"},
  788: {name: "Tunisia", iso2: "TN"},
  792: {name: "Turkey", iso2: "TR"},
  795: {name: "Turkmenistan", iso2: "TM"},
  796: {name: "Turks and Caicos Islands", iso2: "TC"},
  798: {name: "Tuvalu", iso2: "TV"},
  800: {name: "Uganda", iso2: "UG"},
  804: {name: "Ukraine", iso2: "UA"},
  807: {name: "Macedonia", iso2: "MK"},
  818: {name: "Egypt", iso2: "EG"},
  826: {name: "United Kingdom", iso2: "GB"},
  831: {name: "Guernsey", iso2: "GG"},
  832: {name: "Jersey", iso2: "JE"},
  833: {name: "Isle of Man", iso2: "IM"},
  834: {name: "Tanzania", iso2: "TZ"},
  840: {name: "United States", iso2: "US"},
  850: {name: "Virgin Islands, U.S.", iso2: "VI"},
  854: {name: "Burkina Faso", iso2: "BF"},
  858: {name: "Uruguay", iso2: "UY"},
  860: {name: "Uzbekistan", iso2: "UZ"},
  862: {name: "Venezuela", iso2: "VE"},
  876: {name: "Wallis and Futuna", iso2: "WF"},
  882: {name: "Samoa", iso2: "WS"},
  887: {name: "Yemen", iso2: "YE"},
  891: {name: "SERBIA Republic", iso2: "CS"},
  894: {name: "Zambia", iso2: "ZM"},
  900: {name: "European Union", iso2: "EU"},
  901: {name: "Non-spec Asia Location", iso2: "AP"},
  902: {name: "Reserved", iso2: "ZZ"}
};
var swpopup = {
  api_baseurl: "https://api.similarweb.com/",
  smSiteUrl: "https://t.similarsites.com/related?s=5501&md=18&q=",
  current_site: '',
  SEBaseUrl: localStorage.SEBaseUrl,
  openInbg: localStorage.openInBg !== "1",
  SES: {
    "google": "https://www.google.com/search?q=",
    "bing": "https://www.bing.com/search?q=",
    "yahoo": "https://search.yahoo.com/search;_ylt=Aql0BWm86x8TaumZxJCH0v.bvZx4?p=",
    "baidu": "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=",
    "sogou": "https://www.sogou.com/web?query=",
    "youdao": "https://www.youdao.com/search?q=",
    "wolframalpha": "https://www.wolframalpha.com/input/?i=",
    "duckduckgo": "https://duckduckgo.com/?q=",
    "yandex": "https://www.yandex.com/search/?lr=87&text="
  },
  favIconService: "https://www.google.com/s2/favicons?domain=",
  queryStr : "",
  format_number: function(num) {
    if(isNaN(num)) {
      return 0;
    }
    num = num.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while(pattern.test(num))
      num = num.replace(pattern, "$1,$2");
    return num;
  },
  format_time: function(sec) {
    sec = parseInt(sec);
    var h = Math.floor(sec / 3600);
    var m = Math.floor((sec - (h * 3600)) / 60);
    var s = sec - (h * 3600) - (m * 60);
    if(h < 10) {
      h = '0' + h;
    }
    if(m < 10) {
      m = '0' + m;
    }
    if(s < 10) {
      s = '0' + s;
    }
    return h + ':' + m + ':' + s;
  },
  format_date: function(date) {
    return Highcharts.dateFormat('%b %y', date);
  },
  format_human: function(num) {
    if(num < 1000) return num;
    var i = -1;
    var units = ['K', 'M', 'B', 'T', 'P', 'E'];
    do {
      num = num / 1000;
      i++;
    } while(num > 1000);
    return num.toFixed(1) + units[i];
  },
  get_current_site: function() {
    return swpopup.current_site;
  },
  get_domain_from_url: function(url) {
    try {
      if(url == null)
        return;
      var host = url.split('/');
      if(host.length < 3)
        return '';
      var domain = host[2];
      if(domain.indexOf("www.") == 0)
        domain = domain.substr(4);
      return domain;

    } catch(e) {
      return '';
    }
  },
  add_default_data_to_ui: function() {
    $("#logo").click(function() {
      sendGAEvents("Extension","SW_Logo", swpopup.queryStr);
      _browser.openTab(_browser.url_logo);
    });
    $("#quickSearch").focus().val(swpopup.domain).on("keyup", function(){
      var queryStr = $(this).val().trim();
      swpopup.queryStr = queryStr !== "" ? queryStr : swpopup.domain;
    });
    swpopup.queryStr = swpopup.domain;
    $('#site-name').text(ucfirst(swpopup.domain));
    sendGAEvents("Extension", "Overview_Shown", swpopup.queryStr);
    $('.reload').click(function() {
      $(this).closest('li').find('.loading').css('display', 'block');
      $(this).closest('li').find('.error_page').css('display', 'none');
      var tab_id = $(this).closest('li').attr('id').replace(/\-content/, '');
      activate_tab(tab_id);
      renderingTab(true, tab_id);
    });
    $('#optionsButton').click(function() {
      sendGAEvents("Extension","OptionsButton", swpopup.queryStr);
      if(chrome.runtime.openOptionsPage) {
        // New way to open options pages, if supported (Chrome 42+).
        chrome.runtime.openOptionsPage();
      } else {
        // Reasonable fallback.
        window.open(chrome.runtime.getURL('options.html'));
      }
      if (isFirefox) {
          window.close()
      }
    });

    var logo = $('#site-logo').attr('ref', swpopup.domain).text('\xa0');
    faviconize(logo, 32);
    if(localStorage.showAdNew !== "0") {
      $("#tab-ads").find(".new").show();
      $("#tab-alsoVisited").find(".new").show();
    }

  },

  add_small_site_data_to_ui: function(data){
      $('.js--OverviewSmallSiteTitle').text(data.SmallSite.SmallSiteTitle)
      $('.js--OverviewSmallSiteText').text(data.SmallSite.SmallSiteMessage)
      $('.js--OverviewSmallSiteContainer').show();
      $('.js--OverviewDataContainer').hide(); 
  },

  add_overview_data_to_ui: function(domain, data) {
    if(data.GlobalRank > 0) {
      $('#GlobalRankValue').text(swpopup.format_number(data.GlobalRank));
    } else {
      $('#GlobalRankValue').text("N/A");
      $('#GlobalRankIcon').hide();
    }

    if(data.CountryRank > 0) {
      $('#CountryRankValue').text(swpopup.format_number(data.CountryRank));
    } else {
      $('#CountryRankValue').text("N/A");
    }

    if(data.CategoryRank > 0) {
      $('#CategoryRankValue').text(swpopup.format_number(data.CategoryRank));
    } else {
      $('#CategoryRankValue').text("N/A");
    }

    $("#quickSearch").focus().attr("placeholder", swpopup.domain);
    if(data.Category) {
      var subTitle = data.Category;
      if(subTitle == null || subTitle == "") {
        subTitle = "Unknown Category";
      }
      subTitle = subTitle.replace(/_/g, " ");
      subTitle = subTitle.replace(/\//g, " > ");

      var cat_link = data.Category;
      cat_link = cat_link.replace("/", "~");
      cat_link = cat_link.replace("/", "~");

      $('#CategorySubTitle').text(subTitle).attr("category", cat_link).attr("title", subTitle).addClass('link').click(function() {
        sendGAEvents("Overview","click", "Country_link");
        _browser.openTab(SW_URLS.LITE.topWebsites($(this).attr('category')));
      });
      $("#CategoryIcon").addClass(data.Category.split('/')[0].toLowerCase()).css('display', 'inline-block');
    }

    try {
      var countryName = '';
      var countryClass = '';
      try {
        countryName = Countries[data.Country].name;
        countryClass = Countries[data.Country].iso2.toLowerCase();
      } catch(e) {
      }

      $("#CountrySubTitle").attr("cname", Countries[data.Country].name.replace(" ", "-").toLowerCase()).addClass('link');
      $("#CountrySubTitle").text('In ' + countryName).click(function() {
        sendGAEvents("Overview","click", "Country_link");
        _browser.openTab(SW_URLS.LITE.topWebsites(null, $("#CountrySubTitle").attr("cname")));
      });

      if(countryClass) {
        $("#CountryFlag").addClass(countryClass).css('display', 'inline-block');
      }
    } catch(e) {
    }

    // fix string widths to max
    $('#rank .row').each(function() {
      $(this).find('.name').width($('#rank').width() - $(this).find('.value').width() - $(this).find('.etc').width() - 6);
    });

    // fix #CategorySubTitle length
    var title = $('#CategorySubTitle').text();
    var col_width = $('#CategorySubTitle').closest('.col').width();
    var i = 1;
    while(col_width < $('#CategorySubTitle').width()) {
      var text = title.substring(0, title.length - i) + '...';
      $('#CategorySubTitle').text(text);
      i++;
      if(i > title.length) break;
    }

    if(data.IsSiteVerified) {
      $(".verifiedData").show();
    }
  },
  add_traffic_share_data_to_ui: function(domain, data) {
    if(!data.TrafficShares || (!data.TrafficShares.Direct && !data.TrafficShares.Search && !data.TrafficShares.Social 
      && !data.TrafficShares.Mail && !data.TrafficShares["Paid Referrals"] && !data.TrafficShares.Referrals)) {
      $('#tab-traffic-content').find('.error_page').css('display', 'block');
      invalidate_tab('tab-traffic');
      return;
    }
    swpopup.generate_chart(data.TrafficShares);
  },
  add_visits_data_to_ui: function(domain, data) {
    var widgetdata = [];
    for(var i = 0; i < data.Values.length; i++) {
      widgetdata[i] = [
        Date.parse(data.Values[i].Date), data.Values[i].Value];
    }

    Highcharts.setOptions({
      lang: {
        numericSymbols: ['K', 'M', 'B', 'T', 'P', 'E']
      }
    });

    $('#graph-traffic').highcharts({
      title: null,
      chart: {
        type: "line",
        reflow: !0,
        animation: false,
        marginBottom: 39
      },
      tooltip: {
        enabled: !0,
        borderWidth: 1,
        backgroundColor: "#fff",
        style: {
          color: "#494949",
          fontSize: "11px",
          fontFamily: "Arial",
          padding: "5px"
        }
      },
      xAxis: {
        x: 0,
        y: 0,
        lineColor: "#CCCCCC",
        gridLineColor: "#eaeaea",
        type: "datetime",
        title: {
          text: null
        },
        tickmarkPlacement: "on",
        showFirstLabel: true,
        labels: {
          y: 30,
          style: {
            fontFamily: "arial",
            color: "#cccccc"
          },
          formatter: function() { return swpopup.format_date(this.value); }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: null
        },
        labels: {
          style: {
            fontFamily: "arial",
            color: "#999999"
          },
          enabled: !0
        }
      },
      colors: ["#066799"],
      plotOptions: {
        line: {
          shadow: !1,
          dataLabels: {
            enabled: !1
          },
          events: {
            legendItemClick: function() {
              return !1;
            }
          },
          enableMouseTracking: !0,
          marker: {
            enabled: !0,
            symbol: "circle",
            radius: 4,
            lineWidth: 2
          }
        },
        series: {
          animation: true,
          animation: false, // true broke Firefox version > 56
          states: {
            hover: {
              halo: {
                attributes: {
                  fill: "#FFFFFF"
                }
              }
            }
          }
        }
      },
      series: [{
        name: domain.length > 36 ? domain.substring(0, 36) + '...' : domain,
        data: widgetdata
      }],
      legend: {
        enabled: !1
      },
      credits: {
        enabled: !1
      }
    });

    if(data.Values[data.Values.length - 1].Value > 0) {
      $('#EstimatedVisits').text(swpopup.format_human(data.Values[data.Values.length - 1].Value));
    }
  },
  add_visitduration_data_to_ui: function(domain, data) {
    if(!data.Values.length) {
      return;
    }

    if(data.Values[0].Value > 0) {
      $('#TimeOnSite').text(swpopup.format_time(data.Values[0].Value));
    }
  },
  add_pageviews_data_to_ui: function(domain, data) {
    if(!data.Values.length) {
      return;
    }

    if(data.Values[0].Value > 0) {
      $('#PageViews').text(data.Values[0].Value.toFixed(2));
    }
  },
  add_bouncerate_data_to_ui: function(domain, data) {
    if(!data.Values.length) {
      return;
    }

    if(data.Values[0].Value > 0) {
      $('#BounceRate').text(formattedPercentage(data.Values[0].Value) + '%');
    }
  },
  add_traffic_data_to_ui: function(domain, data) {
    if(!data.TopCountryShares.length) {
      $('#tab-geo-content').find('.error_page').css('display', 'block');
      invalidate_tab('tab-traffic');
      return;
    }

    var code, share;
    var graph_data = [];
    for(var i = 0; i < Math.min(8, data.TopCountryShares.length); i++) {
      code = data.TopCountryShares[i].CountryCode;
      share = data.TopCountryShares[i].TrafficShare;
      var item = $('<div>', {
        class: "country-item"
      });
      $('<img>', {
        src: 'images/flags/' + Countries[code].iso2.toUpperCase() + '.png',
        class: 'flag'
      }).appendTo(item);
      $('<div>', {
        class: "country-share"
      }).text(formattedPercentage(share) + '%').appendTo(item);
      $('<div>', {
        class: "country-name"
      }).text(Countries[code].name).appendTo(item);
      item.appendTo($('#leading-countries'));
    }

    $('#lead-country-share').text(formattedPercentage(data.TopCountryShares[0].TrafficShare) + '%');
    $('#lead-country-name').text(Countries[data.TopCountryShares[0].CountryCode].name);
    $('#lead-country-domain').text(domain);


    var moreButton = $('#tab-geo-content').find('.fulldetailsBtn');
    swpopup.showHookButton(moreButton, data.uniCount);

    // all countries:
    for(var i = 0; i < data.TopCountryShares.length; i++) {
      code = data.TopCountryShares[i].CountryCode;
      share = data.TopCountryShares[i].TrafficShare;
      if(share > 0.0001) {
        graph_data[i] = {
          code: Countries[code].iso2.toUpperCase(),
          value: formattedPercentage(share)
        };
      }
    }

    $('#graph-regions').highcharts('Map', {
      chart: {
        spacing: [0, 0, 0, 0],
        margin: [0, 0, 0, 0]
      },
      title: null,
      mapNavigation: {
        enabled: false
      },
      navigation: {
        buttonOptions: {
          enabled: false
        }
      },
      colorAxis: {
        min: 1,
        max: formattedPercentage(data.TopCountryShares[0].TrafficShare),
        type: 'logarithmic',
        maxColor: '#3999c1'
      },
      plotOptions: {
        map: {
          nullColor: '#f5f5f5'
        }
      },
      series: [{
        data: graph_data,
        mapData: Highcharts.maps['custom/world'],
        joinBy: ['iso-a2', 'code'],
        name: '<b>' + ucfirst(domain.length > 36 ? domain.substring(0, 36) + '...' : domain) + '</b> traffic in last 3 months',
        states: {
          hover: {
            color: '#3999c1',
            borderColor: '#7e9ba7',
            borderWidth: 2
          }
        },
        tooltip: {
          valueSuffix: '%'
        }
      }],
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      }
    });
  },
  add_referring_data_to_ui: function(domain, data) {
    if(!data.Sites.length) {
      $('#top-referring').find('.no-data').css('display', 'block');
      if($('#top-destination').find('.no-data').is(':visible')) {
        $('#tab-referrals-content').find('.error_page').css('display', 'block');
        invalidate_tab('tab-referrals');
      }
      return;
    }
    for(var i = 0; i < data.Sites.length; i++) {
      var site = data.Sites[i];
      var item = $('<li>');
      var icon = $('<div>', {
        class: "icon",
        ref: site
      }).text('\xa0').appendTo(item);
      faviconize(icon);
      var text = $('<div>', {
        class: "text link",
        title: ucfirst(site),
        domain: site,
        ref: SW_URLS.LITE.websiteAnalysisReferrals(site)
      }).text(ucfirst(site.length <= 29 ? site : site.substring(0, 26) + '...')).appendTo(item).click(function(e) {
          swpopup.openExternalLinkReferrals($(this), e);
      });
      $('<div>', {
        class: "link-icon",
        ref: 'http://' + site
      }).click(function() {
        _browser.openTab($(this).attr('ref'));
        return false;
      }).appendTo(text);
      item.appendTo($('#top-referring-list'));
    }
    var moreButton = $('#top-referring').find('.fulldetailsBtn');
    swpopup.showHookButton(moreButton, data.referCount);

  },
  add_destination_data_to_ui: function(domain, data) {
    if(!data.Sites.length) {
      $('#top-destination').find('.no-data').css('display', 'block');
      if($('#top-referring').find('.no-data').is(':visible')) {
        $('#tab-referrals-content').find('.error_page').css('display', 'block');
        invalidate_tab('tab-referrals');
      }
      return;
    }
    for(var i = 0; i < data.Sites.length; i++) {
      var site = data.Sites[i];
      var item = $('<li>');
      var icon = $('<div>', {
        class: "icon",
        ref: site
      }).text('\xa0').appendTo(item);
      faviconize(icon);
      var text = $('<div>', {
        class: "text link",
        title: ucfirst(site),
        domain: site,
        ref: SW_URLS.LITE.websiteAnalysisReferrals(site)
      }).text(ucfirst(site.length <= 29 ? site : site.substring(0, 26) + '...')).appendTo(item).click(function(e) {
        swpopup.openExternalLinkReferrals($(this), e);
      });
      $('<div>', {
        class: "link-icon",
        ref: 'http://' + site
      }).click(function() {
        _browser.openTab($(this).attr('ref'));
        return false;
      }).appendTo(text);
      item.appendTo($('#top-destination-list'));
    }
    var moreButton = $('#top-destination').find('.fulldetailsBtn');
    swpopup.showHookButton(moreButton, data.destCount);
  },
  add_orgsearch_data_to_ui: function(domain, data) {
    if(!data.Data.length) {
      $('#top-organic-kw').find('.no-data').show();
      if($('#top-paid-kw').find('.no-data').attr("style").indexOf("display: block") !== -1) {
        $('#tab-search-content').find('.error_page').show();
        invalidate_tab('tab-search');
      }
      return;
    }
    var kw, percent;
    for(var i = 0; i < data.Data.length; i++) {
      kw = data.Data[i].SearchTerm;
      percent = data.Data[i].Visits;
      var item = $('<li>');

      $('<div>', {
        class: "text link kw",
        title: ucfirst(kw),
        ref: (localStorage.SEBaseUrl || "https://www.google.com/search?q=") + encodeURIComponent(kw)
      }).text(ucfirst(kw.length <= 35 ? kw : kw.substring(0, 32) + '...')).appendTo(item);
      var bar = $('<div>', {
        class: "progress-bar",
        title: formattedPercentage(percent) + "%"
      });
      $('<div>', {
        class: "progress-value",
        style: "width:" + formattedPercentage(percent) + "%"
      }).appendTo(bar);
      bar.appendTo(item);
      item.appendTo($('#top-organic-kw-list'));
    }
    var moreButton = $('#top-organic-kw').find('.fulldetailsBtn');
    swpopup.showHookButton(moreButton, data.uniCount);
  },
  add_paidsearch_data_to_ui: function(domain, data) {
    if(!data.Data.length) {
      $('#top-paid-kw').find('.no-data').show();
      if($('#top-organic-kw').find('.no-data').attr("style").indexOf("display: block") !== -1) {
        $('#tab-search-content').find('.error_page').show();
        invalidate_tab('tab-search');
      }
      return;
    }
    var kw, percent;
    for(var i = 0; i < data.Data.length; i++) {
      kw = data.Data[i].SearchTerm;
      percent = data.Data[i].Visits;
      var item = $('<li>');
      $('<div>', {
        class: "text link kw",
        title: ucfirst(kw),
        ref: (localStorage.SEBaseUrl || "https://www.google.com/search?q=") + encodeURIComponent(kw)
      }).text(ucfirst(kw.length <= 35 ? kw : kw.substring(0, 32) + '...')).appendTo(item);
      var bar = $('<div>', {
        class: "progress-bar",
        title: formattedPercentage(percent) + "%"
      });
      $('<div>', {
        class: "progress-value",
        style: "width:" + formattedPercentage(percent) + "%"
      }).appendTo(bar);
      bar.appendTo(item);
      item.appendTo($('#top-paid-kw-list'));
    }
    var moreButton = $('#top-paid-kw').find('.fulldetailsBtn');
    swpopup.showHookButton(moreButton, data.uniCount);
  },
  add_social_data_to_ui: function(domain, data) {
    if(!data.SocialSources.length) {
      $('#tab-social-content').find('.error_page').css('display', 'block');
      invalidate_tab('tab-social');
      return;
    }
    var src, percent;
    for(var i = 0; i < Math.min(data.SocialSources.length, 5); i++) {
      src = data.SocialSources[i].Source;
      percent = data.SocialSources[i].Value;
      var item = $('<li>');
      $('<div>', {
        class: "text",
        title: ucfirst(src)
      }).text(ucfirst(src)).prepend('<img class="socialIcon" src="' + data.SocialSources[i].Icon + '">').appendTo(item);
      var bar = $('<div>', {
        class: "progress-bar",
        title: formattedPercentage(percent) + "%"
      });
      $('<div>', {
        class: "progress-value",
        style: "width:" + formattedPercentage(percent) + "%"
      }).appendTo(bar);
      bar.appendTo(item);
      $('<div>', {
        class: "value"
      }).text(formattedPercentage(percent) + "%").appendTo(item);
      item.appendTo($('#social-sources-list'));
    }
  },
  add_similarsites_data_to_ui: function(domain, data) {
    var siteLen = data.SimilarSites.length;
    if(!siteLen) {
      $('#tab-similar-content').find('.error_page').css('display', 'block');
      invalidate_tab('tab-similar');
      return;
    }
    siteLen = siteLen > 8 ? 8 : siteLen;
    for(var i = 0; i < siteLen; i++) {
      var site = data.SimilarSites[i].Site;
      var item = $('<li>');
      $('<img>', {
        src: data.SimilarSites[i].Screenshot || "images/default-site.jpg",
        width: 136,
        height: 98,
        class: "similar-site",
        id: 'thumb-for-' + site.replace('.', '')
      }).appendTo(item);
      var icon = $('<div>', {
        class: "icon",
        ref: site
      }).appendTo(item);
      if(data.SimilarSites[i].Screenshot) {
        icon.css('background', 'none').html(
          $('<img>', {
            width: 16,
            height: 16,
            src: data.SimilarSites[i].Screenshot
          })
        );
      } else {
        faviconize(icon);
      }
      var text = $('<div>', {
        class: "text"
      }).append($("<a>", {
        title: site,
        ref: SW_URLS.LITE.websiteAnalysisSimilar(site)
      }).text(site.length <= 17 ? site : site.substring(0, 14) + '...')).appendTo(item);
      $('<div>', {
        class: "link-icon",
        title: site,
        ref: 'http://' + site
      }).click(function() {
        _browser.openTab($(this).attr("ref"));
      }).appendTo(text);
      item.appendTo($('#similar-sites-list'));
    }

    $("#tab-similar-content").find(".text a").click(function(e) {
        let innerText = $(this).attr("title");
      swpopup.openExternalLinkSimilarTab($(this), e, innerText);
    });
    $.get(swpopup.smSiteUrl + domain, function(xml) {
      if($(xml).find("status").text() != 0) {
        return;
      }
      $(xml).find("relatedsites").find("site").each(function() {
        var sitedata = {
          url: $(this).find("url").text(),
          icon: $(this).find("icon").text(),
          image: $(this).find("image").text()
        };
        $('.icon[ref="' + sitedata.url + '"]').find("img").attr('src', sitedata.icon);
      });
    });
  },
  add_mobile_google_data_to_ui: function(domain, data) {
    var isGooglePlay = /https:\/\/play.google.com\/store\/apps\/details\?id=(.*)&?/.test(swpopup.current_site);
    if(!data.RelatedApps.length && !isGooglePlay) {
      $('#mobile-store-google').find('.no-data').css('display', 'block');
      $('#mobile-store-google').find('.right-border').removeClass('right-border');
      if($('#mobile-store-apple').find('.no-data').is(':visible')) {
        $('#tab-mobile-content').find('.error_page').css('display', 'block');
        invalidate_tab('tab-mobile');
      }
      return;
    }
    if(isGooglePlay) {
      var t = chrome.tabs;
      t.query({currentWindow: true, active: true}, function(tabArr) {
        t.sendMessage(tabArr[0].id, {cmd: "getAppInfo"}, function(appInfo) {
          addGoogleApps({RelatedApps: [appInfo]});
        });
      });
    } else {
      addGoogleApps(data);
    }
    function addGoogleApps (data) {
      for(var i = 0; i < data.RelatedApps.length; i++) {
        var appid = data.RelatedApps[i].AppId;
        var title = data.RelatedApps[i].Title;

        var item = $('<li>', {
          appid: appid,
          ref: SW_URLS.LITE.androidApp(appid)
          // ref: `https://www.similarweb.com/app/google-play/${appid}/statistics?utm_source=addon&utm_medium=chrome&utm_content=apps`
        });
        item.click(function() {
          if(localStorage.isPro === "1") {
            _browser.openTab(SW_URLS.PRO.androidAppRanking(appid));
          } else {
            _browser.openTab($(this).attr('ref'));
          }

        });
        $('<img>', {
          src: data.RelatedApps[i].Cover || "images/default-app.png",
          width: 64,
          height: 64,
          class: "mobile-app"
        }).appendTo(item);
        $('<div>', {
          class: "app-title"
        }).text(title).appendTo(item);
        $('<div>', {
          class: "app-publisher"
        }).text(data.RelatedApps[i].Author || "\xa0").appendTo(item);
        $('<div>', {
          class: "app-price"
        }).text(data.RelatedApps[i].Price || "\xa0").appendTo(item);
        item.appendTo($('#mobile-apps-google-list'));
      }

      if(data.RelatedApps.length > 5) {
        var mobileStoreGoogle = $('#mobile-store-google');
        mobileStoreGoogle.find('.nav-arrow-forward').css('display', 'block');
        var msgList = $("#mobile-apps-google-list");
        mobileStoreGoogle.find('.nav-arrow-forward').click(function() {
          if($(this).attr('lock')) return;
          $(this).attr('lock', 'lock');
          var items_num = msgList.find('li').length;
          var item_width = msgList.find('li').outerWidth(true);
          var left = parseInt(msgList.css('left'));

          if(0 - left < item_width * (items_num - 5)) {
            msgList.animate({
              left: "-=" + (item_width * 5)
            }, 500, function() {
              mobileStoreGoogle.find('.nav-arrow-forward').removeAttr('lock');
              mobileStoreGoogle.find('.nav-arrow-forward').css('display', 0 - left < item_width * (items_num - 10) ? 'block' : 'none');
              mobileStoreGoogle.find('.nav-arrow-back').css('display', left - item_width * (items_num - 5) < 0 ? 'block' : 'none');
            });
          }
        });

        mobileStoreGoogle.find('.nav-arrow-back').click(function() {
          if($(this).attr('lock')) return;
          $(this).attr('lock', 'lock');
          var item_width = msgList.find('li').outerWidth(true);
          var left = parseInt(msgList.css('left'));

          if(left < 0) {
            msgList.animate({
              left: "+=" + (item_width * 5)
            }, 500, function() {
              mobileStoreGoogle.find('.nav-arrow-back').removeAttr('lock');
              mobileStoreGoogle.find('.nav-arrow-forward').css('display', 'block');
              mobileStoreGoogle.find('.nav-arrow-back').css('display', left + item_width * 5 < 0 ? 'block' : 'none');
            });
          }
        });
      }
    }
  },
  add_mobile_apple_data_to_ui: function(domain, data) {
    var isItuns = /https:\/\/itunes.apple.com\/.*\/app\/.*\/id\d+/.test(swpopup.current_site);
    if(!data.RelatedApps.length && !isItuns) {
      $('#mobile-store-apple').find('.no-data').css('display', 'block');
      $('#mobile-store-apple').find('.right-border').removeClass('right-border');
      if($('#mobile-store-google').find('.no-data').is(':visible')) {
        $('#tab-mobile-content').find('.error_page').css('display', 'block');
        invalidate_tab('tab-mobile');
      }
      return;
    }

    if(isItuns) {
      var t = chrome.tabs;
      t.query({currentWindow: true, active: true}, function(tabArr) {
        t.sendMessage(tabArr[0].id, {cmd: "getAppInfo"}, function(appInfo) {
          addItunsApps({RelatedApps: [appInfo]});
        });
      });
    } else {
      addItunsApps(data);
    }

    function addItunsApps (data) {
      for(var i = 0; i < data.RelatedApps.length; i++) {
        var appid = data.RelatedApps[i].AppId;
        var title = data.RelatedApps[i].Title;

        var item = $('<li>', {
          appid: appid,
          ref: SW_URLS.LITE.iosApp(appid)
          // ref: `https://www.similarweb.com/app/app-store/${appid}/statistics?utm_source=addon&utm_medium=chrome&utm_content=apps`
        });
        item.click(function() {
          if(localStorage.isPro === "1") {
            _browser.openTab(SW_URLS.PRO.iosAppRanking(appid));
          } else {
            _browser.openTab($(this).attr('ref'));
          }

        });
        $('<img>', {
          src: data.RelatedApps[i].Cover || "images/default-app.png",
          width: 64,
          height: 64,
          class: "mobile-app"
        }).appendTo(item);
        $('<div>', {
          class: "app-title"
        }).text(title).appendTo(item);
        $('<div>', {
          class: "app-publisher"
        }).text(data.RelatedApps[i].Author || "\xa0").appendTo(item);
        $('<div>', {
          class: "app-price"
        }).text(data.RelatedApps[i].Price || "\xa0").appendTo(item);
        item.appendTo($('#mobile-apps-apple-list'));
      }


      if(data.RelatedApps.length > 5) {
        var mobileStoreApple = $('#mobile-store-apple');
        mobileStoreApple.find('.nav-arrow-forward').css('display', 'block');
        var msaList = $("#mobile-apps-apple-list");
        mobileStoreApple.find('.nav-arrow-forward').click(function() {
          if($(this).attr('lock')) return;
          $(this).attr('lock', 'lock');

          var items_num = msaList.find('li').length;
          var item_width = msaList.find('li').outerWidth(true);
          var left = parseInt(msaList.css('left'));

          if(0 - left < item_width * (items_num - 5)) {
            msaList.animate({
              left: "-=" + (item_width * 5)
            }, 500, function() {
              mobileStoreApple.find('.nav-arrow-forward').removeAttr('lock');
              mobileStoreApple.find('.nav-arrow-forward').css('display', 0 - left < item_width * (items_num - 10) ? 'block' : 'none');
              mobileStoreApple.find('.nav-arrow-back').css('display', left - item_width * (items_num - 5) < 0 ? 'block' : 'none');

            });
          }
        });

        mobileStoreApple.find('.nav-arrow-back').click(function() {
          if($(this).attr('lock')) return;
          $(this).attr('lock', 'lock');
          var item_width = msaList.find('li').outerWidth(true);
          var left = parseInt(msaList.css('left'));

          if(left < 0) {
            $("#mobile-apps-apple-list").animate({
              left: "+=" + (item_width * 5)
            }, 500, function() {
              mobileStoreApple.find('.nav-arrow-back').removeAttr('lock');
              mobileStoreApple.find('.nav-arrow-forward').css('display', 'block');
              mobileStoreApple.find('.nav-arrow-back').css('display', left + item_width * 5 < 0 ? 'block' : 'none');
            });
          }
        });
      }
    }
  },
  add_also_visited_data_to_ui: function(domain, data) {
    if(!data.Data.length) {
      $('#tab-alsoVisited-content').find('.error_page').css('display', 'block');
      invalidate_tab('tab-alsoVisited');
      return;
    }
    var contentArea = $("#tab-alsoVisited-content");
    for(var j = 0; j < data.Data.length; j++) {
      var site = data.Data[j];
      var item = $('<li>');
      var text = $('<div>', {
        class: "text link",
        title: ucfirst(site),
        "domain": site.toLowerCase(),
        ref: SW_URLS.LITE.websiteAnalysisOverview(site)
      }).append("<div>" + ucfirst(site.length <= 29 ? site : site.substring(0, 26) + '...') + "</div>")
        .appendTo(item)
        .click(function(e) {
          swpopup.openExternalLink($(this), e);
        });
      $('<div>', {
        class: "link-icon",
        ref: 'http://' + site
      }).click(function() {
        _browser.openTab($(this).attr('ref'));
        return false;
      }).appendTo(text);
      text.prepend($("<img>", {
        class: "favicon",
        src: swpopup.favIconService + site
      }));
      item.appendTo($('#top-alsoVisited-list'));
    }
    contentArea.find(".siteThumb").css("background-image", "url('" + data.ScreenShot + "')");
    contentArea.find(".title span").text(swpopup.domain);
    var moreButton = contentArea.find('.fulldetailsBtn');
    swpopup.showHookButton(moreButton, data.uniCount);
  },
  add_ads_network_data_to_ui: function(domain, data) {
    if(!data.Data.length) {
      $('#top-ads-network').find('.no-data').css('display', 'block');
      if($('#top-ads-publisher').find('.no-data').attr("style").indexOf("display: block") !== -1) {
        $('#tab-ads-content').find('.error_page').css('display', 'block');
        invalidate_tab('tab-ads');
      }
      return;
    }

    var kw, percent;
    for(var i = 0; i < data.Data.length; i++) {
      kw = data.Data[i].Site;
      percent = data.Data[i].Display;
      var item = $('<li>');

      $('<div>', {
        class: "text link kw",
        title: ucfirst(kw),
        ref: (localStorage.SEBaseUrl || "https://www.google.com/search?q=") + encodeURIComponent(kw)
      }).text(ucfirst(kw.length <= 35 ? kw : kw.substring(0, 32) + '...')).appendTo(item);
      var bar = $('<div>', {
        class: "progress-bar",
        title: formattedPercentage(percent) + "%"
      });
      $('<div>', {
        class: "progress-value",
        style: "width:" + formattedPercentage(percent) + "%"
      }).appendTo(bar);
      bar.appendTo(item);
      item.appendTo($('#top-ads-network-list'));
    }
  },
  add_ads_publisher_data_to_ui: function(domain, data) {
    if(!data.Data.length) {
      $('#top-ads-publisher').find('.no-data').css('display', 'block');
      if($('#top-ads-network').find('.no-data').attr("style").indexOf("display: block") !== -1) {
        $('#tab-ads-content').find('.error_page').css('display', 'block');
        invalidate_tab('tab-ads');
      }
      return;
    }

    var pb, percent;
    for(var i = 0; i < data.Data.length; i++) {
      pb = data.Data[i].Site;
      percent = data.Data[i].Display;
      var item = $('<li>');

      var text = $('<div>', {
        class: "text link",
        title: ucfirst(pb),
        domain: pb,
        ref: SW_URLS.LITE.websiteAnalysisAds(pb)
      }).text(ucfirst(pb.length <= 35 ? pb : pb.substring(0, 32) + '...')).appendTo(item).click(function(e) {
        swpopup.openExternalLinkAds($(this), e);
      });
      $('<div>', {
        class: "link-icon",
        ref: 'http://' + pb
      }).click(function() {
        _browser.openTab($(this).attr('ref'));
        return false;
      }).appendTo(text);
      var bar = $('<div>', {
        class: "progress-bar",
        title: formattedPercentage(percent) + "%"
      });
      $('<div>', {
        class: "progress-value",
        style: "width:" + formattedPercentage(percent) + "%"
      }).appendTo(bar);
      bar.appendTo(item);
      item.appendTo($('#top-ads-publisher-list'));
    }
    var moreButton = $('#top-ads-publisher').find('.fulldetailsBtn');
    swpopup.showHookButton(moreButton, data.uniCount);
  },
  _on_data_loaded: function(element_ids) {
    for(var i = 0; i < element_ids.length; i++) {
      var element_id = element_ids[i];
      tabs_loading[element_id]--;
      if(!tabs_loading[element_id]) {
        $('#' + element_id).find('.loading').css('display', 'none');
      }
    }
  },
  generate_chart: function(data) {
    var sources = ["Direct", "Search", "Social", "Mail", "Paid Referrals", "Referrals"];

    sources.forEach(function (sourceName) {
      var sourceNumber = (data[sourceName] * 100).toFixed(2);
      var sourceString = sourceName.toLowerCase().replace(" ", "-");

      addColumn(0, sourceNumber, sourceString);
    });
  },

  showHookButton: function(btn, count) {
    var leftCount = count - 5;
    if(leftCount > 0) {
      btn.find("span").text(swpopup.format_number(leftCount));
      btn.show();
    }
  },

  openExternalLink: function(sel, e) {
    var url = sel.attr("ref"),
      domain = sel.attr("domain");
    if(localStorage.showInfo === "1") {
      showInfo("link", domain, e);
    } else {
      _browser.openTab(localStorage.isPro !== "1" ? url : SW_URLS.PRO.websiteAnalysisOverview(domain));
    }
  },

  openExternalLinkSimilarTab: function(sel, e, innerText) {
      var url = sel.attr("ref"),
          domain = innerText;
      if(localStorage.showInfo === "1") {
          showInfo("link", domain, e);
      } else {
          _browser.openTab(localStorage.isPro !== "1" ? url : SW_URLS.PRO.websiteAnalysisSimilar(domain));
      }
  },

  openExternalLinkReferrals: function(sel, e) {
      var url = sel.attr("ref"),
          domain = sel.attr("domain");
      if(localStorage.showInfo === "1") {
          showInfo("link", domain, e);
      } else {
          _browser.openTab(localStorage.isPro !== "1" ? url : SW_URLS.PRO.websiteAnalysisReferrals(domain));
      }
  },

  openExternalLinkAds: function(sel, e) {
      var url = sel.attr("ref"),
          domain = sel.attr("domain");
      if(localStorage.showInfo === "1") {
          showInfo("link", domain, e);
      } else {
          _browser.openTab(localStorage.isPro !== "1" ? url : SW_URLS.PRO.websiteAnalysisAds(domain));
      }
  }
};

var chart = $("body").find(".chart");

function formattedPercentage (value) {
  return (value * 100).toFixed(2);
}

function ucfirst (value) {
  return value ? value[0].toUpperCase() + value.substring(1) : '';
}

function faviconize (e, dim) {
  dim = dim || 16;
  var sel = $(e), faveIconUrl = swpopup.favIconService + sel.attr('ref');
  sel.css('background', 'none').html($('<img>', {
    width: dim,
    height: dim,
    src: faveIconUrl
  }));
}

function addColumn (slot, data, where) {
  var k = $('.js-sources-graph').height() / 100;
  var _where = $(".js-sources-" + where).find(".js-sources-graph");
  var _series = $("<div class='series'></div>");
  var _label = $("<span class='label slot'></span>");
  var _percentage = data;
  var _seriesCount;

  _series.css("height", (parseFloat(_percentage) <= 1.0) ? 1.0 : _percentage + "%");
  _series.css("margin-top", k * (100 - _series.height()));
  _series.addClass("slot" + slot);

  _series.data("slot", slot);

  _label.html(_percentage + "%");
  _label.addClass("slot" + slot);

  _where.append(_series);
  _where.append(_label);
  _where.addClass("size1Of1");

  try {
    _label.data("slot", slot);
    _label.css("bottom", _percentage + "%");

    if(_label.hasClass("high")) {
      _label.css("bottom", "5px");
    }

    $(window).trigger("resize");
  } catch(ex) {
  }

  return this;
}

function showSESelector (kw) {
  var overlay = $(".overlay"), SESelector = $(".SESelector");
  overlay.fadeIn(function() {
    SESelector.fadeIn();
  });
  $("#set").click(function() {
    var se = $("#defaultSE").val(), baseUrl = swpopup.SES[se];
    localStorage.SEBaseUrl = baseUrl;
    swpopup.SEBaseUrl = baseUrl;
    sendGAEvents("Search_popup", "click", "Set_KW_Search_Button");
    _browser.openTab(baseUrl + encodeURIComponent(kw));
  });
}



// run once
tabs_loading = {};
tabs_loaded = {};
tabs_invalid = {};
load_tab = function(id, data) {
  tabs_loaded[id] = 1;
  tabs_invalid[id] = 0;	// default
  switch(id) {
    case 'tab-overview':
      $(".tabs-footer").addClass("footer--hidden");
      tabs_loaded['tab-traffic'] = 1;
      tabs_loaded['tab-similar'] = 1;

      if(data.SmallSite.IsSmall && !data.rankOverView.IsSiteVerified) {
        swpopup.add_small_site_data_to_ui(data);
      } else {

      swpopup.add_overview_data_to_ui(swpopup.domain, data.rankOverView);      
      swpopup.add_visits_data_to_ui(swpopup.domain, data.visits);      
      swpopup.add_bouncerate_data_to_ui(swpopup.domain, data.bouncerate);
      swpopup.add_visitduration_data_to_ui(swpopup.domain, data.visitduration);
      swpopup.add_pageviews_data_to_ui(swpopup.domain, data.pageviews);
      }
      swpopup._on_data_loaded(['tab-overview-content']);
      break;
    case 'tab-traffic':
      swpopup.add_traffic_share_data_to_ui(swpopup.domain, data.rankOverView);
      swpopup._on_data_loaded(['tab-traffic-content']);
      break;
    case 'tab-geo':
      swpopup.add_traffic_data_to_ui(swpopup.domain, data.traffic);
      swpopup._on_data_loaded(['tab-overview-content', 'tab-geo-content']);
      break;
    case 'tab-referrals':
      swpopup.add_destination_data_to_ui(swpopup.domain, data.leadingdestinationsites);
      swpopup.add_referring_data_to_ui(swpopup.domain, data.leadingreferringsites);
      swpopup._on_data_loaded(['tab-referrals-content']);
      break;
    case 'tab-search':
      swpopup.add_paidsearch_data_to_ui(swpopup.domain, data.paidsearch);
      swpopup.add_orgsearch_data_to_ui(swpopup.domain, data.orgsearch);
      swpopup._on_data_loaded(['tab-search-content']);
      break;
    case 'tab-social':
      swpopup.add_social_data_to_ui(swpopup.domain, data.socialreferringsites);
      swpopup._on_data_loaded(['tab-social-content']);
      break;
    case 'tab-similar':
      swpopup.add_similarsites_data_to_ui(swpopup.domain, data.rankOverView);
      swpopup._on_data_loaded(['tab-similar-content']);
      break;
    case 'tab-mobile':
      swpopup.add_mobile_google_data_to_ui(swpopup.domain, data.androidApp);
      swpopup.add_mobile_apple_data_to_ui(swpopup.domain, data.iosApp);
      swpopup._on_data_loaded(['tab-mobile-content']);
      break;
    case 'tab-ads':
      swpopup.add_ads_network_data_to_ui(swpopup.domain, data.adsNetWork);
      swpopup.add_ads_publisher_data_to_ui(swpopup.domain, data.adsPublisher);
      swpopup._on_data_loaded(['tab-ads-content']);
      break;
    case 'tab-alsoVisited':
      swpopup.add_also_visited_data_to_ui(swpopup.domain, data.alsoVisted);
      swpopup._on_data_loaded(['tab-alsoVisited-content']);
      break;
  }
};

activate_tab = function(id) {
  var tabs = $('#tabs > ul > li');
  var items = $('#tabs-content > ul > li');

  for(var i = 0; i < tabs.length; i++) {
    $(tabs[i]).removeClass("tab-active");
    items[i].setAttribute('style', 'display: none');
  }
  $('#'+ id).addClass('tab-active');
  document.getElementById(id + '-content').setAttribute('style', 'display: inline-block');
  document.getElementById(id + '-content').setAttribute('class', 'content-active');
    switch(id) {
        case "tab-overview":
        case "tab-traffic":
        case "tab-geo":
            $(".tabs-footer").addClass("footer--hidden");
            break;
        default :
            $(".tabs-footer").removeClass("footer--hidden");
          break;
    }
};

invalidate_tab = function(id) {
  tabs_invalid[id] = 1;
};

loadDataWithNewAPI = function(forceReload, renderingTabs) {
  chrome.runtime.sendMessage({
    message: "GetDomainData", domain: swpopup.domain, forceReload: forceReload
  }, renderingTabs);
};

var getParameterByName = function(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

window.onload = function() {
  var browserZoom = Number(getParameterByName('zoom'));
  if(!isNaN(browserZoom) && browserZoom !== 1 && browserZoom !== 0) {
    document.body.style.zoom = 1 / browserZoom;
  }

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    swpopup.current_site = tabs[0].url;
    swpopup.domain = swpopup.get_domain_from_url(swpopup.current_site);
    if(!validateUrl(swpopup.current_site)) {
      $("#tab-overview-content").find('.error_page').css('display', 'block').text("Not a Valid URL").find(".reload").hide();
      return;
    }
    swpopup.add_default_data_to_ui();
    renderingTab(false);
  })
};
// parse api data to json to rendering tabs
function parseNewJsonData (jsonData) {
  var tabsData = [];

  // small site
  tabsData.SmallSite = {
    IsSmall: jsonData.IsSmall,
    SmallSiteTitle:jsonData.SmallSiteMessageTitle,
    SmallSiteMessage: jsonData.SmallSiteMessage
  }

  //overview
  tabsData.rankOverView = {
    //FavIcon: xml.find,
    Category: jsonData.Category,
    CategoryRank: jsonData.CategoryRank.Rank,
    Country: jsonData.CountryRank.Country,
    CountryRank: jsonData.CountryRank.Rank,
    GlobalRank: jsonData.GlobalRank.Rank,
    //LastAvgTrafficReach:?
    SimilarSites: jsonData.SimilarSites,
    Title: jsonData.Title,
    //TrafficReach:?
    TrafficShares: jsonData.TrafficSources,
    IsSiteVerified: jsonData.IsSiteVerified
  };

  tabsData.visits = {
    Values: (function() {
      var ts = [];
      for(var k in jsonData.EstimatedMonthlyVisits) {
        ts.push({Date: k, Value: jsonData.EstimatedMonthlyVisits[k]});
      }

      return ts;
    })(),
    LatestPeriod: jsonData.Engagments && jsonData.Engagments.Year && jsonData.Engagments.Month
      ? new Date(jsonData.Engagments.Year, jsonData.Engagments.Month)
      : new Date()
  };
  tabsData.visitduration = {
    Values: [{
      Date: jsonData.Engagments.Year + "-" + jsonData.Engagments.Month + "-1",
      Value: jsonData.Engagments.TimeOnSite
    }]
  };
  tabsData.pageviews = {
    Values: [{
      Date: jsonData.Engagments.Year + "-" + jsonData.Engagments.Month + "-1",
      Value: jsonData.Engagments.PagePerVisit
    }]
  };

  tabsData.bouncerate = {
    Values: [
      {
        Value: jsonData.Engagments.BounceRate,
        Visits: jsonData.Engagments.Visits
      }
    ]
  };
  //GEO
  tabsData.traffic = {
    Category: jsonData.Category,
    CategoryRank: jsonData.CategoryRank.Rank,
    Country: jsonData.CountryRank.Country,
    CountryRank: jsonData.CountryRank.Rank,
    GlobalRank: jsonData.GlobalRank.Rank,
    Date: (new Date()).getMonth() + "/" + (new Date()).getFullYear(),
    TopCountryShares: (function() {
      var ts = [];
      $.each(jsonData.TopCountryShares, function(i, js) {
        ts.push({
          CountryCode: js.Country,
          TrafficShare: js.Value
        });
      });
      return ts;
    })(),
    //TrafficReach: ?
    uniCount: jsonData.TotalCountries,
    TrafficShares: {
      Values: (function() {
        var ts = [];
        for(var k in jsonData.EstimatedMonthlyVisits) {
          ts.push({Date: k, Value: jsonData.EstimatedMonthlyVisits[k]});
        }

        return ts;
      })()
    }
  };
  //referrer data
  tabsData.leadingdestinationsites = {
    Sites: (function() {
      var td = [];
      $.each(jsonData.TopDestinations, function(i, js) {
        td.push(js.Site);
      });
      return td;
    })(),
    destCount: jsonData.TotalDestinations
  };
  tabsData.leadingreferringsites = {
    Sites: (function() {
      var td = [];
      $.each(jsonData.TopReferring, function(i, js) {
        td.push(js.Site);
      });
      return td;
    })(),
    referCount: jsonData.TotalReferring
  };

  //search
  tabsData.orgsearch = {
    Data: (function() {
      var oss = [];
      $.each(jsonData.TopOrganicKeywords, function(i, os) {
        oss.push({
          SearchTerm: os.Keyword,
          Visits: os.Value,
          Change: null
        });
      });
      return oss;
    })(),
    uniCount: jsonData.OrganicKeywordsRollingUniqueCount
  };
  tabsData.paidsearch = {
    Data: (function() {
      var oss = [];
      $.each(jsonData.TopPaidKeywords, function(i, os) {
        oss.push({
          SearchTerm: os.Keyword,
          Visits: os.Value,
          Change: null
        });
      });
      return oss;
    })(),
    uniCount: jsonData.PaidKeywordsRollingUniqueCount
  };
  //social
  tabsData.socialreferringsites = {
    SocialSources: (function() {
      var oss = [];
      $.each(jsonData.TopSocial, function(i, os) {
        oss.push({
          Source: os.Name,
          Value: os.Value,
          Icon: os.Icon,
          Domain: os.site
        });
      });
      return oss;
    })()
  };

  //mobile App
  if(jsonData.MobileApps) {
    tabsData.androidApp = {};
    tabsData.androidApp.RelatedApps = [];
    tabsData.iosApp = {};
    tabsData.iosApp.RelatedApps = [];
    var apps = jsonData.MobileApps;
    for(var m in apps) {
      var appData = {
        AppId: apps[m].AppId,
        Author: apps[m].Author,
        MainCategory: apps[m].Category,
        MainCategoryId: apps[m].Category.toLowerCase(),
        Cover: apps[m].Cover.indexOf("http") !== 0 ? "http:" + apps[m].Cover : apps[m].Cover,
        Price: apps[m].Price,
        Rating: apps[m].Rating,
        RatingCount: apps[m].RatingCount,
        Valid: apps[m].Valid,
        Title: apps[m].Title
      };
      if(apps[m].Key == 0) {
        tabsData.androidApp.RelatedApps.push(appData);
      } else {
        tabsData.iosApp.RelatedApps.push(appData);
      }
    }
  }
  //also visit
  tabsData.alsoVisted = {
    uniCount: jsonData.AlsoVisitedUniqueCount,
    Data: jsonData.TopAlsoVisited,
    ScreenShot: jsonData.LargeScreenshot

  };
  tabsData.adsNetWork = {
    //uniCount: jsonData.IncomingAdsRollingUniqueCount,
    Data: (function() {
      var oss = [];
      $.each(jsonData.TopAdNetworks, function(i, os) {
        oss.push({
          Site: os.Site,
          Display: os.Value
        });
      });
      return oss;
    })()
  };
  tabsData.adsPublisher = {
    uniCount: jsonData.IncomingAdsRollingUniqueCount,
    Data: (function() {
      var oss = [];
      $.each(jsonData.TopPublishers, function(i, os) {
        oss.push({
          Site: os.Site,
          Display: os.Value
        });
      });
      return oss;
    })()
  };

  return tabsData;
}

function checkIfTabDisabled(tabId, data){
  var  isDisbaled=false;
  switch(tabId){

    case "tab-traffic":
    isDisbaled=(!data.rankOverView.TrafficShares || (!data.rankOverView.TrafficShares.Direct && !data.rankOverView.TrafficShares.Search && !data.rankOverView.TrafficShares.Social
      && !data.rankOverView.TrafficShares.Mail && !data.rankOverView.TrafficShares["Paid Referrals"] && !data.rankOverView.TrafficShares.Referrals))
    break;

    case "tab-geo":
     isDisbaled= (!data.traffic.TopCountryShares || !data.traffic.TopCountryShares.length || data.SmallSite.IsSmall )
    break;

    case "tab-referrals":
        isDisbaled = ((!data.leadingdestinationsites.Sites || !data.leadingdestinationsites.Sites.length) && (!data.leadingreferringsites.Sites || !data.leadingreferringsites.Sites.length ))
    break;

    case "tab-search":
      isDisbaled=((!data.orgsearch.Data || !data.orgsearch.Data.length) && (!data.paidsearch.Data || !data.paidsearch.Data.length ) )
      break;
    case "tab-social":
      isDisbaled = !data.socialreferringsites.SocialSources|| !data.socialreferringsites.SocialSources.length
      break;
    case "tab-ads":
      isDisbaled= ((!data.adsNetWork.Data || !data.adsNetWork.Data.length) && (!data.adsPublisher.Data || !data.adsPublisher.Data.length ))
      break;
    case "tab-alsoVisited":
        if ( data['alsoVisted'] ) {
          isDisbaled = ( !data.adsNetWork.Data.length || data.SmallSite.IsSmall || data.alsoVisted.Data.length === undefined || !data.alsoVisted.Data.length);
        } else {
          isDisbaled = true;
        }
      break;
    case "tab-mobile":
        if ( data['androidApp'] ) {
            isDisbaled = ((!data.androidApp.RelatedApps || !data.androidApp.RelatedApps.length) && (!data.iosApp.RelatedApps || !data.iosApp.RelatedApps.length));
        } else {
            isDisbaled = true;
        }
      break;
    case "tab-similar":
        if ( data['rankOverView'] ) {
            isDisbaled= !data.rankOverView.SimilarSites || !data.rankOverView.SimilarSites.length || data.SmallSite.IsSmall;
        } else {
            isDisbaled = true;
        }
      break;
  }

  return isDisbaled;
}

function renderingTab (forceReload, tabId) {
  var tabs = $('#tabs').find("ul li");
  loadDataWithNewAPI(forceReload, function(data) {
    if(!data) {
      $('#tab-overview-content').find('.error_page').css('display', 'block');
      return;
    }
    swpopup.domain = data.SiteName;
    data = parseNewJsonData(data);

    sendGAEvents("Extension",  data.SmallSite.IsSmall? "SmallSite" : "BigSite", swpopup.domain);

    if(tabId) {
      load_tab(tabId, data);
    } else {
      $.each(tabs, function(i, tab) {
       var isDisabled = checkIfTabDisabled(tab.id, data)
        if(isDisabled){
         $(tab).addClass("tab-disabled");
         return; 
        }
        
        tab.onclick = function(e) {
          var tid = $(tab).attr("id");
          if(tid === "tab-ads") {
            localStorage.showAdNew = "0";
          } else if(tid === "tab-alsoVisited") {
            localStorage.showAVNew = "0";
          }
          $(tab).find(".new").hide();
          activate_tab(tid);
          sendGAEvents("Extension", "Select_tab", $(tab).text().trim());
        };
        load_tab($(tab).attr("id"), data);
      });
    }
  });
}


/*
 add by HankYang
 to validate if current url is a valid url
 */
function validateUrl (url) {
  return url.indexOf("http") === 0 && url.indexOf("://localhost") === -1
}

function sendMessageToBackground(msg){
  chrome.runtime.sendMessage(msg);
}

function sendGAEvents(category, action, label) {
  sendMessageToBackground({message: "sendGA", category: category, action: action, label: label});
}

$(".small-site-verify-link").click(function(){
  sendGAEvents("Overview", "click", "Connect_GA");
});
