function HomeController($scope) {

  var ctrl = this;

  // alert("Welcome to PicturePalette. Simply start your search by choosing a color.");


  
}

angular.module('ColorApp').component('home', {
  template: `
      <section id="home">
        

      <main-search></main-search>





      </section>
    `, // or use templateUrl
  controller: HomeController
});