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

    component.getBanner = function(title, headline, color){

      var component = {
        type: 'banner',
        id: 'appState.components.length',
        title: title, 
        headline: headline,
        color: color || '#55B5FF', //pallette: http://paletton.com/#uid=13x0u0kmR++00++89+++VN8Povs
        editing: false, //Need to keep track of whether we are editing this. (I'll do this better later)
      };

      initializeComponent(component, function(){

        component.getHtml = function(){
          return "<div class='jumbotron' style='background-color:"+component.color+";'><h1 style='color:white'>"+
          component.title+"</h1><p style='color:#C2E5FF'>"+
          component.headline+
          "</p></div>";
        };
      });

      return component; 
    };

    component.getJumbotron = function(header, body){
      var component = {
        type: 'jumbotron',
        id: appState.components.length,
        header: header, 
        body: body,
        editing: false,
      };

      initializeComponent(component, function(){
        component.getHtml = function(){
          return "<div class='jumbotron'><h3>"+component.header+"</h3><p style='white-space:pre-wrap;'>"+component.body+"</p></div>";
        };
      });

      return component; 
    };

    // Public API here
    return component; 
    
  });
