
    angular.module('example1', ['mobile-toolkit-ra', 'RA.IPComponents']);
    angular.module('example1').controller('myCtrl',['$scope',
        function($scope) {
            $scope.config = {
                template: '<ra-ip-card>' +
                '<span style="display:block; padding:30px 20px;">test</span></ra-ip-card>',
                items:[{

                },{}]
            };
        }
    ]);
