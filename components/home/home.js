function HomeController($scope) {

  var ctrl = this;


  
}

angular.module('ColorApp').component('home', {
  template: `
      <section id="home">
      <home-animation></home-animation>
  
  
      <main-search></main-search>





      </section>
    `, // or use templateUrl
  controller: HomeController
});