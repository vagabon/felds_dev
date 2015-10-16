'use strict';

define([
  'liste/liste.controller'
], function () {
  var moduleName = 'felds.liste.route';
  angular.module(moduleName, [
    'felds.liste.controller'
  ]).config(function ($stateProvider) {
    $stateProvider.state('app.liste', {
      url: '/liste',
      views: {
        'menuContent': {
          templateUrl: 'modules/liste/templates/liste.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
  });
  return moduleName;
});
