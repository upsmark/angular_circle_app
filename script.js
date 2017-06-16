var app = angular.module('circleArea',[]);

app.controller('myCtrl', function($scope){

        $scope.area = [];

        $scope.submit = function(radius){

         $scope.area.push ((radius * radius) * Math.PI);

        }
    });
