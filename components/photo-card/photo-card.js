function PhotoCardController() {
  
  var ctrl = this;

  console.log(ctrl.photo);
  console.log('photo card called');

}

angular.module('ColorApp').component('photoCard', {
  template: `
  

    `, // or use templateUrl
  controller: PhotoCardController,
  bindings: {
    photo: "@",
  }
});