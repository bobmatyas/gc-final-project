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
      
        <div>
          <h1 class="logo"><a href="#">Picture<span class="logo2">Palette</span></a></h1>
        </div>

        <nav>
          <ul class="navigation-menu">
            <li>
              <a href="#!/favorites">             
                <i class="material-icons">
                    favorite_border
                </i>
                <br>favorites   
              </a>
            </li>
            <!--
            
            <li>
              <label class="switch">
                <input type="checkbox" ng-click="$ctrl.toggleDark()">
                <span class="slider round"></span>
              </label>
            </li> 
            -->
            <li ng-click="$ctrl.toggleDark()">
              <i class="material-icons">
                brightness_medium
              </i>
              <br>dark mode    
            </li>

          </ul>
        </div>
      </nav>
    </header>
    `, // or use templateUrl
  controller: MenuHeaderController,
  bindings: {
    color: '<'
  }
});