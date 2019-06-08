function AboutController() {
  var ctrl = this;

}

angular.module('ColorApp').component('about', {
  template: `
      <section id="About">
        <h2>About</h2>

        <p>This is a test of the about component.
      </section>
    `, // or use templateUrl
  controller: AboutController
});