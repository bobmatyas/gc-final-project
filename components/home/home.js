function HomeController() {
  var ctrl = this;

}

angular.module('ColorApp').component('home', {
  template: `
      <section id="home">
      <div class="home-text">
      <h1>What color photos are you looking for?</h1>
    </div>
  
    <div class="color-grid">
        <a href="#"><div class="color" id="red"></div></a>      
        <a href="#"><div class="color" id="orange"></div></a>
        <a href="#"><div class="color" id="yellow"></div></a>
        <a href="#"><div class="color" id="green"></div></a>
        <a href="#"><div class="color" id="turquoise"></div></a>
        <a href="#"><div class="color" id="blue"></div></a>
        <a href="#"><div class="color" id="lilac"></div></a>
        <a href="#"><div class="color" id="pink"></div></a>
        <a href="#"><div class="color" id="white"></div></a>
        <a href="#"><div class="color" id="black"></div></a>
        <a href="#"><div class="color" id="grey"></div></a>
        <a href="#"><div class="color" id="grayscale"></div></a>
      </div>
      </section>
    `, // or use templateUrl
  controller: HomeController
});