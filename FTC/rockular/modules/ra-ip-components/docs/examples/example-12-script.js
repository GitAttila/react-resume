
       angular.module('example4', ['mobile-toolkit-ra', 'RA.IPComponents']);
       angular.module('example4').controller('myCtrl',['$scope',
           function($scope) {
               $scope.config = {
                   image: {
                       url: '../grunt-styles/docs/ra-logo.svg',
                       alt: 'Rockwell Automation'
                   },
                   mainTitle: {
                       value: 'Main title'
                   }
               };
           }
       ]);
   