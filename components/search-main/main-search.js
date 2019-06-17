function MainSearchController(PhotoService, $q, $scope) {

  var ctrl = this;

  // this function gets the photos based on user search criteria

  ctrl.getPhotos = (queryText, photoCategory, photoOrientation, selectedColor) => {

    return $q(function(resolve, reject) {
      PhotoService.getPhotos(queryText, photoCategory, photoOrientation, selectedColor)      
        .then( (response) => {
          console.log(response.data.hits);  
          ctrl.photos = response.data.hits;
          console.log(ctrl.photos);
          resolve();
          }
        ) 
        .catch( function(error) {
          console.error(error);
          reject();
          throw error;
        });
    });
  }


   // these come direct from the Pixabay API

   ctrl.colors = ["grayscale", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black"];


   /**
    * 
    * This randomizes the color array. It uses the Fisher–Yates shuffle algorithm
    * 
    * */ 

   var shuffleArray = function(array) {
   var m = array.length, t, i;
 
   // While there remain elements to shuffle
   while (m) {
     // Pick a remaining element…
     i = Math.floor(Math.random() * m--);
 
     // And swap it with the current element.
     t = array[m];
     array[m] = array[i];
     array[i] = t;
   }
 
   return array;
   }
   
   ctrl.colors = shuffleArray(ctrl.colors);
 
   /**
    * This section is storing the selected color. It uses $scope so that ng-repeat works. If it
    * isn't $scope it seemed as though there was an issue with ng-repeat creating its own scope
    * each time.
    * 
    * The 'selectedColor' value is later passed to the search-bar component which then passes it
    * back up when the function is called from within search-bar (the child component).
    * 
    *  */ 

   $scope.selectedColor = '';
 
   $scope.selectColor = (color) => {
     console.log('selectColor clicked');
     $scope.selectedColor = color;
     console.log(`Selected Color: ${$scope.selectedColor}`);
     ctrl.hideGrid = 1;
   }
 


  ctrl.addFavorite = (favoriteParam) => {
    PhotoService.setFavorites(favoriteParam);
    console.log("you clicked it");
  }

  ctrl.individualPhotoSave = (photo) => {
    PhotoService.photo = photo;
  }
 
   // angular animations tips: https://forums.asp.net/t/2094767.aspx?AngularJS+How+to+move+a+div+from+bottom+to+up


}

angular.module('ColorApp').component('mainSearch', {
  template: `
      <section id="photos">

      <div class="home__search__bar" ng-if="selectedColor" style="background-color: {{ selectedColor }}; padding: 15px;" > 
        <search-bar get-photos="$ctrl.getPhotos(queryText, photoCategory, photoOrientation, selectedColor)" color="selectedColor"></search-bar>
      </div>

      <div class="color-grid  animate-show-hide" ng-hide="$ctrl.hideGrid">
        <a ng-repeat="color in $ctrl.colors" ng-click="selectColor(color)"> 
          <div class="color" id="{{ color }}">
            <div class="colorText">{{ color }}
            </div>
          </div>
        </a>
      </div>

        <h2 ng-if="$ctrl.photos.length >= 1">Results</h2>

        <div ng-if="$ctrl.photos.length >= 1" class="resultsContainer">

          <div class="cardContainer" ng-repeat="photo in $ctrl.photos">
            <div class="favorite" ng-click="$ctrl.addFavorite(photo); favorite=true">
              <i ng-hide="favorite" class="material-icons favoriteIcon whiteIcon" >favorite</i>
              <i ng-show="favorite" class="material-icons favoriteIcon redIcon" >favorite</i>
              <i class="material-icons favoriteIcon redIcon">favorite_border</i>
            </div>
            <a href="{{ photo.largeImageURL }}" download="{{ photo.largeImageURL }}">
            <i class="material-icons">cloud_download</i>
            </a>
            <img class="imageSize" ng-src="{{ photo.largeImageURL }}" />
            <div class="imageTags cardSpec">{{ photo.tags }}</div>
            <div class="imageDetails cardSpec">
              <div>Downloads: {{ photo.downloads }}</div>
              <div>Views: {{ photo.views }}</div>
            </div>
            <p ng-click="$ctrl.individualPhotoSave(photo.largeImageURL)"><a href="#!/photo">Choose Photo</a></p>
          </div>
        </div>

        <div ng-if="$ctrl.photos.length < 1">
          <h3 style="color: red; font-weight: bold;">No results.</h3>
        </div>
        
      </section>
    `, // or use templateUrl
  controller: MainSearchController
});
