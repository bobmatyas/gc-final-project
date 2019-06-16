function PhotoController(PhotoService, $q) {


    var ctrl = this;
    this.service = PhotoService;

    ctrl.image = PhotoService.photo;

    ctrl.compColors = ["red", "orange", "yellow", "green", "turquoise"];


    ctrl.imageColor = (image) => {
      PhotoService.extractColor(image)
        .then( (response) => {
          console.log(`color scheme`);
          console.log(response);
          ctrl.colorScheme = response.tags;
          console.log(response.data);
          }
        )
        .catch( function(error) {
          console.error(error);
          throw error;
        });
    }  
  };  


  // <a ng-repeat="color in $ctrl.colors" ng-click="selectColor(color)"> 
  //         <div class="color" id="{{ color }}"></div>
  // </a>
  
  angular.module('ColorApp').component('photo', {
    template: `
      <div class="photo-container">

        <div class="indiv-image">
            <img class="imageSize" id="indivPhoto" ng-src="{{ $ctrl.image }}" ng-click="$ctrl.imageColor($ctrl.image)" />
        </div>

        <div class="color-palette">
          <h2 class="comp-colors-title">Complimentary Colors</h2>

            <div class="color-grid2">
              <div ng-repeat="color in $ctrl.compColors" ng-click="selectColor(color)"> 
                <div class="color" id="{{ color }}"></div>
                <div class="comp-colors" ng-repeat="color in $ctrl.colorScheme">
                  <p>Color: {{ color.label }} / {{ color.color }}</p>
                </div>              
              </div>
            </div>
        </div>      
      </div>

      <div class="sep">
        <hr>
      </div>

      <h3>Similar Photos</h3>
      <!--Display thumbnails of other photos in random order--!>
      <div class="similar-photos">
          <div class="cardContainer">
                <a href="{{ photo.largeImageURL }}" download="{{ photo.largeImageURL }}">
                  <i class="material-icons">cloud_download</i>
                </a>
                <img class="imageSize" ng-src="{{ photo.largeImageURL }}" />
                <p ng-click="$ctrl.individualPhotoSave(photo.largeImageURL)"><a href="#!/photo">Choose Photo</a></p>
          </div>  

          <div class="cardContainer">
                <a href="{{ photo.largeImageURL }}" download="{{ photo.largeImageURL }}">
                  <i class="material-icons">cloud_download</i>
                </a>
                <img class="imageSize" ng-src="{{ photo.largeImageURL }}" />
                <p ng-click="$ctrl.individualPhotoSave(photo.largeImageURL)"><a href="#!/photo">Choose Photo</a></p>
          </div>

          <div class="cardContainer">
                <a href="{{ photo.largeImageURL }}" download="{{ photo.largeImageURL }}">
                  <i class="material-icons">cloud_download</i>
                </a>
                <img class="imageSize" ng-src="{{ photo.largeImageURL }}" />
                <p ng-click="$ctrl.individualPhotoSave(photo.largeImageURL)"><a href="#!/photo">Choose Photo</a></p>
          </div>

          <div class="cardContainer">
                <a href="{{ photo.largeImageURL }}" download="{{ photo.largeImageURL }}">
                  <i class="material-icons">cloud_download</i>
                </a>
                <img class="imageSize" ng-src="{{ photo.largeImageURL }}" />
                <p ng-click="$ctrl.individualPhotoSave(photo.largeImageURL)"><a href="#!/photo">Choose Photo</a></p>
          </div>
      </div>
      `, 
    controller: PhotoController,
  });