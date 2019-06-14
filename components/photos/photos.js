function PhotosController(PhotoService, $q) {
  var ctrl = this;

  // retrieve photos on initial page load -- mainly for testing

  // ctrl.$onInit = function() {

  //   // ctrl.getPhotos();
  //   ctrl.indPhoto = '';
  //   ctrl.getIndividualPhoto(4252039);
  // };


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
          console.log(response)
          ctrl.photos = response.data.hits;
          console.log(ctrl.photos);
          ctrl.photoList = []

          let listFromApi = ctrl.photos;
            listFromApi.forEach(function (spot, index){
          let photoObj = {
            largeImageURL: spot.largeImageURL,
            tags: spot.tags,
            downloads: spot.downloads,
            views: spot.views,
          }
          ctrl.photoList.push(photoObj);
        })

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

  // ctrl.getIndividualPhoto = (id) => {
  //   return $q(function(resolve, reject) {
  //     PhotoService.getIndividualPhoto(id)
  //       .then( (response) => {
  //         console.log(`individual photo called`);
  //         ctrl.indPhoto = response.data.hits;
  //         console.log(ctrl.indPhoto);
  //         resolve();
  //         }
  //       )
  //       .catch( function(error) {
  //         console.error(error);
  //         throw error;
  //       });
  //   });
  // }

  

  ctrl.imageColor = () => {
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

  ctrl.addFavorite = (favoriteParam) => {
    PhotoService.setFavorites(favoriteParam);
    console.log("you clicked it");

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

        <div ng-if="$ctrl.photos.length >= 1" class="resultsContainer">
          <div class="cardContainer" ng-repeat="photo in $ctrl.photoList">
            <div class="favorite" ng-click="$ctrl.addFavorite(photo); favorite=true">
              <i ng-hide="favorite" class="material-icons favoriteIcon whiteIcon" >favorite</i>
              <i ng-show="favorite" class="material-icons favoriteIcon redIcon" >favorite</i>
              <i class="material-icons favoriteIcon redIcon">favorite_border</i>
            </div>
            <a href="{{ photo.largeImageURL }}" download="{{ photo.largeImageURL }}">
            <i class="material-icons">cloud_download</i>
            </a>
            <img class="imageSize" src="{{ photo.largeImageURL }}" ng-click="$ctrl.imageColor(photo.largeImageURL)"/>
            <div class="imageTags cardSpec">{{ photo.tags }}</div>
            <div class="imageDetails cardSpec">
              <div>Downloads: {{ photo.downloads }}</div>
              <div>Views: {{ photo.views }}</div>
            </div>
          </div>
        </div>

        <div ng-if="$ctrl.photos.length < 1">
          <p style="color: red; font-weight: bold;">No results.</p>
        </div>
      </section>
    `, // or use templateUrl
  controller: PhotosController
});
