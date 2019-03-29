"use strict";
(function() {

  ///////////////////////////////
  // INTERNAL Classes
  //////////////////////////////

  /**
   * Targets
   */
  var LITE_LOCATIONS = {
    footer: "footer",
    overview: "overview",
    referrals: "referrals",
    search: "search",
    social: "social",
    ads: "display",
    websiteContent: "websiteContent",
    alsoVisited: "alsoVisited",
    similar: "similarsites",
    mobile: "websiteMobileApps",
    apps: "apps",
    traffic: "overview",
    geo: "geo"
  };

  var PRO_LOCATIONS = {
    footer: "footer",
    overview: "audience-overview",
    traffic: "traffic-overview",
    geo: "audience-geography",
    referrals: "traffic-referrals",
    search: "traffic-search",
    social: "traffic-social",
    similar: "competitors-similarsites",
    mobile: "audience-overview",
    alsoVisited: "audience-interests",
    ads: "display",
    newAds: "display",
    outgoing: "traffic-outgoing",
    ranking: "ranking"
  };

  /**
   * Base URL Class
   */
  class SwUrl {

    getDefaultPrams() {
      return {}
    };

    expand(params) {
      var template = this.getTemplate();
      var urlParams = Object.assign({}, this.getDefaultPrams(), params);

      return template.replace(/\{(\w*)\}/g, function(match, key) {
        var val = urlParams[key];
        if (!(key in urlParams)) console.error(`missing param '${key}' for template '${template}'`);
        return val;
      });
    }

    getQuery(params) {
      var trackingParams = {
        utm_source: 'addon',
        utm_medium: 'chrome',
        utm_content: params.location,
        from_ext: 1
      };
      return $.param(trackingParams);
    }
  }

  /**
   * Class for Lite Urls
   */
  class LiteUrl extends SwUrl {

    build(params) {
      let hash = this.getHash(params);
      return hash ?
        `${this.getBase() + this.expand(params)}?${this.getQuery(params)}#${hash}` :
        `${this.getBase() + this.expand(params)}?${this.getQuery(params)}`;
    }

    getBase() {
      return "https://www.similarweb.com";
    }

    getHash(params) {
        return '';
    }

  }

  class LiteSiteUrl extends LiteUrl {

    getTemplate() {
      return '/website/{domain}';
    }

  }

  class LiteAppUrl extends LiteUrl {

    getTemplate() {
      return '/app/{store}/{appid}/statistics';
    }
  }

  class LiteCategoryUrl extends LiteUrl {

    getTemplate() {
      return '/top-websites/category/{category}';
    }
  }

  class LiteCountryUrl extends LiteUrl {

    getTemplate() {
      return '/top-websites/{country}';
    }
  }

  class LiteCategoryCountryUrl extends LiteUrl {

    getTemplate() {
      return '/top-websites/{country}/category/{category}';
    }
  }

  /**
   * Class for Pro Urls
   */
  class ProUrl extends SwUrl {

    build(params) {
      return `${this.getBase()}?${this.getQuery(params)}#${this.expand(params)}`;
    }

    getBase() {
      return "https://pro.similarweb.com/";
    }

    getHash(params) {
      return '';
    }
  }

  class ProSiteUrl extends ProUrl {

    getTemplate() {
      return '/website/{location}/{domain}/{isWWW}/{country}/{duration}';
    }

    getDefaultPrams() {
      return {
        country: 999,
        duration: '3m',
        isWWW: '*'
      }
    };
  }

  class ProSiteUrlOverview extends ProUrl {

    getTemplate() {
        return '/website/audience-overview/{domain}/{isWWW}/{country}/{duration}';
    }

    getDefaultPrams() {
        return {
            country: 999,
            duration: '3m',
            isWWW: '*'
        }
    };
  }

  class ProAppUrl extends ProUrl {

    getTemplate() {
      return '/apps/{location}/{store}_{appid}/{country}/{duration}';
    }

    getDefaultPrams() {
      return {
        country: 840,
        duration: '730d'
      }
    };
  }

  // exports for testing
  window.__ws_url_export__ = {
    LiteSiteUrl: LiteSiteUrl,
    LiteAppUrl: LiteAppUrl,
    ProSiteUrl: ProSiteUrl,
    ProAppUrl: ProAppUrl
  };

  /////////////////////////
  // EXTERNAL Functionality
  /////////////////////////

  /**
   * URLs for Public Use.
   * Add methods as needed.
   */
  window.SW_URLS = {
    LITE: {

      websiteAnalysisFooter: function(domain) {
          return new LiteSiteUrl().build({
              domain: domain,
              location: LITE_LOCATIONS.footer
          });
      },

      websiteAnalysisOverview: function(domain) {
        return new LiteSiteUrl().build({
          domain: domain,
          location: LITE_LOCATIONS.overview
        });
      },

      websiteAnalysisSimilar: function(domain) {
          return new LiteSiteUrl().build({
              domain: domain,
              location: LITE_LOCATIONS.similar
          });
      },

      websiteAnalysisAds: function(domain) {
          return new LiteSiteUrl().build({
              domain: domain,
              location: LITE_LOCATIONS.ads
          });
      },

      websiteAnalysisReferrals: function(domain) {
          return new LiteSiteUrl().build({
              domain: domain,
              location: LITE_LOCATIONS.referrals
          });
      },

      websiteAnalysisAll: function(location, domain) {
        var lite_location = LITE_LOCATIONS[location];
        if (!lite_location) console.error(`SW_URLS.LITE.websiteAnalysisAll(): missing location URL for ${location}`);
        return new LiteSiteUrl().build({
          domain: domain,
          location: lite_location
        });
      },

      androidApp: function(appId) {
        return new LiteAppUrl().build({
          appid: appId,
          store: 'google-play',
          location: LITE_LOCATIONS.apps
        })
      },

      iosApp: function(appId) {
        return new LiteAppUrl().build({
          appid: appId,
          store: 'app-store',
          location: LITE_LOCATIONS.apps
        })
      },

      topWebsites: function(category, country) {
        if (category && country) {
          return new LiteCategoryCountryUrl().build({
            category: category,
            country: country
          })
        }
        if (category) {
          return new LiteCategoryUrl().build({
            category: category
          })
        }
        if (country) {
          return new LiteCountryUrl().build({
            country: country
          })
        }
      }
    },

    PRO: {

      websiteAnalysisFooter: function(domain) {
          return new ProSiteUrl().build({
              domain: domain,
              location: PRO_LOCATIONS.overview
          });
      },

      websiteAnalysisOverview: function(domain) {
        return new ProSiteUrl().build({
          domain: domain,
          location: PRO_LOCATIONS.overview
        });
      },

      websiteAnalysisSimilar: function(domain) {
          // return new ProSiteUrl().build({
          return new ProSiteUrlOverview().build({
              domain: domain,
              location: PRO_LOCATIONS.similar
          });
      },


      websiteAnalysisReferrals: function(domain) {
          return new ProSiteUrlOverview().build({
              domain: domain,
              location: PRO_LOCATIONS.referrals
          });
      },

      websiteAnalysisAds: function(domain) {
          // return new ProSiteUrl().build({
          return new ProSiteUrlOverview().build({
              domain: domain,
              location: PRO_LOCATIONS.newAds
          });
      },

      websiteAnalysisOutgoing: function(domain) {
        return new ProSiteUrl().build({
          domain: domain,
          location: PRO_LOCATIONS.outgoing
        });
      },

      websiteAnalysisAll: function(location, domain) {
        var pro_location = PRO_LOCATIONS[location];
        if (!pro_location) console.error(`SW_URLS.PRO.websiteAnalysisAll(): missing location URL for ${location}`);
        return new ProSiteUrl().build({
          domain: domain,
          location: pro_location
        });
      },

      websiteAnalysisAllOverview: function(location, domain) {
          var pro_location = PRO_LOCATIONS[location];
          if (!pro_location) console.error(`SW_URLS.PRO.websiteAnalysisAll(): missing location URL for ${location}`);
          return new ProSiteUrlOverview().build({
              domain: domain,
              location: pro_location
          });
      },

      androidAppRanking: function(appId) {
        return new ProAppUrl().build({
          appid: appId,
          store: 0,
          location: PRO_LOCATIONS.ranking
        })
      },

      iosAppRanking: function(appId) {
        return new ProAppUrl().build({
          appid: appId,
          store: 1,
          location: PRO_LOCATIONS.ranking
        })
      }
    }
  };

})();
