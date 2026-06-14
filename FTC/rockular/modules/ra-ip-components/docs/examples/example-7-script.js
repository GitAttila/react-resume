
    angular.module('example1', ['mobile-toolkit-ra', 'RA.IPComponents']);
    angular.module('example1')
        .controller('myCtrl',['$scope',
            function($scope) {
                $scope.config = {
                    numberOfColumns: 3,
                    items: [
                        {
                            label: "label 1",
                            value: "value 1"
                        },
                        {
                            label: "label 2",
                            value: "value 2"
                        },
                        {
                            label: "label 3",
                            value: "value 3"
                        },
                        {
                            label: "label 4",
                            value: "value 4"
                        },
                        {
                            label: "label 5",
                            value: [
                                {
                                    class: "ra-icon-home",
                                    badgeNumber: 2,
                                    size: "small"
                                },
                                {
                                    class: "ra-icon-clear",
                                    tooltip: "tooltip text",
                                    badgeNumber: 2,
                                    size: "medium"
                                },
                                {
                                    class: "ra-icon-edit",
                                    disabled: true,
                                    badgeNumber: 2,
                                    size: "large"
                                }
                            ]
                        },
                        {
                            label: "label 6",
                            value: ""
                        }
                    ]
                }
            }]);
