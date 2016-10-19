# Angular Material Slider Directive v1.0

This directive let you create a slider element if you're using angular material framework.
I hope this will save you a couple of minutes.

## Dependencies
None



Load this directive with the following code:
```html
<script type="text/javascript" src="angular-material-slider.js"></script>
```

Add a dependency to the module in your own module.
```js
var app = angular.module('ModuleName', ['angular-material-slider']);
```

Use the directive in your HTML files with the following code:
```html
<m-slider flex="25" l-text="Music" r-text="Movie" ng-model="viewModel.selection" ng-change="viewModel.sliderChange()"></m-slider>
```

### Parameters
- l-text (string: required)
- r-text (string: required)
- ng-model (boolean: required)
	binds to the property on your controller.
- true-color (color)
	if you change this, remember to update the css, both background-color and color in '.slide-animation .slider'.
- false-color (color)

Take a look at index.html or [a link](https://sonith.github.io/angular-material-slider/) for a demo.


## License
You may use it however you want.
If you can, then leave the comment in js file as it is.