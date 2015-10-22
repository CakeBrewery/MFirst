'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:userApp
 * @description: This directive makes a user-app tag with attribute app. 
 *      app is an object with app.header, app.body, and app.footer, -all html strings
 * # userApp
 */
angular.module('clientApp')
  .directive('userApp', function ($sce, appState) {
    return {
      templateUrl: 'scripts/directives/userapp.html',
      restrict: 'E',
      scope:{
          app: '=',
      },
      link: function(scope){
      	scope.trustAsHtml = function(html_string){
      		return $sce.trustAsHtml(html_string); 
      	};

        scope.editing = -1; 

        scope.editComponent = function(component){
          appState.components[component.id] = component;
        };
      }
    };
  });
