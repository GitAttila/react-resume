
    angular.module('example1', ['mobile-toolkit-ra', 'RA.IPComponents']);
    angular.module('example1')
    .controller('raIpFilterSearchCtrl', ['$scope', '$q',
    function ($scope, $q) {
     $scope.filters = [
         {
             icon: 'ra-icon-home',
             name: 'name',
             label: 'Name',
             color: 'orange',
             placeholder: 'Type sth...'
         },
         {
             icon: 'ra-icon-information',
             name: 'category',
             label: 'Category',
             color: 'blue',
             placeholder: 'Type some desc...'
         }
     ];
     $scope.default = undefined;
     $scope.doConfirm = true;
     $scope.reset = true;
     $scope.delay = 2000;
     $scope.debounce = 500;
     $scope.minChars = 3;
     $scope.mode = 'basic';
     $scope.placeholder = 'Type something.';
     $scope.whisperLastQuery = true;
     $scope.array = [{
         name: 'Controller',
         category: 'Allen Bradley'
     },
     {
         name: 'Ellipse',
         category: 'Basic'
     },
     {
         name: 'Text',
         category: 'Basic'
     },
     {
         name: 'Text Field',
         category: 'Basic'
     },
     {
         name: 'Numeric',
         category: 'Basic'
     },
     {
         name: 'Ball Valve Wheel',
         category: 'General Equipment'
     },
     {
         name: 'Tank',
         category: 'General Equipment'
     }];
     $scope.callback = function (queryData) {
         if (queryData[0].cancel) {
             $scope.results = [];
             return;
         }
         var queries = {};
         var results = $scope.array;
         angular.forEach(queryData, function(filter) {
             queries[filter.name] = queries[filter.name] || [];
             queries[filter.name].push(filter.query);
         });
         angular.forEach(queries, function (queries, filter) {
             if (filter !== 'all') {
                 results = results.filter(function (it) {
                     var found = false;
                     angular.forEach(queries, function(query) {
                         if (it[filter].toLowerCase().indexOf(query.toLowerCase()) !== -1) {
                             found = true;
                         }
                     });
                     return found;
                 });
             } else {
                 var newResults = [];
                 angular.forEach(results, function (item) {
                     var found = false;
                     angular.forEach(item, function (prop, key) {
                         var foundInItem = false;
                         angular.forEach(queries, function(query) {
                             if (it[filter].toLowerCase().indexOf(query.toLowerCase()) !== -1) {
                                 foundInItem = true;
                             }
                         });
                         if (key !== '$$hashKey' && foundInItem && !found) {
                             newResults.push(item);
                             found = true;
                         }
                     });
                 });
                 results = newResults;
             }
         });
         $scope.results = results;
     };
     $scope.whispers = function (queryData) {
         var deferred = $q.defer(),
             queries = {},
             results = $scope.array,
             props = [],
             lastQuery = queryData[queryData.length - 1];

         angular.forEach(queryData, function(filter) {
             queries[filter.name] = queries[filter.name] || [];
             queries[filter.name].push(filter.query);
         });
         angular.forEach(queries, function (queries, filter) {
             if (filter !== 'all') {
                 results = results.filter(function (it) {
                     var found = false, reject = false;
                     angular.forEach(queries, function(query) {
                         if (it[filter].toLowerCase().indexOf(query.toLowerCase()) !== -1) {
                             found = true;
                         } else if (query === lastQuery.query && filter === lastQuery.name) {
                             reject = true;
                         }
                     });
                     return found && !reject;
                 });
             } else {
                 var newResults = [];
                 angular.forEach(results, function (item) {
                     var found = false;
                     angular.forEach(item, function (prop, key) {
                         var foundInItem = false, rejectItem = false;
                         angular.forEach(queries, function(query) {
                             if (item[key].toLowerCase().indexOf(query.toLowerCase()) !== -1) {
                                 foundInItem = true;
                             } else if (query === lastQuery.query && key === lastQuery.name) {
                                 rejectItem = true;
                             }
                         });
                         if (key !== '$$hashKey' && foundInItem && !rejectItem && !found) {
                             newResults.push(item);
                             props.push(prop);
                             found = true;
                         }
                     });
                 });
                 results = newResults;
             }
         });
         if (lastQuery.name !== 'all') {
             angular.forEach(results, function (item) {
                 props.push(item[lastQuery.name]);
             });
         }
         deferred.resolve({
             header: 'search',
             results: _.uniq(props)
         });
         return deferred.promise;
     };
     $scope.setApi = function(api) {
         $scope.api = api;
     };
    }]);
