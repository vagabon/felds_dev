/*global require*/
'use strict';

require.config({
  paths: {
    ionic: '../lib/ionic/js/ionic.bundle',
    jquery: '../lib/jquery-2.1.4',
    cordova: '../cordova'
  },
  shim: {
  },
  deps: ['app']
});
