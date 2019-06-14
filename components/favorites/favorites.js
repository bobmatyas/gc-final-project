function FavoritesPageController(PhotoService) {
    const ctrl = this;

    ctrl.favoriteArray = PhotoService.favoriteArray;
    console.log(ctrl.favoriteArray);
    
   
  ctrl.setRemoveFavorites = (removeParam) => {
    PhotoService.setRemoveFavorites(removeParam)
    console.log("you removed it!");
  }

 
  }
  
  angular
  .module('ColorApp')
  .component('favoritesPage', {
    template: `
    <div class="contentContainer">
    <h2>FAVORITES<h2>
    <div class="resultsContainer">
        <div class="cardContainer" ng-click="$ctrl.imageColor(photo.largeImageURL)" ng-repeat="photo in $ctrl.favoriteArray">
            <div class="favorite" ng-click="$ctrl.setRemoveFavorites(photo)">
                <i class="material-icons favoriteIcon whiteIcon">remove_circle</i>
                <i class="material-icons favoriteIcon redIcon">remove_circle_outline</i>
            </div>
            <img class="imageSize" src="{{ photo.largeImageURL }}" />
            <div class="imageTags cardSpec">{{ photo.tags }}</div>
            <div class="imageDetails cardSpec">
            <div>Downloads: {{ photo.downloads }}</div>
            <div>Views: {{ photo.views }}</div>
            </div>
        </div>
    </div>
    </div>`,
    controller: FavoritesPageController,
});