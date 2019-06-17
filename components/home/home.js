function HomeController($scope) {

  var ctrl = this;


  
}

angular.module('ColorApp').component('home', {
  template: `
      <section id="home">
      <div class="home-text">
<<<<<<< HEAD
         <h1 class="fonts">What color photos are you looking for?</h1>
=======
         <h1>Find the perfect picture. Find the perfect palette.</h1>
         <h2>All in one place.</h2>
>>>>>>> master
      </div>
  
      <main-search></main-search>





      </section>
    `, // or use templateUrl
  controller: HomeController
});