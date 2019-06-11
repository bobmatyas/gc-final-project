function MenuHeaderController($rootScope) {
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
          <li><a href="#" class="logo">picturePalette</a></li>
          <li><a href="#!/search">Search</a></li>
          <li><a href="#!/photos">My Photos</a></li>
          <li><a href="#!/palettes">My Palettes</a></li>
          <li>
            <label class="switch">
              <input type="checkbox">
              <span class="slider round"></span>
             </label>
          </li>
        </ul>
      </nav>
    </header>
    `, // or use templateUrl
  controller: MenuHeaderController
});