function BackgroundController(PhotoService) {
    var ctrl = this;

    this.service = PhotoService;
  
  }
  
  angular.module('ColorApp').component('background', {
    template: `
    <div class="bg-title" ng-if="$ctrl.service.hideBgTitle===0">
        <h1 class="title-pic headerColor">Find the perfect <span id="pic">picture.</span></h1> <h1 class="title-pal headerColor">Find the perfect <span id="pal">palette.</span></h1>
        <h2 class="title-all headerColor">All in one place.</h2>
    </div>

    <div class="backgroundBody">
        <div class="rowContainer">
            <div class="row1"></div><div class="row2"></div><div class="row3"></div><div class="row4"></div><div class="row2"></div><div class="row1"></div><div class="row2"></div><div class="row5"></div><div class="row3"></div><div class="row4"></div><div class="row2"></div><div class="row5"></div><div class="row3"></div><div class="row2"></div><div class="row4"></div><div class="row1"></div><div class="row2"></div><div class="row1"></div><div class="row4"></div><div class="row2"></div><div class="row5"></div><div class="row1"></div><div class="row2"></div><div class="row1"></div><div class="row4"></div><div class="row2"></div><div class="row2"></div><div class="row1"></div><div class="row4"></div><div class="row2"></div><div class="row5"></div><div class="row1"></div><div class="row2"></div><div class="row5"></div><div class="row3"></div><div class="row2"></div>
        </div>
        <div class="rowContainer">
            <div class="row3"></div><div class="row1"></div><div class="row4"></div><div class="row2"></div><div class="row5"></div><div class="row4"></div><div class="row1"></div><div class="row4"></div><div class="row3"></div><div class="row5"></div><div class="row3"></div><div class="row5"></div><div class="row2"></div><div class="row4"></div><div class="row3"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div><div class="row4"></div><div class="row1"></div><div class="row1"></div><div class="row3"></div><div class="row4"></div><div class="row1"></div><div class="row2"></div><div class="row5"></div><div class="row4"></div><div class="row2"></div><div class="row4"></div><div class="row3"></div>
        </div>
        <div class="rowContainer">
            <div class="row1"></div><div class="row4"></div><div class="row3"></div><div class="row1"></div><div class="row4"></div><div class="row3"></div><div class="row4"></div><div class="row2"></div><div class="row5"></div><div class="row3"></div><div class="row5"></div><div class="row3"></div><div class="row4"></div><div class="row1"></div><div class="row5"></div><div class="row3"></div><div class="row2"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div><div class="row5"></div><div class="row3"></div><div class="row2"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div><div class="row2"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div><div class="row4"></div><div class="row2"></div><div class="row3"></div><div class="row1"></div><div class="row2"></div><div class="row5"></div>
        </div>
        <div class="rowContainer">
            <div class="row3"></div><div class="row1"></div><div class="row5"></div><div class="row3"></div><div class="row1"></div><div class="row5"></div><div class="row1"></div><div class="row4"></div><div class="row2"></div><div class="row5"></div><div class="row3"></div><div class="row5"></div><div class="row2"></div><div class="row5"></div><div class="row4"></div><div class="row1"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div><div class="row5"></div><div class="row4"></div><div class="row1"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div><div class="row5"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div><div class="row5"></div><div class="row1"></div><div class="row3"></div><div class="row5"></div><div class="row3"></div><div class="row5"></div><div class="row4"></div>
        </div>
        <div class="rowContainer">
            <div class="row2"></div><div class="row3"></div><div class="row1"></div><div class="row5"></div><div class="row3"></div><div class="row2"></div><div class="row4"></div><div class="row3"></div><div class="row1"></div><div class="row2"></div><div class="row4"></div><div class="row1"></div><div class="row5"></div><div class="row3"></div><div class="row2"></div><div class="row3"></div><div class="row5"></div><div class="row2"></div><div class="row5"></div><div class="row4"></div><div class="row2"></div><div class="row2"></div><div class="row3"></div><div class="row2"></div><div class="row5"></div><div class="row4"></div><div class="row3"></div><div class="row5"></div><div class="row2"></div><div class="row4"></div><div class="row3"></div><div class="row2"></div><div class="row1"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div>
        </div>
     </div> `,
    controller: BackgroundController,
  });