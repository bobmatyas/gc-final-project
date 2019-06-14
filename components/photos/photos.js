function PhotosController(PhotoService, $q) {
  var ctrl = this;

  // retrieve photos on initial page load -- mainly for testing

  // ctrl.$onInit = function() {

  //   // ctrl.getPhotos();
  //   ctrl.indPhoto = '';
  //   ctrl.getIndividualPhoto(4252039);
  // };

  // this function gets the photos based on user search criteria

  ctrl.getPhotos = (queryText, photoCategory, photoOrientation) => {

    return $q(function(resolve, reject) {
      PhotoService.getPhotos(queryText, photoCategory, photoOrientation)      
        .then( (response) => {
          console.log(response.data.hits);  
          ctrl.photos = response.data.hits;
          console.log(ctrl.photos);
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

  

  ctrl.imageColor = (image) => {
      // PhotoService.selectedColor(image)
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


}

angular.module('ColorApp').component('photos', {
  template: `
      <section id="photos">
        <search-bar get-photos="$ctrl.getPhotos(queryText, photoCategory, photoOrientation)" sort-by="$ctrl.sortBy(propertyName, sortOrder)" search-completed="$ctrl.searchCompleted"></search-bar>
        

        <h2 ng-if="$ctrl.photos.length >= 1">Results</h2>

        <div ng-if="$ctrl.photos.length >= 1" class="resultsContainer">
<<<<<<< HEAD
          <div class="cardContainer" ng-repeat="photo in $ctrl.photos">
            <img class="imageSize" ng-click="$ctrl.imageColor(photo.largeImageURL)" ng-src="{{ photo.largeImageURL }}" />
=======
        

          <div class="cardContainer" ng-click="$ctrl.imageColor(photo.largeImageURL)" ng-repeat="photo in $ctrl.photos">
            <img class="imageSize" src="{{ photo.largeImageURL }}" />
>>>>>>> master
            <div class="imageTags cardSpec">{{ photo.tags }}</div>
            <div class="imageDetails cardSpec">
              <div>Downloads: {{ photo.downloads }}</div>
              <div>Views: {{ photo.views }}</div>
            </div>
            <a href="#!/photo">Choose Photo</a>
          </div>
        </div>

        <div ng-if="$ctrl.photos.length < 1">
          <h3 style="color: red; font-weight: bold;">No results.</h3>
        </div>
        
      </section>
    `, // or use templateUrl
  controller: PhotosController,
  bindings: {
    imageColor: "&",
  } 
});
