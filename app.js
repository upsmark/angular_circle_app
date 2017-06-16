var app = angular.module('circleArea');

app.directive('areaDirective', function(){
      return {
        restrict: "E",
        templateUrl: "area.html",
        replace: false
      };


});
