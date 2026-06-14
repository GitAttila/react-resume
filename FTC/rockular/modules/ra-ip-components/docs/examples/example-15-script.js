
angular.module('example1', ['mobile-toolkit-ra', 'RA.IPComponents']);
angular.module('example1')
.controller('myCtrl',['$scope',
function($scope) {
                   $scope.stepsConfigA = {
                       type: 'icons',
                       steps: [
                           {
                               iconClass: 'ra-icon-home',
                               tooltip: 'Tooltip text',
                               active: true,
                               status: 'default' | 'error' | 'success' | 'warning'
                           },
                           {
                               disabled: true,
                               tooltip: 'Tooltip text',
                               iconClass: 'ra-icon-no-data'
                           }
                       ],
                       size: 'small'
                   };
                   $scope.stepsConfigB = {
                       type: 'icons',
                       steps: [
                           {
                               iconClass: 'ra-icon-home',
                           },
                           {
                               active: true,
                               iconClass: 'ra-icon-no-data'
                           }
                       ],
                       size: 'medium'
                   };
                   $scope.stepsConfigC = {
                       type: 'icons',
                       enableTitles: true,
                       steps: [
                           {
                               iconClass: 'ra-icon-home',
                               active: true,
                               clickable: false,
                               title: 'Can\'t click me!',
                               onAction: function () {
                                   $scope.stepsConfigC.steps[1] = angular.extend($scope.stepsConfigC.steps[1], {
                                       active: false,
                                       clickable: true,
                                       title: 'Click me!'
                                   });
                                   $scope.stepsConfigC.steps[0] = angular.extend($scope.stepsConfigC.steps[0], {
                                       active: true,
                                       clickable: false,
                                       title: 'Can\'t click me!'
                                   });
                               }
                           },
                           {
                               iconClass: 'ra-icon-no-data',
                               clickable: true,
                               title: 'Click me!',
                               onAction: function () {
                                   $scope.stepsConfigC.steps[0] = angular.extend($scope.stepsConfigC.steps[0], {
                                       active: false,
                                       clickable: true,
                                       title: 'Click me!'
                                   });
                                   $scope.stepsConfigC.steps[1] = angular.extend($scope.stepsConfigC.steps[1], {
                                       active: true,
                                       clickable: false,
                                       title: 'Can\'t click me!'
                                   });
                               }
                           }
                       ],
                       size: 'large'
                   };
                   $scope.stepsConfigD = {
                       type: 'numeric',
                       steps: [
                           {},
                           {
                               disabled: true,
                           },
                           {
                               active: true
                           },
                       ],
                       size: 'small'
                   };
                   $scope.stepsConfigE = {
                       enableTitles: true,
                       type: 'numeric',
                       steps: [
                           {
                               title: 'Title 1'
                           },
                           {
                               title: 'Title 2'
                           },
                           {
                               active: true
                           },
                       ],
                       size: 'small'
                   };
                   $scope.stepsConfigF = {
                       type: 'numeric',
                       enableTitles: true,
                       steps: [
                           {
                               status: 'warning',
                               title: 'warning'
                           },
                           {
                               status: 'error',
                               title: 'error'
                           },
                           {
                               status: 'success',
                               title: 'success'
                           },
                           {
                               status: 'default',
                               title: 'default'
                           }
                       ],
                       size: 'medium'
                   };
               }]);
