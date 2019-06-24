angular.module('ColorApp').controller('PopupDemoCont', ['$scope','$modal',function ($scope, $modal) {
    $scope.open = function () {
    console.log('opening pop up');
    var modalInstance = $modal.open({
        template: `
        <div>
            <h2 class="text-center">Angularjs-Popup</h2>
            <button ng-click="open()" class="btn btn-warning">Simple Popup</button>
        </div>
          `,
    });
    }
    }]);




// function PopupDemoCont($scope, $modal ) {
//     $scope.open = function () {
//         console.log('opening pop up');
//         var modalInstance = $modal.open;
// };  


//   angular.module('ColorApp').component('photo', {
//     template: `
//     <div>
//         <h2 class="text-center">Angularjs-Popup</h2>
//         <button ng-click="open()" class="btn btn-warning">Simple Popup</button>
//     </div>
//       `, 
//     controller: PopupDemoCont,
//   })
// };
