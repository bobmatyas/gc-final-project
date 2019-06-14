function PhotoController(PhotoService, $q) {
    // what function does this component do?
    var ctrl = this;
    this.service = PhotoService;

    ctrl.image = PhotoService.photo;


    // ctrl.$onInit = function() {
    //     console.log(ctrl.image);
    // }

    ctrl.imageColor = (image) => {
      console.log(ctrl.image);
      PhotoService.extractColor(image)
        .then( (response) => {
          console.log(`color scheme`);
          ctrl.colorResponse = response.data;
          console.log(response);
          console.log(ctrl.colorResponse);
          }
        )
        .catch( function(error) {
          console.error(error);
          throw error;
        });
    }

    
  };  

  
  angular.module('ColorApp').component('photo', {
    template: `
        <div class="indiv-image">
            <-- how to show clicked photo only -->
            <img class="imageSize" ng-src="{{ $ctrl.image }}" ng-click="$ctrl.imageColor($ctrl.image)" />
            <-- how to set download button -->
            
            <button class="download">Download</button>
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