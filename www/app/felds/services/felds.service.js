/*global define*/
'use strict';

define([
], function () {

  var moduleName = 'felds.service';

  angular.module(moduleName, [
  ]).factory('feldsService', function ($http, $q) {
    'use strict';
    var service = {
      month: ["jan", "fev", "mar", "avr", "mai", "juin", "juil", "aou", "sep", "oct", "nov", "dec"],
      mois: JSON.parse('[{"nom": "Janvier", "active": "active"},{"nom": "Février"},{"nom": "Mars"},{"nom": "Avril"},{"nom": "Mai"},{"nom": "Juin"},{"nom": "Juillet"},{"nom": "Août"},{"nom": "Septembre"},{"nom": "Octobre"},{"nom": "Novembre"},{"nom": "Décembre"}]'),
      felds: null,
      load: function () {
        var deferred = $q.defer();
        if (service.felds == null) {
          console.log("Chargement du json...");
          $http.get('json/felds.json').then(function (res) {
            service.felds = res.data;
            service.init();
            deferred.resolve();
          });
        } else {
          service.init();
          deferred.resolve();
        }
        return deferred.promise;
      },
      init: function () {
        for (var i = 0, len = service.felds.length; i < len; i++) {
          var saison = "";
          var disponible = "";
          var nonDisponible = "";
          for (var j = 0, len2 = service.mois.length; j < len2; j++) {
            if (service.felds[i][service.month[j]] === "S") {
              saison += service.mois[j].nom + ", ";
            } else if (service.felds[i][service.month[j]] === "D") {
              disponible += service.mois[j].nom + ", ";
            } else {
              nonDisponible += service.mois[j].nom + ", ";
            }
          }
          if (saison.length > 1) {
            saison = saison.substr(0, saison.length - 2);
          }
          if (disponible.length > 1) {
            disponible = disponible.substr(0, disponible.length - 2);
          }
          service.felds[i].saison = saison;
          service.felds[i].disponible = disponible;
          service.felds[i].nonDisponible = nonDisponible;
          service.felds[i].hide = false;
        }
        service.felds.sort(function sortByName(key1, key2) {
          return key1.nom > key2.nom ? 1 : -1;
        });
      },
      afficherFromMonth: function (mois, type) {
        for (var i = 0, len = service.mois.length; i < len; i++) {
          service.mois[i].active = mois == i;
        }
        if (service.felds != null) {
          for (var i = 0, len = service.felds.length; i < len; i++) {
            if (service.felds[i][service.month[mois]] === "S" &&
              ((type == "legume" && service.felds[i].type == type) || (type == "fruit" && service.felds[i].type == type) || type == "")) {
              service.felds[i].hide = false;
            } else {
              service.felds[i].hide = true;
            }
          }
        }
      }
    };
    return service;
  });

  return moduleName;
});

