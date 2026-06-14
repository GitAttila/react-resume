'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">@ra-wcftcloud/ra-ftc-communication documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                            <a href="license.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>LICENSE
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/RaFtcCommunicationModule.html" data-type="entity-link">RaFtcCommunicationModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-RaFtcCommunicationModule-d401af6c3a4d87e8ebf87f9ccfdbb1ab"' : 'data-target="#xs-injectables-links-module-RaFtcCommunicationModule-d401af6c3a4d87e8ebf87f9ccfdbb1ab"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-RaFtcCommunicationModule-d401af6c3a4d87e8ebf87f9ccfdbb1ab"' : 'id="xs-injectables-links-module-RaFtcCommunicationModule-d401af6c3a4d87e8ebf87f9ccfdbb1ab"' }>
                                        <li class="link">
                                            <a href="injectables/FqnService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>FqnService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OpcQualityService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>OpcQualityService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/BaseService.html" data-type="entity-link">BaseService</a>
                    </li>
                    <li class="link">
                        <a href="classes/InstanceRequest.html" data-type="entity-link">InstanceRequest</a>
                    </li>
                    <li class="link">
                        <a href="classes/ItemPermissions.html" data-type="entity-link">ItemPermissions</a>
                    </li>
                    <li class="link">
                        <a href="classes/LiveRequest.html" data-type="entity-link">LiveRequest</a>
                    </li>
                    <li class="link">
                        <a href="classes/NavigationHandlerRequest.html" data-type="entity-link">NavigationHandlerRequest</a>
                    </li>
                    <li class="link">
                        <a href="classes/NavigationRequest.html" data-type="entity-link">NavigationRequest</a>
                    </li>
                    <li class="link">
                        <a href="classes/OperationRequest.html" data-type="entity-link">OperationRequest</a>
                    </li>
                    <li class="link">
                        <a href="classes/PersistRequest.html" data-type="entity-link">PersistRequest</a>
                    </li>
                    <li class="link">
                        <a href="classes/PropNameValues.html" data-type="entity-link">PropNameValues</a>
                    </li>
                    <li class="link">
                        <a href="classes/TimeseriesRequest.html" data-type="entity-link">TimeseriesRequest</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/FqnService.html" data-type="entity-link">FqnService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/InstanceService.html" data-type="entity-link">InstanceService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LiveDataService.html" data-type="entity-link">LiveDataService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MimeService.html" data-type="entity-link">MimeService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MomentHelperService.html" data-type="entity-link">MomentHelperService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/NavigationHandlerService.html" data-type="entity-link">NavigationHandlerService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/NavigationService.html" data-type="entity-link">NavigationService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/OpcQualityService.html" data-type="entity-link">OpcQualityService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/OperationService.html" data-type="entity-link">OperationService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PermissionsService.html" data-type="entity-link">PermissionsService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PersistenceService.html" data-type="entity-link">PersistenceService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SecurityContextService.html" data-type="entity-link">SecurityContextService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/TimeseriesDataService.html" data-type="entity-link">TimeseriesDataService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/IChangedItem.html" data-type="entity-link">IChangedItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ICommonHttpConfig.html" data-type="entity-link">ICommonHttpConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ICommunicationConfig.html" data-type="entity-link">ICommunicationConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IFqnItem.html" data-type="entity-link">IFqnItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IFqnItemResponseFormat.html" data-type="entity-link">IFqnItemResponseFormat</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IFqnPropertyItem.html" data-type="entity-link">IFqnPropertyItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ILiveResponse.html" data-type="entity-link">ILiveResponse</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ILiveResponseInternal.html" data-type="entity-link">ILiveResponseInternal</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ILiveResponseInternalObject.html" data-type="entity-link">ILiveResponseInternalObject</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ILiveResponseInternalVqtObject.html" data-type="entity-link">ILiveResponseInternalVqtObject</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ILiveResponseProxyValue.html" data-type="entity-link">ILiveResponseProxyValue</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/INavigationHandlerResponse.html" data-type="entity-link">INavigationHandlerResponse</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/INavigationRuleItemInstance.html" data-type="entity-link">INavigationRuleItemInstance</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/INavigationRuleItemType.html" data-type="entity-link">INavigationRuleItemType</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/INavigationRules.html" data-type="entity-link">INavigationRules</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/INewItem.html" data-type="entity-link">INewItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IQuality.html" data-type="entity-link">IQuality</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IQueryItem.html" data-type="entity-link">IQueryItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IRenamedItem.html" data-type="entity-link">IRenamedItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IResponse.html" data-type="entity-link">IResponse</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ISamplingDefinition.html" data-type="entity-link">ISamplingDefinition</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ISecurityContextResponse.html" data-type="entity-link">ISecurityContextResponse</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ITimePeriod.html" data-type="entity-link">ITimePeriod</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ITimePeriodResponse.html" data-type="entity-link">ITimePeriodResponse</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ITimeseriesResponse.html" data-type="entity-link">ITimeseriesResponse</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ITimeseriesValuesResponse.html" data-type="entity-link">ITimeseriesValuesResponse</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ITimeseriesValuesResponseInternal.html" data-type="entity-link">ITimeseriesValuesResponseInternal</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ITimeseriesValuesResponseInternalObject.html" data-type="entity-link">ITimeseriesValuesResponseInternalObject</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ITimeseriesValuesResponseVqts.html" data-type="entity-link">ITimeseriesValuesResponseVqts</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
