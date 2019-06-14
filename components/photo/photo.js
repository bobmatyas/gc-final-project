function PhotoController(PhotoService, $q) {
    // what function does this component do?
    var ctrl = this;
    this.service = PhotoService;

    ctrl.image = PhotoService.photo;


    ctrl.$onInit = function() {
        console.log(ctrl.image);
    }
  };  

  
  angular.module('ColorApp').component('photo', {
    template: `
        <div class="indiv-image">
            <img class="imageSize" ng-src="{{ $ctrl.image }}" />
        </div>
        <div class="color-palette">
            <h2>Complimentary Colors</h2>
            <div id="color-palette">
                <--how to pull complimentary colors-->
                <p>{{ color }}</p>
            </div>
            <--how to set up to favorites-->
            <button class="save-palette">Save Palette</button>
        </div>
      `, 
    controller: PhotoController,
    // how to bind to photos.js
    bindings: {
      
    }  
  });