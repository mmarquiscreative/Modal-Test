var popupApp = angular.module('popupApp', ['ngAnimate', 'ui.router']);

angular.module('popupApp').controller('popUp', ['$scope', function($scope) {
  var pop = this;

    pop.isHidden = true;
    pop.modalClass = 'modal';
    pop.modalBtn = 'visible-btn';
    pop.modal = document.querySelector('.modal');
    
  pop.updateDisplay = function(){
      console.log(pop.modalClass);
      var testClass = pop.modalClass;
                
      if(testClass === 'modal'){
          pop.modalClass = 'modal-active';
          pop.modalBtn = 'hidden-btn';
          console.log('testing');
      } else if (testClass === 'modal-active') {
          pop.modalClass = 'modal';
          pop.modalBtn = 'visible-btn';
      } else {
          console.log('No match. current style is ' + pop.modalClass);
      }
      
            console.log(pop.modalClass);

  }

}]);