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

    var meaningOfLife = 42;

    var current_app = "";

    var app_name = "My Site"; 
    var app_header_style ="color: white; height: 50px;";
    var app_body_style = "";
    var app_footer_style="background-color: #eee; height: 35px; width:100%; bottom: 0px; position: absolute; ";

    var app_conf = "<html><head><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'><title>"+app_name+"</title></head><body>";
    var app_header = "<div class='userapp-header navbar navbar-inverse' style='"+app_header_style+"'><div class='navbar-brand'>Navbar</div></div>"; 
    var app_body = "<div class='app_body' style='"+app_body_style+"'><div class='jumbotron'><h1>This is the Body</h1><p>This is the body of the app you are working on</p></div></div>";
    var app_footer = "<div style='"+app_footer_style+"'><p>Your Footer!</p></div>";
    var app_terminator = "</body></html>"; 


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
        name: current_app,
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
