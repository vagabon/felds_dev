'use strict';

define([], function () {
  var moduleName = 'felds.storage';
  angular.module(moduleName, []).factory('localStorage', function ($q) {
    'use strict';
    var STORAGE_ID = 'felds';

    var store = {

      load: function () {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
      },

      save: function (felds) {
        localStorage.setItem(STORAGE_ID, JSON.stringify(felds));
      }
    };
    return store;
  });
  return moduleName;
});
