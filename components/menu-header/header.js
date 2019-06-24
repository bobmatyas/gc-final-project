function MenuHeaderController($rootScope, $scope) {
  var ctrl = this;

  $rootScope.bodyClass = '';


  ctrl.toggleDark = () => {
    if (!$rootScope.bodyClass) {
      $rootScope.bodyClass = 'dark';
    } else if ($rootScope.bodyClass) {
      $rootScope.bodyClass = '';
    }
    console.log($rootScope.bodyClass);
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
            <li ng-click="$ctrl.toggleDark()">
              <i ng-if="typeof($rootScope.bodyClass)!==undefined" class="material-icons">
                brightness_2
              </i>
              <i ng-if="typeof($rootScope.bodyClass)===dark" class="material-icons">
                brightness_4
              </i>
              <br> contrast   
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