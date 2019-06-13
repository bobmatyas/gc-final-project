function HomeController($scope) {

  var ctrl = this;




  // these come direct from the Pixabay API

  ctrl.colors = ["grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"];

  // randomize color array 

  // -> Fisher–Yates shuffle algorithm
  var shuffleArray = function(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
  }
  
  ctrl.colors = shuffleArray(ctrl.colors);

  //ctrl.selectedColorTrueFalse = true; 
  $scope.selectedColor = '';

  // try this: https://www.guru99.com/angularjs-events.html

  $scope.selectColor = (color) => {
    console.log('selectColor clicked');
    $scope.selectedColor = color;
    console.log(`Selected Color: ${$scope.selectedColor}`);
    ctrl.hideGrid = 1;
  }


  // angular animations tips: https://forums.asp.net/t/2094767.aspx?AngularJS+How+to+move+a+div+from+bottom+to+up
  
}

angular.module('ColorApp').component('home', {
  template: `
      <section id="home">
      <div class="home-text">
      <h1>What color photos are you looking for?</h1>
    </div>
  
      <div class="color-grid" ng-show="!$ctrl.hideGrid">
        <a ng-repeat="color in $ctrl.colors" ng-click="selectColor(color)"> 
          <div class="color" id="{{ color }}"></div>
        </a>
      </div>

      <div class="home__search__bar" ng-if="selectedColor" style="background-color: {{ selectedColor}}; padding: 15px;" > 
        <input type="text">
      </div>

      </section>
    `, // or use templateUrl
  controller: HomeController
});