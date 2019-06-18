function PhotoController(PhotoService, $q) {


    var ctrl = this;
    this.service = PhotoService;

    ctrl.image = PhotoService.photo;

    //need to pull actual complimentary colors from API
    // ctrl.compColors = ["red", "orange", "yellow", "green", "turquoise"];

    ctrl.addFavorite = (favoriteParam) => {
      PhotoService.setFavorites(favoriteParam);
      console.log("you clicked it");
    }

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
  
  angular.module('ColorApp').component('photo', {
    template: `
  <div class="total-container">
    <div class="photo-container">
      <div class="indiv-image">
        <img class="imageSize" id="indivPhoto" ng-src="{{ $ctrl.image }}" ng-click="$ctrl.imageColor($ctrl.image)" />
          <div class="photo-bar">
            <div class="card__info__box__favorite">
              <i class="material-icons card__info__box__favorite__button"  ng-click="$ctrl.addFavorite({favorite: $ctrl.photo})"></i>
            </div>
          </div>
      </div>

      <div class="color-palette">
        <div>
          <h2 class="comp-colors-title">Need design inspiration?</h2>
          <h3>Click the image for complimentary colors you can use with this photo.</h3><br>
        </div>
         
        <div class="color-grid2">
          <div class="comp-colors2"> 
            <div class="comp-colors" ng-repeat="color in $ctrl.colorScheme">
              <div class="color2" style="background-color: {{ color.color}}; " ></div>
                <p>{{ color.label }} <br> {{ color.color }} </p>
              </div>
            </div>              
          </div>
        </div>      
      </div>

      <div class="sep">
        <hr>
      </div>
    </div>
  </div>
      `, 
    controller: PhotoController,
  });