
    angular.module('example1', ['mobile-toolkit-ra', 'RA.IPComponents']);
    angular.module('example1').controller('myCtrl',['$scope',
        function($scope) {
            $scope.config = {
                align: 'left',
                actions: [
                    {
                        class: 'ra-icon-home',
                        disabled: false,
                        onAction: function() {
                            alert("Called function");
                        },
                        tooltip: 'Tooltip text',
                        size: 'small'
                    },
                    {
                        class: 'ra-icon-home',
                        disabled: false,
                        onAction: function() {
                            alert("Called function");
                        },
                        tooltip: 'Tooltip text',
                        size: 'medium'
                    },
                    {
                        class: 'ra-icon-home',
                        disabled: false,
                        onAction: function() {
                            alert("Called function");
                        },
                        tooltip: 'Tooltip text',
                        size: 'large'
                    },
                    {
                        class: 'ra-btn-primary',
                        disabled: false,
                        onAction: function() {
                            alert("Called function");
                        },
                        value: 'Some text',
                        size: 'small'
                    },
                    {
                        class: 'ra-btn-primary',
                        disabled: false,
                        onAction: function() {
                            alert("Called function");
                        },
                        value: 'Some text',
                        size: 'medium'
                    },
                    {
                        class: 'ra-btn-primary',
                        disabled: false,
                        onAction: function() {
                            alert("Called function");
                        },
                        value: 'Some text',
                        size: 'large'
                    }
                ]
            };
        }
    ]);
