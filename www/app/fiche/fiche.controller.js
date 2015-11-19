'use strict';

define([
  'felds/services/felds.service'
], function (feldsService) {
  var moduleName = 'felds.fiche.controller';

  angular.module(moduleName, [feldsService]).controller('FeldsFicheController',
    function FeldsListeController(feldsService, $stateParams, $ionicSlideBoxDelegate, $ionicNavBarDelegate, $timeout, $location) {
      var vm = this;

      $ionicNavBarDelegate.showBackButton(false);

      feldsService.loadService().then(function () {
        vm.playlists = feldsService.all[$stateParams.mois];
        var index = 0;
        var cpt = 0;
        for (var i = 0, len = vm.playlists.length; i < len; i++) {
          if (vm.playlists[i].nom == $stateParams.nom) {
            index = cpt;
            break;
          }
          if (!vm.playlists[i].hide) {
            cpt++;
          }
        }
        $timeout(function () {
          $ionicSlideBoxDelegate.$getByHandle('slideBox').update();
          $ionicSlideBoxDelegate.$getByHandle('slideBox').slide(index);
        }, 0);
      });

      vm.urlMarmiton = function (nom) {
        window.open('http://www.marmiton.org/recettes/recherche.aspx?aqt=' + nom, '_system');
      }

      vm.back = function() {
        $location.path("liste/" + ($stateParams.mois));
      }
    });

  return moduleName;
});
