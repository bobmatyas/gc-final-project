function PhotoCardController($scope) {
  
  var ctrl = this;

  ctrl.colorHex = $scope.selectedColorHex;
}

angular.module('ColorApp').component('photoCard', {
  template: ` 
  
    <div class="card__image__container" style="background-image: url({{ $ctrl.photoWeb }});" ng-click="$ctrl.individualPhotoSave({photo: $ctrl.photo})">

    </div>

    <div class="card__info__box">
    
      <div class="card__info__box__favorite">
        <i class="material-icons card__info__box__favorite__button"  ng-click="$ctrl.addFavorite({id: $ctrl.id, largeFormatURL: $ctrl.photo, webFormatURL: $ctrl.photoWeb, tags: $ctrl.tags, views: $ctrl.views, downloads: $ctrl.downloads})"></i>
      </div>

      <div class="card__info__box__popularity">
        <h3>Popularity</h3>

        <p>
          <strong>Downloads:</strong>  {{ $ctrl.downloads | number}} <br />
          <strong>Views:</strong> {{ $ctrl.views | number }}
        </p>

        <h3 ng-if="$ctrl.tags">Tags</h3>

        <p ng-if="$ctrl.tags">{{ $ctrl.tags }}</p>

      </div>

      <div class="card__button__holder">
        <button class="button--card button" style="background-color: {{ $ctrl.color }};" ng-click="$ctrl.individualPhotoSave({photo: $ctrl.photo})">Get Palette</button>
      </div>

    </div>


    `, // or use templateUrl
  controller: PhotoCardController,
  bindings: {
    photo: '<',
    photoWeb: '<',
    tags: '<',
    downloads: '<',
    views: '<',
    individualPhotoSave: '&',
    addFavorite: '&',
    color: '<',
    id: '<',
  }
});