function AboutController() {
  var ctrl = this;

}

angular.module('ColorApp').component('about', {
  template: `
      <section id="About">
        <h2>About Me</h2>

        <p>This is a test of the about me component.
      </section>
    `, // or use templateUrl
  controller: AboutController
});