function PhotoController(PhotoService, $q, $scope) {
    var ctrl = this;
    this.service = PhotoService;

    ctrl.image = PhotoService.photo;

    ctrl.color = PhotoService.color;

    ctrl.addFavorite = (id, largeFormatURL, webFormatURL, tags, downloads, views) => {
      PhotoService.setFavorites(id, largeFormatURL, webFormatURL, tags, downloads, views);
      console.log(id, largeFormatURL, webFormatURL, tags, downloads, views)
      console.log("you clicked it");
    }

    ctrl.imageColor = (image) => {
      PhotoService.extractColor(image)
        .then( (response) => {
          console.log(`color scheme`);
          console.log(response);
          response.tags.forEach( (color, index) => {
            response.tags[index].rgb = ctrl.hexToRgb(color.color);
          })

          ctrl.colorScheme = response.tags;
          console.log(`response tags: ${response.tags}`);
          /* needs to test: builds copyable palette */
          ctrl.buildCopyablePalette(response.tags);
          console.log(response.data);
          }
        )
        .catch( function(error) {
          console.error(error);
          throw error;
        });
    }

    ctrl.hexToRgb = (color) =>  {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);

      var red = parseInt(result[1], 16);
      var green = parseInt(result[2], 16)
      var blue = parseInt(result[3], 16)
      var rgbPalette = `(${red}, ${green}, ${blue})`;

      return rgbPalette;
    }

    ctrl.colorTest = [ 
      { label: "Green", color: "#597176"},
      { label: "Gray", color: "#5D5F5F"},
      { label: "Pink", color: "#BFCCCD"},
      { label: "Beige", color: "#98987B"},
      { label: "Brown", color: "#7F746C"},
      { label: "Blue", color: "#3D809C"},
      { label: "Cyan", color: "#78A7B2"}
    ];

    ctrl.copyablePalette = '';

    ctrl.buildCopyablePalette = (colorTest) => {
      colorTest.forEach( function(element) {
        ctrl.copyablePalette += `${element.label} / ${element.color} / ${element.rgb} \n`
        //console.log(ctrl.copyablePalette);
      });

    }

    ctrl.$onInit = function() {
      ctrl.copyablePalette = [];
      ctrl.buildCopyablePalette(ctrl.colorTest);
    };

  };  
  


  angular.module('ColorApp').component('photo', {
    template: `
    <div class="total-container">
    <div class="photo-container">
      <div class="indiv-image">
        <img
          class="imageSize"
          id="indivPhoto"
          ng-src="{{ $ctrl.image }}"
          ng-click="$ctrl.imageColor($ctrl.image)"
        />
        <div class="photo-bar">
          <div class="">
            <i class="material-icons">save_alt</i>
          </div>
          <div><p>Right Click, "Save As" (cmd+click) to save image</p></div>
        </div>
      </div>
  
      <div class="color-palette">
        <div>
          <h1 class="comp-colors-title">Need design inspiration?</h1>
          <h2>
            Click the image for complimentary colors you can use with this photo.
          </h2>
          <br />
        </div>
  
        <div class="comp-colors2">

          <div class="comp-colors" ng-repeat="color in $ctrl.colorScheme">
            <div class="color2" style="background-color: {{ color.color }}; "></div>
            <p class="color2__label">
              {{ color.label }} <br /><br />
              HEX: <br />
              {{ color.color }} <br /><br />
              RGB: {{ color.rgb }}
            </p>
            </div>
          </div>

          <button class="button" ngclipboard data-clipboard-text="{{ $ctrl.copyablePalette }}">
            <i class="material-icons md-18" style="font-size: 16px;">file_copy</i> Copy to clipboard
          </button>

        </div>
         


      </div>
    </div>
  </div>
  `, 
    controller: PhotoController,
    bindings: {
    photo: '<',
    photoWeb: '<',
    tags: '<',
    downloads: '<',
    views: '<',
    individualPhotoSave: '&',
    addFavorite: '&',
    color: '<',
    id: '<'
    }
  });