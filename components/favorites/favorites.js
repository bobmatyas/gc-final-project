function FavoritesPageController(PhotoService) {
    const ctrl = this;

    ctrl.favoriteArray = PhotoService.favoriteArray;

    console.log('favorites');

    console.log(ctrl.favoriteArray);
    
    ctrl.addFavorite = (id, largeFormatURL, webFormatURL, tags, downloads, views) => {
      PhotoService.setFavorites(id, largeFormatURL, webFormatURL, tags, downloads, views);
      console.log(id, largeFormatURL, webFormatURL, tags, downloads, views)
      console.log("you clicked it");
    }

    ctrl.setRemoveFavorites = (favorite) => {
      PhotoService.setRemoveFavorites(favorite)
      console.log("you removed it!");
    }

  }
  
  angular
  .module('ColorApp')
  .component('favoritesPage', {
    template: `
    <div ng-if="$ctrl.favoriteArray.length >= 1" class="resultsContainer">

      <div class="card" ng-repeat="photo in $ctrl.favoriteArray"> 
        <photo-card photo="photo.photo" photo-web="photo.photoWeb" tags="photo.tags" downloads="photo.downloads" id="photo.id" views="photo.views" individual-photo-save="$ctrl.individualPhotoSave(photo)" set-remove-favorites="$ctrl.setRemoveFavorites(favorite)" color="selectedColor"></photo-card>
      </div>
    </div>
  `,
    controller: FavoritesPageController,
});