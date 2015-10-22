'use strict';

/**
 * @ngdoc service
 * @name clientApp.componentFactory
 * @description
 * # componentFactory
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('componentFactory', function (appState) {
    // Service logic
    // ...

    var component = {}; 

    var initializeComponent = function(component, callback){
      callback();  
    };

    component.getJumbotron = function(header, body){
      var jumbotron = {
        type: 'jumbotron',
        id: appState.components.length,
        header: header, 
        body: body,
        editing: false,
      };

      initializeComponent(jumbotron, function(){
        jumbotron.getHtml = function(){
          return "<div class='jumbotron'><h3>"+jumbotron.header+"</h3><p>"+jumbotron.body+"</p></div>";
        };
      });

      return jumbotron; 
    };

    // Public API here
    return component; 
    
  });
