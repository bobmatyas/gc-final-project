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
        <p>
          <strong>Downloads:</strong>  {{ $ctrl.downloads | number}} <br />
          <strong>Views:</strong> {{ $ctrl.views | number }}
        </p>

        <p ng-if="$ctrl.tags"><strong>Tags</strong><p>

        <p ng-if="$ctrl.tags">{{ $ctrl.tags }}</p>

      </div>

      <div class="card__button__holder">
        <button class="button--card button {{ $ctrl.color }}" ng-click="$ctrl.individualPhotoSave({photo: $ctrl.photo})">Get Palette</button>
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
    setRemoveFavorites: '&',
    color: '<',
    id: '<',
  }
});