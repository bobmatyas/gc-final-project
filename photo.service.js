function PhotoService($http) { 
  
  const service = this;

  service.getPhotos = () => {
    return $http.get('https://pixabay.com/api/?key=12720616-1db5a8f546ac81882f86afb32lang=en&image_type=photo&colors=green');
  };

  service.getIndividualPhoto = (id) => {
    return $http.get('https://pixabay.com/api/?', {
      params: {
        key: '12720616-1db5a8f546ac81882f86afb32', 
        id: id,
      }
    });
  }   

  service.getColorPalette = (image) => {
    let data = { 'url': 'https://pixabay.com/get/52e2d0414a51a514f6da8c7dda79367c123ddee352576c4870297bd49644c65fb0_1280.jpg'};
    data = JSON.stringify(data);
    return $http({
      url: "https://colors.rmotr.com/api/extract",
      headers: {
        'content-type': 'application/json',
      },
      method: "POST",
      data: data, 
    }).then((response) => {
      return response.data;
    });
  }

  service.extractColor = (image) => {
    var request = require('request'),
      apiKey = 'acc_97e76501eb9cf68',
      apiSecret = '25aaff8a117e817c40931623f3d17375',
      imageUrl = 'https://imagga.com/static/images/tagging/wind-farm-538576_640.jpg';

    request.get('https://api.imagga.com/v2/colors?image_url='+encodeURIComponent(imageUrl), function (error, response, body) {
      console.log('Status:', response.statusCode);
      console.log('Headers:', JSON.stringify(response.headers));
      console.log('Response:', body);
    }).auth(apiKey, apiSecret, true);
  }

}

angular.module('ColorApp')
.service('PhotoService', ['$http', PhotoService])