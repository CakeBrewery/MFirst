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

    /* Generate Default HTML */

    //Default Styles

    var appState = {};

    appState.styles = []; 
    appState.components = []; 

    var headerstyle = deserializeStyle({
      'color': 'white',
      'height': '50px'
    }, '.headerstyle'); 
    appState.styles.push(headerstyle); 

    var bodystyle = deserializeStyle({
      'background-color': 'lightblue'
    },'.bodystyle'); 
    appState.styles.push(bodystyle); 

    var footerstyle = deserializeStyle({
      'background-color': '#eee',
      'height': '35px',
      'width': '100%', 
      'bottom': '0px',
      'position' : 'absolute',
      'text-align':'center',
      'padding-top': '7px'
    }, '.footerstyle');
    appState.styles.push(footerstyle); 

    //Body components
    appState.components.push("<div><div class='jumbotron'>"+
        "<h1>This is the Body</h1>"+
        "<p>This is the body of the app you are working on</p></div>");

    appState.app_name = "My Site"; 

    appState.getApp = function(){
      var app = {
        conf : "<html><head>"+
          "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'>"+
          "<title>"+this.app_name+"</title>"+
          "<style>"+this.styles.join("")+"</style>"+
          "</head><body class='bodystyle'>",
        header: "<div class='headerstyle navbar navbar-inverse'><div class='navbar-brand'>"+this.app_name+"</div></div>", 
        body: "<div>"+this.components.join("")+"</div>",
        footer: "<div class='footerstyle'><p>Your Footer!</p></div>",
        terminator: "</body></html>" 
      };
      return app;
    };

    appState.addComponent = function(component){
      this.components.push(component); 
    };

    appState.addStyle = function(style, class_name){
      this.styles.push(deserializeStyle(style, class_name)); 
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
