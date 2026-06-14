
       angular.module('example1', ['mobile-toolkit-ra', 'RA.IPComponents']);
       angular.module('example1')
           .controller('myCtrl',['$scope',
               function($scope) {
                   $scope.config = {
                       header: [
                           {
                               value: "header 1"
                           },
                           {
                               value: "header 2"
                           },
                           {
                               value: "header 3"
                           },
                           {
                               value: "header 4"
                           },
                           {
                               value: ""
                           }
                       ],
                       items: [
                           {
                               action: {
                                   align: "right",
                                   actions: [
                                       {
                                           class:"ra-icon-edit",
                                           size: "small",
                                           onAction: function() {alert("edit window");}
                                       },
                                       {
                                           class:"ra-icon-clear",
                                           size: "small",
                                           onAction: function() {alert("remove window");}
                                       }
                                   ]
                               },
                               columns: [
                                   {
                                       label: "title 1",
                                       value: "value 1"
                                   },
                                   {
                                       label: "title 2",
                                       value: "value 2"
                                   },
                                   {
                                       label: "title 3",
                                       value: "value 3"
                                   },
                                   {
                                       label: "title 4",
                                       value: "value 4"
                                   }
                               ],
                               item: {}
                           },
                           {
                               action: {
                                   align: "right",
                                   actions: [
                                       {
                                           class:"ra-icon-edit",
                                           size: "small",
                                           onAction: function() {alert("edit window");}
                                       },
                                       {
                                           class:"ra-icon-clear",
                                           size: "small",
                                           onAction: function() {alert("remove window");}
                                       }
                                   ]
                               },
                               columns: [
                                   {
                                       label: "title 1",
                                       value: "value 1"
                                   },
                                   {
                                       label: "title 2",
                                       value: "value 2"
                                   },
                                   {
                                       label: "title 3",
                                       value: "value 3"
                                   },
                                   {
                                       label: "title 4",
                                       value: "value 4"
                                   }
                               ],
                               item: {}
                           },
                           {
                               action: {
                                   align: "right",
                                   actions: [
                                       {
                                           class:"ra-icon-edit",
                                           size: "small",
                                           onAction: function() {alert("edit window");}
                                       },
                                       {
                                           class:"ra-icon-clear",
                                           size: "small",
                                           onAction: function() {alert("remove window");}
                                       }
                                   ]
                               },
                               columns: [
                                   {
                                       label: "title 1",
                                       value: "value 1"
                                   },
                                   {
                                       label: "title 2",
                                       value: "value 2"
                                   },
                                   {
                                       label: "title 3",
                                       value: "value 3"
                                   },
                                   {
                                       label: "title 4",
                                       value: "value 4"
                                   }
                               ],
                               item: {}
                           },
                           {
                               action: {
                                   align: "right",
                                   actions: [
                                       {
                                           class:"ra-icon-edit",
                                           size: "small",
                                           onAction: function() {alert("edit window");}
                                       },
                                       {
                                           class:"ra-icon-clear",
                                           size: "small",
                                           onAction: function() {alert("remove window");}
                                       }
                                   ]
                               },
                               columns: [
                                   {
                                       label: "title 1",
                                       value: "value 1"
                                   },
                                   {
                                       label: "title 2",
                                       value: "value 2"
                                   },
                                   {
                                       label: "title 3",
                                       value: "value 3"
                                   },
                                   {
                                       label: "title 4",
                                       value: "value 4"
                                   }
                               ],
                               item: {}
                           }
                       ]
                   };
               }]);
