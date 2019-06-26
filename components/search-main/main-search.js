function MainSearchController(PhotoService, $q, $scope, $location) {

  var ctrl = this;
  this.service = PhotoService;


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

  // ctrl.colors = [
  //   {
  //     color:"grayscale",
  //     hex:
  //   } "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "gray", "black","brown"];

  ctrl.colors = [
    {
      color:"grayscale",
      hex:"#d7dee3"
    },
    {
      color:"orange",
      hex:"#FF9800"
    },
    {
      color:"red",
      hex:"#F44336"
    },
    {
      color:"yellow",
      hex:"#FFEB3B"
    },
    {
      color:"green",
      hex:"#8BC34A"
    },
    {
      color:"turquoise",
      hex:"#009688"
    },
    {
      color:"blue",
      hex:"#03A9F4"
    },
    {
      color:"purple",
      hex:"#9C27B0"
    },
    {
      color:"pink",
      hex:"#E91E63"
    },
    {
      color:"gray",
      hex:"#9E9E9E"
    },
    {
      color:"black",
      hex:"#0f0f0f"
    },
    {
      color:"brown",
      hex:"#795548"
    }];

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
  //  $scope.hideBgTitle = 0;

 
   $scope.selectColor = (color) => {
     console.log('selectColor clicked');
     $scope.selectedColor = color.color;
     $scope.selectedColorHex = color.hex;
     console.log(`Selected Color: ${$scope.selectedColor}`);
     ctrl.hideGrid = 1;
     PhotoService.hideBgTitle = 1;
     PhotoService.hideWelcome = 1;
   }
 


  ctrl.addFavorite = (id, largeFormatURL, webFormatURL, tags, downloads, views) => {
    PhotoService.setFavorites(id, largeFormatURL, webFormatURL, tags, downloads, views);
    console.log(id, largeFormatURL, webFormatURL, tags, downloads, views)
    console.log("you clicked it");
  }

  /**
   * This function takes the individual photo and saves it in the service to
   * pass onto the individual photo page.
   * 
   * The $location.path uses the $location service to redirect to the photo
   * route.
   * 
   */

  ctrl.individualPhotoSave = (photo) => {
    PhotoService.photo = photo;
    $location.path('/photo');
  }
 
   // angular animations tips: https://forums.asp.net/t/2094767.aspx?AngularJS+How+to+move+a+div+from+bottom+to+up


}

angular.module('ColorApp').component('mainSearch', {
  template: `
    

      <div class="home__search__bar" ng-if="selectedColor" style="background-color: {{ selectedColorHex }};" > 
        <div class="backColorContainer">
          <span class="grayText">search </span><span class="backColor {{selectedColor}}Text">  {{ selectedColor }}  </span><span class="grayText"> photos</span>
        </div>
        <search-bar get-photos="$ctrl.getPhotos(queryText, photoCategory, photoOrientation, selectedColor)" color="selectedColor"></search-bar>
        
      </div>
      <div class="bodyBackground">
      <div class="color-grid  animate-show-hide" ng-hide="$ctrl.hideGrid">
        <a ng-repeat="color in $ctrl.colors" ng-click="selectColor(color)" class="color {{ color.color }}"> 
          <div class="colorText">
            {{ color.color }}
          </div>
        </a>
      </div>
      </div>

      <div class="welcome" ng-if="$ctrl.service.hideWelcome===0">
        <h1>Simply start searching by selecting a color.</h1>
      </div>

      <div class="search-results">

        <h2 ng-if="$ctrl.photos.length >= 1" class="search-results__heading">Results</h2>

        <div ng-if="$ctrl.photos.length >= 1" class="resultsContainer">

          <div class="card" ng-repeat="photo in $ctrl.photos"> 
            
            <photo-card 
              photo="photo.largeImageURL" 
              photo-web="photo.webformatURL" 
              tags="photo.tags" 
              downloads="photo.downloads" 
              id="photo.id" 
              views="photo.views" 
              individual-photo-save="$ctrl.individualPhotoSave(photo)"
              add-favorite="$ctrl.addFavorite(id, largeFormatURL, webFormatURL, tags, downloads, views)" 
              color="selectedColor">
            </photo-card>

          </div>
        </div>

        <div ng-if="$ctrl.photos.length < 1">
          <h3 style="color: red; font-weight: bold;">No results.</h3>
        </div>

      </div>

    `, // or use templateUrl
  controller: MainSearchController
});