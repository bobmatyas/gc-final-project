angular.module('ColorApp').controller('PopupDemoCont', ['$scope','$modal',function ($scope, $modal) {
    $scope.open = function () {
    console.log('opening pop up');
    var modalInstance = $modal.open({
    template: `
    <body ng-app="ColorApp">
        <div ng-controller="PopupDemoCont">
            <h2 class="text-center">Angularjs-Popup</h2>
            <button ng-click="open()" class="btn btn-warning">Simple Popup</button>
        </div>
    </body>
    `,
    });
    }
    }]);