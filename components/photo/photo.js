function PhotoController(PhotoService, $q, $scope) {
    var ctrl = this;
    this.service = PhotoService;

    ctrl.image = PhotoService.photo;

    ctrl.color = PhotoService.color;

    ctrl.addFavorite = (id, largeFormatURL, webFormatURL, tags, downloads, views) => {
      PhotoService.setFavorites(id, largeFormatURL, webFormatURL, tags, downloads, views);
      console.log(id, largeFormatURL, webFormatURL, tags, downloads, views)
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

    let hexToRgb = (color) =>  {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }

    console.log(hexToRgb);
  };  
  
{/* <div class="photo-bar">
            <div class="card__info__box__favorite">
              <i class="material-icons card__info__box__favorite__button"  ng-click="$ctrl.addFavorite(id, largeFormatURL, webFormatURL, tags, downloads, views)" color="selectedColor""></i>
            </div>
          </div> */}


  angular.module('ColorApp').component('photo', {
    template: `
  <div class="total-container">
    <div class="photo-container">
      <div class="indiv-image">
        <img class="imageSize" id="indivPhoto" ng-src="{{ $ctrl.image }}" ng-click="$ctrl.imageColor($ctrl.image); hexToRgb(color.color)" />
          <div class="photo-bar">
            <div class="card__info__box__favorite">
              <i class="material-icons card__info__box__favorite__button"  ng-click="$ctrl.addFavorite(id, largeFormatURL, webFormatURL, tags, downloads, views)"></i>
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
                <p>{{ color.label }} <br> HEX: {{ color.color }} <br> RGB: {{ hex-to-rgb }}</p>
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
    bindings: {
    photo: '<',
    photoWeb: '<',
    tags: '<',
    downloads: '<',
    views: '<',
    individualPhotoSave: '&',
    addFavorite: '&',
    color: '<',
    id: '<'
    }
  });