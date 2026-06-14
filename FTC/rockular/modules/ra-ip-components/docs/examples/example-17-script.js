
angular.module('example1', ['mobile-toolkit-ra', 'RA.IPComponents']);
angular.module('example1')
    .controller('raIpToolboxCtrl', ['$scope', '$http',
    function ($scope, $http) {
       var itemsVariant = 'old';
       $scope.refreshTree = function () {
           if (itemsVariant === 'old') {
               $scope.api.refreshTree(newItems);
               itemsVariant = 'new';
           } else {
               $scope.api.refreshTree(oldItems, 'Basic', 3);
               itemsVariant = 'old';
           }
       };

       $scope.displayOpts = [
           {
               value: 'inline',
               label: 'Inline'
           },
           {
               value: 'grid',
               label: 'Grid'
           }
       ];

       var items = [];

       var commonlyUsed = {
           max: 5,
           label: 'Most commonly used',
           items: []
       };
       var filter = {
           mode: 'basic',
           whispers: true,
           doConfirm: false,
           delay: 2000,
           minChars: 3,
           filters: [
               {
                   name: 'name',
                   label: 'Name',
                   placeholder: 'Type sth...'
               },
               {
                   name: 'category',
                   label: 'Category',
                   placeholder: 'Type some category...'
               },
               {
                   name: 'description',
                   label: 'Description',
                   placeholder: 'Type some desc...'
               }
           ]
       };
       var contextMenu = {
           items: {
               callback: function (key, opt) {
                   $scope.$apply(function () {
                       var id = JSON.parse(opt.$trigger.context.dataset.id);
                       switch (key) {
                           case 'console':
                               console.log(id);
                               break;
                           case 'screen':
                               $scope.contextDisplay = id;
                               break;
                       }
                   });
               },
               className: 'tb-items',
               items: {
                   console: {
                       name: 'console.log',
                       isHtmlName: false
                   },
                   screen: {
                       name: 'show on screen',
                       isHtmlName: false
                   }
               }
           },
           categories: {
               callback: function (key, opt) {
                   $scope.$apply(function () {
                       var item = JSON.parse(opt.$trigger.context.dataset.items);
                       switch (key) {
                           case 'console':
                               console.log(item.category);
                               break;
                           case 'screen':
                               $scope.contextDisplay = item.category;
                               break;
                       }
                   });
               },
               className: 'tb-categories',
               items: {
                   console: {
                       name: 'console.log',
                       isHtmlName: false
                   },
                   screen: {
                       name: 'show on screen',
                       isHtmlName: false
                   }
               }
           }
       };
       var oldItems = angular.copy(items);
       var newItems = [
           items[0]
       ];

       $scope.expanded = true;
       $scope.minPanel = {
           active: false,
           enabled: true
       };
       $scope.display = 'grid';
       $scope.expanded = true;
       $scope.config = {
           service: undefined,
           items: items,
           commonlyUsed: commonlyUsed,
           filter: filter,
           orderBy: 'name',
           dragDrop: true,
           selection: true,
           contextMenu: contextMenu
       };
       $scope.callbacks = {
           onToggleMinPanel: function() {
               console.log('Min panel toggled.');
           },
           onToggleToolbox: function() {
               console.log('Toolbox toggled');
           },
           onSelectElement: function() {
               console.log('Element was selected');
           },
           onSelectCategory: function() {
               console.log('Category was selected');
           }
       };
       $scope.setApi = function (api) {
           $scope.api = api;
       };

       $http.get('../grunt-styles/docs/toolboxItems.json').success(function(response) {
           items = response.items;
           $scope.api.refreshTree(items);
       });
   }
]);
