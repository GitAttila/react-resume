
 angular.module('example1', ['mobile-toolkit-ra', 'RA.IPComponents']);
    angular.module('example1').controller('myCtrl',['$scope',
        function($scope) {
            $scope.config = {
               text: "No data message.",
               action: {
                    align: 'center',
                    actions: [
                        {
                            class: 'ra-btn-primary',
                            disabled: false,
                            onAction: function() {
                                alert("Called function");
                            },
                            value: 'Some text',
                            size: 'small'
                        }
                    ]
                }
            };
        }
    ]);
