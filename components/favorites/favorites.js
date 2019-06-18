function FavoritesPageController(PhotoService) {
    const ctrl = this;

    ctrl.favoriteArray = PhotoService.favoriteArray;

    console.log('favorites');

    console.log(ctrl.favoriteArray);
    
   

 
  }
  
  angular
  .module('ColorApp')
  .component('favoritesPage', {
    template: `
    <div ng-if="$ctrl.favoriteArray.length >= 1" class="resultsContainer">

      <div class="card" ng-repeat="photo in $ctrl.favoriteArray"> 
        <photo-card photo="photo.largeImageURL" photo-web="photo.photoWeb" tags="photo.tags" downloads="photo.downloads" id="photo.id" views="photo.views" individual-photo-save="$ctrl.individualPhotoSave(photo)" add-favorite="$ctrl.addFavorite(favorite)" color="selectedColor"></photo-card>
      </div>
    </div>
  `,
    controller: FavoritesPageController,
});