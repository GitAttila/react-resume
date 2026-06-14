
    angular.module('example1', ['mobile-toolkit-ra', 'RA.IPComponents']);
    angular.module('example1').controller('myCtrl',['$scope',
        function($scope) {
            $scope.item1 = {
                tooltip: "Tooltip text",
                disabled: true,
                badgeNumber: 4,
                class: "ra-icon-home"
            };
            $scope.item2 = {
                tooltip: "Tooltip text",
                disabled: false,
                badgeNumber: 4,
                class: "ra-icon-home"
            };
            $scope.item3 = {
                tooltip: "Tooltip text",
                class: "ra-icon-home"
            };
            $scope.item4 = {
                tooltip: "Tooltip text",
                class: "ra-icon-home",
                badgeNumber: 4,
                size: "small"
            };
            $scope.item5 = {
                tooltip: "Tooltip text",
                class: "ra-icon-home",
                badgeNumber: 4,
                size: "medium"
            };
            $scope.item6 = {
                tooltip: "Tooltip text",
                class: "ra-icon-home",
                badgeNumber: 4,
                size: "large"
            };
            $scope.item7 = {
                tooltip: "Tooltip text",
                class: "ra-icon-home",
                active: true,
                size: "medium",
                type: 'button',
                onAction: function () {}
            };
            $scope.item8 = {
                tooltip: "Tooltip text",
                class: "ra-icon-home",
                active: false,
                size: "medium",
                type: 'button',
                onAction: function () {}
            };
        }
    ]);
