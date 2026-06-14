/*
 ra-ip-components v1.0.1
 Copyright © Rockwell Automation Technologies, Inc. All Rights Reserved
*/
/*global angular*/
angular.module("RA.IPComponents", [ "mobile-toolkit-ra", "RA.IPCommon", "ui.router" ]);

angular.module("RA.IPComponents").run([ "$templateCache", function($templateCache) {
    $templateCache.put("components/raIpActions/raIpActions.tpl.html", '<div class="ra-ip-actions ra-flex-item-static ra-flex-row" ng-class="[{\'ra-flex-align-main-start\': ctrl.config.align === \'left\', \'ra-flex-align-main-center\': ctrl.config.align === \'center\', \'ra-flex-align-main-end\': ctrl.config.align === \'right\'}, ctrl.config.class]"><ra-ip-badge ng-if="item.value === undefined" ng-repeat="item in ctrl.config.actions" class="ra-ip-action-icon ra-flex-column ra-flex-align-main-center" config="item"></ra-ip-badge><div class="ra-flex-column ra-flex-align-main-center ra-ip-action-column-button" ng-repeat="item in ctrl.config.actions" ng-if="item.value !== undefined"><button class="ra-flex-item-static ra-ip-action-button ra-btn" ng-class="[item.class, {\'active-hover\': item.onAction && !item.disabled, \'active\': item.active, \'ra-btn-xs\': item.size === \'small\', \'ra-btn-sm\': item.size === \'medium\', \'ra-btn-lg\': item.size === \'large\'}]" ng-click="!item.disabled && ctrl.invokeDoAction(item, ctrl.item)" title="{{item.tooltip}}" ng-disabled="item.disabled" ng-bind="item.value"></button></div></div>');
    $templateCache.put("components/raIpBadge/raIpBadge.tpl.html", '<span class="ra-ip-icon-badge" title="{{ctrl.config.tooltip}}" ng-click="!ctrl.config.disabled && ctrl.invokeDoAction(ctrl.config)" ng-class="[ctrl.config.size, ctrl.config.type, {\'ra-flex-column\': ctrl.config.type === \'button\',\'has-badge\': ctrl.config.badgeNumber, \'disabled\': ctrl.config.disabled, \'active-hover\': ctrl.config.onAction && !ctrl.config.disabled, \'active\': ctrl.config.active}]"><span class="ra-ip-icon-class" ng-class="ctrl.config.class"></span> <span class="ra-ip-badge" ng-if="ctrl.config.badgeNumber !== undefined || ctrl.badgeNumber !== undefined" ng-bind="ctrl.checkBadgeNumber()"></span></span>');
    $templateCache.put("components/raIpCard/raIpCard.tpl.html", '<div class="ra-ip-card ra-flex-item-dynamic ra-flex-column" ng-class="ctrl.config.class"><div class="ra-ip-card-shadow ra-flex-item-dynamic ra-flex-column" ng-class="{\'disable-hover\': ctrl.config.disabledHover}"><div class="ra-ip-card-content ra-flex-item-dynamic"><div class="ra-ip-card-body-content" ng-transclude></div></div></div></div>');
    $templateCache.put("components/raIpCollapseBox/raIpCollapseBox.tpl.html", '<div class="ra-ip-collapse-box ra-flex-column" ng-class="[ctrl.config.theme,{\'mouse-hover\': !ctrl.config.disableCollapse && ctrl.hovering, \'ra-ip-collapse-box-shadow\': ctrl.config.shadow}]"><div class="ra-ip-collapse-box-header ra-flex-row" ng-class="{\'closed\': ctrl.open}" ng-if="!ctrl.config.hideHeader"><span class="ra-flex-item-dynamic ra-flex-row ra-ip-collapse-box-title-section" ng-mouseover="ctrl.hovering = true" ng-mouseleave="ctrl.hovering = false" ng-click="ctrl.switchClosed()"><span class="ra-ip-collapse-box-icon ra-icon-class ra-flex-item-static" ng-class="{\'closed\': ctrl.open}" ng-if="!ctrl.config.disableCollapse"></span><ra-ip-header config="ctrl.config.header" class="ra-flex-item-dynamic"></ra-ip-header></span><ra-ip-actions ng-if="ctrl.config.action !== undefined" class="ra-flex-item-static" config="ctrl.config.action"></ra-ip-actions></div><div class="ra-ip-collapse-box-body ra-flex-row" ng-class="{\'no-border\': ctrl.config.hideBorder}" uib-collapse="ctrl.open && !ctrl.config.hideHeader" ng-style="ctrl.config.hideHeader ? {\'border\':\'0\'} : {}"><div class="ra-ip-collapse-box-body-content" ng-transclude></div></div></div>');
    $templateCache.put("components/raIpColumn/raIpColumn.tpl.html", '<div class="ra-ip-column-body ra-flex-item-dynamic ra-flex-row ra-flex-container-uniform"><div class="ra-flex-item-dynamic ra-flex-column ra-ip-column" ng-repeat="column in ctrl.columns"><div class="ra-flex-item-dynamic ra-flex-column line" ng-repeat="item in column"><div class="item-label ra-flex-item-dynamic" ng-bind="item.label"></div><div class="item-value ra-flex-item-dynamic" ng-bind="item.value" ng-if="!item.icon"></div><div class="item-value-icon ra-flex-row ra-flex-align-main-start" ng-if="item.icon"><div class="ra-flex-item-static ra-icon-column" ng-repeat="icon in item.value"><ra-ip-badge config="icon"></ra-ip-badge></div></div></div></div></div>');
    $templateCache.put("components/raIpFilterSearch/raIpFilterSearch.tpl.html", '<form name="$ctrl.searchForm" class="ra-ip-filter-search-form"><div><div class="form-group"><div class="input-group"><span class="input-group-addon ra-icon-filter filter-icon" ng-class="{\'filtered-state\': $ctrl.inputActive}" ng-click="$ctrl.toggleOptions()"><span ng-if="$ctrl.mode !== \'basic\'" ng-hide="$ctrl.showOptions" class="ra-icon-drop-down"></span> <span ng-if="$ctrl.mode !== \'basic\'" ng-show="$ctrl.showOptions" class="ra-icon-drop-up"></span></span><ul ng-show="$ctrl.showOptions" ng-if="$ctrl.mode !== \'basic\'" class="filter-options"><li ng-repeat="filter in $ctrl.filters" ng-click="$ctrl.optionClick(filter)" ng-class="{\'selected\': filter.name === $ctrl.active.name}"><span ng-style="{\'background-color\': filter.color || $ctrl.defaultColor}" class="option-icon-wrapper" ng-if="$ctrl.iconsSet"><span class="{{filter.icon}} option-icon"></span></span> <span class="option-label">{{filter.label || filter.name}}</span></li></ul><span class="icon-group input-group-addon" ng-style="{\'background-color\': $ctrl.active.color}" ng-show="$ctrl.active && $ctrl.inputActive" title="{{$ctrl.active.label}}"><span class="icon {{$ctrl.active.icon}}"></span></span> <input id="inputFilterText" type="text" class="form-control" placeholder="{{$ctrl.currentPlaceholder}}" ng-model="$ctrl.query" ng-model-options="$ctrl.modelOptions" ng-change="$ctrl.write()" ng-click="$ctrl.write(false, true)" ng-keydown="$ctrl.onKeyPress($event)" ng-trim="false" autocomplete="off"><ul class="dropdown-menu" ng-class="{\'basic\': $ctrl.mode === \'basic\'}" ng-hide="!$ctrl.whisperObj || $ctrl.whisperObj.results.length === 0"><li class="header" ng-class="{\'selected\': -1 == $ctrl.selectedWhisper}" ng-click="$ctrl.write(true); $ctrl.whisperObj = undefined;">{{$ctrl.whisperObj.header}}</li><li class="whisper" ng-repeat="result in $ctrl.whisperObj.results track by $index" ng-class="{\'selected\': $index == $ctrl.selectedWhisper}" ng-click="$ctrl.whisperClick(result)">{{result}}</li></ul><span class="send ra-icon-commit" ng-class="{\'align-right\': $ctrl.okButton && !$ctrl.cancelButton}" ng-if="$ctrl.inputActive && $ctrl.okButton" ng-click="$ctrl.write(true)" title="Send"></span> <span class="cancel ra-icon-clear" ng-if="$ctrl.inputActive && $ctrl.cancelButton" ng-click="$ctrl.cancel()" title="Cancel"></span></div></div></div></form>');
    $templateCache.put("components/raIpHeader/raIpHeader.tpl.html", '<div class="ra-flex-column ra-ip-header" ng-class="[{\'underline\': ctrl.config.underline}, ctrl.config.class]"><span class="ra-ip-header-basic" ng-class="{\'empty-header\': ctrl.config.value === \'\'}" ng-bind="ctrl.config.value" ng-if="ctrl.config.value !== undefined"></span><div class="ra-ip-header-advanced ra-flex-item-static ra-flex-row" ng-if="ctrl.config.value === undefined"><div class="ra-ip-header-icon ra-flex-column ra-flex-align-main-center ra-flex-item-static" ng-if="ctrl.config.icon"><ra-ip-badge class="ra-flex-item-static" config="ctrl.config.icon"></ra-ip-badge></div><div class="ra-ip-header-image ra-flex-align-main-center ra-flex-item-static" ng-if="ctrl.config.image"><img class="ra-flex-item-static" ng-src="{{ctrl.config.image.url}}" ng-class="ctrl.config.image.class" alt="{{ctrl.config.image.alt}}"></div><div class="ra-ip-header-title ra-flex-align-main-start ra-flex-item-dynamic" ng-class="{\'ra-flex-column\': ctrl.config.titleAlign === \'column\', \'ra-flex-row\': ctrl.config.titleAlign === \'row\', \'ra-flex-align-main-start\': ctrl.config.mainTitle !== undefined && ctrl.config.subtitle !== undefined, \'ra-flex-align-main-center\': ctrl.config.mainTitle === undefined || ctrl.config.subtitle === undefined}"><div class="ra-ip-header-main-title ra-flex-align-main-center ra-flex-item-static ra-flex-column" ng-if="ctrl.config.mainTitle" ng-class="ctrl.config.mainTitle.class"><span class="ra-flex-item-static" ng-bind="ctrl.config.mainTitle.value"></span></div><div class="ra-ip-header-subtitle ra-flex-align-main-center ra-flex-item-static ra-flex-column" ng-if="ctrl.config.subtitle" ng-class="ctrl.config.subtitle.class"><span class="ra-flex-item-static" ng-bind="ctrl.config.subtitle.value"></span></div></div></div></div>');
    $templateCache.put("components/raIpInfoMessage/raIpInfoMessage.tpl.html", '<div class="ra-flex-column ra-flex-item-dynamic ra-flex-align-cross-center ra-flex-align-cross ra-flex-align-main-center ra-ip-info-message" ng-class="ctrl.config.class"><span class="ra-ip-info-message-value ra-flex-item-static" ng-bind="ctrl.config.text"></span><ra-ip-actions class="ra-flex-item-static" ng-if="ctrl.config.action !== undefined" config="ctrl.config.action"></ra-ip-actions></div>');
    $templateCache.put("components/raIpRepeat/raIpRepeat.tpl.html", '<div class="ra-flex-row ra-flex-align-main-start ra-flex-row-wrap"><ra-ip-repeat-item class="ra-flex-column" template="ctrl.config.template" config="item" ng-repeat="item in ctrl.config.items"></ra-ip-repeat-item></div>');
    $templateCache.put("components/raIpSteps/raIpSteps.tpl.html", '<div class="ra-flex-column ra-flex-item-static main-container" ng-class="[$ctrl.config.size, $ctrl.config.orientation, $ctrl.config.theme]"><div class="ra-flex-row ra-flex-item-static ra-flex-align-main-center ra-flex-align-cross-center step-container"><div ng-repeat="step in $ctrl.config.steps track by $index" class="ra-flex-item-static ra-flex-row ra-flex-align-cross-center"><div class="ra-flex-column"><div class="ra-flex-row ra-flex-align-cross-center ra-flex-item-static"><div ng-if="$first" class="ra-flex-item-static step-point-connector-empty-fill"></div><div class="ra-flex-item-static step-point-connector step-point-connector-before" ng-if="!$first && $ctrl.config.steps.length > 1" ng-class="{\'disabled\': step.disabled || (!$first && $ctrl.config.steps[$index -1].disabled)}"><div ng-if="$ctrl.config.autofillConnector" class="activable-connector" ng-show="(!$first && step.active && $ctrl.config.steps[$index - 1].active)"></div></div><div class="ra-flex-item-static step-point" ng-class="[ !$ctrl.statusIcons[step.status] ? step.iconClass : \'\', step.status || \'default\', $ctrl.statusIcons[step.status], {\'inactive\' : !step.active}, {\'active\' : step.active}, {\'disabled\': step.disabled}, {\'clickable\' : step.clickable && step.onAction}, {\'status-color-enabled\' : !$ctrl.config.disableStatusColor}]" ng-click="!step.disabled && step.clickable && step.onAction && step.onAction()" ng-attr-title="{{step.tooltip}}"><span class="numeric-text" ng-if="$ctrl.config.type === \'numeric\' && !step.iconClass && !$ctrl.statusIcons[step.status]">{{$index + 1}}</span></div><div class="ra-flex-item-static step-point-connector step-point-connector-after" ng-if="!$last && $ctrl.config.steps.length > 1" ng-class="{\'disabled\': step.disabled || (!$last && $ctrl.config.steps[$index + 1].disabled)}"><div ng-if="$ctrl.config.autofillConnector" class="activable-connector" ng-show="(!$last && step.active && $ctrl.config.steps[$index + 1].active)"></div></div><div ng-if="$last" class="ra-flex-item-static step-point-connector-empty-fill"></div></div><div ng-if="$ctrl.config.enableTitles" class="ra-flex-column ra-flex-item-static"><div class="step-title-container ra-flex-column ra-flex-align-main-center ra-flex-align-cross-center ra-flex-item-static"><div class="step-title ra-flex-item-static" ra-truncate break-all ng-bind="step.title" ng-attr-title="{{step.title && step.title.length > 12 ? step.title : \'\'}}"></div></div></div></div></div></div></div>');
    $templateCache.put("components/raIpTable/raIpTable.tpl.html", '<div class="ra-ip-table" ng-class="ctrl.config.class"><div class="ra-ip-table-row ra-ip-table-header"><div class="ra-ip-table-row-item" ng-repeat="header in ctrl.config.header" ng-bind="header.value"></div></div><div class="ra-ip-table-row" ng-repeat="item in ctrl.config.items"><div class="ra-ip-table-row-item" data-header="{{ctrl.config.header[$index].value}}" ng-repeat="cell in item.columns track by $index"><span ng-if="!(cell.value | isArray)" title="{{cell.title}}" class="text-item" ng-class="cell.class">{{cell.value}}</span> <span class="ra-flex-row" ng-if="(cell.value | isArray)"><span class="ra-flex-item-static ra-icon-column" ng-repeat="icon in cell.value"><ra-ip-badge config="icon"></ra-ip-badge></span></span></div><div class="ra-ip-table-row-item" ng-if="item.action"><ra-ip-actions config="item.action"></ra-ip-actions></div></div></div>');
    $templateCache.put("components/raIpToolbox/raIpToolbox.tpl.html", '<div class="ra-flex-column ra-ip-toolbox ra-ip-customscrollbar" ng-class="{\'minimal\': minPanel.active}"><div class="ra-flex-item-dynamic ra-flex-column" ng-hide="minPanel.active"><div class="ra-flex-item-static main-view-panel-label ra-ip-cursor-pointer"><div class="main-label" ng-click="toggleToolbox()">Toolbox</div><div class="buttons-right"><abbr title="Collapse all" class="button-collapse-all"><a ng-click="collapseAll()" class="button"><span class="ra-icon-collapse-all"></span></a></abbr> <abbr title="Minimize" class="button-min right" ng-if="minPanel.enabled"><a ng-click="minOrMax()" class="button"><span class="ra-icon-back"></span></a></abbr></div></div><div class="ra-flex-column ra-flex-item-dynamic main-view-panel-content" ng-show="expanded"><div class="ra-flex-item-static search-input-wrapper" ng-if="config.filter"><ra-ip-filter-search filters="config.filter.filters" deafult="config.filter.default" do-confirm="config.filter.doConfirm" delay="config.filter.delay" min-chars="config.filter.minChars" mode="config.filter.mode" whisperlastquery="config.filter.whisperLastQuery" buttons="config.filter.buttons" reset="config.filter.reset" debounce="config.filter.debounce" placeholder="config.filter.placeholder" callback="config.filter.callback(query)" whispers="config.filter.whispers(query)" set-api="config.filter.setApi(api)"></ra-ip-filter-search></div><div class="two-panel ra-flex-item-dynamic ra-flex-column" ra-splitter><div class="nav-panel ra-flex-column ra-flex-item-dynamic" ng-hide="filterActive" ra-splitter-pane><div ng-show="inProgress.categories" class="ra-flex-item-dynamic ra-flex-vertical-center"><span class="ra-spinner-opaque"></span></div><div ng-if="!inProgress.categories" class="ra-flex-item-dynamic ra-flex-column"><div ra-tree="tree" ra-tree-user-select-callback="userSelectCallback(node)" ra-tree-expand-on-caret="true" ra-tree-auto-collapse-children="true" set-api="setTreeApi(api)" class="ra-flex-item-dynamic ra-flex-column ra-scroll-y"></div></div></div><div class="context-panel ra-flex-column ra-flex-item-dynamic ra-ip-stop-drag" ra-splitter-pane><div class="category-label ra-flex-item-static main-view-panel-sublabel" ng-hide="filterActive"><div class="category-label-text">{{categoryName}}</div><div class="buttons-right icons"><abbr title="Display in line" class="button-in-line" ng-show="display === \'grid\'"><a ng-click="toolboxApi.switchDisplay()" class="button"><span class="ra-cloud-icon-inline"></span></a></abbr> <abbr title="Display in grid" class="button-in-grid" ng-show="display === \'inline\'"><a ng-click="toolboxApi.switchDisplay()" class="button"><span class="ra-cloud-icon-grid"></span></a></abbr></div></div><div class="category-elements ra-flex-column ra-flex-item-dynamic ra-scroll-y"><div ng-show="inProgress.items" class="ra-flex-item-dynamic ra-flex-vertical-center"><span class="ra-spinner-opaque"></span></div><ul ng-show="display === \'inline\' && !inProgress.items" class="display-inline" ng-class="{\'selection\': config.selection}"><li ng-repeat="gr in graphics" ng-click="selectItem(gr)" data-drag="{{config.dragDrop}}" data-jqyoui-options="jqyouiOptions" jqyoui-draggable="{placeholder: \'keep\', onStop:\'stop\'}" data-id="{{gr.id}}" class="item ra-ip-no-animate {{gr.selectedClass}} ui-draggable" title="{{config.showTitle ? gr.name : \'\'}}"><div class="item-label"><div class="item-name">{{gr.name}}</div><div class="item-description">{{gr.description || \'Without description\'}}</div><div class="item-category">{{gr.category | dotToSlash}}</div></div><div class="item-image-wrapper"><img class="item-image" ng-attr-src="{{gr.picture}}"></div></li></ul><ul ng-show="display === \'grid\' && !inProgress.items" class="display-grid" ng-class="{\'selection\': config.selection}"><li ng-repeat="gr in graphics" data-drag="{{config.dragDrop}}" ng-click="selectItem(gr)" data-jqyoui-options="jqyouiOptions" jqyoui-draggable="{placeholder: \'keep\', onStop:\'stop\'}" data-id="{{gr.id}}" class="item ra-ip-no-animate {{gr.selectedClass}} ui-draggable" title="{{config.showTitle ? gr.name : \'\'}}"><div class="item-image-wrapper"><img class="item-image" ng-attr-src="{{gr.picture}}"></div><div class="item-label">{{gr.name}}</div></li></ul></div></div></div></div></div><div class="ra-flex-item-dynamic ra-flex-column min-panel" ng-show="minPanel.active"><div class="ra-flex-item-static main-view-panel-label ra-ip-cursor-pointer" ng-click="minOrMax()"><abbr title="Maximize" class="button-max"><a class="button"><span class="ra-icon-forward"></span></a></abbr></div><div class="ra-flex-column ra-flex-item-dynamic main-view-panel-content" ng-show="expanded"><div class="action-bar icons ra-flex-item-static main-view-panel-sublabel" ng-class="{\'selected\': dropdownMenu}"><abbr title="Categories" class="button-categories"><a ng-click="toggleDropdownMenu()" class="button"><span class="ra-icon-folder"></span></a></abbr></div><div ng-show="inProgress.categories" class="ra-flex-item-dynamic ra-flex-vertical-center toolbox-dropdown-menu"><span class="ra-spinner-opaque"></span></div><div ra-tree="tree" ra-tree-user-select-callback="userSelectCallback(node)" ra-tree-expand-on-caret="true" set-api="setTreeApiMin(api)" class="ra-flex-item-dynamic ra-scroll-y toolbox-dropdown-menu" ng-hide="inProgress.categories"></div><div class="two-panel ra-flex-item-dynamic ra-flex-column"><div class="category-elements ra-flex-item-dynamic ra-flex-column ra-scroll-y"><div ng-show="inProgress.items" class="ra-flex-item-dynamic ra-flex-vertical-center"><span class="ra-spinner-opaque"></span></div><ul class="display-grid" ng-class="{\'selection\': config.selection}" ng-hide="inProgress.items"><li ng-repeat="gr in graphics" ng-click="selectItem(gr)" data-drag="{{config.dragDrop}}" data-jqyoui-options="jqyouiOptions" jqyoui-draggable="{placeholder: \'keep\', onStop:\'stop\'}" data-id="{{gr.id}}" class="item ra-ip-no-animate {{gr.selectedClass}} ui-draggable" title="{{config.showTitle ? gr.name : \'\'}}"><div class="item-image-wrapper"><img class="item-image" ng-attr-src="{{gr.picture}}"></div><div class="item-label">{{gr.name}}</div></li></ul></div></div></div></div></div>');
    $templateCache.put("components/raIpWizard/raIpWizard.tpl.html", '<div class="ra-flex-column ra-height-100" ng-class="[\'steps-\' + $ctrl.config.stepsConfig.size, {\'has-buttons\': $ctrl.config.showButtons}, {\'has-steps\': !$ctrl.config.hideSteps}]"><div ng-if="!$ctrl.config.hideSteps" class="wizard-steps ra-flex-item-static ra-flex-row ra-flex-align-main-center"><ra-ip-steps config="$ctrl.config.stepsConfig" class="ra-flex-column ra-flex-item-dynamic ra-flex-align-main-center ra-flex-align-cross-center"></ra-ip-steps></div><div class="wizard-page-content ra-flex-item-static"></div><div class="wizard-buttons-container ra-flex-item-static ra-flex-row ra-flex-align-main-end ra-flex-align-cross-center" ng-if="$ctrl.config.showButtons"><ra-ip-actions config="$ctrl.buttonActionsConfig"></ra-ip-actions></div></div>');
    $templateCache.put("components/raIpWizard/raIpWizardDefault.tpl.html", '<div class="ra-flex-column ra-height-100 ra-flex-align-main-center ra-flex-align-cross-center"><span class="ra-spinner"></span></div>');
} ]);

/*
 * (c) Rockwell Automation 2017
 */
/**
 * @ngdoc directive
 * @name RA.IPComponents.component:raIpActions
 * @module RA.IPComponents
 * @restrict E
 * @description
 * This component is responsible for rendering action buttons. Action button can be an icon or a button. Component
 * allows to set size of each action and align for whole component. For icon button is used raIpBadge component and
 * for button is used MFT button.
 *
 * @param {object} config
 * - **`class`** {string} to customize style of component
 * - **`align`** {string} left | center | right
 * - **`actions`** {array} actions
 *      - **`class`** {string} class for icon button
 *      - **`disabled`** {boolean} disabled action button
 *      - **`onAction`** {function} called on click
 *      - **`tooltip`** {string} information text shown on hover on button
 *      - **`value`** {string} for button when this value is undefined it set icon button
 *      - **`size`** {string} small | medium | large
 *
 *      raIpBadge component for icon action
 *      See also {@link RA.IPComponents.component:raIpBadge}.
 *
 * @example

 <example module="example1">
    <file name="index.html">
        <div ng-controller="myCtrl">
            <ra-ip-actions config="config"></ra-ip-actions>
        </div>
    </file>
    <file name="script.js">
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
    </file>
 </example>
 */
/* global angular */
angular.module("RA.IPComponents").component("raIpActions", {
    templateUrl: "components/raIpActions/raIpActions.tpl.html",
    bindings: {
        config: "<"
    },
    controllerAs: "ctrl",
    controller: [ function() {
        "use strict";
        var self = this;
        /**
             * @description normalize config to set default values
             */
        function normalizeConfig() {
            self.config = self.config || {};
        }
        normalizeConfig();
        /**
             * @description invoke external function
             * @param {function} action.onAction has to be a function
             */
        self.invokeDoAction = function(action) {
            if (typeof action.onAction === "function") {
                action.onAction();
            }
        };
    } ]
});

/*
 * (c) Rockwell Automation 2017
 */
/**
 * @ngdoc directive
 * @name RA.IPComponents.component:raIpBadge
 * @module RA.IPComponents
 * @restrict E
 * @description
 * This component is responsible for rendering icon. Icon can be used with some action as a button or can be used like
 * a information icon. Component allows to set size. The default size is medium.
 *
 * @param {object} config
 * - **`tooltip`** {string} information text shown on hover on button
 * - **`disabled`** {boolean} disabled action button
 * - **`badgeNumber`** {int} small number on the right side of icon
 * - **`class`** {string} icon class definition
 * - **`type`** {string} button | icon default is icon
 * - **`active`** {boolean} active state
 * - **`size`** {string} size settings small | medium | large
 * - **`onAction`** {function} called on click
 *
 * @example

    <example module="example1">
        <file name="index.html">
            <div ng-controller="myCtrl">
                <ra-ip-badge config="item1"></ra-ip-badge>
                <ra-ip-badge config="item2"></ra-ip-badge>
                <ra-ip-badge config="item3"></ra-ip-badge>
                <ra-ip-badge config="item4"></ra-ip-badge>
                <ra-ip-badge config="item5"></ra-ip-badge>
                <ra-ip-badge config="item6"></ra-ip-badge>
                <span style="width: 45px; display: block;"><ra-ip-badge config="item7"></ra-ip-badge></span>
                <span style="width: 45px; display: block;"><ra-ip-badge config="item8"></ra-ip-badge></span>
            </div>
        </file>
        <file name="script.js">
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
        </file>
    </example>
 */
/* global angular */
angular.module("RA.IPComponents").component("raIpBadge", {
    templateUrl: "components/raIpBadge/raIpBadge.tpl.html",
    bindings: {
        config: "<",
        badgeNumber: "<"
    },
    controllerAs: "ctrl",
    controller: [ function() {
        "use strict";
        var self = this;
        /**
             * @description normalize config to set default values
             */
        function normalizeConfig() {
            self.config = self.config || {};
            self.config.type = self.config.type || "icon";
            self.config.size = self.config.size || "medium";
        }
        normalizeConfig();
        self.checkBadgeNumber = function() {
            if (angular.isDefined(self.badgeNumber)) {
                return self.badgeNumber;
            } else {
                return self.config.badgeNumber;
            }
        };
        /**
             * @description invoke external function
             * @param {function} action.onAction has to be a function
             */
        self.invokeDoAction = function(action) {
            if (typeof action.onAction === "function") {
                action.onAction();
            }
        };
    } ]
});

/*
 * (c) Rockwell Automation 2017
 */
/* global angular */
/**
 * @ngdoc directive
 * @name RA.IPComponents.component:raIpCard
 * @module RA.IPComponents
 * @restrict E
 * @description
 * This component is responsible for rendering card. It allows to put inside another component. Card is only wrapper
 * with hover effect which can be disabled.
 *
 * @param {Object} config
 *  - **`class`** {string} to add specific class
 *  - **`disabledHover`** {boolean} to disable hover effect

 @example
 Example of card component with hover effect.
  <example module="example1">
    <file name="index.html">
        <div ng-controller="myCtrl">
            <ra-ip-card>Card content</ra-ip-card>
        </div>
    </file>

    <file name="script.js">
       angular.module('example1', ['mobile-toolkit-ra', 'RA.IPComponents']);
        angular.module('example1')
            .controller('myCtrl',['$scope',
                function() {}
        ]);
    </file>
 </example>

 Example of card component without hover effect.
 <example module="example2">
    <file name="index.html">
        <div ng-controller="myCtrl">
            <ra-ip-card config="config">
            Card content
            </ra-ip-card>
        </div>
    </file>

     <file name="script.js">
        angular.module('example2', ['mobile-toolkit-ra', 'RA.IPComponents']);
        angular.module('example2')
            .controller('myCtrl',['$scope',
                function($scope) {
                    $scope.config = {
                        disabledHover: true
                    }
                }
            ]);
     </file>
 </example>

 Example of card component with body content.
 <example module="example3">
     <file name="index.html">
         <div ng-controller="myCtrl">
            <ra-ip-card config="config">
                <div style="padding: 15px;">Body content</div>
            </ra-ip-card>
         </div>
     </file>

     <file name="script.js">
         angular.module('example3', ['mobile-toolkit-ra', 'RA.IPComponents']);
         angular.module('example3')
            .controller('myCtrl',['$scope',
                function() {}
         ]);
     </file>
 </example>
 */
/* global angular */
angular.module("RA.IPComponents").component("raIpCard", {
    templateUrl: "components/raIpCard/raIpCard.tpl.html",
    transclude: true,
    bindings: {
        config: "<"
    },
    controllerAs: "ctrl",
    controller: [ function() {
        "use strict";
    } ]
});

/*
 * (c) Rockwell Automation 2017
 */
/* global angular */
/**
 * @ngdoc directive
 * @name RA.IPComponents.component:raIpCollapseBox
 * @module RA.IPComponents
 * @restrict E
 * @description
 * This component is responsible for rendering the collapse box. The collapse box expects to receive a object
 * with some parameters and it is possible to add icons or buttons which will be shown in the header of collapse box.
 *
 * @param {Object} config
 * - **`theme`** {string} class theme definition: light, dark, rockwell
 * - **`shadow`** {boolean} shadow
 * - **`defaultClosed`** {boolean} default state of the collapse box
 * - **`disableCollapse`** {boolean} to disable collapsible functionality
 * - **`hideHeader`** {boolean} to hide header bar of the collapse box
 * - **`hideBorder`** {boolean} to hide border of the collapse box
 * - **`header`** {object} raIpHeader component.
 *      See also {@link RA.IPComponents.component:raIpHeader}.
 * - **`action`** {object} raIpActions component.
 *      See also {@link RA.IPComponents.component:raIpActions}.
 @example

 Example of Collapse box to show usage with individual content.
 <example module="example1">
    <file name="index.html">
        <div ng-controller="myCtrl">
            <ra-ip-collapse-box config="config">
                <div style="padding: 15px; text-align: center;">
                    Body of the collapse box. It is possible to add here component or directive.
                </div>
            </ra-ip-collapse-box>
        </div>
    </file>

    <file name="script.js">
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
    </file>
 </example>

/* global angular */
angular.module("RA.IPComponents").component("raIpCollapseBox", {
    templateUrl: "components/raIpCollapseBox/raIpCollapseBox.tpl.html",
    transclude: true,
    bindings: {
        config: "<"
    },
    controllerAs: "ctrl",
    controller: [ "$window", function() {
        "use strict";
        var self = this;
        /**
             * @description normalize config to set default values
             */
        function normalizeConfig() {
            self.config = self.config || {};
            self.config.theme = self.config.theme || "rockwell";
            self.config.disableCollapse = angular.isDefined(self.config.disableCollapse) ? self.config.disableCollapse : false;
        }
        normalizeConfig();
        /**
             * @description invoke external function
             * @param {function} actionItem has to be a function
             */
        self.invokeDoAction = function(actionItem) {
            if (typeof actionItem === "function") {
                actionItem();
            }
        };
        /**
             * @description disable collapsing of collapse box
             * @type {boolean}
             */
        if (!self.config.disableCollapse) {
            self.open = self.config.defaultClosed;
        } else {
            self.open = false;
        }
        /**
             * @description open and close collapse box
             * @type {boolean}
             */
        self.switchClosed = function() {
            if (!self.config.disableCollapse) {
                self.open = !self.open;
            }
        };
    } ]
});

/*
 * (c) Rockwell Automation 2017
 */
/*global angular*/
/**
 * @ngdoc directive
 * @name RA.IPComponents.component:raIpColumn
 * @module RA.IPComponents
 * @restrict E
 * @description
 * This component is responsible for rendering columns body. Column body component has predefined logic to
 * divide items to columns. Parameter hidden allows to hide whole item in a column. For icon is used raIpBadge.
 *
 * @param {object}
 * - **`numberOfColumns`** {int} columns number of columns
 * - **`items`** {Array} items
 *      - **`label`** {string}
 *      - **`value`** {string} or [array] raIpBadge {@link RA.IPComponents.component:raIpBadge}
 *      - **`hidden`** {bool} to hide
 *
 @example

 <example module="example1">
    <file name="index.html">
        <div ng-controller="myCtrl">
            <ra-ip-column config="config"></ra-ip-column>
        </div>
    </file>
    <file name="script.js">
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
 </file>
 </example>
 */
angular.module("RA.IPComponents").component("raIpColumn", {
    templateUrl: "components/raIpColumn/raIpColumn.tpl.html",
    bindings: {
        config: "<"
    },
    controllerAs: "ctrl",
    controller: [ function() {
        "use strict";
        var self = this;
        /**
             * @description normalize config to set default values
             */
        function normalizeConfig() {
            self.config = self.config || {};
            self.config.items = self.config.items || [];
        }
        normalizeConfig();
        self.columns = splitItemsToCols(spliceHiddenItems(self.config.items), self.config.numberOfColumns);
        /**
             * @description split array to the columns
             * @param {Array} items
             * @return {array} split items into array by columns
             */
        function splitItemsToCols(items, numberOfColumns) {
            var usedLength = 0, splitItems = [];
            if (numberOfColumns > 1) {
                for (var i = numberOfColumns; i > 0; --i) {
                    var itemPerColumn = Math.ceil((items.length - usedLength) / i);
                    splitItems.push(items.slice(usedLength, usedLength + itemPerColumn));
                    usedLength += itemPerColumn;
                }
            } else {
                splitItems.push(items);
                self.columns = 1;
            }
            return splitItems;
        }
        /**
             * @description function to check if item.value is array to set item.icon visualization
             * @param item
             */
        function checkIconValue(item) {
            if (angular.isArray(item.value)) {
                item.icon = true;
            }
        }
        /**
             * @description function to add to value - if the value is empty or undefined
             * @param item
             */
        function checkEmptyValues(item) {
            if (item.value === undefined || item.value === null || item.value === "") {
                item.value = "-";
            }
        }
        /**
             * @description remove hidden items from array
             * @param {Array} all items
             * @return {Array} items without hidden
             */
        function spliceHiddenItems(items) {
            var spliceArray = [];
            for (var i = 0; i < items.length; ++i) {
                if (angular.isDefined(items[i].hidden) && !items[i].hidden || angular.isUndefined(items[i].hidden)) {
                    checkIconValue(items[i]);
                    checkEmptyValues(items[i]);
                    spliceArray.push(items[i]);
                }
            }
            return spliceArray;
        }
    } ]
});

/* (c) Rockwell Automation 2016 */
/*global angular*/
//disable jshint line length for these api comments, some are required to be long for formatting
//reenabled after these comments.
/* jshint -W101 */
/**
 * @ngdoc directive
 * @name RA.IPComponents.component:raIpFilterSearch
 * @module RA.IPComponents
 *
 * @param {array} filters An array of objects representing filter and
 * its configuration. When no filter is choosen, callback will be called with default filter 'all' (search in all properties).
 *
 * | Property                       | Type             | Details                                                                   | Default value                                                                           |
 * |------------------------------- |------------------|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
 * | icon (optional)                | {@type String}   | CSS class of the filter icon                                              | undefined                                                                               |
 * | name                           | {@type String}   | Unique name of filter, will be used as ID                                 | undefined                                                                               |
 * | label (optional)               | {@type String}   | Filter label will be visible in filter options menu                       | same as name                                                                            |
 * | color (optional)               | {@type String}   | Background color of filter icon                                           | undefined                                                                               |
 * | placeholder (optional)         | {@type String}   | Input placeholder                                                         | undefined                                                                               |
 *
 * @param {boolean} doConfirm Does user has to confirm search query by clicking enter or check icon? //default: false
 * @param {number} delay Time in ms after which callback function will be called, if query length is same or higher than minChars. //default: 300
 * @param {number} debounce Input debounce in ms. //default: 1000
 * @param {number} minChars Minimal number of chars after which callback function will be called. //default: 1
 * @param {string} mode ('basic'/'string'/'advanced') Which mode to use. //required
 * @param {boolean} reset Only in advanced mode. If chosen filter should reset to default after sending callback.
 * @param {boolean} whisperLastQuery Only in string mode. Should apply whisper only to last keyword in input. //default: false
 * @param {object} buttons Makes buttons visible/invisible. They are visible by default.
 *
 * | Property                       | Type             | Details                                                                   | Default value                                                                           |
 * |------------------------------- |------------------|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
 * | okButton                       | {@type Boolean}  | Visible?                                                                  | true                                                                                    |
 * | cancelButton                   | {@type Boolean}  | Visible?                                                                  | true                                                                                    |
 *
 * @param {number} default Only for advanced mode. Index of default filter from filters array. //default: 0 (first element in array)
 * @param {function} callback Function which handles filter action. Query is provided as attribute. When no filter is chosen, it get filter with name 'all' //required
 * @param {function} whispers Function which returns whisper for given search query. Query is provided as attribute. Only when combineFilters.
 * @param {function} setApi Function which sets api to control filter. Has only one method - reinit. It can be used to reinitialize filter in different mode.
 *
 * @description
 * The component filters data, it has multiple modes, and filter methods have to be provided by user. Filter has three modes. Basic without combining filters, combining filters using input element and custom combining.
 *
 * ## Basic mode – fulltext search
 * Very basic fulltext search. No menu to choose filter options. No keywords can be used in input line. Callback function has to be provided.
 Argument to callback function ($ctrl.callback) example:
 * <pre>
 * queryData: [{
 *     name: 'all',
 *     query: "controller"
 * }]
 * </pre>
 *
 * ## String mode – keywords in input
 * After clicking on filter option, its name will be added to input line. User can write query after that string. Multiple filters can be added. E.g. “name:text category:basic name:field”. Filter results depend on filter implementation. Query can be erased by clicking cancel icon. Default is fulltext search without option choosen.
 * Argument to callback function ($ctrl.callback) example:
 * <pre>
 * queryData: [{
 *     name: "name",
 *     query: "ellipse"
 * },{
 *     name: "category",
 *     query: "general"
 * }]
 * </pre>
 *
 * ## Advanced mode – custom implementation of graphic representation of active filters
 * After clicking on filter option, user can write query which belongs only this filter, after clicking on another filter option and writing another query, this query will be overwritten. After clicking on enter or checkmark, data will be sent to callback function which handles the search.
 * Argument to callback function ($ctrl.callback) example:
 * <pre>
 * queryData: [{
 *     name: "name",
 *     query: "controller"
 * }]
 * </pre>
 *
 * ## Cancel callback
 * When user clicks on cancel button, callback is send in this format:
 * <pre>
 * queryData: [{
 *     cancel: true
 * }]
 * </pre>
 *
 *
 * ## delay and minChars
 * When not specified delay will be set to 300ms and minChars to 1. Whispers will be activated when query >= minChars. Callback will be activated when query >= minChars and after delay.
 *
  @example
  <example module="example1">
   <file name="style.css">
    label { margin: 0 2px 0 5px; }
   </file>
   <file name="index.html">
     <div ng-controller="raIpFilterSearchCtrl">
     <ra-ip-filter-search filters="filters" default="default" do-confirm="doConfirm" delay="delay" debounce="debounce" min-chars="minChars" mode="mode" placeholder="placeholder" reset="reset" callback="callback(query)" whispers="whispers(query)" whisper-last-query="whisperLastQuery" set-api="setApi(api)"></ra-ip-filter-search>
     <h4 ng-show="results">Filtered results:</h4>
         <ul class="search-results">
            <li ng-repeat="result in results">{{result}}</li>
         </ul>
         <h4>Configuration</h4>
             <div>
                 <label for="doConfirm">doConfirm</label>
                 <input id="doConfirm" type="checkbox" ng-model="doConfirm">
                 <label for="delay">delay</label>
                 <input id="delay" type="number" min="0" ng-model="delay">
                 <label for="minChars">minChars</label>
                 <input id="minChars" type="number" min="0" ng-model="minChars">
             </div>
             <div>
                <label for="mode">mode</label>
                 <select id="mode" ng-model="mode" ng-change="api.reinit(mode)">
                 <option value="basic">Basic</option>
                 <option value="string">String</option>
                 <option value="advanced">Advanced</option>
                 </select>
                 <label for="whisperLastQuery">whisperLastQuery</label>
                 <input id="whisperLastQuery" type="checkbox" ng-model="whisperLastQuery">
                 <label for="reset">reset</label>
                 <input id="reset" type="checkbox" ng-model="reset">
             </div>
         <h4>Array of objects to filter:</h4>
         <pre>{{array | json}}</pre>

         <h4>Push item to array</h4>
         <label for="objName">name:</label>
         <input id="objName" type="text" ng-model="objName">
         <label for="objCat">category:</label>
         <input id="objCat" type="text" ng-model="objCat">
         <button ng-click="array.push({name: objName, category: objCat})">Push</button>
         <h4>Delete item from array</h4>
         <label for="objId">ID</label>
         <input id="objId" type="number" min="0" ng-model="objId">
         <button ng-click="array.splice(objId,1)">Delete</button>
     </div>
   </file>
   <file name="script.js">
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
   </file>
  </example>
 */
/* jshint +W101 */
angular.module("RA.IPComponents").component("raIpFilterSearch", {
    templateUrl: "components/raIpFilterSearch/raIpFilterSearch.tpl.html",
    bindings: {
        filters: "<",
        default: "<",
        doConfirm: "<",
        delay: "<",
        minChars: "<",
        mode: "<",
        whisperLastQuery: "<",
        buttons: "<",
        reset: "<",
        debounce: "<",
        placeholder: "<",
        callback: "&",
        whispers: "&",
        setApi: "&"
    },
    controller: [ "$timeout", "$window", "$scope", "$element", "raErrorHandlerSvc", function($timeout, $window, $scope, $element, raErrorHandlerSvc) {
        "use strict";
        var self = this;
        var searchAll = {
            name: "all",
            query: ""
        };
        self.defaultColor = "grey";
        self.default = self.default || 0;
        self.buttons = self.buttons || {};
        self.okButton = self.buttons.okButton;
        self.cancelButton = self.buttons.cancelButton;
        self.currentPlaceholder = self.placeholder;
        if (self.okButton === undefined) {
            self.okButton = true;
        }
        if (self.cancelButton === undefined) {
            self.cancelButton = true;
        }
        if (self.delay === undefined) {
            self.delay = 300;
        }
        if (self.minChars === undefined) {
            self.minChars = 1;
        }
        if (self.debounce === undefined) {
            self.debounce = 1e3;
        }
        self.modelOptions = {
            debounce: self.debounce
        };
        /**
         * @description Function to return if filter is configured correctly.
         * @returns {Boolean}
         */
        function areFiltersValid() {
            if (!self.doConfirm && !self.delay && !self.minChars) {
                return false;
            }
            var invalid;
            switch (self.mode) {
              case "basic":
                break;

              case "string":
                if (angular.isArray(self.filters) && self.filters.length > 0) {
                    invalid = false;
                    angular.forEach(self.filters, function(filter) {
                        if (typeof filter.name !== "string") {
                            invalid = true;
                        }
                    });
                    if (invalid) {
                        return false;
                    }
                } else {
                    return false;
                }
                break;

              case "advanced":
                if (angular.isArray(self.filters) && self.filters.length > 0) {
                    invalid = false;
                    angular.forEach(self.filters, function(filter) {
                        if (typeof filter.name !== "string" || typeof filter.icon !== "string") {
                            invalid = true;
                        }
                    });
                    if (invalid) {
                        return false;
                    }
                } else {
                    return false;
                }
                break;

              default:
                return false;
            }
            return true;
        }
        /**
         * @description Function sets initial values.
         */
        function setInitialValues() {
            self.active = undefined;
            if (self.mode === "advanced") {
                self.active = self.filters[self.default];
                self.currentPlaceholder = self.active.placeholder;
                self.queryData = [ {
                    name: self.active.name,
                    query: ""
                } ];
            } else {
                self.queryData = [ angular.copy(searchAll) ];
                self.currentPlaceholder = self.placeholder;
            }
            self.showOptions = false;
            self.whisperData = undefined;
            self.query = "";
            self.iconsSet = self.filters.some(function(filter) {
                return !!filter.icon;
            });
        }
        /**
         * @description Function gets cursor position. Zero means cursor is behind first letter.
         * @returns {Number} Cursor position
         */
        function getCursorPosition() {
            var input = $element.find("input").get(0);
            if ("selectionStart" in input) {
                // Standard-compliant browsers
                return input.selectionStart - 1;
            } else if (document.selection) {
                // IE
                input.focus();
                var sel = document.selection.createRange();
                var selLen = document.selection.createRange().text.length;
                sel.moveStart("character", -input.value.length);
                return sel.text.length - selLen - 1;
            }
        }
        /**
         * @description Function sets cursor position.
         * @param {Number} pos Cursor position
         */
        function setCursorPosition(pos) {
            var input = $element.find("input").get(0);
            if (input.setSelectionRange) {
                input.setSelectionRange(pos, pos);
            } else if (input.createTextRange) {
                var range = input.createTextRange();
                range.collapse(true);
                range.moveEnd("character", pos);
                range.moveStart("character", pos);
                range.select();
            }
        }
        /**
         * @description Function to initialize component.
         * @returns {Boolean} Initialized correctly
         */
        self.init = function() {
            if (areFiltersValid()) {
                setInitialValues();
                return true;
            }
        };
        if (!self.init()) {
            throw new raErrorHandlerSvc.RAError("Config exception", "raIpFilterSearch component was configured badly");
        } else {
            /**
             * @description Function handles selection of filter option.
             * @param {Object} option Filter option
             */
            self.optionClick = function(option) {
                self.showOptions = false;
                switch (self.mode) {
                  case "string":
                    if (self.query === "") {
                        self.query = option.name + ":";
                    } else {
                        self.query += " " + option.name + ":";
                    }
                    $element.find("input")[0].focus();
                    break;

                  case "advanced":
                    if (!self.active || self.active.name !== option.name) {
                        self.active = option;
                        self.currentPlaceholder = option.placeholder === undefined ? self.placeholder : option.placeholder;
                        self.query = "";
                        self.queryData = [ {
                            name: self.active.name,
                            query: ""
                        } ];
                    }
                    break;
                }
                self.inputActive = true;
                self.write();
            };
            /**
             * @description Function toggles filter options menu.
             */
            self.toggleOptions = function() {
                self.showOptions = !self.showOptions;
                self.whisperObj = undefined;
            };
            /**
             * @description Function deactivates filter and sets initial values.
             */
            self.cancel = function() {
                setInitialValues();
                self.inputActive = false;
                self.whisperObj = undefined;
                self.callback({
                    query: [ {
                        cancel: true
                    } ]
                });
            };
            /**
             * @description Function handles selecting whisper from whispers dropdown.
             */
            self.whisperClick = function(whisper) {
                if (self.mode === "string") {
                    var trimIndex = getCursorPosition();
                    var curPos = trimIndex;
                    for (var i = curPos; i >= 0; i--) {
                        if (self.query[i] === ":" || self.query[i] === " ") {
                            break;
                        }
                        trimIndex--;
                    }
                    self.query = self.query.slice(0, trimIndex + 1) + whisper + self.query.slice(curPos + 1);
                } else {
                    self.query = whisper;
                }
                self.write(true);
            };
            /**
             * @description Function handles query change. Edited filter (where is actually cursor) is at the end.
             * @param {Boolean} confirm Flag indicating whether query was explicitly confirmed. If so, callback will
             * @param {Boolean} onlyWhispers Flag indicating whether just whispers have to be updated and not callback
             * evoked.
             * be sent without looking at minChars and delay parameters.
             */
            self.write = function(confirm, onlyWhispers) {
                /**
                 * @description Function parses query in string mode, creates array. Active object is last.
                 * @param {Boolean} str Query string to parse.
                 * @returns {Array} Active filters.
                 */
                var parse = function(str) {
                    var parts = str.split(" "), cursorPos = getCursorPosition(), active = "all", filters = [], namesEqual = function(filter) {
                        return active === filter.name;
                    }, editedWord, editedFilter;
                    //save edited element
                    var word = "", wordIndex = 0;
                    for (var i = 0; i < str.length; i++) {
                        if (i === cursorPos) {
                            editedWord = wordIndex;
                            break;
                        }
                        if (str[i] === " ") {
                            wordIndex++;
                        } else {
                            word += str[i];
                        }
                    }
                    for (i = 0; i < parts.length; i++) {
                        if (parts[i].lastIndexOf(":") > -1) {
                            active = parts[i].split(":")[0];
                            parts[i] = parts[i].split(":")[1];
                        }
                        if (!parts[i]) {
                            continue;
                        }
                        if (self.filters.some(namesEqual) || active === "all") {
                            if (i === editedWord) {
                                editedFilter = {
                                    name: active,
                                    query: parts[i]
                                };
                            } else {
                                filters.push({
                                    name: active,
                                    query: parts[i]
                                });
                            }
                        }
                    }
                    filters.push(editedFilter);
                    return filters;
                };
                /**
                 * @description Function invokes callback function defined by user.
                 * @param {Boolean} hideWhispers Whispers dropdown will be hidden.
                 */
                var callback = function(hideWhispers) {
                    switch (self.mode) {
                      case "basic":
                        self.queryData[0].query = self.query;
                        self.callback({
                            query: self.queryData
                        });
                        break;

                      case "string":
                        var queryObj = parse(self.query);
                        if (queryObj.length) {
                            self.callback({
                                query: queryObj
                            });
                        }
                        self.queryData = [ angular.copy(searchAll) ];
                        break;

                      case "advanced":
                        self.callback({
                            query: self.queryData
                        });
                        if (self.mode === "advanced" && self.reset && confirm && self.active.name !== self.filters[self.default].name) {
                            self.optionClick(self.filters[self.default]);
                        }
                        break;
                    }
                    if (hideWhispers) {
                        self.whisperObj = undefined;
                    }
                };
                var value = self.query;
                var checkQueryLength = function() {
                    if (self.mode === "string") {
                        var curPos = getCursorPosition(), word = "";
                        for (var i = curPos; i >= 0; --i) {
                            if (value[i] === ":" || value[i] === " ") {
                                break;
                            } else {
                                word += value[i];
                            }
                        }
                        for (i = curPos; i < value.length; i++) {
                            if (value[i] === " ") {
                                break;
                            } else if (value[i] === ":") {
                                word = "";
                                break;
                            }
                        }
                        return word.length >= self.minChars;
                    } else {
                        return value.length >= self.minChars;
                    }
                };
                var greaterOrEqualMinChars = checkQueryLength();
                if (value === undefined || value === "" || !greaterOrEqualMinChars || value[value.length - 1] === ":") {
                    self.whisperObj = undefined;
                }
                if (!onlyWhispers) {
                    self.inputActive = true;
                }
                self.showOptions = false;
                switch (self.mode) {
                  case "basic":
                    self.queryData[0].query = self.query;

                  /* falls through */
                    case "string":
                    if (self.query === "" && !onlyWhispers) {
                        self.cancel();
                    }
                    break;

                  case "advanced":
                    if (self.query.length && self.query.indexOf(":") === self.query.length - 1) {
                        var name = self.query.split(":")[0];
                        angular.forEach(self.filters, function(filter) {
                            if (name === filter.name) {
                                self.query = "";
                                self.optionClick(filter);
                            }
                        });
                    }
                    self.queryData[self.queryData.length - 1].query = self.query;
                    break;
                }
                if (greaterOrEqualMinChars && !confirm) {
                    self.selectedWhisper = -1;
                    switch (self.mode) {
                      case "basic":
                        self.queryData[0].single = true;
                        self.whispers({
                            query: self.queryData
                        }).then(function success(response) {
                            self.whisperObj = response;
                        });
                        break;

                      case "string":
                        var queryData = parse(self.query), lastQuery = [ queryData[queryData.length - 1] ];
                        if (self.whisperLastQuery && lastQuery[0]) {
                            lastQuery[0].single = true;
                        }
                        if (lastQuery[0]) {
                            self.whispers({
                                query: self.whisperLastQuery ? lastQuery : queryData
                            }).then(function success(response) {
                                self.whisperObj = response;
                            });
                        }
                        break;

                      case "advanced":
                        var data = [ {
                            name: self.active.name,
                            query: self.query,
                            single: true
                        } ];
                        self.whispers({
                            query: data
                        }).then(function success(response) {
                            self.whisperObj = response;
                        });
                        break;
                    }
                }
                if (onlyWhispers) {
                    return;
                }
                if (confirm) {
                    callback(true);
                } else if (!self.doConfirm && greaterOrEqualMinChars) {
                    $timeout(callback, self.delay);
                }
            };
            /**
             * @description Function handles keypress events.
             * @param {Object} event
             */
            self.onKeyPress = function(event) {
                switch (event.keyCode) {
                  case 8:
                    //backspace
                    var curPos = getCursorPosition(), startTrim;
                    //deactivates filter
                    if (self.query === "") {
                        self.cancel();
                    } else if (self.query[curPos] === ":") {
                        self.searchForm.$commitViewValue();
                        for (var i = curPos; i >= 0; i--) {
                            if (self.query[i] === " ") {
                                startTrim = i + 1;
                                break;
                            }
                        }
                        if (startTrim === undefined) {
                            self.query = "";
                            self.cancel();
                        } else {
                            self.query = self.query.slice(0, startTrim) + self.query.slice(curPos + 1);
                            $timeout(function() {
                                setCursorPosition(startTrim);
                            });
                        }
                        event.preventDefault();
                    }
                    break;

                  case 13:
                    //enter
                    self.modelOptions.debounce = 0;
                    self.searchForm.$commitViewValue();
                    //ordinary whisper selected
                    if (self.whisperObj && self.whisperObj.results.length > 0 && self.selectedWhisper !== -1) {
                        self.whisperClick(self.whisperObj.results[self.selectedWhisper]);
                    } else {
                        self.write(true);
                        self.whisperObj = undefined;
                    }
                    $timeout(function() {
                        self.modelOptions.debounce = self.debounce;
                    });
                    break;

                  case 27:
                    //esc
                    //deactivates filter
                    self.cancel();
                    break;

                  case 38:
                    //up
                    //move selection in whispers dropdown one place up
                    if (self.whisperObj && self.whisperObj.results.length > 0 && self.selectedWhisper !== -1) {
                        self.selectedWhisper--;
                    }
                    event.preventDefault();
                    break;

                  case 40:
                    //down
                    //move selection in whispers dropdown one place down
                    if (self.whisperObj && self.whisperObj.results.length > 0 && self.selectedWhisper !== self.whisperObj.results.length - 1) {
                        self.selectedWhisper++;
                    }
                    event.preventDefault();
                    break;

                  default:
                    $timeout(function() {
                        self.write(false, true);
                    });
                }
            };
            if (angular.isFunction(self.setApi)) {
                self.api = {
                    /**
                     * @description Function reinitializes filter in chosen mode.
                     * @param {String} mode
                     */
                    reinit: function(mode) {
                        self.mode = mode;
                        self.cancel();
                        self.init();
                    }
                };
                self.setApi({
                    api: self.api
                });
            }
            var doc = $(document);
            /**
             * @description Function handles click event. When user clicks outside of dropdown, this dropdown should
             * close. But not if user clicks on dropdown menu or toggle buttons.
             * @param {Object} event
             */
            doc.click(function(event) {
                $scope.$apply(function() {
                    var clickedOnDropdown = function(target) {
                        return target.is($element.find(".ra-icon-drop-down")) || target.is($element.find(".filter-icon")) || target.is($element.find(".filter-options")) || target.closest($element.find(".filter-options")).length || target.is($element.find(".dropdown-menu")) || target.closest($element.find(".dropdown-menu")).length;
                    };
                    var target = $(event.target);
                    if (clickedOnDropdown(target)) {
                        event.preventDefault();
                        return;
                    }
                    if (self.showOptions) {
                        self.showOptions = false;
                    } else if (self.whisperObj && self.whisperObj.results.length > 0 && !self.showOptions && !target.is($element.find("input"))) {
                        self.whisperObj = undefined;
                    }
                });
            });
            /**
             * @description Function handles keydown event. Close dropdowns on esc press.
             * @param {Object} event
             */
            doc.keydown(function(event) {
                $scope.$apply(function() {
                    if (event.keyCode === 27) {
                        //esc
                        self.showOptions = false;
                        self.whisperObj = undefined;
                    }
                });
            });
            $scope.$on("$destroy", function() {
                doc.unbind("click");
                doc.unbind("keydown");
            });
        }
    } ]
});

/*
 * (c) Rockwell Automation 2017
 */
/**
 * @ngdoc directive
 * @name RA.IPComponents.component:raIpHeader
 * @module RA.IPComponents
 * @restrict E
 * @description
 * This component is responsible for rendering header. For icon is used raIpBadge component.
 *
 * @param {object} config
 * - **`class`** {string} to customize style of component
 * - **`underline`** {boolean} underline
 * - **`value`** {string} text message for simple header with underline
 * - **`icon`** {object} icon definiton raIpBadge {@link RA.IPComponents.component:raIpBadge}
 * - **`image`** {object}
 *    - **`url`** {string} path to an image
 *    - **`class`** {string} class to customize title
 *    - **`alt`** {string} alternative image name
 * - **`titleAlign`** {object} column | row default is column
 * - **`mainTitle`** {object}
 *    - **`class`** {string} class to customize title
 *    - **`value`** {string} text for title
 * - **`subtitle`** {object}
 *    - **`class`** {string} class to customize subtitle
 *    - **`value`** {string} text for subtitle
 *
 * @example

    <example module="example1">
        <file name="index.html">
            <div ng-controller="myCtrl">
                <ra-ip-header config="config"></ra-ip-header>
            </div>
        </file>
        <file name="script.js">
            angular.module('example1', ['mobile-toolkit-ra', 'RA.IPComponents']);
            angular.module('example1').controller('myCtrl',['$scope',
                function($scope) {
                    $scope.config = {
                        value: "Header text"
                    };
                }
            ]);
        </file>
    </example>

    <example module="example2">
        <file name="index.html">
            <div ng-controller="myCtrl">
                <ra-ip-header config="config"></ra-ip-header>
            </div>
        </file>
        <file name="script.js">
            angular.module('example2', ['mobile-toolkit-ra', 'RA.IPComponents']);
            angular.module('example2').controller('myCtrl',['$scope',
                function($scope) {
                    $scope.config = {
                        icon: {
                            class: 'ra-icon-home'
                        },
                        mainTitle: {
                            value: 'Main title'
                        },
                        subtitle: {
                            value: 'Subtitle'
                        }
                    };
                }
             ]);
        </file>
    </example>

     <example module="example3">
         <file name="index.html">
            <div ng-controller="myCtrl">
                <ra-ip-header config="config"></ra-ip-header>
            </div>
         </file>
         <file name="script.js">
            angular.module('example3', ['mobile-toolkit-ra', 'RA.IPComponents']);
            angular.module('example3').controller('myCtrl',['$scope',
                function($scope) {
                    $scope.config = {
                        image: {
                            url: '../grunt-styles/docs/ra-logo.svg',
                            alt: 'Rockwell Automation'
                        },
                        titleAlign: 'row',
                        mainTitle: {
                            value: 'Main title'
                        },
                        subtitle: {
                            value: 'Subtitle'
                        }
                    };
                }
            ]);
        </file>
     </example>

    <example module="example4">
        <file name="index.html">
            <div ng-controller="myCtrl">
                <ra-ip-header config="config"></ra-ip-header>
            </div>
        </file>
        <file name="script.js">
            angular.module('example4', ['mobile-toolkit-ra', 'RA.IPComponents']);
            angular.module('example4').controller('myCtrl',['$scope',
                function($scope) {
                    $scope.config = {
                        image: {
                            url: '../grunt-styles/docs/ra-logo.svg',
                            alt: 'Rockwell Automation'
                        },
                        mainTitle: {
                            value: 'Main title'
                        }
                    };
                }
            ]);
        </file>
    </example>

 */
/* global angular */
angular.module("RA.IPComponents").component("raIpHeader", {
    templateUrl: "components/raIpHeader/raIpHeader.tpl.html",
    bindings: {
        config: "<"
    },
    controllerAs: "ctrl",
    controller: [ function() {
        "use strict";
        var self = this;
        /**
             * @description normalize config to set default values
             */
        function normalizeConfig() {
            self.config = self.config || {};
            self.config.titleAlign = self.config.titleAlign || "column";
        }
        normalizeConfig();
    } ]
});

/*
 * (c) Rockwell Automation 2017
 */
/**
 * @ngdoc directive
 * @name RA.IPComponents.component:raIpInfoMessage
 * @module RA.IPComponents
 * @restrict E
 * @description
 * This component is responsible for rendering no data message with action button. The component expects to receive
 * {object} **`config`**.
 * @param {object} config
 * - **`class`** {string}
 * - **`text`** {string} text message
 * - **`action`** {object} raIpActions component.
 *      See also {@link RA.IPComponents.component:raIpActions}.
 * @example

 <example module="example1">
    <file name="index.html">
        <div ng-controller="myCtrl">
            <ra-ip-info-message config="config"></ra-ip-info-message>
        </div>
    </file>
 <file name="script.js">
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
 </file>
 </example>
*/
/* global angular */
angular.module("RA.IPComponents").component("raIpInfoMessage", {
    templateUrl: "components/raIpInfoMessage/raIpInfoMessage.tpl.html",
    bindings: {
        config: "<"
    },
    controllerAs: "ctrl",
    controller: [ function() {
        "use strict";
        var self = this;
        /**
             * @description normalize config to set default values
             */
        function normalizeConfig() {
            self.config = self.config || {};
            self.config.size = self.config.size || "medium";
        }
        normalizeConfig();
        /**
             * @description onClick function to check if the action is function
             * @param action
             */
        self.invokeDoAction = function(action) {
            if (typeof action.onAction === "function") {
                action.onAction();
            }
        };
    } ]
});

/*
 * (c) Rockwell Automation 2017
 */
/**
 * @ngdoc directive
 * @name RA.IPComponents.component:raIpRepeat
 * @module RA.IPComponents
 * @restrict E
 * @description
 * This component is responsible for repeating items in array.
 * @param {object} config
 * - **`template`** {string} template html template string
 * - **`items`** {array} items for raIpRepeatItem
 *
 * @example

    <example module="example1">
        <file name="index.html">
            <div ng-controller="myCtrl">
                <ra-ip-repeat config="config"></ra-ip-repeat>
            </div>
        </file>
        <file name="script.js">
            angular.module('example1', ['mobile-toolkit-ra', 'RA.IPComponents']);
            angular.module('example1').controller('myCtrl',['$scope',
                function($scope) {
                    $scope.config = {
                        template: '<ra-ip-card>' +
                        '<span style="display:block; padding:30px 20px;">test</span></ra-ip-card>',
                        items:[{

                        },{}]
                    };
                }
            ]);
        </file>
    </example>
*/
/*global angular*/
angular.module("RA.IPComponents").component("raIpRepeat", {
    templateUrl: "components/raIpRepeat/raIpRepeat.tpl.html",
    bindings: {
        config: "<"
    },
    controllerAs: "ctrl",
    controller: [ function() {
        "use strict";
    } ]
});

/*
 * (c) Rockwell Automation 2017
 */
/**
 * @ngdoc directive
 * @name RA.IPComponents.component:raIpRepeatItem
 * @module RA.IPComponents
 * @description
 * This component is responsible for compiling the item content.
 * @param {string} template html template string
 * @param {object} item for compiled component
 */
/* global angular */
angular.module("RA.IPComponents").directive("raIpRepeatItem", function($compile) {
    "use strict";
    return {
        scope: {
            config: "<",
            template: "<"
        },
        restrict: "EA",
        compile: function(ele) {
            var transclude = ele.html();
            ele.html("");
            return function(scope, elem) {
                var tpl = angular.element(scope.template);
                tpl.append(transclude);
                $compile(tpl)(scope);
                elem.append(tpl);
            };
        }
    };
});

/*
 * (c) Rockwell Automation 2017
 */
/*global angular*/
/**
 * @ngdoc directive
 * @name RA.IPComponents.component:raIpSteps
 * @module RA.IPComponents
 * @restrict E
 * @scope true
 * @description
 * This component is responsible for rendering steps, used e.g. in wizard component.
 * The component expects to receive {object} **`config`**.
 *
 * @param {object} config
 * - **`size`** {string} steps size, possible values 'small', 'medium', 'large', defaults to 'medium'
 * - **`type`** {string} steps type, possible values 'numeric', 'icons', defaults to 'numeric'
 * - **`theme`** {string} steps theme, possible values 'rockwell', defaults to 'rockwell'
 * - **`enableTitles`** {boolean} flag to turn on/off step title
 * - **`autofillConnector`** {boolean} flag to turn automatic color filling for connector between two active steps,
 *      defaults to false
 * - **`disableStatusColor`** {boolean} flag to disable coloring of statuses for current theme
 * - **`steps`** {array} array with step configuration, possible step object definition:
 *      - **`step`** {object} step definition
 *          - **`tooltip`** {string} step tooltip
 *          - **`title`** {string} title to show unsder step, enableTitles flag must be turned on to show title
 *          - **`iconClass`** {string} with class definition example:
 *                 "ra-icon-home"
 *          - **`disabled`** {boolean} flag indicating disabled step
 *              (is not clickable if true - onAction cannot be triggered)
 *          - **`clickable`** {boolean} flag indicating step is clickable (onAction can be trigered)
 *          - **`active`** {boolean} flag indicating step is active, has active visual
 *          - **`onAction`** {function} funtion to be triggered for clickable step on step click
 *              (clickable must be true to work properly)
 *
 @example
 The example below shows how to use raIpSteps.

 <example module="example1">
 <file name="index.html">
 <div ng-controller="myCtrl">
    <div>With icons and tooltip text (small size):</div>
    <ra-ip-steps config="stepsConfigA"></ra-ip-steps>
    <div>With icons and second item active (medium size):</div>
    <ra-ip-steps config="stepsConfigB"></ra-ip-steps>
    <div>With click actions (large size):</div>
    <ra-ip-steps config="stepsConfigC"></ra-ip-steps>
    <div>Numeric steps (small size):</div>
    <ra-ip-steps config="stepsConfigD"></ra-ip-steps>
    <div>With titles (small size):</div>
    <ra-ip-steps config="stepsConfigE"></ra-ip-steps>
    <div>With statuses:</div>
    <ra-ip-steps config="stepsConfigF"></ra-ip-steps>
 </div>
 </file>
 <file name="script.js">
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
 </file>
 </example>
 */
angular.module("RA.IPComponents").component("raIpSteps", {
    template: [ "$templateCache", function($templateCache) {
        "use strict";
        return $templateCache.get("components/raIpSteps/raIpSteps.tpl.html");
    } ],
    bindings: {
        config: "<"
    },
    controller: [ function() {
        "use strict";
        var self = this;
        function normalizeConfig() {
            self.config = self.config || {};
            self.config.size = self.config.size || "medium";
            self.config.type = self.config.type || "numeric";
            self.config.theme = self.config.theme || "rockwell";
            self.config.orientation = "horizontal";
            self.config.autofillConnector = angular.isDefined(self.config.autofillConnector) ? self.config.autofillConnector : false;
            self.config.steps = self.config.steps || [];
            self.config.disableStatusColor = angular.isDefined(self.config.disableStatusColor) ? self.config.disableStatusColor : false;
        }
        // init section
        normalizeConfig();
        self.statusIcons = {
            error: "ra-icon-clear",
            success: "ra-icon-commit",
            warning: "ra-icon-warning"
        };
    } ]
});

/*
 * (c) Rockwell Automation 2017
 */
/* global angular */
/**
 * @ngdoc directive
 * @name RA.IPComponents.component:raIpTable
 * @module RA.IPComponents
 * @restrict E
 * @description
 * This component is responsible for rendering the table.

 * @param {Array} config
 * - **`class`** {String}
 * - **`header`** {Array} header objects definitions
 *      - **`value`** {string} value
 * - **`items`** {Array} items array of objects with this structure
 *      - **`item`** {object} origin item not parsed
 *      - **`columns`** {Array} of column items
 *          - **`label`** {string}
 *          - **`value`** {string}
 *      - **`actions`** {Array} of action buttons raIpActions {@link RA.IPComponents.component:raIpActions}
 * @param {Object} setApi api
 *

 @example
 The example below shows how to use raIpCardBody

 <example module="example1">
     <file name="index.html">
         <div ng-controller="myCtrl">
            <ra-ip-table config="config" set-api="setApi">
            </ra-ip-table>
         </div>
     </file>

     <file name="script.js">
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
 </file>
 </example>
 **/
angular.module("RA.IPComponents").component("raIpTable", {
    templateUrl: "components/raIpTable/raIpTable.tpl.html",
    replace: true,
    bindings: {
        config: "<"
    },
    controllerAs: "ctrl",
    controller: [ function() {
        "use strict";
        var self = this;
        /**
             * @description normalize config to set default values
             */
        function normalizeConfig() {
            self.config = self.config || {};
        }
        normalizeConfig();
    } ]
}).filter("isArray", function() {
    "use strict";
    return function(input) {
        return angular.isArray(input);
    };
});

/* (c) Rockwell Automation 2016 */
/* global _ */
//disable jshint line length for these api comments, some are required to be long for formatting
//reenabled after these comments.
/* jshint -W101 */
/**
 * @ngdoc directive
 * @name RA.IPComponents.directive:raIpToolbox
 * @module RA.IPComponents
 *
 * @param {boolean} expanded Is toolbox expanded?
 * @param {object} minPanel Minimized pane configuration.
 *
 * | Property                       | Type             | Details                                                                   | Default value                                                                           |
 * |------------------------------- |------------------|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
 * | enabled                        | {@type boolean}  | If there should be added option to switch to minPanel                     | undefined                                                                               |
 * | active                         | {@type boolean}  | If minPanel is currently active                                           | undefined                                                                               |
 *
 * @param {string} display How items are displayed ('inline'/'grid')
 * @param {object} config
 *
 * | Property                       | Type             | Details                                                                   | Default value                                                                           |
 * |------------------------------- |------------------|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
 * | service (optional)             | {@type string}   | Name of custom service to use instead of default raIpToolboxSvc           | undefined                                                                               |
 * | items                          | {@type array}    | Array of items to put into toolbox. If not using default service          | undefined                                                                               |
 * | commonlyUsed                   | {@type array}    | Array of commonly used items                                              | undefined                                                                               |
 * | filter                         | {@type object}   | Filter configuration object, see raIpFilterSearchComponent                                               | undefined                                                                               |
 * | orderBy                        | {@type string}   | By which property to order items                                          | undefined                                                                               |
 * | dragDrop                       | {@type boolean}  | Enable dragdrop items                                                     | undefined                                                                               |
 * | selection                      | {@type boolean}  | Enable selection of items                                                 | undefined                                                                               |
 * | contextMenu                    | {@type object}   | contextMenu config object                                                 | undefined                                                                               |
 *
 * @param {object} callbacks
 *
 * | Property                       | Type             | Details                                                                   | Default value                                                                           |
 * |------------------------------- |------------------|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
 * | onToggleMinPanel               | {@type function} | Function to call on toggle minimized panel                                | undefined                                                                               |
 * | onToggleToolbox                | {@type function} | Function to call on toggle toolbox                                        | undefined                                                                               |
 * | onSelectElement                | {@type function} | Function to call on select element                                        | undefined                                                                               |
 * | onSelectCategory               | {@type function} | Function to call on select category                                       | undefined                                                                               |
 *
 *
 * @param {function} setApi
 * A callback function that returns an API object. It takes a single parameter named 'api'
 * that will contain the API object when called.
 *
 * The object passed to the callback function has the functions and properties listed below.
 *
 * - **switchDisplay()** - `{function}` -
 *   A function that switches between item display modes.
 * - **toggleMinPanel()** - `{function}` -
 *   A function that toggles between normal (wide) pane and minimized pane.
 * - **selectElement('id')** - `{function}` -
 *   A function that selects element(item) from displayed category.
 * - **selectCategory('category.subcategory')** - `{function}` -
 *   A function that selects category.
 * - **updateContextMenu([object])** - `{function}` -
 *   A function that updates context menu. Takes one argument - configuration object of $.contextMenu.
 * - **refreshTree(newItems, category, element)** - `{function}` -
 *   A function that refreshes tree.
 *   - newItems - items to fill toolbox with, if using customSvc, leave this out
 *   - category - category to select after refresh (type string) eg. 'Basic.Shapes'
 *   - element - element to select after refresh (type string), id of element eg. '4' or 'myItem'
 *
 * @description
 * The directive lists given items and divides them into defined categories. Items can be draggable and selectable, they can be displayed either in grid or in lines. Categories are displayed in collapsible tree. There is a button to collapse all tree nodes. Toolbox can be minimized to side of parent container.
 *
 * ## Minimized version
 * Items are displayed in squares, one item per row. There is a button to open category tree dropdown and another button to return to wide panel display.
 *
 @example
 <example module="example1">
 <file name="style.css">
 .toolbox-wrapper {
    position: relative;
    color: black;
    width: 220px;
 }
 </file>
 <file name="index.html">
 <div ng-controller="raIpToolboxCtrl">
     <div class="toolbox-wrapper ra-flex-column">
         <ra-ip-toolbox
             min-panel="minPanel"
             display="display"
             config="config"
             callbacks="callbacks"
             expanded="expanded"
             set-api="setApi(api)"
             >
         </ra-ip-toolbox>
     </div>
     <h4>Configuration</h4>
     <div>
         <label for="expanded">expanded</label>
         <input id="expanded" type="checkbox" ng-model="expanded">
         <br />
         <button ng-click="api.switchDisplay()">Switch display</button>
         <br />

         <h3>MinPanel</h3>
         <button ng-click="api.toggleMinPanel()">Toggle minPanel</button>
         <br />
         <button ng-click="refreshTree()">Refresh tree with new items</button>
         <br />
         <label for="elementID">element ID</label>
         <input id="elementID" type="text" ng-model="elementID">
         <button ng-click="api.selectElement(elementID)">Select element</button>
         <br />
         <label for="categoryID">category ID</label>
         <input id="categoryID" type="text" ng-model="categoryID">
         <button ng-click="api.selectCategory(categoryID)">Select category</button>
     </div>
 </div>
 </file>
 <file name="script.js">
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
 </file>
 </example>
 */
/* jshint +W101 */
angular.module("RA.IPComponents").directive("raIpToolbox", [ function() {
    "use strict";
    return {
        restrict: "EA",
        templateUrl: "components/raIpToolbox/raIpToolbox.tpl.html",
        replace: true,
        controller: "raIpToolbox",
        scope: {
            expanded: "=",
            minPanel: "=",
            display: "<",
            config: "=",
            callbacks: "<",
            setApi: "&"
        }
    };
} ]).filter("dotToSlash", function() {
    "use strict";
    /**
     * @description Function replaces dots by slashes.
     * @param input String to modify
     * @returns {String}
     */
    return function(input) {
        if (input !== undefined) {
            return input.replace(/\./g, "/");
        }
    };
});

angular.module("RA.IPComponents").controller("raIpToolbox", [ "$scope", "$element", "$injector", "orderByFilter", "contextMenuSvc", "raErrorHandlerSvc", "$q", "$timeout", function($scope, $element, $injector, orderBy, contextMenuSvc, raErrorHandlerSvc, $q, $timeout) {
    "use strict";
    //if not defined custom service, use default
    var svc = $injector.get($scope.config.service || "raIpToolboxSvc"), defaultToolboxWidth = "100%";
    if (!$scope.config.service && $scope.config.items) {
        svc.setAllResources($scope.config.items);
    }
    $scope.display = $scope.display || "grid";
    $scope.dropdownMenu = false;
    $scope.minPanel = $scope.minPanel || {};
    $scope.minPanel.width = $scope.minPanel.width || 80;
    $scope.inProgress = {
        categories: true,
        items: true
    };
    if ($scope.minPanel.enabled) {
        var setWidth = function() {
            if ($scope.minPanel.active) {
                $element.width($scope.minPanel.width);
            } else {
                $element.width(defaultToolboxWidth);
            }
        };
        /**
             * @description Function toggles between wide toolbox and minimized toolbox.
             */
        $scope.minOrMax = function() {
            if ($scope.dropdownMenu) {
                $scope.toggleDropdownMenu();
            }
            $scope.minPanel.active = !$scope.minPanel.active;
            if ($scope.callbacks && angular.isFunction($scope.callbacks.onToggleMinPanel)) {
                $scope.callbacks.onToggleMinPanel($scope.minPanel.active);
            }
            setWidth();
        };
        $element.find(".toolbox-dropdown-menu").css("left", $scope.minPanel.width);
        setWidth();
    }
    /**
         * @description Function toggles dropdown menu.
         */
    $scope.toggleDropdownMenu = function() {
        $scope.dropdownMenu = !$scope.dropdownMenu;
        var el = $($element).find(".toolbox-dropdown-menu");
        el.animate({
            width: "toggle"
        });
    };
    /**
         * @description Function toggles toolbox.
         */
    $scope.toggleToolbox = function() {
        $scope.expanded = !$scope.expanded;
        if ($scope.callbacks && angular.isFunction($scope.callbacks.onToggleToolbox)) {
            $scope.callbacks.onToggleToolbox($scope.expanded);
        }
    };
    //tree section
    var apis = {
        treeAPI: [],
        treeAPIMin: []
    }, previous = {};
    /**
         * @description Function sets api object to control api of raTree in wide version of toolbox.
         */
    $scope.setTreeApi = function(api) {
        apis.treeAPI = api;
    };
    /**
         * @description Function sets api object to control api of raTree in minimized version of toolbox.
         */
    $scope.setTreeApiMin = function(api) {
        apis.treeAPIMin = api;
    };
    /**
         * @description Sort by numbers, not alphabetically.
         */
    function sortByNumber(a, b) {
        return b[1] - a[1];
    }
    if ($scope.config.commonlyUsed) {
        var commonlyUsedIds = [];
        $scope.config.commonlyUsed.label = $scope.config.commonlyUsed.label || "Most commonly used";
        updateCommonlyUsedList();
        var commonlyUsedObj = {
            label: $scope.config.commonlyUsed.label,
            data: {
                category: $scope.config.commonlyUsed.label
            },
            children: []
        };
    }
    svc.getCategoryTree().then(//select first node
    function success(tree) {
        $scope.inProgress.categories = false;
        $scope.tree = tree;
        if ($scope.config.commonlyUsed) {
            tree.unshift(commonlyUsedObj);
        }
        $timeout(function() {
            apis.treeAPI.selectNode("0");
            apis.treeAPIMin.selectNode("0");
            $scope.userSelectCallback($scope.tree[0]);
        });
    }, function error() {
        $scope.tree = [];
        throw new raErrorHandlerSvc.RAError("Server error", "Error retrieving data");
    });
    /**
         * @description Function selects particular node in particular raTree.
         * @param treeAPI Api to control selected tree
         * @param node Which node to select
         */
    function selectAndExpandNode(treeAPI, node) {
        apis[treeAPI].collapseNodes();
        var length = (node.length + 1) / 2;
        var expand = [];
        for (var i = 0; i < length; i++) {
            expand.push(node.substr(0, i * 2 + 1));
        }
        apis[treeAPI].setExpandedNodes(expand);
        apis[treeAPI].selectNode(node);
    }
    /**
         * @description Function handles selection of category.
         * @param node Tree node to select
         * @returns {Object} Promise
         */
    $scope.userSelectCallback = function(node) {
        var deferred = $q.defer();
        $scope.categoryName = node.label;
        previous.node = node;
        $scope.inProgress.items = true;
        //if commonly used is selected
        if ($scope.config.commonlyUsed && node.data.category === $scope.config.commonlyUsed.label) {
            svc.getResourcesByIds(commonlyUsedIds).then(function success(resources) {
                $scope.inProgress.items = false;
                $scope.graphics = resources;
                if ($scope.callbacks && angular.isFunction($scope.callbacks.onSelectCategory)) {
                    $scope.callbacks.onSelectCategory(node);
                }
                deferred.resolve();
            }, function error(reason) {
                $scope.graphics = [];
                deferred.reject(reason);
            });
        } else {
            svc.getResourcesByCategory(node.data.category).then(function success(resources) {
                $scope.inProgress.items = false;
                $scope.graphics = orderBy(resources, $scope.config.orderBy);
                if ($scope.callbacks && angular.isFunction($scope.callbacks.onSelectCategory)) {
                    $scope.callbacks.onSelectCategory(node);
                }
                deferred.resolve();
            }, function error(reason) {
                deferred.reject(reason);
            });
        }
        if ($scope.minPanel.active) {
            selectAndExpandNode("treeAPI", apis.treeAPIMin.getSelectedNode());
            $scope.toggleDropdownMenu();
        } else {
            selectAndExpandNode("treeAPIMin", apis.treeAPI.getSelectedNode());
        }
        scrollToSelectedItem();
        return deferred.promise;
    };
    /**
         * @description Function collapses all tree nodes.
         */
    $scope.collapseAll = function() {
        apis.treeAPI.collapseNodes();
    };
    /**
         * @description Function expands all tree nodes.
         */
    // UNCOMMENT WHEN NEEDED
    // $scope.expandAll = function () {
    //     var allNodes = [];
    //     function getNodes(node, prefix) {
    //         angular.forEach(node, function (item, index) {
    //             allNodes.push(prefix + index);
    //             getNodes(item.children, prefix + index + '_');
    //         });
    //     }
    //     getNodes($scope.tree, '');
    //     apis.treeAPI.setExpandedNodes(allNodes);
    // };
    var selectedItem;
    /**
         * @description Function scrolls to selected item or category, if it is not visible.
         */
    var scrollToSelectedItem = function(item) {
        $timeout(function() {
            var selectedElem = $element.find((item ? ".item.selected" : ".ra-tree-node-selected") + ":visible");
            if (!selectedElem.length) {
                return;
            }
            var itemsElem = $element.find((item ? ".category-elements" : "div[ra-tree]") + ":visible"), selectedElemPos = selectedElem.offset().top - $(window).scrollTop(), itemsElemPos = itemsElem.offset().top - $(window).scrollTop();
            if (selectedElemPos !== undefined) {
                // is hidden on bottom or on top
                if (itemsElemPos + itemsElem.height() < selectedElemPos + selectedElem.height() || itemsElemPos > selectedElemPos) {
                    itemsElem.animate({
                        scrollTop: itemsElem.scrollTop() + selectedElemPos - itemsElemPos - itemsElem.height() / 2
                    }, "fast");
                }
            }
        });
    };
    /**
         * @description Function selects item.
         * @param graphic selected item
         */
    $scope.selectItem = function(graphic) {
        if (selectedItem) {
            if (graphic.id !== selectedItem.id) {
                selectedItem.selectedClass = undefined;
                graphic.selectedClass = "selected";
                selectedItem = graphic;
            } else {
                selectedItem.selectedClass = undefined;
                selectedItem = undefined;
            }
        } else {
            graphic.selectedClass = "selected";
            selectedItem = graphic;
        }
        if ($scope.callbacks && angular.isFunction($scope.callbacks.onSelectElement)) {
            $scope.callbacks.onSelectElement(graphic);
        }
        if ($scope.config.selection) {
            updateCommonlyUsedCount(graphic.id);
        }
        scrollToSelectedItem(true);
    };
    if ($scope.minPanel.enabled) {
        $(window).click(function() {
            $scope.$apply(function() {
                //hide dropdown menu
                if ($scope.dropdownMenu && $scope.minPanel.active) {
                    $scope.toggleDropdownMenu();
                }
            });
        });
        //do not hide dropdown menu
        $($element).find(".button-categories").click(function(event) {
            event.stopPropagation();
        });
    }
    //filter section
    if ($scope.config.filter) {
        var filterOptions = [];
        $scope.filterActive = false;
        //fill filterOptions
        angular.forEach($scope.config.filter.filters, function(filter) {
            filterOptions.push(filter.name);
        });
        /**
             * @description Filter callback function.
             * @param queryData data from filter component
             */
        $scope.config.filter.callback = function(queryData) {
            //on cancel
            if (queryData[0].cancel) {
                $scope.filterActive = false;
                if (previous.display) {
                    $scope.display = previous.display;
                    $scope.userSelectCallback(previous.node);
                }
            } else {
                $scope.inProgress.items = true;
                if (queryData[0].name === "all") {
                    queryData[0].filterOptions = filterOptions;
                }
                svc.getResourcesByFilter(queryData, false).then(function success(resources) {
                    $scope.inProgress.items = false;
                    $scope.graphics = resources;
                }, function error() {
                    $scope.graphics = [];
                    throw new raErrorHandlerSvc.RAError("Server error", "Error retrieving data");
                });
                if (!$scope.filterActive) {
                    $scope.filterActive = true;
                    previous.display = $scope.display;
                    $scope.display = "inline";
                }
            }
        };
        /**
             * @description Filter whispers function.
             * @param queryData data from filter component
             * @returns {Object} Promise
             */
        $scope.config.filter.whispers = function(queryData) {
            if (queryData[0].name === "all") {
                queryData[0].filterOptions = filterOptions;
            }
            var deferred = $q.defer();
            svc.getResourcesByFilter(queryData, true).then(function success(resources) {
                deferred.resolve(resources);
            }, function error(reason) {
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        /**
             * @description Filter whispers function.
             * @param api Object with api methods from filter.
             * @returns {Object} Promise
             */
        $scope.config.filter.setApi = function(api) {
            $scope.filterApi = api;
        };
    }
    //commonly used
    /**
         * @description Function adds item in commonly used array or it increments its count.
         * @param id
         */
    function updateCommonlyUsedCount(id) {
        var add = false;
        angular.forEach($scope.config.commonlyUsed.items, function(item) {
            if (item[0] === id) {
                item[1]++;
                $scope.config.commonlyUsed.items.sort(sortByNumber);
                add = true;
            }
        });
        if (!add) {
            if ($scope.config.commonlyUsed.items[$scope.config.commonlyUsed.max - 1]) {
                $scope.config.commonlyUsed.items.splice($scope.config.commonlyUsed.max - 1, 1);
            }
            $scope.config.commonlyUsed.items.push([ id, 1 ]);
            updateCommonlyUsedList();
        }
    }
    /**
         * @description Function updates list of commonly used after change.
         */
    function updateCommonlyUsedList() {
        commonlyUsedIds = $scope.config.commonlyUsed.items.map(function(value) {
            return value[0];
        });
    }
    //list of graphic elements
    $scope.categoryName = "All items";
    /**
         * @description Changes helper style of element.
         * @param event
         * @returns {Object} helper object
         */
    function changeHelperStyle(event) {
        var el = angular.element(event.currentTarget);
        var helper = el.clone();
        helper.css("cursor", "move");
        helper.css("width", $(event.currentTarget).css("width"));
        helper.addClass("ra-list-drag-source");
        return helper;
    }
    $scope.jqyouiOptions = {
        revert: "invalid",
        helper: changeHelperStyle,
        revertDuration: 200
    };
    /**
         * @description Drag stop event handler function.
         * @param event
         * @param ui
         */
    $scope.stop = function(event, ui) {
        if (ui.helper.data("dropped") && !$scope.config.selection) {
            updateCommonlyUsedCount(ui.helper.context.dataset.id);
        }
    };
    /**
         * @description Function updates context menu.
         * @param forCategories Is it context menu for categories or for items?
         * @param config Configuration of $.context-menu
         * @param firstRun If it is run for the first time.
         */
    function updateContextMenu(forCategories, config, firstRun) {
        config.className += " toolbox-context-menu";
        var selector = ".ra-ip-toolbox .item";
        if (forCategories) {
            selector = ".ra-ip-toolbox .ra-tree-node";
        }
        if (!firstRun) {
            contextMenuSvc.destroyContextMenu(selector);
        }
        contextMenuSvc.addNewContextMenu(selector, config);
    }
    //object that defines toolbox api
    $scope.toolboxApi = {
        /**
             * @description Function switches display mode of items.
             */
        switchDisplay: function() {
            if ($scope.display === "inline") {
                $scope.display = "grid";
            } else {
                $scope.display = "inline";
            }
        },
        toggleMinPanel: function() {
            $scope.minOrMax();
        },
        /**
             * @description Function switches display mode of items.
             * @param newItems Items to show, only if default service is being used
             * @param category Category to select after refresh
             * @param element Element to select after refresh
             * @returns {Object} Promise
             */
        refreshTree: function(newItems, category, element) {
            var deferred = $q.defer();
            $scope.inProgress.items = true;
            if (!$scope.config.service) {
                $scope.config.items = newItems;
                svc.setAllResources($scope.config.items);
            }
            svc.getCategoryTree().then(function success(resources) {
                $scope.inProgress.items = false;
                $scope.tree = resources;
                if ($scope.config.commonlyUsed) {
                    $scope.tree.unshift(commonlyUsedObj);
                }
                if (category) {
                    $scope.toolboxApi.selectCategory(category).then(function success() {
                        if (element) {
                            if (selectedItem) {
                                selectedItem.selectedClass = undefined;
                                selectedItem = undefined;
                            }
                            $scope.toolboxApi.selectElement(element);
                        }
                    });
                } else {
                    apis.treeAPI.selectNode("0");
                    $scope.userSelectCallback($scope.tree[0]).then(function success() {
                        if (element) {
                            $scope.toolboxApi.selectElement(element);
                        }
                    });
                }
                deferred.resolve();
            }, function error() {
                $scope.tree = [];
                throw new raErrorHandlerSvc.RAError("Server error", "Error retrieving data");
            });
            return deferred.promise;
        },
        /**
             * @description Function selects element in toolbox.
             * @param id Unique id of element
             */
        selectElement: function(id) {
            //id is string
            var gr = _.find($scope.graphics, {
                id: id.toString()
            });
            if (gr) {
                $scope.selectItem(gr);
            }
        },
        /**
             * @description Function selects category in toolbox.
             * @param category Whole category name
             */
        selectCategory: function(category) {
            //eg. 'General Equipment.Tanks'
            var deferred = $q.defer();
            apis.treeAPI.collapseNodes();
            /**
                 * @description Function finds node in tree.
                 * @param tree In which tree to search
                 * @param category Unique category
                 */
            var findNode = function(tree, category) {
                category = category.split(".");
                var foundDeeper, found = {
                    id: ""
                };
                angular.forEach(tree, function(node, index) {
                    if (node.label === category[0]) {
                        if (category.length === 1) {
                            found.id += index;
                            found.obj = node;
                        } else if (node.children.length > 0) {
                            category.shift();
                            found.id += index;
                            apis.treeAPI.expandNode(found.id);
                            foundDeeper = findNode(node.children, category.join("."));
                            if (foundDeeper.id !== "") {
                                found.id += "_" + foundDeeper.id;
                                found.obj = foundDeeper.obj;
                            }
                        }
                    }
                });
                return found;
            };
            var node = findNode($scope.tree, category);
            if (!node.id.length) {
                node.id = "0";
                node.obj = $scope.tree[0];
            }
            apis.treeAPI.selectNode(node.id);
            $scope.userSelectCallback(node.obj).then(function success() {
                deferred.resolve();
            }, function error(reason) {
                deferred.reject(reason);
            });
            return deferred.promise;
        },
        updateContextMenu: updateContextMenu
    };
    $scope.setApi({
        api: $scope.toolboxApi
    });
    if ($scope.config.contextMenu) {
        if ($scope.config.contextMenu.items) {
            updateContextMenu(false, $scope.config.contextMenu.items, true);
        }
        if ($scope.config.contextMenu.categories) {
            updateContextMenu(true, $scope.config.contextMenu.categories, true);
        }
    }
    $scope.$on("$destroy", function() {
        $(window).unbind("click");
        contextMenuSvc.destroyContextMenu(".ra-ip-toolbox .item");
        contextMenuSvc.destroyContextMenu(".ra-ip-toolbox .ra-tree-node");
    });
} ]);

// Copyright Rockwell Automation Technologies, Inc.
// All Rights Reserved.
/*
 * (c) Rockwell Automation 2016
 */
/* global angular */
/* global _ */
angular.module("RA.IPComponents").factory("raIpToolboxSvc", [ "orderByFilter", "$q", function(orderBy, $q) {
    "use strict";
    var resources, tree;
    function setAllResources(resourceArray) {
        resources = orderBy(resourceArray, "category");
        var createTree = function(items) {
            var tree = [];
            var categoryLabel;
            function createFolder(loc, path, index) {
                if (loc.length === 0 || loc[loc.length - 1].label !== path[0]) {
                    loc.push({
                        label: path[0],
                        data: {
                            category: categoryLabel
                        },
                        children: []
                    });
                }
                path.shift();
                if (path.length) {
                    categoryLabel += "." + path[0];
                } else {
                    return;
                }
                createFolder(loc[loc.length - 1].children, path, index);
            }
            angular.forEach(items, function(widget, index) {
                if (widget.category) {
                    var path = widget.category.split(".");
                    categoryLabel = path[0];
                    createFolder(tree, path, index);
                }
            });
            return tree;
        };
        tree = createTree(resources);
    }
    function getResourcesByIds(ids) {
        var deferred = $q.defer();
        deferred.resolve(resources.filter(function(value) {
            var found = false;
            angular.forEach(ids, function(id) {
                if (id == value.id) {
                    //jshint ignore:line
                    found = true;
                }
            });
            return found;
        }));
        return deferred.promise;
    }
    function getResourcesByCategory(category) {
        var deferred = $q.defer();
        deferred.resolve(resources.filter(function(value) {
            return value.category.indexOf(category) === 0 && (value.category.length === category.length || value.category[category.length] === ".");
        }));
        return deferred.promise;
    }
    function getResourcesByFilter(queryData, whispers) {
        var results = angular.copy(resources), data, deferred = $q.defer(), convertToString = function(prop) {
            var property;
            if (typeof prop === "number") {
                property = prop.toString();
            } else if (typeof prop === "string") {
                property = prop.toLowerCase();
            } else {
                property = "";
            }
            return property;
        };
        if (!whispers) {
            //for each active filter option
            angular.forEach(queryData, function(filter) {
                //filter results array
                if (filter.name !== "all") {
                    results = results.filter(function(it) {
                        //it = one data item
                        //return item if filter.name matches with item.property value
                        return convertToString(it[filter.name]).indexOf(filter.query.toLowerCase()) !== -1;
                    });
                } else {
                    var queryString = filter.query.toLowerCase(), newResults = [];
                    angular.forEach(results, function(item) {
                        //for each data item in results
                        var found = false;
                        angular.forEach(queryData[0].filterOptions, function(prop) {
                            if (convertToString(item[prop]).indexOf(queryString) !== -1 && !found) {
                                newResults.push(item);
                                found = true;
                            }
                        });
                    });
                    results = newResults;
                }
            });
            data = results;
        } else {
            var props = [];
            angular.forEach(queryData, function(filter) {
                //filter results array
                if (filter.name !== "all") {
                    results = results.filter(function(it) {
                        //it = one data item
                        //return item if filter.name matches with item.property value
                        var prop = it[filter.name];
                        if (convertToString(prop).indexOf(filter.query.toLowerCase()) !== -1) {
                            props.push(prop);
                            return true;
                        }
                    });
                } else {
                    var queryString = filter.query.toLowerCase(), newResults = [];
                    angular.forEach(results, function(item) {
                        //for each data item in results
                        var found = false;
                        angular.forEach(queryData[0].filterOptions, function(prop) {
                            if (convertToString(item[prop]).indexOf(queryString) !== -1 && !found) {
                                newResults.push(item);
                                props.push(prop);
                                found = true;
                            }
                        });
                    });
                    results = newResults;
                }
            });
            if (!queryData[0].single || queryData[0].name === "all") {
                props = [];
                angular.forEach(results, function(item) {
                    props.push(item.name);
                });
            }
            data = {
                header: "search",
                results: _.uniq(props)
            };
        }
        deferred.resolve(data);
        return deferred.promise;
    }
    function getCategoryTree() {
        var deferred = $q.defer();
        deferred.resolve(tree);
        return deferred.promise;
    }
    //not sure what this should return????
    function getSubCategory() {}
    return {
        setAllResources: setAllResources,
        getResourcesByIds: getResourcesByIds,
        getResourcesByCategory: getResourcesByCategory,
        getResourcesByFilter: getResourcesByFilter,
        getCategoryTree: getCategoryTree,
        getSubCategory: getSubCategory
    };
} ]);

/*
 * (c) Rockwell Automation 2017
 */
/* global angular */
/**
 * @ngdoc directive
 * @name RA.IPComponents.component:raIpWizard
 * @module RA.IPComponents
 * @restrict E
 * @scope true
 * @description
 * This component is responsible for rendering wizard.
 * The component expects to receive {object} **`config`**.
 *
 * @param {object} config
 * - **`sharedViewConfig`** {object} object to be shared across all controllers - used to pass data to and between 
 *      controllers
 * - **`initialViewIndex`** {integer} index at which will wizard open its view on first render, defaults to 0
 * - **`showButtons`** {boolean} flag indicating if wizard should have action buttons at bottom (prev/next actions)
 * - **`hideSteps`** {boolean} flag indicating if wizard should hide steps
 * - **`previousStepsAutoSuccess`** {boolean} flag indicating if wizard should mark previous 
 *      steps automatically as success (defaults to false)
 * - **`stepsConfig`** {array} array with steps definition, see {@link RA.IPComponents.component:raIpSteps}
 * - **`views`** {array} array with definition for each step - if no template and templateUrl is set then default 
 *      template 'components/raIpWizard/raIpWizardDefault.tpl.html' is used
 *      - **`template`** {string} optional definition for inline template to be used for wizard content view
 *      - **`templateUrl`** {string} url for template to be used for wizard content view, template is loaded 
 *          only from $templateCache
 *          ("components/raIpWizard/raIpWizard.tpl.html" cannot be used as templateUrl)
 *      - **`controller`** {string} controller name, controller will be created
 *      - **`controllerAs`** {string} optional - alternative name for controller for template (controller scope alias),
 *          if not set then default $ctrl is used
 *
 *
 * There is wizard api which is passed to controller created for actual step as 'wizardApi' injection.
 * 
 * 
 @example
 The example below shows how to use raIpWizard.
 
 <example module="example1">
 <file name="index.html">
 <div ng-controller="myCtrlA" style="min-height: 280px;">
 <div ng-if="initialized">
 <div>With action buttons:</div>
 <ra-ip-wizard config="config"></ra-ip-wizard>
 </div>
 <div ng-if="!initialized">Loading example...</div>
 </div>
 </file>
 <file name="script.js">
 angular.module('example1', ['pascalprecht.translate', 'mobile-toolkit-ra', 'RA.IPComponents']);
 angular.module('example1')
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
 .controller('myCtrlA',['$scope', '$translate',
    function($scope, $translate) {
        function init() {
            $scope.config = {
                showButtons: true,
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
    ' ra-flex-align-cross-center">First step template</div>'
    },
    {
    template: '<div class="ra-flex-column ra-height-100 ra-flex-align-main-center' + 
    ' ra-flex-align-cross-center">Second step template</div>'
    }
    ]
    };
    $scope.initialized = true;
    }
 
 $translate.onReady(init);
 }]);
 </file>
 </example>
 <example module="example2">
 <file name="index.html">
 <div ng-controller="myCtrlB" style="min-height: 280px;">
 <div ng-if="initialized">
 <div ng-if="initialized">
 <div>With shared view data passed:</div>
 <ra-ip-wizard config="config"></ra-ip-wizard>
 </div>
 <div ng-if="!initialized">Loading example...</div>
 </div>
 </file>
 <file name="script.js">
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
 </file>
 </example>
 */
angular.module("RA.IPComponents").component("raIpWizard", {
    template: [ "$templateCache", function($templateCache) {
        "use strict";
        return $templateCache.get("components/raIpWizard/raIpWizard.tpl.html");
    } ],
    bindings: {
        config: "<"
    },
    controller: [ "$log", "$compile", "$element", "$scope", "$controller", "$templateCache", "$animate", "$translate", "raErrorHandlerSvc", function($log, $compile, $element, $scope, $controller, $templateCache, $animate, $translate, raErrorHandlerSvc) {
        "use strict";
        var self = this;
        /**
                 * @description Helper method to check id wizard has steps defined
                 * @returns {boolean}
                 */
        function hasSteps() {
            return angular.isArray(self.config.stepsConfig.steps) && self.config.stepsConfig.steps.length > 0;
        }
        /**
                 * @description Method to clear actual wizard page content.
                 */
        function clearWizardContent() {
            if (self.ctrlLocals.$scope) {
                self.wizardContentEl.empty();
                self.ctrlLocals.$scope.$destroy();
                delete self.ctrlLocals.$scope;
                delete self.ctrlLocals.$controller;
            }
        }
        /**
                 * @description Method for normalizing config object.
                 */
        function normalizeConfig() {
            self.config = self.config || {};
            self.config.stepsConfig = self.config.stepsConfig || {};
            self.config.stepsConfig.steps = self.config.stepsConfig.steps || [];
            self.config.views = self.config.views || [ {} ];
            self.config.initialViewIndex = self.config.initialViewIndex || 0;
            self.config.sharedViewConfig = self.config.sharedViewConfig || {};
            self.config.showButtons = angular.isDefined(self.config.showButtons) ? self.config.showButtons : false;
            self.config.hideSteps = angular.isDefined(self.config.hideSteps) ? self.config.hideSteps : false;
            self.config.previousStepsAutoSuccess = angular.isDefined(self.config.previousStepsAutoSuccess) ? self.config.previousStepsAutoSuccess : false;
        }
        /**
                 * @description Helper method to initialize wizard api next / prev buttons.
                 */
        function initializeButtons() {
            self.buttonActionsConfig = {
                align: "right",
                actions: [ {
                    type: "button",
                    class: "ra-icon-back",
                    tooltip: $translate.instant("RA_IP_COMPONENTS.RA_IP_WIZARD.PREV_BTN"),
                    onAction: function() {
                        if (angular.isDefined(self.wizardApi.prev.onBeforeActionAsync)) {
                            self.wizardApi.prev.onBeforeActionAsync().then(function() {
                                self.moveAction(self.actualStep - 1);
                            });
                        } else {
                            self.moveAction(self.actualStep - 1);
                        }
                    }
                }, {
                    type: "button",
                    class: "ra-icon-forward",
                    tooltip: $translate.instant("RA_IP_COMPONENTS.RA_IP_WIZARD.NEXT_BTN"),
                    onAction: function() {
                        if (angular.isDefined(self.wizardApi.next.onBeforeActionAsync)) {
                            self.wizardApi.next.onBeforeActionAsync().then(function() {
                                self.moveAction(self.actualStep + 1);
                            });
                        } else {
                            self.moveAction(self.actualStep + 1);
                        }
                    }
                } ]
            };
        }
        /**
                 * @description Helper method to initialize / set default state for wizard api.
                 */
        function initializeWizardApi() {
            self.wizardApi = {
                steps: {
                    actualStep: function() {
                        return self.config.stepsConfig.steps[self.actualStep];
                    }
                },
                move: function(stepIndex) {
                    // move to next wizard page if any
                    if (!self.config.views[stepIndex]) {
                        // there is no page
                        return;
                    }
                    if (canMoveToViewIndex(stepIndex)) {
                        self.actualStep = stepIndex;
                        self.setAllNextStepsInactive(self.actualStep);
                        if (self.config.previousStepsAutoSuccess) {
                            self.setAllPreviousStepsSuccess(self.actualStep);
                        }
                        compileViewContent(self.config.views[self.actualStep]);
                        self.config.stepsConfig.steps[self.actualStep].active = true;
                    }
                },
                next: {
                    button: {
                        setDisabled: function(flag) {
                            self.buttonActionsConfig.actions[1].disabled = flag ? true : false;
                        }
                    },
                    //onBeforeActionAsync: angular.noop,
                    has: function() {
                        return angular.isDefined(self.config.views[self.actualStep + 1]);
                    },
                    move: function() {
                        self.moveAction(self.actualStep + 1);
                    }
                },
                prev: {
                    button: {
                        setDisabled: function(flag) {
                            self.buttonActionsConfig.actions[0].disabled = flag ? true : false;
                        }
                    },
                    //onBeforeActionAsync: angular.noop,
                    has: function() {
                        return self.actualStep > 0 && angular.isDefined(self.config.views[self.actualStep - 1]);
                    },
                    move: function() {
                        self.moveAction(self.actualStep - 1);
                    }
                }
            };
        }
        /**
                 * @description Method to check whether we can be move to specific step index.
                 * @param {Integer} index
                 * @returns {Boolean}
                 */
        function canMoveToViewIndex(index) {
            if (self.config.stepsConfig.steps && self.config.stepsConfig.steps.length > 0 && self.config.views.length > 0) {
                if (!self.config.stepsConfig.steps[index]) {
                    $log.debug("raIpWizard: No step defined for view.", self.config.stepsConfig.steps, self.config.views);
                    return false;
                }
                return true;
            }
            return false;
        }
        /**
                 * @description Method for compiling current page content into wizard-page-content.
                 * @param {Object} pageConfig page config given to specific page to be rendered
                 */
        function compileViewContent(pageConfig) {
            var addDomEl, controllerAs = pageConfig.controllerAs || "$ctrl";
            if (pageConfig.templateUrl === "components/raIpWizard/raIpWizard.tpl.html") {
                throw raErrorHandlerSvc.getRAError("Logic error", 'raIpWizard: Cannot use template "components/raIpWizard/raIpWizard.tpl.html"' + " for wizard page definition.");
            }
            clearWizardContent();
            // remove all inner wizard content
            initializeButtons();
            // initialize buttons with default config
            self.updateButtonsDisabledState();
            initializeWizardApi();
            //initialize wizard api for each view - reset to default
            self.ctrlLocals.wizardApi = self.wizardApi;
            //wizardApi
            if (angular.isString(pageConfig.template)) {
                addDomEl = pageConfig.template;
            } else {
                addDomEl = $templateCache.get(pageConfig.templateUrl ? pageConfig.templateUrl : "components/raIpWizard/raIpWizardDefault.tpl.html");
            }
            self.ctrlLocals.$scope = $scope.$new(true);
            self.ctrlLocals.$element = addDomEl;
            if (pageConfig.controller) {
                self.ctrlLocals.$scope[controllerAs] = $controller(pageConfig.controller, self.ctrlLocals);
            }
            var compiledEl = $compile(addDomEl)(self.ctrlLocals.$scope);
            $animate.enter(compiledEl, self.wizardContentEl);
        }
        // init section
        normalizeConfig();
        self.ctrlLocals = {};
        self.actualStep = 0;
        /**
                 * @description Method to invoke button defined actions for previous and next button.
                 * @param {integer} index step index to trigger action for - move to
                 * @param {function} callback callback function to be trigered before step move action
                 */
        self.invokeDoAction = function(index, callback) {
            if (self.actualStep === index) {
                //already on current step
                return;
            }
            var direction = self.actualStep > index ? "prev" : "next";
            if (angular.isDefined(self.wizardApi[direction].onBeforeActionAsync)) {
                self.wizardApi[direction].onBeforeActionAsync().then(self.moveAction.bind(undefined, index, callback));
            } else {
                self.moveAction(index, callback);
            }
        };
        /**
                 * @description Method to move to specific step given by index.
                 * @param {integer} stepIndex step index
                 * @param {function} callback optional function which will be triggered, 
                 * may be defined in stepsConfig for each step
                 */
        self.moveAction = function(stepIndex, callback) {
            if (angular.isFunction(callback)) {
                callback();
            }
            self.wizardApi.move(stepIndex);
        };
        /**
                 * @description Method to mark all previous steps as active in success state
                 */
        self.setAllPreviousStepsSuccess = function(stepIndex) {
            if (hasSteps() && stepIndex > 0) {
                for (var i = stepIndex - 1; i >= 0; i--) {
                    self.config.stepsConfig.steps[i].active = true;
                    self.config.stepsConfig.steps[i].status = "success";
                }
            }
        };
        /**
                 * @description Method to mark all next steps as inactive also removing state
                 */
        self.setAllNextStepsInactive = function(stepIndex) {
            if (hasSteps()) {
                for (var i = stepIndex; i < self.config.stepsConfig.steps.length; i++) {
                    self.config.stepsConfig.steps[i].active = false;
                    self.config.stepsConfig.steps[i].status = "default";
                }
            }
        };
        /**
                 * @description Method to update bottom buttons disabled state in case we are at start/end of steps,
                 * we cannot go beyond.
                 */
        self.updateButtonsDisabledState = function() {
            if (self.actualStep === 0) {
                self.buttonActionsConfig.actions[0].disabled = true;
            }
            if (self.actualStep === self.config.stepsConfig.steps.length - 1 || !angular.isDefined(self.config.views[self.actualStep + 1])) {
                self.buttonActionsConfig.actions[1].disabled = true;
            }
        };
        /**
                 * @description Method to set all buttons disabled. Used in case of an wizard configuration error.
                 */
        self.setAllButtonsDisabledState = function() {
            self.buttonActionsConfig.actions[0].disabled = true;
            self.buttonActionsConfig.actions[1].disabled = true;
        };
        self.wizardContentEl = angular.element($element.find(".wizard-page-content"));
        initializeButtons();
        // define wrapper for steps onAction to trigger proper move automatically
        if (angular.isDefined(self.config.stepsConfig && angular.isArray(self.config.stepsConfig.steps))) {
            self.config.stepsConfig.steps.forEach(function(value, index) {
                value.onAction = self.invokeDoAction.bind(undefined, index, value.onAction);
            });
        }
        self.ctrlLocals.config = self.config.sharedViewConfig;
        //shared object between wizard views
        if (hasSteps() && self.config.views.length > 0) {
            if (!self.config.stepsConfig.steps[self.config.initialViewIndex]) {
                $log.debug("raIpWizard: No step defined for view.", self.config.stepsConfig.steps, self.config.views);
                self.setAllButtonsDisabledState();
                return;
            } else if (!self.config.views[self.config.initialViewIndex]) {
                $log.debug("raIpWizard: No view defined for initial view index.", self.config.views, self.config.initialViewIndex);
                self.setAllButtonsDisabledState();
                return;
            }
            self.actualStep = self.config.initialViewIndex;
            self.updateButtonsDisabledState();
            compileViewContent(self.config.views[self.config.initialViewIndex]);
        }
    } ]
});

/* global angular */
angular.module("RA.IPComponents").factory("contextMenuSvc", [ "$window", function($window) {
    "use strict";
    var contextMenuSelectorsList = [];
    //list for all used by context menus selectors
    /**
         * Function used as "position" config parameter of jQuery Context menu.
         * @param {Object} menuOptions
         * @param {number} x The horizontal absolute position of clicked element or point (if right-clicked)
         * @param {number} y The vertical absolute position of clicked element or point (if right-clicked)
         */
    var positionMainMenu = function(menuOptions, x, y) {
        var winHeight = $window.innerHeight, winWidth = $window.innerWidth, menuHeight = menuOptions.$menu.outerHeight(true), menuWidth = menuOptions.$menu.outerWidth(true), menuTop, menuLeft, //small horizontal offset to avoid situation with opened context menu
        // and immediately selected option which is under clicked place
        //This situation happens only on right-click.
        xOffset = 2;
        //Calculating top position
        //most comfortable top menu position is in the middle of y
        menuTop = y - Math.round(menuHeight / 2);
        if (menuTop + menuHeight > winHeight) {
            //bottom edge of menu is below app window frame
            //so trying to position it higher (starting from bottom)
            menuTop = winHeight - menuHeight;
        }
        // check weather top edge of menu is higher than window
        if (menuTop < 0) {
            menuTop = 0;
        }
        if (menuTop + menuHeight > winHeight) {
            //there is really no place for whole menu.
            //  In this case positioning menu to equally protrude at the top and bottom
            menuTop = Math.round((winHeight - menuHeight) / 2);
        }
        //Calculating left position
        menuLeft = x + xOffset;
        // most expected position would be to have menu on right side
        if (menuLeft + menuWidth > winWidth) {
            //no space on the right so positioning on the left
            menuLeft = x - menuWidth - xOffset;
        }
        //not checking whether there is no space on the left,
        // cause we shouldn't cover the clicked point
        menuOptions.$menu.css({
            top: menuTop,
            left: menuLeft
        });
    };
    /**
         * Function used as "positionSubmenu" config parameter of jQuery Context menu.
         * It isn't officially documented
         * @param subMenu Current submenu element
         */
    var positionSubmenu = function sub(subMenu) {
        //Code mostly ripped off from jQuery.contextMenu.js/positionSubmenu function.
        //"this" here points to the context of currently selected LI element
        var offset, curLiAbsoluteOffset = this.offset(), menuHeight = subMenu.outerHeight(true), winHeight = $window.innerHeight, winWidth = $window.innerWidth;
        //open submenu on the left side, if it overflows the body of page
        if (this.parent()[0].offsetLeft + this.outerWidth() + this.children("ul").outerWidth() > winWidth) {
            offset = {
                top: 0,
                left: -this.children("ul").outerWidth()
            };
        } else {
            offset = {
                top: 0,
                left: this.outerWidth()
            };
        }
        //this is extension of original positionSubmenu implementation
        // It protects submenu from protruding beyond the window at the bottom.
        if (menuHeight + curLiAbsoluteOffset.top > winHeight) {
            offset.top = winHeight - (menuHeight + curLiAbsoluteOffset.top);
        }
        subMenu.css(offset);
    };
    /**
         * Creates jQuery contextMenu
         * @param {string} selector The jQuery selector
         * @param {object} contextMenuConfig The context menu config object
         */
    var addNewContextMenu = function(selector, contextMenuConfig) {
        angular.extend(contextMenuConfig, {
            position: positionMainMenu,
            positionSubmenu: positionSubmenu
        });
        $.contextMenu({
            selector: selector,
            //uses build function to return config object
            // which creates/destroys context menu DOM on demand.
            //Probably better approach, at least easier to use in this function.
            //Nevertheless we MUST properly destroy each configured contextMenu on component destroy.
            //search for "build" in http://medialize.github.io/jQuery-contextMenu/docs.html
            build: function() {
                return contextMenuConfig;
            }
        });
        contextMenuSelectorsList.push(selector);
    };
    /**
         * Destroys all previously created context jQuery contextMenus
         */
    var destroyCreatedContextMenus = function() {
        angular.forEach(contextMenuSelectorsList, function(theSelector) {
            $.contextMenu("destroy", theSelector);
        });
    };
    /**
         * Destroys contextMenu with particular selector
         */
    var destroyContextMenu = function(selector) {
        $.contextMenu("destroy", selector);
    };
    return {
        addNewContextMenu: addNewContextMenu,
        destroyContextMenu: destroyContextMenu,
        destroyCreatedContextMenus: destroyCreatedContextMenus
    };
} ]);
//# sourceMappingURL=debug/ra-ip-components.js.map