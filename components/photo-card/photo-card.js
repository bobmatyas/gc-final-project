function PhotoCardController($scope, PhotoService) {
  
  var ctrl = this;

  this.service = PhotoService;

  ctrl.colorHex = $scope.selectedColorHex;
}

angular.module('ColorApp').component('photoCard', {
  template: ` 
  
    <div class="card__image__container" style="background-image: url({{ $ctrl.photoWeb }});" ng-click="$ctrl.individualPhotoSave({photo: $ctrl.photo})">

    </div>

    <div class="card__info__box">
    
      <div class="card__info__box__favorites">
        <i ng-if="$ctrl.service.isInFavorites($ctrl.id)===false" class="material-icons card__info__box__favorite__button"  ng-click="$ctrl.addFavorite({id: $ctrl.id, largeFormatURL: $ctrl.photo, webFormatURL: $ctrl.photoWeb, tags: $ctrl.tags, views: $ctrl.views, downloads: $ctrl.downloads})">favorite_outline</i>
        <i ng-if="$ctrl.service.isInFavorites($ctrl.id)!==false" class="material-icons card__info__box__favorite__button"  ng-click="$ctrl.service.setRemoveFavorites($ctrl.id)">favorite</i>
      </div>

      <div class="card__info__box__popularity">

        <p class="specText">
          <span class="boldText">Downloads:</span>  {{ $ctrl.downloads | number}} <br />
          <span class="boldText">Views:</span> {{ $ctrl.views | number }}
        </p>
        <p ng-if="$ctrl.tags" class="specText">
        <span class="boldText">Tags:</span> {{ $ctrl.tags }}</p>

      </div>

      <div class="card__button__holder">
        <button class="button--card button {{ $ctrl.color }}" ng-click="$ctrl.individualPhotoSave({photo: $ctrl.photo})">Get Palette</button>
      </div>
    </div>
    `,
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