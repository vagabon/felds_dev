'use strict';

define([
  'felds/services/felds.service'
], function (feldsService) {

  var moduleName = 'felds.liste.controller';

  angular.module(moduleName, [feldsService]).controller('FeldsListeController', FeldsListeController);

  FeldsListeController.$inject = ['feldsService', '$ionicSlideBoxDelegate', '$timeout'];

  function FeldsListeController(feldsService, $ionicSlideBoxDelegate, $timeout) {
    var vm = this;

    vm.hideFleche = ionic.Platform.platforms != null && ionic.Platform.platforms[0] == "browser" && (!ionic.Platform.isIPad() && !ionic.Platform.isAndroid() && !ionic.Platform.isIOS());

    feldsService.load().then(function () {
      vm.month = feldsService.month;
      vm.mois = feldsService.mois;

      var date = new Date();
      vm.moisSelect = date.getMonth();
      $timeout(function () {
        $ionicSlideBoxDelegate.$getByHandle('slideMois').update();
        $ionicSlideBoxDelegate.$getByHandle('slideMois').slide(vm.moisSelect);
      }, 0);
      vm.typeSelect = "";
      $timeout(function () {
        $ionicSlideBoxDelegate.$getByHandle('slideType').update();
        $ionicSlideBoxDelegate.$getByHandle('slideType').slide(0);
      }, 0);

      feldsService.afficherFromMonth(vm.moisSelect, vm.typeSelect);
      vm.playlists = feldsService.felds;
    });

    vm.slideMoisChanged = function(slideNum) {
      vm.moisSelect = slideNum;
      feldsService.afficherFromMonth(vm.moisSelect, vm.typeSelect);
      vm.playlists = feldsService.felds;
    };

    vm.slideTypeChanged = function(slideNum) {
      vm.typeSelect = slideNum == 2 ? "fruit" : slideNum == 1 ? "legume" : "";
      feldsService.afficherFromMonth(vm.moisSelect, vm.typeSelect);
      vm.playlists = feldsService.felds;
    };

    vm.changeMois = function (mois) {
      vm.moisSelect = vm.moisSelect + mois;
      if (vm.moisSelect == -1) {
        vm.moisSelect = 11;
      } else if (vm.moisSelect == 12) {
        vm.moisSelect = 0;
      }
      $timeout(function () {
        $ionicSlideBoxDelegate.$getByHandle('slideMois').slide(vm.moisSelect);
      }, 0);
      feldsService.afficherFromMonth(vm.moisSelect, vm.typeSelect);
      vm.playlists = feldsService.felds;
    };

    vm.changeType = function (type) {
      var newType = type;
      if (type == 1) {
        if (vm.typeSelect == "") newType = "legume";
        if (vm.typeSelect == "legume") newType = "fruit";
        if (vm.typeSelect == "fruit") newType = "";
      } else if (type == -1) {
        if (vm.typeSelect == "") newType = "fruit";
        if (vm.typeSelect == "legume") newType = "";
        if (vm.typeSelect == "fruit") newType = "legume";
      }
      vm.typeSelect = newType;
      $ionicSlideBoxDelegate.$getByHandle('slideType').slide(vm.typeSelect == "fruit" ? 2 : vm.typeSelect == "legume" ? 1 : 0);
      feldsService.afficherFromMonth(vm.moisSelect, vm.typeSelect);
      vm.playlists = feldsService.felds;
    };
  }

  return moduleName;
});
