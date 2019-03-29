"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by sekot on 2016-10-27.
 */

/**
 * Entity that knows how to perform read write opperations to storage
 * @param String key name of storage
 * @param StorageArea storage
 * @param Event onChanged
 * @constructor
 */
var swStorageInstance = function () {
  function swStorageInstance(key, storage) {
    _classCallCheck(this, swStorageInstance);

    this.key = key;
    this.storage = storage;
  }

  /**
   * Gets the value stored.
   * @returns {Promise}
   */


  _createClass(swStorageInstance, [{
    key: "get",
    value: function get() {
      var self = this;
      return new Promise(function (resolve) {
        self.storage.get(self.key, function (value) {
          value = value[self.key];
          self.lastAnswer = value;
          resolve(value);
        });
      });
    }

    /**
     * Sets the new value
     * @param Onject value new value
     * @returns {Promise}
     */

  }, {
    key: "set",
    value: function set(value) {
      var self = this;
      return new Promise(function (resolve) {
        var obj = {};
        obj[self.key] = value;
        self.storage.set(obj, resolve);
      });
    }

    /**
     * Gets current value, compares it with new and if different updates it
     * @param Onject value new value
     * @returns {Promise}
     */

  }, {
    key: "setIfNew",
    value: function setIfNew(value) {
      var self = this;
      return new Promise(function (resolve) {
        self.get().then(function (v) {
          if (v == value) {
            resolve();
          } else {
            self.set(value).then(resolve);
          }
        });
      });
    }

    /**
     * Gets the value, updates it as updateFunction requires it
     * and sets the updated value
     * @param Function updateFunction function(value){return updatedValue;}
     * @returns {Promise}
     */

  }, {
    key: "update",
    value: function update(updateFunction) {
      if (typeof updateFunction !== "function") {
        throw new Error("Illegal invocation. Function expected.");
      }
      var self = this;
      return new Promise(function (resolve) {
        self.get().then(function (value) {
          var updatedValue = updateFunction(value);
          self.setIfNew(updatedValue).then(resolve);
        });
      });
    }
  }]);

  return swStorageInstance;
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldGVudGlvbi9zd1N0b3JhZ2VJbnN0YW5jZS5qcyJdLCJuYW1lcyI6WyJzd1N0b3JhZ2VJbnN0YW5jZSIsImtleSIsInN0b3JhZ2UiLCJzZWxmIiwiUHJvbWlzZSIsImdldCIsInZhbHVlIiwibGFzdEFuc3dlciIsInJlc29sdmUiLCJvYmoiLCJzZXQiLCJ0aGVuIiwidiIsInVwZGF0ZUZ1bmN0aW9uIiwiRXJyb3IiLCJ1cGRhdGVkVmFsdWUiLCJzZXRJZk5ldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFJQTs7Ozs7OztJQU9NQSxpQjtBQUNKLDZCQUFZQyxHQUFaLEVBQWlCQyxPQUFqQixFQUF5QjtBQUFBOztBQUN2QixTQUFLRCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7QUFFRDs7Ozs7Ozs7MEJBSUs7QUFDSCxVQUFNQyxPQUFPLElBQWI7QUFDQSxhQUFPLElBQUlDLE9BQUosQ0FBWSxtQkFBVTtBQUMzQkQsYUFBS0QsT0FBTCxDQUFhRyxHQUFiLENBQWlCRixLQUFLRixHQUF0QixFQUEyQixpQkFBUTtBQUNqQ0ssa0JBQVFBLE1BQU1ILEtBQUtGLEdBQVgsQ0FBUjtBQUNBRSxlQUFLSSxVQUFMLEdBQWtCRCxLQUFsQjtBQUNBRSxrQkFBUUYsS0FBUjtBQUNELFNBSkQ7QUFLRCxPQU5NLENBQVA7QUFPRDs7QUFFRDs7Ozs7Ozs7d0JBS0lBLEssRUFBTTtBQUNSLFVBQU1ILE9BQU8sSUFBYjtBQUNBLGFBQU8sSUFBSUMsT0FBSixDQUFZLG1CQUFVO0FBQzNCLFlBQU1LLE1BQU0sRUFBWjtBQUNBQSxZQUFJTixLQUFLRixHQUFULElBQWdCSyxLQUFoQjtBQUNBSCxhQUFLRCxPQUFMLENBQWFRLEdBQWIsQ0FBaUJELEdBQWpCLEVBQXNCRCxPQUF0QjtBQUNELE9BSk0sQ0FBUDtBQUtEOztBQUVEOzs7Ozs7Ozs2QkFLU0YsSyxFQUFNO0FBQ2IsVUFBTUgsT0FBTyxJQUFiO0FBQ0EsYUFBTyxJQUFJQyxPQUFKLENBQVksbUJBQVU7QUFDM0JELGFBQUtFLEdBQUwsR0FBV00sSUFBWCxDQUFnQixhQUFJO0FBQ2xCLGNBQUlDLEtBQUtOLEtBQVQsRUFBZ0I7QUFDZEU7QUFDRCxXQUZELE1BRU87QUFDTEwsaUJBQUtPLEdBQUwsQ0FBU0osS0FBVCxFQUFnQkssSUFBaEIsQ0FBcUJILE9BQXJCO0FBQ0Q7QUFDRixTQU5EO0FBT0QsT0FSTSxDQUFQO0FBU0Q7O0FBRUQ7Ozs7Ozs7OzsyQkFNT0ssYyxFQUFlO0FBQ3BCLFVBQUksT0FBT0EsY0FBUCxLQUEwQixVQUE5QixFQUEwQztBQUN4QyxjQUFNLElBQUlDLEtBQUosQ0FBVSx3Q0FBVixDQUFOO0FBQ0Q7QUFDRCxVQUFNWCxPQUFPLElBQWI7QUFDQSxhQUFPLElBQUlDLE9BQUosQ0FBWSxtQkFBVTtBQUMzQkQsYUFBS0UsR0FBTCxHQUFXTSxJQUFYLENBQWdCLGlCQUFRO0FBQ3RCLGNBQU1JLGVBQWVGLGVBQWVQLEtBQWYsQ0FBckI7QUFDQUgsZUFBS2EsUUFBTCxDQUFjRCxZQUFkLEVBQTRCSixJQUE1QixDQUFpQ0gsT0FBakM7QUFDRCxTQUhEO0FBSUQsT0FMTSxDQUFQO0FBTUQiLCJmaWxlIjoicmV0ZW50aW9uL3N3U3RvcmFnZUluc3RhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHNla290IG9uIDIwMTYtMTAtMjcuXG4gKi9cblxuLyoqXG4gKiBFbnRpdHkgdGhhdCBrbm93cyBob3cgdG8gcGVyZm9ybSByZWFkIHdyaXRlIG9wcGVyYXRpb25zIHRvIHN0b3JhZ2VcbiAqIEBwYXJhbSBTdHJpbmcga2V5IG5hbWUgb2Ygc3RvcmFnZVxuICogQHBhcmFtIFN0b3JhZ2VBcmVhIHN0b3JhZ2VcbiAqIEBwYXJhbSBFdmVudCBvbkNoYW5nZWRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jbGFzcyBzd1N0b3JhZ2VJbnN0YW5jZSB7XG4gIGNvbnN0cnVjdG9yKGtleSwgc3RvcmFnZSl7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB2YWx1ZSBzdG9yZWQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0KCl7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT57XG4gICAgICBzZWxmLnN0b3JhZ2UuZ2V0KHNlbGYua2V5LCB2YWx1ZSA9PntcbiAgICAgICAgdmFsdWUgPSB2YWx1ZVtzZWxmLmtleV07XG4gICAgICAgIHNlbGYubGFzdEFuc3dlciA9IHZhbHVlO1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG5ldyB2YWx1ZVxuICAgKiBAcGFyYW0gT25qZWN0IHZhbHVlIG5ldyB2YWx1ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldCh2YWx1ZSl7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT57XG4gICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgIG9ialtzZWxmLmtleV0gPSB2YWx1ZTtcbiAgICAgIHNlbGYuc3RvcmFnZS5zZXQob2JqLCByZXNvbHZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGN1cnJlbnQgdmFsdWUsIGNvbXBhcmVzIGl0IHdpdGggbmV3IGFuZCBpZiBkaWZmZXJlbnQgdXBkYXRlcyBpdFxuICAgKiBAcGFyYW0gT25qZWN0IHZhbHVlIG5ldyB2YWx1ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldElmTmV3KHZhbHVlKXtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PntcbiAgICAgIHNlbGYuZ2V0KCkudGhlbih2ID0+e1xuICAgICAgICBpZiAodiA9PSB2YWx1ZSkge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLnNldCh2YWx1ZSkudGhlbihyZXNvbHZlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgdmFsdWUsIHVwZGF0ZXMgaXQgYXMgdXBkYXRlRnVuY3Rpb24gcmVxdWlyZXMgaXRcbiAgICogYW5kIHNldHMgdGhlIHVwZGF0ZWQgdmFsdWVcbiAgICogQHBhcmFtIEZ1bmN0aW9uIHVwZGF0ZUZ1bmN0aW9uIGZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gdXBkYXRlZFZhbHVlO31cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICB1cGRhdGUodXBkYXRlRnVuY3Rpb24pe1xuICAgIGlmICh0eXBlb2YgdXBkYXRlRnVuY3Rpb24gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSWxsZWdhbCBpbnZvY2F0aW9uLiBGdW5jdGlvbiBleHBlY3RlZC5cIik7XG4gICAgfVxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+e1xuICAgICAgc2VsZi5nZXQoKS50aGVuKHZhbHVlID0+e1xuICAgICAgICBjb25zdCB1cGRhdGVkVmFsdWUgPSB1cGRhdGVGdW5jdGlvbih2YWx1ZSk7XG4gICAgICAgIHNlbGYuc2V0SWZOZXcodXBkYXRlZFZhbHVlKS50aGVuKHJlc29sdmUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
