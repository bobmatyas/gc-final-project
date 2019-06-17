function HomeController($scope) {

  var ctrl = this;


  
}

angular.module('ColorApp').component('home', {
  template: `
      <section id="home">
      <div class="home-text">
         <h1>Find the perfect picture. Find the perfect palette.</h1>
         <h2>All in one place.</h2>
      </div>
  
      <main-search></main-search>





      </section>
    `, // or use templateUrl
  controller: HomeController
});