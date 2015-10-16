'use strict';
define(['felds/felds.controller'], function (feldsController) {
  var moduleName = 'felds.route';
  angular.module(moduleName, [feldsController]).config(function ($stateProvider) {
    $stateProvider.state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'modules/felds/templates/felds.html',
      controller: 'AppCtrl'
    })
  });
  return moduleName;
});
