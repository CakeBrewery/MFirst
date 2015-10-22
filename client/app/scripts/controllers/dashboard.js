'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DashboardCtrl', function ($scope, $window, appState, componentFactory) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.app = appState.getApp(); 

    $scope.saveName = function(name){
      appState.app_name = name; 
      $scope.app = appState.getApp(); 
    };

    $scope.showHtml = function(){
      $window.alert(appState.getHTML()); 
    };


    $scope.showApp = function(){
      var newWindow = window.open();
      newWindow.document.write(appState.getHTML());
    };

    $scope.addComponent = function(){
      var component = componentFactory.getJumbotron("Hello World", "I made my first component!");
      appState.addComponent(component); 

      $scope.app = appState.getApp(); 
    };

    $scope.changeStyle = function(){
      var colors = ['blue', 'red', 'green', 'yellow', 'organge', 'white'];
      var new_body_style = {
        'background-color': colors[Math.floor(Math.random() * (1+colors.length - 0)) + 0]
      };
      appState.addCustomStyle(new_body_style, '.bodystyle');

      $scope.app = appState.getApp(); 
    };

  });
