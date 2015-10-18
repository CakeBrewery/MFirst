'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DashboardCtrl', function ($scope, $window, appState) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.current_app = appState.getCurrentApp(); 

    $scope.showHtml = function(){
    	$window.alert(appState.getHTML()); 
    };


    $scope.showApp = function(){
      var newWindow = window.open();
      newWindow.document.write(appState.getHTML());
    };

  });
