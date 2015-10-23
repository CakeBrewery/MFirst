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

    component.getBanner = function(title, headline, bg_color, title_color, headline_color){

      var component = {
        type: 'banner',
        id: 'appState.components.length',
        title: title, 
        headline: headline,
        bg_color: bg_color || '#55B5FF', //pallette: http://paletton.com/#uid=13x0u0kmR++00++89+++VN8Povs
        title_color: title_color || 'white',
        headline_color: headline_color || '#C2E5FF',
        editing: false, //Need to keep track of whether we are editing this. (I'll do this better later)
      };

      initializeComponent(component, function(){

        component.getHtml = function(){
          return "<div class='jumbotron' style='background-color:"+component.bg_color+";'>"+
          "<h1 style='color:"+component.title_color+";'>"+
          component.title+"</h1>"+
          "<p style='color:"+component.headline_color+";'>"+
          component.headline+
          "</p></div>";
        };

        component.getPreviewHtml = function(){
          return "<div class='jumbotron' style='background-color:"+component.bg_color+";'>"+
            //Editing Title
            "<h1 style='color:"+component.title_color+";'>"+
            "<a style='color:"+component.title_color+";' href='#/dashboard' editable-text='component.title' buttons='no'>"+
              component.title+
            "</a>"+
            "</h1>"+
            //Editing Headline 
            "<p style='color:"+component.headline_color+";'>"+
            "<a style='color:"+component.headline_color+";' href='#/dashboard' editable-textarea='component.headline' buttons='no'>"+
              component.headline+
            "</a>"+
            "</p>"+
          "</div>";
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
