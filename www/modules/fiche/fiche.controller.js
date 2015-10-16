'use strict';

define([
  'felds/services/felds.service'
], function () {
  angular.module('felds.fiche.controller', [
    'felds.service'
  ]).controller('PlaylistCtrl', function ($scope, $stateParams, feldsService, $ionicSlideBoxDelegate, $timeout) {

    feldsService.load().then(function () {

      feldsService.afficherFromMonth($stateParams.mois, $stateParams.type);
      $scope.playlists = feldsService.felds;
      var index = 0;
      var cpt = 0;
      for (var i = 0, len = $scope.playlists.length; i < len; i++) {
        if ($scope.playlists[i].nom == $stateParams.nom) {
          index = cpt;
          break;
        }
        if (!$scope.playlists[i].hide) {
          cpt++;
        }
      }
      $timeout(function () {
        $ionicSlideBoxDelegate.$getByHandle('slideBox').update();
        $ionicSlideBoxDelegate.$getByHandle('slideBox').slide(index);
      }, 0);
    });

    $scope.urlMarmiton = function (nom) {
      window.open('http://www.marmiton.org/recettes/recherche.aspx?aqt=' + nom, '_system');
    }
  });
});
