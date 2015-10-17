'use strict';

define([
  'felds/services/felds.service'
], function (feldsService) {
  var moduleName = 'felds.fiche.controller';

  angular.module(moduleName, [feldsService]).controller('FeldsFicheController', FeldsListeController);

  FeldsListeController.$inject = ['feldsService', '$stateParams', '$ionicSlideBoxDelegate', '$timeout'];

  function FeldsListeController(feldsService, $stateParams, $ionicSlideBoxDelegate, $timeout) {
    var vm = this;

    feldsService.load().then(function () {

      feldsService.afficherFromMonth($stateParams.mois, $stateParams.type);
      vm.playlists = feldsService.felds;
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

    vm.urlMarmiton = function(nom) {
      window.open('http://www.marmiton.org/recettes/recherche.aspx?aqt=' + nom, '_system');
    }
  }

  return moduleName;
});
