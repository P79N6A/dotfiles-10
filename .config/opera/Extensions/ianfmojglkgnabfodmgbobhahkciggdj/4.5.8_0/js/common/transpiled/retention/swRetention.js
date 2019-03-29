'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var swRetention = function () {
  function swRetention(conf) {
    var _this = this;

    _classCallCheck(this, swRetention);

    this.Storage = conf.Storage;
    this.TrackGAEvents = conf.TrackGAEvents;
    this.lastRetentionDay = 28;
    this.minHoursFromInstall = 8;

    this.Storage.requestGet().then(function (data) {
      _this.data = _this.initialize(data);

      _this.report();
    });
  }

  _createClass(swRetention, [{
    key: 'initialize',
    value: function initialize(data) {
      if (data && data.installDate && data.sentDays) {
        return data;
      } else {
        data = data || {};
        data.installDate = data.installDate ? data.installDate : Date.now();
        data.sentDays = data.sentDays || {};

        this.Storage.requestSet(data);

        return data;
      }
    }
  }, {
    key: 'report',
    value: function report() {
      if (!this.data.completed) {
        var now = new Date();
        var installDate = new Date(this.data.installDate);
        var installStart = this.getDateStart(installDate);
        var todayStart = this.getDateStart(now);
        var msStartDiff = Math.abs(todayStart - installStart);
        var hoursFromTrueInstall = Math.floor((now - installDate) / (1000 * 60 * 60));
        var daysDiff = Math.floor(msStartDiff / (1000 * 60 * 60 * 24));

        if (daysDiff > 0 && daysDiff <= this.lastRetentionDay) {
          if (!this.data.sentDays[daysDiff] && hoursFromTrueInstall > this.minHoursFromInstall) {
            this.TrackGAEvents(daysDiff);
            this.data.sentDays[daysDiff] = true;
            this.Storage.requestSet(this.data);
          }

          setTimeout(this.report.bind(this), 1000 * 60 * 60);
        } else if (daysDiff > this.lastRetentionDay) {
          this.data.completed = true;
          this.Storage.requestSet(this.data);
        }
      }
    }
  }, {
    key: 'getDateStart',
    value: function getDateStart(date) {
      return new Date(date.getFullYear(), date.getMonth(), date.getHours() >= 0 && date.getHours() < 5 ? date.getDate() - 1 : date.getDate(), 5, 0, 1); //day starts at 5PM
    }
  }]);

  return swRetention;
}();

new swRetention({
  Storage: {
    requestGet: function requestGet() {
      return swStorageSync.sw_retentionData.get();
    },
    requestSet: function requestSet(data) {
      swStorageSync.sw_retentionData.set(data);
    }
  },
  TrackGAEvents: function TrackGAEvents(xDay) {
    GoogleAnalytics.trackEvent('General', 'Retained {0} day'.replace('{0}', xDay), chrome.runtime.getManifest().version);
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldGVudGlvbi9zd1JldGVudGlvbi5qcyJdLCJuYW1lcyI6WyJzd1JldGVudGlvbiIsImNvbmYiLCJTdG9yYWdlIiwiVHJhY2tHQUV2ZW50cyIsImxhc3RSZXRlbnRpb25EYXkiLCJtaW5Ib3Vyc0Zyb21JbnN0YWxsIiwicmVxdWVzdEdldCIsInRoZW4iLCJkYXRhIiwiaW5pdGlhbGl6ZSIsInJlcG9ydCIsImluc3RhbGxEYXRlIiwic2VudERheXMiLCJEYXRlIiwibm93IiwicmVxdWVzdFNldCIsImNvbXBsZXRlZCIsImluc3RhbGxTdGFydCIsImdldERhdGVTdGFydCIsInRvZGF5U3RhcnQiLCJtc1N0YXJ0RGlmZiIsIk1hdGgiLCJhYnMiLCJob3Vyc0Zyb21UcnVlSW5zdGFsbCIsImZsb29yIiwiZGF5c0RpZmYiLCJzZXRUaW1lb3V0IiwiYmluZCIsImRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0SG91cnMiLCJnZXREYXRlIiwic3dTdG9yYWdlU3luYyIsInN3X3JldGVudGlvbkRhdGEiLCJnZXQiLCJzZXQiLCJ4RGF5IiwiR29vZ2xlQW5hbHl0aWNzIiwidHJhY2tFdmVudCIsInJlcGxhY2UiLCJjaHJvbWUiLCJydW50aW1lIiwiZ2V0TWFuaWZlc3QiLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsVztBQUNKLHVCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCLFNBQUtDLE9BQUwsR0FBZUQsS0FBS0MsT0FBcEI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCRixLQUFLRSxhQUExQjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0EsU0FBS0MsbUJBQUwsR0FBMkIsQ0FBM0I7O0FBRUEsU0FBS0gsT0FBTCxDQUFhSSxVQUFiLEdBQTBCQyxJQUExQixDQUErQixnQkFBUTtBQUNyQyxZQUFLQyxJQUFMLEdBQVksTUFBS0MsVUFBTCxDQUFnQkQsSUFBaEIsQ0FBWjs7QUFFQSxZQUFLRSxNQUFMO0FBQ0Qs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Q0FBMkIsU0FBM0IsRUFBc0MsbUJBQW1CQyxPQUFuQixDQUEyQixLQUEzQixFQUFrQ0gsSUFBbEMsQ0FBdEMsRUFBK0VJLE9BQU9DLE9BQVAsQ0FBZUMsV0FBZixHQUE2QkMsT0FBNUc7QUFDRDtBQVhhLENBQWhCIiwiZmlsZSI6InJldGVudGlvbi9zd1JldGVudGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIHN3UmV0ZW50aW9uIHtcbiAgY29uc3RydWN0b3IoY29uZikge1xuICAgIHRoaXMuU3RvcmFnZSA9IGNvbmYuU3RvcmFnZTtcbiAgICB0aGlzLlRyYWNrR0FFdmVudHMgPSBjb25mLlRyYWNrR0FFdmVudHM7XG4gICAgdGhpcy5sYXN0UmV0ZW50aW9uRGF5ID0gMjg7XG4gICAgdGhpcy5taW5Ib3Vyc0Zyb21JbnN0YWxsID0gODtcblxuICAgIHRoaXMuU3RvcmFnZS5yZXF1ZXN0R2V0KCkudGhlbihkYXRhID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMuaW5pdGlhbGl6ZShkYXRhKTtcblxuICAgICAgdGhpcy5yZXBvcnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpemUoZGF0YSkge1xuICAgIGlmIChkYXRhICYmIGRhdGEuaW5zdGFsbERhdGUgJiYgZGF0YS5zZW50RGF5cykge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSBkYXRhIHx8IHt9O1xuICAgICAgZGF0YS5pbnN0YWxsRGF0ZSA9IGRhdGEuaW5zdGFsbERhdGUgPyBkYXRhLmluc3RhbGxEYXRlIDogRGF0ZS5ub3coKTtcbiAgICAgIGRhdGEuc2VudERheXMgPSBkYXRhLnNlbnREYXlzIHx8IHt9O1xuXG4gICAgICB0aGlzLlN0b3JhZ2UucmVxdWVzdFNldChkYXRhKTtcblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgcmVwb3J0KCkge1xuICAgIGlmICghdGhpcy5kYXRhLmNvbXBsZXRlZCkge1xuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgaW5zdGFsbERhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGEuaW5zdGFsbERhdGUpO1xuICAgICAgbGV0IGluc3RhbGxTdGFydCA9IHRoaXMuZ2V0RGF0ZVN0YXJ0KGluc3RhbGxEYXRlKTtcbiAgICAgIGxldCB0b2RheVN0YXJ0ID0gdGhpcy5nZXREYXRlU3RhcnQobm93KTtcbiAgICAgIGxldCBtc1N0YXJ0RGlmZiA9IE1hdGguYWJzKHRvZGF5U3RhcnQgLSBpbnN0YWxsU3RhcnQpO1xuICAgICAgbGV0IGhvdXJzRnJvbVRydWVJbnN0YWxsID0gTWF0aC5mbG9vcigobm93IC0gaW5zdGFsbERhdGUpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICBsZXQgZGF5c0RpZmYgPSBNYXRoLmZsb29yKG1zU3RhcnREaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcblxuICAgICAgaWYgKGRheXNEaWZmID4gMCAmJiBkYXlzRGlmZiA8PSB0aGlzLmxhc3RSZXRlbnRpb25EYXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEuc2VudERheXNbZGF5c0RpZmZdICYmIGhvdXJzRnJvbVRydWVJbnN0YWxsID4gdGhpcy5taW5Ib3Vyc0Zyb21JbnN0YWxsKSB7XG4gICAgICAgICAgdGhpcy5UcmFja0dBRXZlbnRzKGRheXNEaWZmKTtcbiAgICAgICAgICB0aGlzLmRhdGEuc2VudERheXNbZGF5c0RpZmZdID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLlN0b3JhZ2UucmVxdWVzdFNldCh0aGlzLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnJlcG9ydC5iaW5kKHRoaXMpLCAxMDAwICogNjAgKiA2MCk7XG4gICAgICB9IGVsc2UgaWYgKGRheXNEaWZmID4gdGhpcy5sYXN0UmV0ZW50aW9uRGF5KSB7XG4gICAgICAgIHRoaXMuZGF0YS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLlN0b3JhZ2UucmVxdWVzdFNldCh0aGlzLmRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldERhdGVTdGFydChkYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKFxuICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgZGF0ZS5nZXRNb250aCgpLFxuICAgICAgKGRhdGUuZ2V0SG91cnMoKSA+PSAwICYmIGRhdGUuZ2V0SG91cnMoKSA8IDUpID8gZGF0ZS5nZXREYXRlKCkgLSAxIDogZGF0ZS5nZXREYXRlKCksXG4gICAgICA1LCAwLCAxXG4gICAgKTsgLy9kYXkgc3RhcnRzIGF0IDVQTVxuICB9XG59XG5cbm5ldyBzd1JldGVudGlvbih7XG4gIFN0b3JhZ2U6e1xuICAgIHJlcXVlc3RHZXQ6ZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHN3U3RvcmFnZVN5bmMuc3dfcmV0ZW50aW9uRGF0YS5nZXQoKTtcbiAgICB9LFxuICAgIHJlcXVlc3RTZXQ6ZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHN3U3RvcmFnZVN5bmMuc3dfcmV0ZW50aW9uRGF0YS5zZXQoZGF0YSk7XG4gICAgfVxuICB9LFxuICBUcmFja0dBRXZlbnRzOmZ1bmN0aW9uICh4RGF5KSB7XG4gICAgR29vZ2xlQW5hbHl0aWNzLnRyYWNrRXZlbnQoJ0dlbmVyYWwnLCAnUmV0YWluZWQgezB9IGRheScucmVwbGFjZSgnezB9JywgeERheSksIGNocm9tZS5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbik7XG4gIH1cbn0pOyJdfQ==
