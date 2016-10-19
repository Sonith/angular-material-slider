/*

Written for Rentping.
If you can, then leave this comment as it is.
v1.0

*/
angular.module('angular-material-slider', []).directive('mSlider', mSlider);

mSlider.$inject = ['$animate'];

function mSlider($animate) {

  return {
	//only as an element
    restrict: 'E', 
    require: 'ngModel',
    scope: {
      lText			:'@',
      rText			:'@',
      trueColor 	:'@',
      falseColor	:'@',
      value			:'=ngModel'
    },
    template: 	"<span ng-click='sliderClickEvent()' layout flex class='rslider md-caption'>" +
    				"<span flex class='rslide-left' layout layout-align='center center'>" +
    					"{{lText}}" +
    				"</span>" +
	    			"<span flex class='rslide-right' layout layout-align='center center'>" +
	    				"{{rText}}" +
					"</span>" +
				"</span>",

	link: function($scope, element, attrs, ctrl) {
    	
		var falseColor = $scope.falseColor || "grey";
		var trueColor = $scope.trueColor || "green";
    	var rslider = angular.element(element[0].querySelector('.rslider'));
    	rslider.css({'position' : 'relative', 'color' : 'white', 'border-radius' : '6px', 'overflow' : 'hidden', 'box-shadow' : '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'});
    	var sliderAnimate = sliderAnimate || angular.element('<span>').addClass('slider ng-animate-enabled');

    	var left = angular.element(element[0].querySelector('.rslide-left'));
    	var right = angular.element(element[0].querySelector('.rslide-right'));
    	left.css({'padding' : '4px 8px'});
    	right.css({'padding' : '4px 8px'});
    	
    	$scope.sliderClickEvent = function() {
    		p = performance.now();
        	if (!$scope.value) {
        		right.css({'background-color' : trueColor, 'box-shadow' : 'none'});
        		left.css({'background-color' : falseColor, 'box-shadow' : 'inset -5px 0px 8px -3px rgba(0,0,0,0.6)'});
        		rslider.css({'background-color' : falseColor});
	    		$animate.enter(sliderAnimate, rslider).then(function() {
	    			$scope.value = !$scope.value;
	    			ctrl.$setViewValue($scope.value);
				});
        	}
        	else {
        		right.css({'background-color' : falseColor, 'box-shadow' : 'inset 5px 0px 8px -3px rgba(0,0,0,0.6)'});
        		left.css({'background-color' : trueColor, 'box-shadow' : 'none'});
        		rslider.css({'background-color' : trueColor});
	    		$animate.leave(sliderAnimate, rslider).then(function() {
	    			$scope.value = !$scope.value;
	    			ctrl.$setViewValue($scope.value);
				});
        	}
		};

		function updateSlider() {
			if ($scope.value === true) {
				left.css({'background-color' : falseColor, 'cursor' : 'pointer', 'box-shadow' : 'inset -5px 0px 8px -3px rgba(0,0,0,0.6)'});
				right.css({'background-color' : trueColor, 'cursor' : 'default', 'box-shadow' : 'none'});
				rslider.css({'background-color' : falseColor});
				right.bind('click', function(e) {
					e.stopPropagation();
				});
				left.unbind('click');
			} else {
				left.css({'background-color' : trueColor, 'cursor' : 'default', 'box-shadow' : 'none'});
				right.css({'background-color' : falseColor, 'cursor' : 'pointer', 'box-shadow' : 'inset 5px 0px 8px -3px rgba(0,0,0,0.6)'});
				rslider.css({'background-color' : trueColor});
				left.bind('click', function(e) {
					e.stopPropagation();
				});
				right.unbind('click');
			}
		}
      	
		$scope.$watch('value',  function(newVal, oldVal) {
			updateSlider();
		});
	}
  };
}