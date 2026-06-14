
       angular.module('example1', ['mobile-toolkit-ra', 'RA.IPComponents']);
       angular.module('example1')
           .controller('myCtrl',['$scope',
               function($scope) {
                   $scope.config = {
                       theme: 'rockwell',
                       hideHeader: false,
                       disableCollapse: true,
                       header: {
                           titleAlign: 'row',
                           mainTitle: {
                               value: 'Main title'
                           },
                           subtitle: {
                               value: 'Subtitle'
                           }
                       },
                       action: {
                           actions: [
                               {
                                   class: 'ra-icon-home',
                                   active: true,
                                   size: 'small',
                                   type: 'button'
                               },
                               {
                                   class: 'ra-icon-edit',
                                   active: false,
                                   size: 'small',
                                   type: 'button'
                               },
                               {
                                   visible: true,
                                   class: "ra-btn-primary",
                                   value: "Add button",
                                   disabled: false,
                                   onAction: function() {alert("add dialog");}
                               }
                           ]
                       }
                   };
           }]);
   