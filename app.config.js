"use strict";

angular
  .module("ColorApp")
  // Configuring the routing
  // The config method must have an array as the parameter. The array contains two elements, $routeProvider (as a string) and an arrow function with $routeProvider as a parameter
  .config(["$routeProvider", ($routeProvider) => {
    $routeProvider
      // When the user visits the display route...
      .when("/search", {
        // Load the about component
        template: "<photos></photos>"
      })
      .when("/home", {
        // Load the home component
        template: "<home></home>"
      })
      .when("/favorites", {
        // Load the quote component
        template: "<favorites-page></favorites-page>"
      })
      .when("/photo", {
        // Load the photo component
        template: "<photo></photo>"
      })
      .otherwise( {
        //otherwise, take me home
        redirectTo: "/home"
      })
    
    }]);