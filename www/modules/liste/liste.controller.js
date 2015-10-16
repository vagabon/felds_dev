'use strict';

define([
  'felds/services/felds.service'
], function () {
  angular.module('felds.liste.controller', [
    'felds.service'
  ]).controller('PlaylistsCtrl', function ($scope, feldsService, $ionicSlideBoxDelegate, $timeout) {
    $scope.hideFleche = ionic.Platform.platforms != null && ionic.Platform.platforms[0] == "browser" && (!ionic.Platform.isIPad() && !ionic.Platform.isAndroid() && !ionic.Platform.isIOS());
    feldsService.load().then(function () {
      $scope.month = feldsService.month;
      $scope.mois = feldsService.mois;

      var date = new Date();
      $scope.moisSelect = date.getMonth();
      $timeout(function () {
        $ionicSlideBoxDelegate.$getByHandle('slideMois').update();
        $ionicSlideBoxDelegate.$getByHandle('slideMois').slide($scope.moisSelect);
      }, 0);
      $scope.typeSelect = "";
      $timeout(function () {
        $ionicSlideBoxDelegate.$getByHandle('slideType').update();
        $ionicSlideBoxDelegate.$getByHandle('slideType').slide(0);
      }, 0);

      feldsService.afficherFromMonth($scope.moisSelect, $scope.typeSelect);
      $scope.playlists = feldsService.felds;
    });

    $scope.slideMoisChanged = function (slideNum) {
      $scope.moisSelect = slideNum;
      feldsService.afficherFromMonth($scope.moisSelect, $scope.typeSelect);
      $scope.playlists = feldsService.felds;
    }
    $scope.slideTypeChanged = function (slideNum) {
      $scope.typeSelect = slideNum == 2 ? "fruit" : slideNum == 1 ? "legume" : "";
      feldsService.afficherFromMonth($scope.moisSelect, $scope.typeSelect);
      $scope.playlists = feldsService.felds;
    }

    $scope.changeMois = function (mois) {
      $scope.moisSelect = $scope.moisSelect + mois;
      if ($scope.moisSelect == -1) {
        $scope.moisSelect = 11;
      } else if ($scope.moisSelect == 12) {
        $scope.moisSelect = 0;
      }
      $timeout(function () {
        $ionicSlideBoxDelegate.$getByHandle('slideMois').slide($scope.moisSelect);
      }, 0);
      feldsService.afficherFromMonth($scope.moisSelect, $scope.typeSelect);
      $scope.playlists = feldsService.felds;
    };

    $scope.changeType = function (type) {
      var newType = type;
      if (type == 1) {
        if ($scope.typeSelect == "") newType = "legume";
        if ($scope.typeSelect == "legume") newType = "fruit";
        if ($scope.typeSelect == "fruit") newType = "";
      } else if (type == -1) {
        if ($scope.typeSelect == "") newType = "fruit";
        if ($scope.typeSelect == "legume") newType = "";
        if ($scope.typeSelect == "fruit") newType = "legume";
      }
      $scope.typeSelect = newType;
      $ionicSlideBoxDelegate.$getByHandle('slideType').slide($scope.typeSelect == "fruit" ? 2 : $scope.typeSelect == "legume" ? 1 : 0);
      feldsService.afficherFromMonth($scope.moisSelect, $scope.typeSelect);
      $scope.playlists = feldsService.felds;
    };
  })
});
