/*global define*/
'use strict';

define([], function () {
  var moduleName = 'felds.controller';
  angular.module(moduleName, []).controller('AppCtrl', function ($scope, $ionicModal, localStorage) {
    // suppression des données sauvegardés en cache
    localStorage.save([]);

    /** PARTIE LOGIN A SUPPRIMER */
      // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('modules/felds/templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })
  return moduleName;
});
