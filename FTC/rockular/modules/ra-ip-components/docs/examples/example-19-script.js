
angular.module('example2', ['pascalprecht.translate', 'mobile-toolkit-ra', 'RA.IPComponents']);
angular.module('example2')
.config(['$translateProvider',
function ($translateProvider) {
'use strict';
$translateProvider.useStaticFilesLoader({
"files": [
{
prefix: 'dependencies/locale/locale-',
suffix: '.json'
}]
})
// Registering a fallback language
.fallbackLanguage('en')
.registerAvailableLanguageKeys(['en'], {
'en-*': 'en'
})
// tells angular-translate to use the English
.preferredLanguage('en')
.useSanitizeValueStrategy('escaped');
}
])
.controller('wizardContentCtrl', ['config', function (config) {
this.sharedCount = ++config.sharedCount;
}])
.controller('myCtrlB',['$scope', '$translate',
function($scope, $translate) {
function init() {
$scope.config = {
sharedViewConfig: {
sharedCount: 0
},
showButtons: false,
stepsConfig: {
type: 'icons',
size: 'medium',
autofillConnector: true,
steps: [
{
iconClass: 'ra-icon-home',
tooltip: 'Tooltip text',
active: true,
clickable: false,
title: 'Step 1',
onAction: function () {
$scope.config.stepsConfig.steps[1] = 
angular.extend($scope.config.stepsConfig.steps[1], {
active: false,
clickable: true
});
$scope.config.stepsConfig.steps[0] = 
angular.extend($scope.config.stepsConfig.steps[0], {
active: true,
clickable: false
});
}
},
{
tooltip: 'Tooltip text',
iconClass: 'ra-icon-no-data',
title: 'Step 2',
clickable: true,
onAction: function () {
$scope.config.stepsConfig.steps[0] = 
angular.extend($scope.config.stepsConfig.steps[0], {
active: false,
clickable: true
});
$scope.config.stepsConfig.steps[1] = 
angular.extend($scope.config.stepsConfig.steps[1], {
active: true,
clickable: false
});
}
}
]
},
views: [
{
template: '<div class="ra-flex-column ra-height-100 ra-flex-align-main-center' + 
' ra-flex-align-cross-center">First step template ' + 
'with sharedCount <span ng-bind="$ctrl.sharedCount"></span></div>',
controller: 'wizardContentCtrl'
},
{
template: '<div class="ra-flex-column ra-height-100 ra-flex-align-main-center' + 
' ra-flex-align-cross-center">Second step template ' + 
'with sharedCount <span ng-bind="$ctrl.sharedCount"></span></div>',
controller: 'wizardContentCtrl'
}
]
};
$scope.initialized = true;
}

$translate.onReady(init);
}]);
