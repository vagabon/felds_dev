/*global define*/
'use strict';

define([], function () {
  var moduleName = 'felds.controller';

  angular.module(moduleName, []).controller('FeldsController', FeldsController);

  FeldsController.$inject = ['$scope', '$ionicModal', 'localStorage', '$timeout'];

  function FeldsController($scope, $ionicModal, localStorage, $timeout) {

    var vm = this;

    vm.loginData= {};
    vm.modal  = null;

    localStorage.save([]);

    vm.load = function() {
      // Create the login modal that we will use later
      $ionicModal.fromTemplateUrl('modules/felds/templates/login.html', { scope: $scope, controller: '' }).then(function (modal) {
        vm.modal = modal;
      });
    }
    vm.load();

    vm.closeLogin = function () {
      console.log("test")
      vm.modal.hide();
    };

    vm.login = function () {
      vm.modal.show();
    };

    vm.doLogin = function () {
      console.log('Doing login', vm.loginData);
      $timeout(function () {
        vm.closeLogin();
      }, 1000);
    };

  }

  return moduleName;
});
