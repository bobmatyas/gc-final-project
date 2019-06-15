function PhotoCardController() {
  
  var ctrl = this;


}

angular.module('ColorApp').component('photoCard', {
  template: `          
    <div class="favorite" ng-click="$ctrl.addFavorite({favorite: $ctrl.photo})">
      <i ng-hide="favorite" class="material-icons favoriteIcon whiteIcon" >favorite</i>
      <i ng-show="favorite" class="material-icons favoriteIcon redIcon" >favorite</i>
      <i class="material-icons favoriteIcon redIcon">favorite_border</i>
    </div>
    <a href="{{ $ctrl.photo.largeImageURL }}" download="{{ photo.largeImageURL }}">
    <i class="material-icons">cloud_download</i>
    </a>
    <img class="imageSize" ng-src="{{ $ctrl.photo }}" />
    <div class="imageTags cardSpec">{{ $ctrl.tags }}</div>
    <div class="imageDetails cardSpec">
      <div>Downloads: {{ $ctrl.downloads }}</div>
      <div>Views: {{ $ctrl.views }}</div>
    </div>
    
    <p ng-click="$ctrl.individualPhotoSave({photo: $ctrl.photo})"><a href="#!/photo">Choose Photo</a></p>

    `, // or use templateUrl
  controller: PhotoCardController,
  bindings: {
    photo: '<',
    tags: '<',
    download: '<',
    views: '<',
    individualPhotoSave: '&',
    addFavorite: '&',
  }
});