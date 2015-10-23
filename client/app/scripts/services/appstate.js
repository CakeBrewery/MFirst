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

    /* 
    Description: Deserialize JSON into HTML string. 
    Parameters: style: style in JSON,
                (optional) class_name: Return the style inside a css class named [class_name]
    Return: css tags (wrap inside <style></style> or style="")*/
    var deserializeStyle = function(style, class_name){
      var styleHtml = ""; 
      if(class_name){
        styleHtml += class_name + '{';
      }
      angular.forEach(style, function(value, key){
        styleHtml += key + ':' + value + '; '; 
      });
      if(class_name){
        styleHtml += '}';
      }
      return styleHtml; 
    };

    var loadDefaultStyles = function(){
      //In the future: Load these from server
      var styles = []; 
      styles.push(".jumbotron{border-radius:0px;text-align: left;padding-left:10%; border-bottom: 1px solid #e5e5e5;.btn{font-size: 21px;padding: 14px 24px;};}");
      styles.push(".container .jumbotron{border-radius:0px;}");

      var headerstyle = deserializeStyle({
        'color': 'white',
        'height': '50px'
      }, '.headerstyle'); 
      styles.push(headerstyle); 

      var bodystyle = deserializeStyle({
        'background-color': 'white'
      },'.bodystyle'); 
      styles.push(bodystyle); 

      var footerstyle = deserializeStyle({
        'background-color': '#eee',
        'height': '35px',
        'width': '100%', 
        'bottom': '0px',
        'position' : 'relative',
        'text-align':'center',
        'padding-top': '7px'
      }, '.footerstyle');
      styles.push(footerstyle); 

      return styles; 
    };


    var appState = {};

    appState.defaultstyles = loadDefaultStyles();
    appState.customstyles = []; 
    appState.components = []; 

    appState.app_name = "My Site"; 

    appState.getApp = function(){
      var app = {
        conf : "<!doctype html><html><head>"+
          "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'>"+
          "<title>"+this.app_name+"</title>"+
          "<style type='text/css'>"+this.defaultstyles.join("")+this.customstyles.join("")+"</style>"+
          "</head><body class='bodystyle'>",
        header: "",//"<div class='headerstyle navbar navbar-inverse' style='margin-bottom:0px;'><div class='navbar-brand'>"+this.app_name+"</div></div>", 
        body: this.components.map(function(elem){return elem.getHtml();}).join(""),
        bodycomponents: this.components,
        footer: "",//"<div class='footerstyle'><p>Your Footer!</p></div>",
        terminator: "</body></html>" 
      };
      return app;
    };

    appState.addComponent = function(component, callback){
      this.components.push(component); 
      callback();
    };

    appState.addCustomStyle = function(style, class_name){
      this.customstyles.push(deserializeStyle(style, class_name)); 
    };

    appState.save = function(){
      console.log("saving to database"); 
    };

    appState.getHTML = function(){
      var app = this.getApp(); 
      var html = app.conf+app.header+app.body+app.footer+app.terminator; 
      return html; 
    };

    appState.getPreviewHtml = function(){
      var app = this.getApp();
      var html = app.header+app.body+app.footer; 
      return html; 
    };

    return appState; 
  });
