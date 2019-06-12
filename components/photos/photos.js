function PhotosController(PhotoService, $q) {
  var ctrl = this;

  // retrieve photos on initial page load -- mainly for testing

  ctrl.$onInit = function() {

    // ctrl.getPhotos();
    ctrl.indPhoto = '';
    ctrl.getIndividualPhoto(4252039);
  };


  /** 
   * A static array of categories for the search.
   * The category list is provided by Pixabay. 
  */

  ctrl.photoCategories = [
    'animals', 
    'backgrounds', 
    'buildings', 
    'business', 
    'computer', 
    'education', 
    'fashion', 
    'feelings', 
    'food', 
    'health', 
    'industry', 
    'music', 
    'nature', 
    'people', 
    'places', 
    'religion', 
    'science', 
    'sports', 
    'transportation', 
    'travel'
  ]; 


  /** 
   * A static array of photo orientations.
   * The orientation list is provided by Pixabay. 
  */

  ctrl.photoOrientations = [
    'all',
    'horizontal',
    'vertical'
  ];


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

  

  ctrl.imageColor = () => {
      PhotoService.extractColor()
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
        <h2>Search</h2>
        <input type="text" maxlength="100" ng-model="$ctrl.photoSearch" placeholder="what type of image?" ng-keypress="($event.charCode==13)? $ctrl.getPhotos($ctrl.photoSearch, $ctrl.photoCategory, $ctrl.photoOrientation) : return" />
        <select ng-model="$ctrl.photoCategory">
          <option value="" disabled selected hidden>Please Choose... </option>
          <option value=""></option>
          <option ng-repeat="category in $ctrl.photoCategories" value="{{ category }}"> {{ category.charAt(0).toUpperCase()+ category.substr(1).toLowerCase()  }}</option>
        </select>
        <select ng-model="$ctrl.photoOrientation"> 
          <option ng-repeat="orientation in $ctrl.photoOrientations" value="{{ orientation }}"> {{ orientation.charAt(0).toUpperCase()+ orientation.substr(1).toLowerCase()  }}</option>
        </select>
        <button class="button-green" ng-click="$ctrl.getPhotos($ctrl.photoSearch, $ctrl.photoCategory, $ctrl.photoOrientation)">
          Search
        </button>
        <h2>Photos</h2>
        <h2>List of Photos from Pixabay API</h2>

        <div ng-if="$ctrl.photos.length >= 1" ng-repeat="photo in $ctrl.photos" class="resultsContainer">
          <div class="cardContainer">

            <img src="{{ photo.previewURL }}" />
          </div>
        </div>

        <div ng-if="$ctrl.photos.length < 1">
          <p style="color: red; font-weight: bold;">No results.</p>
        </div>
        <h2>TEST: Individual Photo from Pixabay API</h2>
        <div ng-repeat="indPhoto in $ctrl.indPhoto">
          <img src="{{ indPhoto.largeImageURL }}" style="max-width: 100%;"/>
        </div>
        <button ng-click="$ctrl.imageColor()">Test Button</button>
      </section>
    `, // or use templateUrl
  controller: PhotosController
});
