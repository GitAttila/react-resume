
       angular.module('example2', ['mobile-toolkit-ra', 'RA.IPComponents']);
       angular.module('example2').controller('myCtrl',['$scope',
           function($scope) {
               $scope.config = {
                   icon: {
                       class: 'ra-icon-home'
                   },
                   mainTitle: {
                       value: 'Main title'
                   },
                   subtitle: {
                       value: 'Subtitle'
                   }
               };
           }
        ]);
   