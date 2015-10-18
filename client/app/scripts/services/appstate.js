'use strict';

/**
 * @ngdoc service
 * @name clientApp.appState
 * @description
 * # appState
 * Factory in the clientApp.
 */
angular.module('clientApp')
  .factory('appState', function () {
    // Service logic
    // ...


    /* Serialize JSON into HTML style. 
    Optional attribute class_name: Return the style inside a css class */
    var serializeStyle = function(style, class_name){
      var styleHtml = ""; 
      if(class_name){
        styleHtml += class_name + '{';
      }
      angular.forEach(style, function(value, key){
        styleHtml += key + ':' + value + '; '; 
        console.log(styleHtml); 
      });
      if(class_name){
        styleHtml += '}';
      }

      return styleHtml; 
    };

    var meaningOfLife = 42;


    /* Default Styles */
    var header_style = {
      'color': 'white',
      'height': '50px'
    };

    var body_style = {}; 

    var footer_style = {
      'background-color': '#eee',
      'height': '35px',
      'width': '100%', 
      'bottom': '0px',
      'position' : 'absolute',
      'text-align':'center',
      'padding-top': '7px;'
    };


    var current_app = "";

    var app_name = "";
    var app_conf = "";
    var app_header = "";
    var app_body = "";
    var app_footer = "";
    var app_terminator = "";

    /* Generate Default HTML */
    app_name="My Site";
    app_conf = "<html><head><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'><title>"+app_name+"</title></head><body>";
    app_header = "<div class='navbar navbar-inverse' style='"+ serializeStyle(header_style)+"'><div class='navbar-brand'>Navbar</div></div>"; 
    app_body = "<div style='"+serializeStyle(body_style)+"'><div class='jumbotron'><h1>This is the Body</h1><p>This is the body of the app you are working on</p></div></div>";
    app_footer = "<div style='"+serializeStyle(footer_style)+"'><p>Your Footer!</p></div>";
    app_terminator = "</body></html>"; 



    var appState = {}; 

    appState.someMethod = function () {
      return meaningOfLife; 
    };

    appState.getHeader = function(){
      return app_header; 
    };

    appState.getBody = function(){
      return app_body;
    };

    appState.getFooter = function(){
      return app_footer; 
    };

    appState.getCurrentApp = function(){
      var app = {
        id: current_app,
        name: app_name,
        conf: app_conf,
        header: app_header,
        body: app_body,
        footer: app_footer, 
        terminator: app_terminator 
      };
      return app; 
    };

    appState.setHeader = function(hdr){
      app_header = hdr; 
    };

    appState.setBody = function(bdy){
      app_body = bdy; 
    };

    appState.setFooter = function(ftr){
      app_footer = ftr; 
    };

    appState.save = function(){
      console.log("saving to database"); 
    };

    appState.getHTML = function(){
      var html = app_conf+app_header+app_body+app_footer+app_terminator; 
      return html; 
    };

    return appState; 
  });
