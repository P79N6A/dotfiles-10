"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var swStorageSync = function () {
  function swStorageSync(globalStore, storage) {
    _classCallCheck(this, swStorageSync);

    this.storage = storage;

    this.sw_retentionData = this.createStorage("sw_retentionData");
  }

  _createClass(swStorageSync, [{
    key: "createStorage",
    value: function createStorage(key) {
      return new swStorageInstance(key, this.storage);
    }
  }]);

  return swStorageSync;
}();

/**
 * Forced singleton which is an facade-like aggregation
 * of all available storage.
 * @type {SWStorage}
 */


swStorageSync = new swStorageSync(chrome.storage, chrome.storage.local);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldGVudGlvbi9zd1N0b3JhZ2VTeW5jLmpzIl0sIm5hbWVzIjpbInN3U3RvcmFnZVN5bmMiLCJnbG9iYWxTdG9yZSIsInN0b3JhZ2UiLCJzd19yZXRlbnRpb25EYXRhIiwiY3JlYXRlU3RvcmFnZSIsImtleSIsInN3U3RvcmFnZUluc3RhbmNlIiwiY2hyb21lIiwibG9jYWwiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxhO0FBRUoseUJBQVlDLFdBQVosRUFBeUJDLE9BQXpCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxTQUFLQyxnQkFBTCxHQUF3QixLQUFLQyxhQUFMLENBQW1CLGtCQUFuQixDQUF4QjtBQUNEOzs7O2tDQUVhQyxHLEVBQUk7QUFDaEIsYUFBTyxJQUFJQyxpQkFBSixDQUFzQkQsR0FBdEIsRUFBMkIsS0FBS0gsT0FBaEMsQ0FBUDtBQUNEOzs7Ozs7QUFHSDs7Ozs7OztBQUtBRixnQkFBZ0IsSUFBSUEsYUFBSixDQUFrQk8sT0FBT0wsT0FBekIsRUFBa0NLLE9BQU9MLE9BQVAsQ0FBZU0sS0FBakQsQ0FBaEIiLCJmaWxlIjoicmV0ZW50aW9uL3N3U3RvcmFnZVN5bmMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBzd1N0b3JhZ2VTeW5jIHtcblxuICBjb25zdHJ1Y3RvcihnbG9iYWxTdG9yZSwgc3RvcmFnZSl7XG4gICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcblxuICAgIHRoaXMuc3dfcmV0ZW50aW9uRGF0YSA9IHRoaXMuY3JlYXRlU3RvcmFnZShcInN3X3JldGVudGlvbkRhdGFcIik7XG4gIH07XG5cbiAgY3JlYXRlU3RvcmFnZShrZXkpe1xuICAgIHJldHVybiBuZXcgc3dTdG9yYWdlSW5zdGFuY2Uoa2V5LCB0aGlzLnN0b3JhZ2UpO1xuICB9XG59XG5cbi8qKlxuICogRm9yY2VkIHNpbmdsZXRvbiB3aGljaCBpcyBhbiBmYWNhZGUtbGlrZSBhZ2dyZWdhdGlvblxuICogb2YgYWxsIGF2YWlsYWJsZSBzdG9yYWdlLlxuICogQHR5cGUge1NXU3RvcmFnZX1cbiAqL1xuc3dTdG9yYWdlU3luYyA9IG5ldyBzd1N0b3JhZ2VTeW5jKGNocm9tZS5zdG9yYWdlLCBjaHJvbWUuc3RvcmFnZS5sb2NhbCk7XG5cbiJdfQ==
