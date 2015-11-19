'use strict';

define([
  'felds/services/felds.service'
], function (feldsService) {

  var moduleName = 'felds.liste.controller';

  angular.module(moduleName, [feldsService]).controller('FeldsListeController',
    function FeldsListeController(feldsService, $location, $scope, $ionicHistory, $state, $ionicScrollDelegate, $timeout, $ionicNavBarDelegate) {
      $ionicNavBarDelegate.showBackButton(false);
      var vm = this;

      var loadPath = [];
      vm.moisSelect = parseInt($location.path().replace("/liste/", ""));
      vm.typeSelect = "";
      vm.month = feldsService.month;
      vm.mois = feldsService.mois;

      feldsService.loadService();

      $timeout(function () {
        $(".listeMonth").height($(window).height() -$(".tsb-ic-wrp").height() - $(".header-item").height() - 10);
        $ionicScrollDelegate.resize();
      }, 100);
      $( window ).resize(function() {
        $timeout(function () {
          $(".listeMonth").height($(window).height() -$(".tsb-ic-wrp").height() - $(".header-item").height() - 10);
          $ionicScrollDelegate.resize();
        }, 100);
      });

      vm.loadPath = function (index) {


        var iconsDiv = $(".tsb-icons"), icons = iconsDiv.find("a"), wrap = iconsDiv[0].querySelector(".tsb-ic-wrp"), totalTabs = icons.length;
        var scrollDiv = wrap.querySelector(".scroll");
        ;
        function getX(matrix) {
          matrix = matrix.replace("translate3d(","");
          matrix = matrix.replace("translate(","");
          return (parseInt(matrix));
        }
        var middle = iconsDiv[0].offsetWidth/2;
        var curEl = angular.element(icons[index]);
        var prvEl = angular.element(iconsDiv[0].querySelector(".active"));
        if(curEl && curEl.length){
          var curElWidth = curEl[0].offsetWidth, curElLeft = curEl[0].offsetLeft;

          if(prvEl.attr('icon-off')) {
            prvEl.attr("class", prvEl.attr('icon-off'));
          }else{
            prvEl.removeClass("active");
          }
          if(curEl.attr('icon-on')) {
            curEl.attr("class", curEl.attr('icon-on'));
          }
          curEl.addClass("active");

          var leftStr = (middle  - (curElLeft) -  curElWidth/2 + 5);
          //If tabs are not scrollable
          if(!scrollDiv){
            var leftStr = (middle  - (curElLeft) -  curElWidth/2 + 5) + "px";
            wrap.style.webkitTransform =  "translate3d("+leftStr+",0,0)" ;
          }else{
            //If scrollable tabs
            var wrapWidth = wrap.offsetWidth;
            var currentX = Math.abs(getX(scrollDiv.style.webkitTransform));
            var leftOffset = 100;
            var elementOffset = 40;
            //If tabs are reaching right end or left end
            if(((currentX + wrapWidth) < (curElLeft + curElWidth + elementOffset)) || (currentX > (curElLeft - leftOffset))){
              if(leftStr > 0){
                leftStr = 0;
              }
              //Use this scrollTo, so when scrolling tab manually will not flicker
              console.log(leftStr)
            }
          }
        }


        if (!loadPath[index]) {
          loadPath[index] = true;
          $ionicHistory.nextViewOptions({
            disableAnimate: true
          });
          try {
            $state.go('app.liste.' + (index - 1)).then(function () {
              $ionicHistory.nextViewOptions({
                disableAnimate: true
              });
              try {
                $state.go('app.liste.' + (index + 1)).then(function () {
                  $ionicHistory.nextViewOptions({
                    disableAnimate: true
                  });
                  $location.path("liste/" + (index));
                });
              } catch (e) {
                $location.path("liste/" + (index));
              }
            });
          } catch (e) {
            try {
              $state.go('app.liste.' + (index + 1)).then(function () {
                $ionicHistory.nextViewOptions({
                  disableAnimate: true
                });
                $location.path("liste/" + (index));
              });
            } catch (e) {
              $location.path("liste/" + (index));
            }
          }
        }
      }

      vm.slideHasChanged = function (index) {
        vm.moisSelect = index;
        vm.loadPath(index);
      }

      $scope.onSlideMove = function (data) {
        vm.loadPath(data.index);
      };


      /*vm.slideMoisChanged = function(slideNum) {
       consoel.log("slideMoisChanged")
       vm.moisSelect = slideNum;
       feldsService.afficherFromMonth(vm.moisSelect, vm.typeSelect);
       vm.playlists = feldsService.felds;
       };*/

      /*vm.slideTypeChanged = function(slideNum) {
       consoel.log("slideTypeChanged")
       vm.typeSelect = slideNum == 2 ? "fruit" : slideNum == 1 ? "legume" : "";
       feldsService.afficherFromMonth(vm.moisSelect, vm.typeSelect);
       vm.playlists = feldsService.felds;
       };*/

      /*vm.changeMois = function (mois) {
       consoel.log("changeMois")
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
       };*/

      /*vm.changeType = function (type) {
       consoel.log("changeType")
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
       };*/
    });


  return moduleName;
});
