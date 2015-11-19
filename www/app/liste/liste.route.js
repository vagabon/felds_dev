'use strict';

define([
  'liste/liste.controller',
  'liste/liste.month.controller'
], function (listeController, listeMonthController) {

  var moduleName = 'felds.liste.route';

  angular.module(moduleName, [listeController, listeMonthController]).config(RouteConfig);

  RouteConfig.$inject = ['$stateProvider'];

  function RouteConfig($stateProvider) {

    $stateProvider.state('app.liste', {
      url: '/liste',
      abstract: true,
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'app/liste/template-liste.html',
          controller: 'FeldsListeController as vm'
        }
      }
    });

    $stateProvider.state('app.liste.0', { url: '/0', cache: false, views: { 'listeMonth0': { templateUrl: 'app/liste/template-month.html', controller: 'FeldsListeMonthController as vm' } } });
    $stateProvider.state('app.liste.1', { url: '/1', cache: false, views: { 'listeMonth1': { templateUrl: 'app/liste/template-month.html', controller: 'FeldsListeMonthController as vm' } } });
    $stateProvider.state('app.liste.2', { url: '/2', cache: false, views: { 'listeMonth2': { templateUrl: 'app/liste/template-month.html', controller: 'FeldsListeMonthController as vm' } } });
    $stateProvider.state('app.liste.3', { url: '/3', cache: false, views: { 'listeMonth3': { templateUrl: 'app/liste/template-month.html', controller: 'FeldsListeMonthController as vm' } } });
    $stateProvider.state('app.liste.4', { url: '/4', cache: false, views: { 'listeMonth4': { templateUrl: 'app/liste/template-month.html', controller: 'FeldsListeMonthController as vm' } } });
    $stateProvider.state('app.liste.5', { url: '/5', cache: false, views: { 'listeMonth5': { templateUrl: 'app/liste/template-month.html', controller: 'FeldsListeMonthController as vm' } } });
    $stateProvider.state('app.liste.6', { url: '/6', cache: false, views: { 'listeMonth6': { templateUrl: 'app/liste/template-month.html', controller: 'FeldsListeMonthController as vm' } } });
    $stateProvider.state('app.liste.7', { url: '/7', cache: false, views: { 'listeMonth7': { templateUrl: 'app/liste/template-month.html', controller: 'FeldsListeMonthController as vm' } } });
    $stateProvider.state('app.liste.8', { url: '/8', cache: false, views: { 'listeMonth8': { templateUrl: 'app/liste/template-month.html', controller: 'FeldsListeMonthController as vm' } } });
    $stateProvider.state('app.liste.9', { url: '/9', cache: false, views: { 'listeMonth9': { templateUrl: 'app/liste/template-month.html', controller: 'FeldsListeMonthController as vm' } } });
    $stateProvider.state('app.liste.10', { url: '/10', cache: false, views: { 'listeMonth10': { templateUrl: 'app/liste/template-month.html', controller: 'FeldsListeMonthController as vm' } } });
    $stateProvider.state('app.liste.11', { url: '/11', cache: false, views: { 'listeMonth11': { templateUrl: 'app/liste/template-month.html', controller: 'FeldsListeMonthController as vm' } } });

  };

  return moduleName;
});
