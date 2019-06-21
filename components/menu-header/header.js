function MenuHeaderController($rootScope, $scope) {
  var ctrl = this;

  $rootScope.bodyClass = '';


  ctrl.toggleDark = () => {
    if (!$rootScope.bodyClass) {
      $rootScope.bodyClass = 'dark';
    } else if ($rootScope.bodyClass) {
      $rootScope.bodyClass = '';
    }
  }
  
}

angular.module('ColorApp').component('menuHeader', {
  template: `
    <header class="navigation-container">
      <nav>
        <ul class="navigation-menu">
          <li><a href="#" class="logo">Picture<a href="#" class="logo2">Palette</a></li></a>
          <li><a href="#!/favorites">My Favorites</a></li>
          <li>
            <label class="switch">
              <input type="checkbox" ng-click="$ctrl.toggleDark()">
              <span class="slider round"></span>
             </label>
          </li>
        </ul>
      </nav>
    </header>
    `, // or use templateUrl
  controller: MenuHeaderController,
  bindings: {
    color: '<'
  }
});