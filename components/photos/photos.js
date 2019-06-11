function PhotosController(PhotoService, $q) {
  var ctrl = this;

  // retrieve photos on initial page load -- mainly for testing

  ctrl.$onInit = function() {
    ctrl.photos = [];
    // ctrl.getPhotos();
    ctrl.indPhoto = '';
    ctrl.getIndividualPhoto(4252039);
  };

  /** 
   * A static array of categories for the search criteria.
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

  // this function gets the photos based on user search criteria

  ctrl.getPhotos = (queryText) => {

    return $q(function(resolve, reject) {
      PhotoService.getPhotos(queryText)      
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

  


}

angular.module('ColorApp').component('photos', {
  template: `
      <section id="photos">

        <h2>Search</h2>

        <input type="text" maxlength="100" ng-model="$ctrl.photoSearch" placeholder="what type of image?" ng-keypress="($event.charCode==13)? $ctrl.getPhotos($ctrl.homeSearch) : return" />
        <select ng-model="ctrl.photoCategory">
          <option selected> </option>
          <option ng-repeat="category in $ctrl.photoCategories">{{ category }}</option>
        </select>

        <button class="button-green" ng-click="$ctrl.getPhotos($ctrl.photoSearch)">
          Search
        </button>

        <h2>Photos</h2>

        <h2>List of Photos from Pixabay API</h2>

        <div ng-repeat="photo in $ctrl.photos">
          <img src="{{ photo.previewURL }}" />
        </div>

        <h2>TEST: Individual Photo from Pixabay API</h2>

        <div ng-repeat="indPhoto in $ctrl.indPhoto">
          <img src="{{ indPhoto.largeImageURL }}" />
        </div>




      </section>
    `, // or use templateUrl
  controller: PhotosController
});