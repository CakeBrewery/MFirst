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

    $scope.app = appState.getApp(); 

    $scope.showHtml = function(){
    	$window.alert(appState.getHTML()); 
    };


    $scope.showApp = function(){
      var newWindow = window.open();
      newWindow.document.write(appState.getHTML());
    };

    $scope.addComponent = function(){
      appState.addComponent("<div> Added a new Component!</div>"); 

      $scope.app = appState.getApp(); 
    };

    $scope.changeStyle = function(){
      var colors = ['blue', 'red', 'green', 'yellow', 'organge', 'white'];
      var new_body_style = {
        'background-color': colors[Math.floor(Math.random() * (1+colors.length - 0)) + 0]
      };
      appState.addStyle(new_body_style, '.bodystyle');

      $scope.app = appState.getApp(); 
    };

  });
