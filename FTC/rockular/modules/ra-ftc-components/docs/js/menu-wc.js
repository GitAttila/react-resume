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
            <a href="index.html" data-type="index-link">@ra-wcftcloud/ra-ftc-components documentation</a>
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
                        <a href="modules/RaFtcBreadcrumbModule.html" data-type="entity-link">RaFtcBreadcrumbModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RaFtcBreadcrumbModule-77720b7e66435449691d7408a758c46d"' : 'data-target="#xs-components-links-module-RaFtcBreadcrumbModule-77720b7e66435449691d7408a758c46d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RaFtcBreadcrumbModule-77720b7e66435449691d7408a758c46d"' : 'id="xs-components-links-module-RaFtcBreadcrumbModule-77720b7e66435449691d7408a758c46d"' }>
                                        <li class="link">
                                            <a href="components/BreadcrumbComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BreadcrumbComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RaFtcColorPickerModule.html" data-type="entity-link">RaFtcColorPickerModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RaFtcColorPickerModule-d886a110da0b64885950a76a85a285a6"' : 'data-target="#xs-components-links-module-RaFtcColorPickerModule-d886a110da0b64885950a76a85a285a6"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RaFtcColorPickerModule-d886a110da0b64885950a76a85a285a6"' : 'id="xs-components-links-module-RaFtcColorPickerModule-d886a110da0b64885950a76a85a285a6"' }>
                                        <li class="link">
                                            <a href="components/PaletteColorPickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaletteColorPickerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PaletteColorPickerPopupContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaletteColorPickerPopupContentComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SimplePaletteColorPickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SimplePaletteColorPickerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SimpleStandardColorPickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SimpleStandardColorPickerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/StandardColorPickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StandardColorPickerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/StandardColorPickerPopupContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StandardColorPickerPopupContentComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-RaFtcColorPickerModule-d886a110da0b64885950a76a85a285a6"' : 'data-target="#xs-injectables-links-module-RaFtcColorPickerModule-d886a110da0b64885950a76a85a285a6"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-RaFtcColorPickerModule-d886a110da0b64885950a76a85a285a6"' : 'id="xs-injectables-links-module-RaFtcColorPickerModule-d886a110da0b64885950a76a85a285a6"' }>
                                        <li class="link">
                                            <a href="injectables/ColorPickerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ColorPickerService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RaFtcDatetimePickerModule.html" data-type="entity-link">RaFtcDatetimePickerModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RaFtcDatetimePickerModule-9ed5631a29ccc0fdf6169104e738ad87"' : 'data-target="#xs-components-links-module-RaFtcDatetimePickerModule-9ed5631a29ccc0fdf6169104e738ad87"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RaFtcDatetimePickerModule-9ed5631a29ccc0fdf6169104e738ad87"' : 'id="xs-components-links-module-RaFtcDatetimePickerModule-9ed5631a29ccc0fdf6169104e738ad87"' }>
                                        <li class="link">
                                            <a href="components/DatetimePickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatetimePickerComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RaFtcExpansionModule.html" data-type="entity-link">RaFtcExpansionModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RaFtcExpansionModule-c805dd9896d0f64f86630cda99d38567"' : 'data-target="#xs-components-links-module-RaFtcExpansionModule-c805dd9896d0f64f86630cda99d38567"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RaFtcExpansionModule-c805dd9896d0f64f86630cda99d38567"' : 'id="xs-components-links-module-RaFtcExpansionModule-c805dd9896d0f64f86630cda99d38567"' }>
                                        <li class="link">
                                            <a href="components/ExpansionPanel.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExpansionPanel</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ExpansionPanelHeader.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExpansionPanelHeader</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-RaFtcExpansionModule-c805dd9896d0f64f86630cda99d38567"' : 'data-target="#xs-directives-links-module-RaFtcExpansionModule-c805dd9896d0f64f86630cda99d38567"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-RaFtcExpansionModule-c805dd9896d0f64f86630cda99d38567"' : 'id="xs-directives-links-module-RaFtcExpansionModule-c805dd9896d0f64f86630cda99d38567"' }>
                                        <li class="link">
                                            <a href="directives/Accordion.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">Accordion</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ExpansionPanelContent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExpansionPanelContent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RaFtcExpansionToolPanelModule.html" data-type="entity-link">RaFtcExpansionToolPanelModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RaFtcExpansionToolPanelModule-bccc49a8fdd0de79ccff58ee4cb0ed09"' : 'data-target="#xs-components-links-module-RaFtcExpansionToolPanelModule-bccc49a8fdd0de79ccff58ee4cb0ed09"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RaFtcExpansionToolPanelModule-bccc49a8fdd0de79ccff58ee4cb0ed09"' : 'id="xs-components-links-module-RaFtcExpansionToolPanelModule-bccc49a8fdd0de79ccff58ee4cb0ed09"' }>
                                        <li class="link">
                                            <a href="components/ExpansionToolPanelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExpansionToolPanelComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RaFtcFileInputModule.html" data-type="entity-link">RaFtcFileInputModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RaFtcFileInputModule-9c2a95dded4e8abd347085147a28952d"' : 'data-target="#xs-components-links-module-RaFtcFileInputModule-9c2a95dded4e8abd347085147a28952d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RaFtcFileInputModule-9c2a95dded4e8abd347085147a28952d"' : 'id="xs-components-links-module-RaFtcFileInputModule-9c2a95dded4e8abd347085147a28952d"' }>
                                        <li class="link">
                                            <a href="components/FileInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FileInputComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RaFtcFileInputModule.html" data-type="entity-link">RaFtcFileInputModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RaFtcFileInputModule-13e862fe63edea3a1b8d9336b2db3316-1"' : 'data-target="#xs-components-links-module-RaFtcFileInputModule-13e862fe63edea3a1b8d9336b2db3316-1"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RaFtcFileInputModule-13e862fe63edea3a1b8d9336b2db3316-1"' : 'id="xs-components-links-module-RaFtcFileInputModule-13e862fe63edea3a1b8d9336b2db3316-1"' }>
                                        <li class="link">
                                            <a href="components/FileInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FileInputComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RaFtcIconPickerModule.html" data-type="entity-link">RaFtcIconPickerModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RaFtcIconPickerModule-aa51c56b9aa1efa32aa53ca9924eb9ba"' : 'data-target="#xs-components-links-module-RaFtcIconPickerModule-aa51c56b9aa1efa32aa53ca9924eb9ba"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RaFtcIconPickerModule-aa51c56b9aa1efa32aa53ca9924eb9ba"' : 'id="xs-components-links-module-RaFtcIconPickerModule-aa51c56b9aa1efa32aa53ca9924eb9ba"' }>
                                        <li class="link">
                                            <a href="components/IconPickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconPickerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/IconPickerPopupContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconPickerPopupContentComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SimpleIconPickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SimpleIconPickerComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-RaFtcIconPickerModule-aa51c56b9aa1efa32aa53ca9924eb9ba"' : 'data-target="#xs-injectables-links-module-RaFtcIconPickerModule-aa51c56b9aa1efa32aa53ca9924eb9ba"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-RaFtcIconPickerModule-aa51c56b9aa1efa32aa53ca9924eb9ba"' : 'id="xs-injectables-links-module-RaFtcIconPickerModule-aa51c56b9aa1efa32aa53ca9924eb9ba"' }>
                                        <li class="link">
                                            <a href="injectables/FontsHttpLoaderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>FontsHttpLoaderService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RaFtcLabelModule.html" data-type="entity-link">RaFtcLabelModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RaFtcLabelModule-ae2a05adbdbe55ad3da9eaf157b7824b"' : 'data-target="#xs-components-links-module-RaFtcLabelModule-ae2a05adbdbe55ad3da9eaf157b7824b"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RaFtcLabelModule-ae2a05adbdbe55ad3da9eaf157b7824b"' : 'id="xs-components-links-module-RaFtcLabelModule-ae2a05adbdbe55ad3da9eaf157b7824b"' }>
                                        <li class="link">
                                            <a href="components/LabelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LabelComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RaFtcMapModule.html" data-type="entity-link">RaFtcMapModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RaFtcMapModule-892926c9d4ddea445a6b9e540634de52"' : 'data-target="#xs-components-links-module-RaFtcMapModule-892926c9d4ddea445a6b9e540634de52"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RaFtcMapModule-892926c9d4ddea445a6b9e540634de52"' : 'id="xs-components-links-module-RaFtcMapModule-892926c9d4ddea445a6b9e540634de52"' }>
                                        <li class="link">
                                            <a href="components/MapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RaFtcMessageDialogModule.html" data-type="entity-link">RaFtcMessageDialogModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RaFtcMessageDialogModule-fa6ee7116ba8d110b954baf4423c7a70"' : 'data-target="#xs-components-links-module-RaFtcMessageDialogModule-fa6ee7116ba8d110b954baf4423c7a70"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RaFtcMessageDialogModule-fa6ee7116ba8d110b954baf4423c7a70"' : 'id="xs-components-links-module-RaFtcMessageDialogModule-fa6ee7116ba8d110b954baf4423c7a70"' }>
                                        <li class="link">
                                            <a href="components/DialogMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogMessageComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-RaFtcMessageDialogModule-fa6ee7116ba8d110b954baf4423c7a70"' : 'data-target="#xs-injectables-links-module-RaFtcMessageDialogModule-fa6ee7116ba8d110b954baf4423c7a70"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-RaFtcMessageDialogModule-fa6ee7116ba8d110b954baf4423c7a70"' : 'id="xs-injectables-links-module-RaFtcMessageDialogModule-fa6ee7116ba8d110b954baf4423c7a70"' }>
                                        <li class="link">
                                            <a href="injectables/MessageDialogService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>MessageDialogService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RaFtcRasterImageModule.html" data-type="entity-link">RaFtcRasterImageModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RaFtcRasterImageModule-53cd5d04f1042ef75a92687575cdb36d"' : 'data-target="#xs-components-links-module-RaFtcRasterImageModule-53cd5d04f1042ef75a92687575cdb36d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RaFtcRasterImageModule-53cd5d04f1042ef75a92687575cdb36d"' : 'id="xs-components-links-module-RaFtcRasterImageModule-53cd5d04f1042ef75a92687575cdb36d"' }>
                                        <li class="link">
                                            <a href="components/RasterImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RasterImageComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RaFtcStringValuePickerModule.html" data-type="entity-link">RaFtcStringValuePickerModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RaFtcStringValuePickerModule-e08471d08e3c5336e1c9bda817cbe0a4"' : 'data-target="#xs-components-links-module-RaFtcStringValuePickerModule-e08471d08e3c5336e1c9bda817cbe0a4"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RaFtcStringValuePickerModule-e08471d08e3c5336e1c9bda817cbe0a4"' : 'id="xs-components-links-module-RaFtcStringValuePickerModule-e08471d08e3c5336e1c9bda817cbe0a4"' }>
                                        <li class="link">
                                            <a href="components/StringValuePickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringValuePickerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ValuePickerContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ValuePickerContentComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RaFtcTruncateModule.html" data-type="entity-link">RaFtcTruncateModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RaFtcTruncateModule-f4795b4703f7c080a015e4331c6fff97"' : 'data-target="#xs-components-links-module-RaFtcTruncateModule-f4795b4703f7c080a015e4331c6fff97"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RaFtcTruncateModule-f4795b4703f7c080a015e4331c6fff97"' : 'id="xs-components-links-module-RaFtcTruncateModule-f4795b4703f7c080a015e4331c6fff97"' }>
                                        <li class="link">
                                            <a href="components/TruncateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TruncateComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RaFtcUtilitiesModule.html" data-type="entity-link">RaFtcUtilitiesModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-RaFtcUtilitiesModule-2e208b73d6909faadf3746789e141be4"' : 'data-target="#xs-injectables-links-module-RaFtcUtilitiesModule-2e208b73d6909faadf3746789e141be4"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-RaFtcUtilitiesModule-2e208b73d6909faadf3746789e141be4"' : 'id="xs-injectables-links-module-RaFtcUtilitiesModule-2e208b73d6909faadf3746789e141be4"' }>
                                        <li class="link">
                                            <a href="injectables/ControlService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ControlService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ParseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ParseService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RaFtcValueTableModule.html" data-type="entity-link">RaFtcValueTableModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RaFtcValueTableModule-34c155343bc60510f0e86f17609c2419"' : 'data-target="#xs-components-links-module-RaFtcValueTableModule-34c155343bc60510f0e86f17609c2419"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RaFtcValueTableModule-34c155343bc60510f0e86f17609c2419"' : 'id="xs-components-links-module-RaFtcValueTableModule-34c155343bc60510f0e86f17609c2419"' }>
                                        <li class="link">
                                            <a href="components/ValueTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ValueTableComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RaFtcValueTitleModule.html" data-type="entity-link">RaFtcValueTitleModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RaFtcValueTitleModule-9e30379fffae18541b0f33395f29eb9f"' : 'data-target="#xs-components-links-module-RaFtcValueTitleModule-9e30379fffae18541b0f33395f29eb9f"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RaFtcValueTitleModule-9e30379fffae18541b0f33395f29eb9f"' : 'id="xs-components-links-module-RaFtcValueTitleModule-9e30379fffae18541b0f33395f29eb9f"' }>
                                        <li class="link">
                                            <a href="components/ValueTitleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ValueTitleComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RaFtcVerticalIconNavbarModule.html" data-type="entity-link">RaFtcVerticalIconNavbarModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RaFtcVerticalIconNavbarModule-fdb4eb6e37a4a10c4f8933622ff9b1ce"' : 'data-target="#xs-components-links-module-RaFtcVerticalIconNavbarModule-fdb4eb6e37a4a10c4f8933622ff9b1ce"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RaFtcVerticalIconNavbarModule-fdb4eb6e37a4a10c4f8933622ff9b1ce"' : 'id="xs-components-links-module-RaFtcVerticalIconNavbarModule-fdb4eb6e37a4a10c4f8933622ff9b1ce"' }>
                                        <li class="link">
                                            <a href="components/NavbarContextMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarContextMenuComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/VerticalIconNavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">VerticalIconNavbarComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-RaFtcVerticalIconNavbarModule-fdb4eb6e37a4a10c4f8933622ff9b1ce"' : 'data-target="#xs-directives-links-module-RaFtcVerticalIconNavbarModule-fdb4eb6e37a4a10c4f8933622ff9b1ce"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-RaFtcVerticalIconNavbarModule-fdb4eb6e37a4a10c4f8933622ff9b1ce"' : 'id="xs-directives-links-module-RaFtcVerticalIconNavbarModule-fdb4eb6e37a4a10c4f8933622ff9b1ce"' }>
                                        <li class="link">
                                            <a href="directives/NavbarLabelWrapperDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarLabelWrapperDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"' }>
                        <span class="icon ion-md-cog"></span>
                        <span>Components</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/PaletteColorPickerComponent.html" data-type="entity-link">PaletteColorPickerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SimplePaletteColorPickerComponent.html" data-type="entity-link">SimplePaletteColorPickerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SimpleStandardColorPickerComponent.html" data-type="entity-link">SimpleStandardColorPickerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StandardColorPickerComponent.html" data-type="entity-link">StandardColorPickerComponent</a>
                            </li>
                    </ul>
                </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#directives-links"' : 'data-target="#xs-directives-links"' }>
                        <span class="icon ion-md-code-working"></span>
                        <span>Directives</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                            <li class="link">
                                <a href="directives/ExpansionPanelActionRow.html" data-type="entity-link">ExpansionPanelActionRow</a>
                            </li>
                            <li class="link">
                                <a href="directives/ExpansionPanelHeaderContent.html" data-type="entity-link">ExpansionPanelHeaderContent</a>
                            </li>
                            <li class="link">
                                <a href="directives/ExpansionPanelHeaderDescription.html" data-type="entity-link">ExpansionPanelHeaderDescription</a>
                            </li>
                            <li class="link">
                                <a href="directives/ExpansionPanelHeaderTitle.html" data-type="entity-link">ExpansionPanelHeaderTitle</a>
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
                        <a href="classes/FileInputBase.html" data-type="entity-link">FileInputBase</a>
                    </li>
                    <li class="link">
                        <a href="classes/MomentFormats.html" data-type="entity-link">MomentFormats</a>
                    </li>
                    <li class="link">
                        <a href="classes/NavbarConfig.html" data-type="entity-link">NavbarConfig</a>
                    </li>
                    <li class="link">
                        <a href="classes/NavbarItem.html" data-type="entity-link">NavbarItem</a>
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
                                <a href="injectables/ColorPickerService.html" data-type="entity-link">ColorPickerService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ControlService.html" data-type="entity-link">ControlService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/FontsHttpLoaderService.html" data-type="entity-link">FontsHttpLoaderService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MessageDialogService.html" data-type="entity-link">MessageDialogService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MockNgZone.html" data-type="entity-link">MockNgZone</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ParseService.html" data-type="entity-link">ParseService</a>
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
                        <a href="interfaces/IBreadcrumbItem.html" data-type="entity-link">IBreadcrumbItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IBreadcrumbTooltipItem.html" data-type="entity-link">IBreadcrumbTooltipItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IColorPickerColor.html" data-type="entity-link">IColorPickerColor</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IColorPickerHSL.html" data-type="entity-link">IColorPickerHSL</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IColorPickerHSLA.html" data-type="entity-link">IColorPickerHSLA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IColorPickerHSV.html" data-type="entity-link">IColorPickerHSV</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IColorPickerHSVA.html" data-type="entity-link">IColorPickerHSVA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IColorPickerRGB.html" data-type="entity-link">IColorPickerRGB</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IColorPickerRGBA.html" data-type="entity-link">IColorPickerRGBA</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDatetimePickerComponentConfig.html" data-type="entity-link">IDatetimePickerComponentConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDialogMessageButton.html" data-type="entity-link">IDialogMessageButton</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDialogMessageConfig.html" data-type="entity-link">IDialogMessageConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IExpansionToolPanelConfig.html" data-type="entity-link">IExpansionToolPanelConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IExpansionToolPanelToolbarConfig.html" data-type="entity-link">IExpansionToolPanelToolbarConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IFileInputFile.html" data-type="entity-link">IFileInputFile</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IFont.html" data-type="entity-link">IFont</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IFontConfig.html" data-type="entity-link">IFontConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IIcon.html" data-type="entity-link">IIcon</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IIconPickerConfig.html" data-type="entity-link">IIconPickerConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ILabelConfig.html" data-type="entity-link">ILabelConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IMapBasicIndication.html" data-type="entity-link">IMapBasicIndication</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IMapConfig.html" data-type="entity-link">IMapConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IMapDrillThrough.html" data-type="entity-link">IMapDrillThrough</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IMapIndication.html" data-type="entity-link">IMapIndication</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IMapIndicationSettings.html" data-type="entity-link">IMapIndicationSettings</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IMapLayer.html" data-type="entity-link">IMapLayer</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IMapMarker.html" data-type="entity-link">IMapMarker</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IMapOptions.html" data-type="entity-link">IMapOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IMapProvider.html" data-type="entity-link">IMapProvider</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/INavbarConfig.html" data-type="entity-link">INavbarConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/INavbarItem.html" data-type="entity-link">INavbarItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IPaletteColor.html" data-type="entity-link">IPaletteColor</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IPaletteColorOutput.html" data-type="entity-link">IPaletteColorOutput</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IPaletteColorPickerPalette.html" data-type="entity-link">IPaletteColorPickerPalette</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ISelectedIcon.html" data-type="entity-link">ISelectedIcon</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ITruncateCutRange.html" data-type="entity-link">ITruncateCutRange</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IValueTableConfig.html" data-type="entity-link">IValueTableConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IValueTableItems.html" data-type="entity-link">IValueTableItems</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IValueTableListItem.html" data-type="entity-link">IValueTableListItem</a>
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
