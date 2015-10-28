/*global require*/
'use strict';

require.config({
  paths: {
    ionic: '../lib/ionic/js/ionic.bundle',
    jquery: '../lib/jquery/dist/jquery',
    cordova: '../cordova',
    "ionic-sidemenu-overlaying": '../lib/ionic-sidemenu-overlaying/dist/ionic-sidemenu-overlaying'
  },
  shim: {
  },
  deps: ['app']
});
