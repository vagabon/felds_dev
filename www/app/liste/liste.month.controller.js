'use strict';

define([
  'felds/services/felds.service'
], function (feldsService) {

  var moduleName = 'felds.liste.month.controller';

  angular.module(moduleName, [feldsService]).controller('FeldsListeMonthController',
    function FeldsListeController(feldsService, $location, $ionicNavBarDelegate) {
      var vm = this;
      $ionicNavBarDelegate.showBackButton(false);

      feldsService.loadService().then(function () {
        vm.month = parseInt($location.path().replace("/liste/", ""));
        vm.feldsByMonth = feldsService.all[vm.month];
      });
    });

  return moduleName;
});
