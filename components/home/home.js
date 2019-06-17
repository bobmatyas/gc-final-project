function HomeController($scope) {

  var ctrl = this;


  
}

angular.module('ColorApp').component('home', {
  template: `
      <section id="home">
      <div class="home-text">
         <h1 class="fonts">What color photos are you looking for?</h1>
      </div>
  
      <main-search></main-search>





      </section>
    `, // or use templateUrl
  controller: HomeController
});