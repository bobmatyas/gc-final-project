function MainSearchController(PhotoService, $q, $scope) {
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


   // these come direct from the Pixabay API

   ctrl.colors = ["grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"];


   // randomize color array -> Fisher–Yates shuffle algorithm

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
 
   // this part sets the color to search by

   $scope.selectedColor = '';
 
   $scope.selectColor = (color) => {
     console.log('selectColor clicked');
     $scope.selectedColor = color;
     console.log(`Selected Color: ${$scope.selectedColor}`);
     ctrl.hideGrid = 1;
   }
 
 
   // angular animations tips: https://forums.asp.net/t/2094767.aspx?AngularJS+How+to+move+a+div+from+bottom+to+up


}

angular.module('ColorApp').component('mainSearch', {
  template: `
      <section id="photos">

      <div class="home__search__bar" ng-if="selectedColor" style="background-color: {{ selectedColor}}; padding: 15px;" > 
        <search-bar get-photos="$ctrl.getPhotos(queryText, photoCategory, photoOrientation)" sort-by="$ctrl.sortBy(propertyName, sortOrder)" search-completed="$ctrl.searchCompleted"></search-bar>
      </div>

      <div class="color-grid  animate-show-hide" ng-hide="$ctrl.hideGrid">
        <a ng-repeat="color in $ctrl.colors" ng-click="selectColor(color)"> 
          <div class="color" id="{{ color }}"></div>
        </a>
      </div>

        <h2 ng-if="$ctrl.photos.length >= 1">Results</h2>

        <div ng-if="$ctrl.photos.length >= 1" class="resultsContainer">
        

          <div class="cardContainer" ng-click="$ctrl.imageColor(photo.largeImageURL)" ng-repeat="photo in $ctrl.photos">
            <img class="imageSize" src="{{ photo.largeImageURL }}" />
            <div class="imageTags cardSpec">{{ photo.tags }}</div>
            <div class="imageDetails cardSpec">
              <div>Downloads: {{ photo.downloads }}</div>
              <div>Views: {{ photo.views }}</div>
            </div>
          </div>
        </div>

        <div ng-if="$ctrl.photos.length < 1">
          <h3 style="color: red; font-weight: bold;">No results.</h3>
        </div>
        
      </section>
    `, // or use templateUrl
  controller: MainSearchController
});
