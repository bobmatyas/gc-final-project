function HomeController($scope) {

  var ctrl = this;

  // these come direct from the Pixabay API

  ctrl.colors = ["grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"];

  //ctrl.selectedColorTrueFalse = true; 
  ctrl.selectedColor = '';

  // try this: https://www.guru99.com/angularjs-events.html

  ctrl.selectColor = (color) => {
    console.log('selectColor clicked');
    ctrl.selectedColor = color;
    console.log(`Selected Color: ${ctrl.selectedColor}`);
  }

  // angular animations tips: https://forums.asp.net/t/2094767.aspx?AngularJS+How+to+move+a+div+from+bottom+to+up
  
}

angular.module('ColorApp').component('home', {
  template: `
      <section id="home">
      <div class="home-text">
      <h1>What color photos are you looking for?</h1>
    </div>
  
      <div class="color-grid">
        <a href="#" ng-repeat="color in $ctrl.colors" ng-click="$ctrl.selectColor(color)"> 
          <div class="color" id="{{ color }}"></div>
        </a>

      </div>

      <p ng-click="$ctrl.selectColor('orange')">Change Color Test</p>

      <p>Color: {{ $ctrl.selectedColor }}</p>
      <div class="home__search__bar" ng-if="$ctrl.selectedColor"> 
        <input type="text">
      </div>

      </section>
    `, // or use templateUrl
  controller: HomeController
});