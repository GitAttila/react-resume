
       angular.module('example3', ['mobile-toolkit-ra', 'RA.IPComponents']);
       angular.module('example3').controller('myCtrl',['$scope',
           function($scope) {
               $scope.config = {
                   image: {
                       url: '../grunt-styles/docs/ra-logo.svg',
                       alt: 'Rockwell Automation'
                   },
                   titleAlign: 'row',
                   mainTitle: {
                       value: 'Main title'
                   },
                   subtitle: {
                       value: 'Subtitle'
                   }
               };
           }
       ]);
   