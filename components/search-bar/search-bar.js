function SearchBarController() {

  var ctrl = this;

  /** 
   * A static array of categories for the search.
   * The category list is provided by Pixabay. 
  */

  ctrl.photoCategories = [
    'animals', 
    'backgrounds', 
    'buildings', 
    'business', 
    'computer', 
    'education', 
    'fashion', 
    'feelings', 
    'food', 
    'health', 
    'industry', 
    'music', 
    'nature', 
    'people', 
    'places', 
    'religion', 
    'science', 
    'sports', 
    'transportation', 
    'travel'
  ]; 


  /** 
   * A static array of photo orientations.
   * The orientation list is provided by Pixabay. 
  */

  ctrl.photoOrientations = [
    'all',
    'horizontal',
    'vertical'
  ];


}

angular.module('ColorApp').component('searchBar', {
  template: `
        <h2>Search</h2>
        <input type="text" maxlength="100" ng-model="$ctrl.photoSearch" placeholder="what type of image?" ng-keypress="($event.charCode==13)? $ctrl.getPhotos($ctrl.photoSearch, $ctrl.photoCategory, $ctrl.photoOrientation) : return" />
        <select ng-model="$ctrl.photoCategory">
          <option value="" disabled selected hidden>Please Choose... </option>
          <option value=""></option>
          <option ng-repeat="category in $ctrl.photoCategories" value="{{ category }}"> {{ category.charAt(0).toUpperCase()+ category.substr(1).toLowerCase()  }}</option>
        </select>
        <select ng-model="$ctrl.photoOrientation"> 
          <option ng-repeat="orientation in $ctrl.photoOrientations" value="{{ orientation }}"> {{ orientation.charAt(0).toUpperCase()+ orientation.substr(1).toLowerCase()  }}</option>
        </select>
        <button class="button-green" ng-click="$ctrl.getPhotos({queryText: $ctrl.photoSearch, photoCategory: $ctrl.photoCategory, photoOrientation: $ctrl.photoOrientation})">
          Search
        </button>
        
    `, // or use templateUrl
  controller: SearchBarController,
  bindings: {
    getPhotos: "&",
  }
});