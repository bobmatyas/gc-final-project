function PhotosController(PhotoService, $q) {
  var ctrl = this;

  // retrieve photos on initial page load

  ctrl.$onInit = function() {
    ctrl.photos = [];
    ctrl.getPhotos();
    ctrl.indPhoto = '';
    ctrl.getIndividualPhoto(4252039);
    ctrl.imageTest = 'https://pixabay.com/get/52e2d0414a51a514f6da8c7dda79367c123ddee352576c4870297bd49644c65fb0_1280.jpg';
    ctrl.getColorPalette(ctrl.imageTest);
  };

  // this function gets random photos

  ctrl.getPhotos = () => {

    return $q(function(resolve, reject) {
      PhotoService.getPhotos()      
        .then( (response) => {
          console.log(response.data.hits);  
          ctrl.photos = response.data.hits;
          // console.log(ctrl.photos);
          resolve();
          }
        ) 
        .catch( function(error) {
          console.error(error);
          throw error;
        });
    });
  }


  // temporarily get individual photo

  ctrl.getIndividualPhoto = (id) => {
    return $q(function(resolve, reject) {
      PhotoService.getIndividualPhoto(id)
        .then( (response) => {
          console.log(`individual photo called`);
          ctrl.indPhoto = response.data.hits;
          console.log(ctrl.indPhoto);
          resolve();
          }
        )
        .catch( function(error) {
          console.error(error);
          throw error;
        });
    });
  }

  ctrl.getColorPalette = (imageTest) => {
    return $q(function(resolve, reject) {
      PhotoService.getColorPalette(imageTest)
        .then( (response) => {
          console.log(`color scheme`);
          ctrl.colorResponse = response.data;
          console.log(ctrl.colorResponse);
          resolve();
          }
        )
        .catch( function(error) {
          console.error(error);
          throw error;
        });
    });
  }

  ctrl.imageColor = (image) => {
    return $q(function(resolve, reject) {
      PhotoService.extractColor(image)
        .then( (response) => {
          console.log(`color scheme`);
          ctrl.colorResponse = response.data;
          console.log(ctrl.colorResponse);
          resolve();
          }
        )
        .catch( function(error) {
          console.error(error);
          throw error;
        });
    });
  }


}

angular.module('ColorApp').component('photos', {
  template: `
      <section id="photos">
        <h2>Photos</h2>

        <h2>List of Photos from Pixabay API</h2>

        <div ng-repeat="photo in $ctrl.photos">
          <img src="{{ photo.previewURL }}" />
        </div>

        <h2>Individual Photo from Pixabay API</h2>

        <div ng-repeat="indPhoto in $ctrl.indPhoto">
          <img src="{{ indPhoto.largeImageURL }}" />
        </div>

        <h2>Color Scheme Test</h2>

        <button ng-click="$ctrl.imageColor()">Test Button</button>



      </section>
    `, // or use templateUrl
  controller: PhotosController
});