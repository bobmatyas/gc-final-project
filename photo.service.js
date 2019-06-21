function PhotoService($http) { 
  
  const service = this;
  service.favoriteArray = []

  service.getPhotos = (queryText, photoCategory, photoOrientation, selectedColor) => {
    return $http.get('https://pixabay.com/api/', {
      params: {
        key: '12720616-1db5a8f546ac81882f86afb32',
        lang: 'en',
        image_type: 'photo',
        safesearch: 'true',
        q: queryText,
        category: photoCategory,
        orientation: photoOrientation,
        colors: selectedColor,
      }
    });
  };

  // service.getIndividualPhoto = (id) => {
  //   return $http.get('https://pixabay.com/api/?', {
  //     params: {
  //       key: '12720616-1db5a8f546ac81882f86afb32', 
  //       id: id,
  //     }
  //   });
  // }   

  service.extractColor = (image) => {
    console.log("test");
    return $http.get('https://apicloud-colortag.p.mashape.com/tag-url.json', {
      headers:{
        'X-RapidAPI-Host': 'apicloud-colortag.p.rapidapi.com',
        'X-RapidAPI-Key': '54bc82a03cmshc3794caaabaadcfp1d96b5jsn243d8780d1bd'
      },
      params: {
        url: image
      }
    }).then((response) => {
      return response.data;
    }).catch( (error)=>{
      console.error(error);
    });
  }

  service.setFavorites = (id, largeFormatURL, webFormatURL, tags, downloads, views) =>{
    let newFavorite = {
      id: id,
      photo: largeFormatURL,
      photoWeb: webFormatURL,
      tags: tags, 
      downloads: downloads,
      views: views
    }
    console.log(newFavorite);
    service.favoriteArray.push(newFavorite);
    console.log(service.favoriteArray)
  }
  service.setRemoveFavorites = (favorite) =>{
    service.favoriteArray.splice(service.favoriteArray.indexOf(favorite), 1);
  }
  
  service.photo = '';

  service.selectedPhoto = (image) => {
    console.log('testing photo service');
    service.photo = image;
  }

  service.individualPhotoSave = (photo) => {
    PhotoService.photo = photo;
    $location.path('/photo');
  }


}

angular.module('ColorApp')
.service('PhotoService', ['$http', PhotoService])