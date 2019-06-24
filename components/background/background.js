function BackgroundController() {
    var ctrl = this;
  
  }
  
  angular.module('ColorApp').component('background', {
    template: `
    <div class="backgroundBody">
        <div class="rowContainer">
            <div class="row1"></div><div class="row2"></div><div class="row3"></div><div class="row4"></div><div class="row2"></div><div class="row1"></div><div class="row2"></div><div class="row5"></div><div class="row3"></div><div class="row4"></div><div class="row2"></div><div class="row5"></div><div class="row3"></div><div class="row2"></div><div class="row4"></div><div class="row1"></div><div class="row2"></div><div class="row1"></div><div class="row4"></div><div class="row2"></div><div class="row5"></div><div class="row1"></div><div class="row2"></div><div class="row1"></div><div class="row4"></div><div class="row2"></div><div class="row2"></div><div class="row1"></div><div class="row4"></div><div class="row2"></div>
        </div>
        <div class="rowContainer">
            <div class="row3"></div><div class="row1"></div><div class="row4"></div><div class="row2"></div><div class="row5"></div><div class="row4"></div><div class="row1"></div><div class="row4"></div><div class="row3"></div><div class="row5"></div><div class="row3"></div><div class="row5"></div><div class="row2"></div><div class="row4"></div><div class="row3"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div><div class="row4"></div><div class="row1"></div><div class="row1"></div><div class="row3"></div><div class="row4"></div><div class="row1"></div>
        </div>
        <div class="rowContainer">
            <div class="row1"></div><div class="row4"></div><div class="row3"></div><div class="row1"></div><div class="row4"></div><div class="row3"></div><div class="row4"></div><div class="row2"></div><div class="row5"></div><div class="row3"></div><div class="row5"></div><div class="row3"></div><div class="row4"></div><div class="row1"></div><div class="row5"></div><div class="row3"></div><div class="row2"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div><div class="row5"></div><div class="row3"></div><div class="row2"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div><div class="row2"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div>
        </div>
        <div class="rowContainer">
            <div class="row3"></div><div class="row1"></div><div class="row5"></div><div class="row3"></div><div class="row1"></div><div class="row5"></div><div class="row1"></div><div class="row4"></div><div class="row2"></div><div class="row5"></div><div class="row3"></div><div class="row5"></div><div class="row2"></div><div class="row5"></div><div class="row4"></div><div class="row1"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div><div class="row5"></div><div class="row4"></div><div class="row1"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div><div class="row5"></div><div class="row4"></div><div class="row1"></div><div class="row3"></div><div class="row5"></div>
        </div>
     </div> `,
    controller: BackgroundController,
  });