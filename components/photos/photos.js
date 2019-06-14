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

  

  ctrl.imageColor = (image) => {
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
        <search-bar get-photos="$ctrl.getPhotos(queryText, photoCategory, photoOrientation)" sort-by="$ctrl.sortBy(propertyName, sortOrder)" search-completed="$ctrl.searchCompleted"></search-bar>
        

        <h2 ng-if="$ctrl.photos.length >= 1">Results</h2>

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
