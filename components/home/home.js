function HomeController() {

  var ctrl = this;

  // these come direct from the Pixabay API

  ctrl.colors = ["grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"];

  ctrl.selectedColorTrueFalse = true; 


  ctrl.selectColor = (color) => {
    console.log(ctrl.selectedColorTrueFalse);
    console.log('clicked');
    ctrl.selectedColorTrueFalse = true;
    ctrl.selectedColor = color;
    console.log(ctrl.selectedColor);
    console.log(ctrl.selectedColorTrueFalse);
  }


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

      <p>Color: {{ ctrl.selectedColor }}</p>
      <div class="home__search__bar" ng-if="$ctrl.selectedColorTrueFalse === false"> 
        <input type="text" ng-model="$ctrl.search">
      </div>

      </section>
    `, // or use templateUrl
  controller: HomeController
});