
       angular.module('example1', ['mobile-toolkit-ra', 'RA.IPComponents']);
       angular.module('example1').controller('myCtrl',['$scope',
           function($scope) {
               $scope.config = {
                   value: "Header text"
               };
           }
       ]);
   