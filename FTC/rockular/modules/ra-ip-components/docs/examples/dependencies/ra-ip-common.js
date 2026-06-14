/*
 ra-ip-common v1.4.0
 Copyright © Rockwell Automation Technologies, Inc. All Rights Reserved
*/
/* global angular */
angular.module("RA.IPCommon.Filters", []);

/*global angular*/
angular.module("RA.IPCommon.Services", [ "mobile-toolkit-ra" ]).constant("WELLKNOWN_LOCATIONS", {
    MOBILE_APPLICATION: "System.Applications.Mobile",
    MOBILE_PUBLIC_DISPLAY_RULES: "System.Applications.Mobile.DisplayRules",
    MOBILE_VIEWS: "System.Applications.Mobile.Views"
}).constant("WELLKNOWN_ITEM_TYPES", {
    MOBILE_DISPLAY: "TypeSystem.Packages.[Mobile.UI].ItemTypes.[Mobile.UI.Display]",
    MOBILE_VIEW: "TypeSystem.Packages.[Mobile.UI].ItemTypes.[Mobile.UI.View]",
    MOBILE_DISPLAY_RULE: "TypeSystem.Packages.[Mobile.UI].ItemTypes.[Mobile.UI.DisplayRule]",
    MOBILE_DISPLAY_TEMPLATE: "TypeSystem.Packages.[Mobile.UI].ItemTypes.[Mobile.UI.DisplayTemplate]",
    MOBILE_FAVORITES: "TypeSystem.Packages.[Mobile.UI].ItemTypes.[Mobile.UI.Favorite]",
    CORE_OBJECT: "TypeSystem.Packages.Core.ItemTypes.Object",
    CORE_TAG: "TypeSystem.Packages.Core.ItemTypes.Tag",
    CORE_PARAMETER_TYPE: "TypeSystem.Packages.Core.ItemTypes.ParameterType",
    CORE_STRING_DATA_TYPE: "TypeSystem.Packages.Core.ItemTypes.StringDataType",
    CORE_STRING: "TypeSystem.Packages.Core.ItemTypes.String",
    CORE_FOLDER: "TypeSystem.Packages.Core.ItemTypes.Folder",
    CORE_TREND_TEMPLATE: "TypeSystem.Packages.Core.ItemTypes.TrendTemplate",
    CORE_XY_PLOTTER_TEMPLATE: "TypeSystem.Packages.Core.ItemTypes.XYPlotterTemplate"
}).constant("VIEWS_PATH", [ "System", "Applications", "Mobile", "Views" ]);

/* global angular */
/**
 * @ngdoc filter
 * @module RA.IPCommon.Filters
 * @name RA.IPCommon.Filters.filter:nameFromFqn
 * @description
 * This filter Provides LastName from the given FQN with the help of FqnSvc
 * @returns {string} LastName from the provided FQN
 */
angular.module("RA.IPCommon.Filters").filter("nameFromFqn", [ "fqnSvc", function(fqnSvc) {
    "use strict";
    return fqnSvc.getLastName;
} ]);

angular.module("RA.IPCommon", [ "RA.IPCommon.Services", "RA.IPCommon.Filters" ]);

/* global angular */
/**
 * @ngdoc service
 * @module RA.IPCommon.Services
 * @name RA.IPCommon.Services.service:fqnSvc
 * @description
 * Service for FQN Related Manipulations
 */
angular.module("RA.IPCommon.Services").factory("fqnSvc", [ "raErrorHandlerSvc", function(raErrorHandlerSvc) {
    "use strict";
    var delimiterChar = ".";
    var startPartChar = "[";
    var endPartChar = "]";
    var escapedEndPartChar = "]]";
    var rootFqn = "";
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#getCombinedNameParts
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Combine anchor parts with relative parts
         * @param {string} anchorFqnParts - Parts of Anchor Fqn
         * @param {number} includedAnchorPartsCount - Count of included Anchor Parts
         * @param {string} relativeFqnParts - Parts of Relative Fqn
         * @returns {string} - Combined Name Parts
         */
    function getCombinedNameParts(anchorFqnParts, includedAnchorPartsCount, relativeFqnParts) {
        return anchorFqnParts.slice(0, includedAnchorPartsCount).concat(relativeFqnParts);
    }
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#unescapeRawPart
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Internal Method to Unescape (Remove Escapes) fom Raw Parts
         * @param {string} rawPart - raw Fqn
         * @returns {string} - Raw Parts with Escape Removed
         */
    function unescapeRawPart(rawPart) {
        var unescapedRawPart;
        if (rawPart.charAt(0) === startPartChar) {
            if (rawPart.charAt(rawPart.length - 1) === endPartChar) {
                // starts and ends with a bracket
                unescapedRawPart = rawPart.substr(1, rawPart.length - 2);
            } else {
                // starts but does not end with bracket
                unescapedRawPart = rawPart.substr(1);
            }
        } else if (rawPart.charAt(rawPart.length - 1) === endPartChar) {
            // only ends with a bracket
            unescapedRawPart = rawPart.substr(0, rawPart.length - 1);
        }
        if (unescapedRawPart) {
            // replace double brackets with single brackets
            var regex = new RegExp(escapedEndPartChar, "g");
            return unescapedRawPart.replace(regex, endPartChar);
        }
        // TK-427439
        if (rawPart === endPartChar || rawPart === startPartChar) {
            return "";
        }
        //if we made it this far, it was not changed spo return original
        return rawPart;
    }
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#escape
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Escapes the specified name if necessary
         * @param {string} part - name part to escape
         * @returns {string} escaped name part
         */
    function escape(part) {
        // add start bracket
        var escapedPart = startPartChar;
        // double up any end brackets
        var regex = new RegExp(endPartChar, "g");
        escapedPart = escapedPart.concat(part.replace(regex, escapedEndPartChar));
        // add end bracket
        return escapedPart.concat(endPartChar);
    }
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#requiresEscaping
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * (Internal Function) Test if name part needs to be escaped.
         * @param {string} part - name part to escape
         * @returns {string} escaped name part
         */
    function requiresEscaping(part) {
        // must escape if we start with an open bracket or contain a period
        return part.charAt(0) === startPartChar || part.indexOf(delimiterChar) >= 0;
    }
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#relativeFqnDepth
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Returns the number of leading dots for a string.
         * @param {string} relativeFqn - Relative FQN
         * @returns {number} relative depth
         */
    function relativeFqnDepth(relativeFqn) {
        if (relativeFqn[0] !== delimiterChar) {
            return 0;
        }
        var depth = 0;
        while (depth < relativeFqn.length && relativeFqn[depth] === delimiterChar) {
            depth++;
        }
        return depth;
    }
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#getLastName
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Get the last part of a fully qualified name.
         * @param {string} fqn - fqn from which to extract the last name part.
         * @returns {string} The last name part.
         */
    var getLastName = function(fqn) {
        //if both empty string, return that
        if (this.areEqual(fqn, rootFqn)) {
            return "";
        } else {
            if (typeof fqn === "string") {
                var parts = this.splitFqn(fqn);
                return parts[parts.length - 1];
            } else {
                return undefined;
            }
        }
    };
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#removeLastNamePart
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Removes the last name part of a fully qualified name. E.g. the result for the input string
         * "MyEnterprise.Pumps.Pump101.Temparature.Value" is "MyEnterprise.Pumps.Pump101.Temparature"
         * @param {string} fqn - fqn to be truncated.
         * @returns {string} The passed in fqn without its last name part.
         */
    var removeLastNamePart = function(fqn) {
        //if both empty string, return that
        var parts = this.splitFqn(fqn);
        parts.splice(-1, 1);
        return this.buildFqn(parts);
    };
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#areEqual
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Case insensitive check to determine if two FQN's are equal
         * @param {string} fqn1 - fqn1 to check
         * @param {string} fqn2 - fqn2 to check
         * @returns {boolean} true if equal
         */
    var areEqual = function(fqn1, fqn2) {
        //handle the common case first, covers even if both undefined, null or empty string
        if (fqn1 === fqn2) {
            return true;
        }
        //if they are both strings but not equal from above, do a case compare
        if (typeof fqn1 === "string" && typeof fqn2 === "string") {
            return fqn1.toLowerCase() === fqn2.toLowerCase();
        }
        //all other cases, from fqn's perspective, it is false
        return false;
    };
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#splitFqn
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Split a fully qualified name into an array of name parts.
         * @param {string} fqn - fqn to be split.
         * @returns {array|string} An array of name parts of the specified fully qualified name.
         */
    var splitFqn = function(fqn) {
        var parts = [];
        if (fqn && fqn.length > 0) {
            // break into period separated raw parts
            var rawParts = fqn.split(delimiterChar);
            for (var i = 0; i < rawParts.length; i++) {
                if (rawParts[i].indexOf(startPartChar) === 0) {
                    // raw part is the start of an escaped part sequence
                    var partSequence = [];
                    for (;i < rawParts.length; i++) {
                        // save escaped raw parts in the sequence
                        partSequence.push(unescapeRawPart(rawParts[i]));
                        // until we find a raw part that ends the sequence
                        // (after removing all double brackets ...
                        var tmpString = rawParts[i].replace(new RegExp(escapedEndPartChar, "g"), "");
                        // ... a single bracket at the end exists)
                        if (tmpString.charAt(tmpString.length - 1) === endPartChar) {
                            break;
                        }
                    }
                    // concatenate all unescaped raw parts into period separated part
                    parts.push(partSequence.join(delimiterChar));
                } else {
                    // this part was not escaped, use as is
                    parts.push(rawParts[i]);
                }
            }
        }
        return parts;
    };
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#buildFqn
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Build a fully qualified name from an array of name parts.
         * @param {array|string} parts - The name parts used to build the fully qualified name.</param>
         * @returns {string} The fully qualified name built.
         */
    var buildFqn = function(parts) {
        var fqn = [];
        for (var i = 0; i < parts.length; i++) {
            if (requiresEscaping(parts[i])) {
                fqn.push(escape(parts[i]));
            } else {
                fqn.push(parts[i]);
            }
        }
        return fqn.join(delimiterChar);
    };
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#buildFqn
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Build a fully qualified name for a Query from an array of name parts.
         * @param {array|string} parts - The name parts used to build the fully qualified name.</param>
         * @returns {string} The fully qualified name built.
         */
    var buildFqnForQuery = function(parts) {
        var fqn = [], matchValue;
        for (var i = 0; i < parts.length; i++) {
            matchValue = parts[i].search(/[.*+?^=!:${}()|\[\]\/\\]|from|to|where|select|with|and|or|\s/i);
            if (matchValue >= 0) {
                // needs query escaping
                fqn[i] = startPartChar + parts[i] + endPartChar;
            } else {
                fqn[i] = parts[i];
            }
        }
        return fqn.join(delimiterChar);
    };
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#escapeForJsonRequest
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Escape any special characters for the JSON request
         * @param {array|string} parts - parts of the fqn to escape
         * @returns {array|string} parts of the fqn escaped for JSON request
         */
    var escapeForJsonRequest = function(parts) {
        var retValue = [];
        for (var i = 0; i < parts.length; i++) {
            /*var jsonString = JSON.stringify(parts[i]).replace(/]/g, ']]');*/
            var jsonString = parts[i].replace(/]/g, "]]");
            retValue[i] = jsonString;
        }
        return retValue;
    };
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#appendNamePart
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Appends name parts to a given base name.
         * @param {string} baseName - to append name parts to
         * @param {string} part - The name to append to the base name. Dots in the name will be escaped.
         * @returns {string} Full FQN with Appended name part
         */
    var appendNamePart = function(baseName, part) {
        return [ baseName, this.buildFqn([ part ]) ].join(delimiterChar);
    };
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#appendNameParts
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Appends name parts to a given base name.
         * @param {string} baseName - to append name parts to
         * @param {array|string} parts - unescaped fqn parts
         * @returns {string} Full FQN with Appended name part(s)
         */
    var appendNameParts = function(baseName, parts) {
        return [ baseName, this.buildFqn(parts) ].join(delimiterChar);
    };
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#isRelative
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Test if an FQN is relative
         * @param {string} fqn - to test
         * @returns {bool} true if this is a relative FQN
         */
    var isRelative = function(fqn) {
        // must escape if we start with an open bracket or contain a period
        return fqn[0] === delimiterChar;
    };
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#absoluteToRelative
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Calculates a relative FQN to resolve to the passed FQN from the anchor FQN,
         * that could be used with the FQN.Resolve method.
         * @param {string} anchorFqn to which fqn the result would be relative
         * @param {string} fqn absolute fqn for which we want the relative calculated
         * @returns {String} Relative Fqn
         */
    var absoluteToRelative = function(anchorFqn, fqn) {
        if (!anchorFqn) {
            if (this.isRelative(fqn)) {
                return fqn;
            } else {
                return delimiterChar + fqn;
            }
        }
        var anchorFqnParts = this.splitFqn(anchorFqn);
        var fqnParts = this.splitFqn(fqn);
        var commonCount = 0;
        var ii;
        for (ii = 0; ii < anchorFqnParts.length; ii++) {
            if (!this.areEqual(anchorFqnParts[ii], fqnParts[ii])) {
                break;
            }
            commonCount++;
        }
        var relativeFqnParts = fqnParts.slice(commonCount, fqnParts.length);
        var relativeFqn = this.buildFqn(relativeFqnParts);
        commonCount = anchorFqnParts.length - commonCount + 1;
        for (ii = 0; ii < commonCount; ii++) {
            relativeFqn = delimiterChar + relativeFqn;
        }
        return relativeFqn;
    };
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#relativeToAbsolute
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Calculates the FQN from the anchor FQN and provided relative FQN.
         * @param {string} anchorFqn - to resolve the path with
         * @param {string} relativeFqn - path to resolve
         * @returns {string} FQN that results from resolution with anchor
         */
    var relativeToAbsolute = function(anchorFqn, relativeFqn) {
        var trimmedAnchorFqn = anchorFqn.trim();
        var trimmedRelativeFqn = relativeFqn.trim();
        if (relativeFqn.length === 0) {
            return trimmedAnchorFqn;
        }
        var relativeDepth = relativeFqnDepth(trimmedRelativeFqn);
        var finalRelativeFqn = relativeDepth < 1 ? trimmedRelativeFqn : trimmedRelativeFqn.slice(relativeDepth, trimmedRelativeFqn.length);
        var relativeFqnParts = this.splitFqn(finalRelativeFqn);
        var anchorFqnParts = this.splitFqn(trimmedAnchorFqn);
        if (relativeDepth > anchorFqnParts.length + 1) {
            throw raErrorHandlerSvc.getRAError("Error in fqnSvc.relativeToAbsolute", "Relative FQN is deeper than root object");
        }
        if (relativeDepth > 0) {
            relativeDepth--;
        }
        var fullNameParts = getCombinedNameParts(anchorFqnParts, anchorFqnParts.length - relativeDepth, relativeFqnParts);
        return this.buildFqn(fullNameParts);
    };
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#isEmptyOrUnassigned
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Check if Fqn is empty or not
         * @param {string} fqn - to check
         * @returns {string} true or false based on if Fqn is empty or unassigned
         */
    var isEmptyOrUnassigned = function(fqn) {
        return !fqn;
    };
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#buildFqnForQueryWithEscaping
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Build escaped fully qualified name for a Query from a fully qualified name or an array of name parts.
         * @param {array|string} fqn The fully qualified name or the name parts used to build the escaped fully
         * qualified name.</param>
         * @returns {string} The escaped fully qualified name built.
         */
    var buildFqnForQueryWithEscaping = function(fqn) {
        if (angular.isString(fqn)) {
            fqn = splitFqn(fqn);
        }
        fqn = escapeForJsonRequest(fqn);
        return buildFqnForQuery(fqn);
    };
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#cutFqnPart
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * Cut fqn part from - to
         * @param {string} fqn The fully qualified name
         * @param {int} from
         * @param {int} to
         * @returns {string} cuted string
         */
    var cutFqnPart = function(fqn, from, to) {
        return fqn.slice(from, to);
    };
    /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.service:fqnSvc#findParameterInFqn
         * @methodOf RA.IPCommon.Services.service:fqnSvc
         * @description
         * find string in fqn string
         * @param {string} fqn The fully qualified name
         * @returns {int} -1 if parameter doesn't exists or number when parameter starts
         */
    var findParameterInFqn = function(fqn, parameter) {
        return fqn.search(parameter);
    };
    return {
        getLastName: getLastName,
        removeLastNamePart: removeLastNamePart,
        areEqual: areEqual,
        splitFqn: splitFqn,
        buildFqn: buildFqn,
        buildFqnForQuery: buildFqnForQuery,
        escapeForJsonRequest: escapeForJsonRequest,
        appendNamePart: appendNamePart,
        appendNameParts: appendNameParts,
        isRelative: isRelative,
        absoluteToRelative: absoluteToRelative,
        relativeToAbsolute: relativeToAbsolute,
        isEmptyOrUnassigned: isEmptyOrUnassigned,
        buildFqnForQueryWithEscaping: buildFqnForQueryWithEscaping,
        findParameterInFqn: findParameterInFqn,
        cutFqnPart: cutFqnPart
    };
} ]);

/*
 * (c) Rockwell Automation 2014
 */
/* global angular */
/**
 * @ngdoc service
 * @module RA.IPCommon.Services
 * @name RA.IPCommon.Services.service:iconSvc
 * @description
 * Service for Icon Related Manipulations
 */
angular.module("RA.IPCommon.Services").factory("iconSvc", [ "$rootScope", "raErrorHandlerSvc", function($rootScope, raErrorHandlerSvc) {
    "use strict";
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:iconSvc#getServiceUrl
             * @methodOf RA.IPCommon.Services.service:iconSvc
             * @description
             * Constructs a URL to service using given parameters, encoding each
             * parameter with encodeURIComponent() function.
             * @param {string=} [imageFqn] the FQN of image
             * @param {string=} [size] the desired image size;
             * if this parameter is omitted and the effect parameter is
             * passed, the 'small' value for size is used by default
             * @param {string=} [effect] the effect name to apply to an image
             * @throws RAError if size or effect parameters are provided without
             * providing the imageFqn parameter
             * @returns {string} The URL to IconService with properly encoded
             * parameters, or just the base URL if called with no parameters.
             */
    var getServiceUrl = function(imageFqn, size, effect) {
        var url = $rootScope.gBaseUrl + "/api/1/icon";
        if (imageFqn) {
            url = url + "/" + encodeURIComponent(imageFqn);
            if (size) {
                url = url + "/" + encodeURIComponent(size);
            }
            if (effect) {
                if (size) {
                    url = url + "/" + encodeURIComponent(effect);
                } else {
                    url = url + "/small/" + encodeURIComponent(effect);
                }
            }
        } else if (size || effect) {
            // throw RAError if size or effect are supplied without
            // the imageFqn parameter
            throw new raErrorHandlerSvc.RAError("Error in iconSvc.getServiceUrl()", 'The "imageFqn" parameter is required but was ' + "not provided.");
        }
        return url;
    };
    return {
        getServiceUrl: getServiceUrl
    };
} ]);

/*
 * (c) Rockwell Automation 2013
 */
/* global angular */
/**
 * @ngdoc service
 * @module RA.IPCommon.Services
 * @name RA.IPCommon.Services.service:instanceSvc
 * @description
 * Service for Instance based Request and Manipulations
 */
angular.module("RA.IPCommon.Services").factory("instanceSvc", [ "$http", "$rootScope", "$q", "raErrorHandlerSvc", function($http, $rootScope, $q, raErrorHandlerSvc) {
    "use strict";
    var svcPath = "api/1/instance/";
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:instanceSvc#getInstance
             * @methodOf RA.IPCommon.Services.service:instanceSvc
             * @description
             * Makes a request to JSON Instance service on the server.
             * @param {string} fqn - FQN of the item to get data for.
             * @param {boolean=} [isProperty] Tells if the fqn given refers to a property
             *                               (or if an item, should apply to its default property)
             * @param {boolean=} [includeAcl] Tells the query service to return item ACL
             *                               information for the item
             * @param {number=} [depth] Tells the query service to prefetch N-Levels
             *                               of items for the item returned
             * @param {number=} [includeShortcuts] Tells the query service to prefetch N-Levels
             *                               of items for the item returned
             * @param {boolean=} [camelCasePropertyNames] Tells the service to return property names
             *                                           either in camelCase or using original
             *                                           casing
             * @returns {IPromise<T>} Promise to resolve when answer will be available.
             *
             * Example:
             *   instanceSvc.getInstance("System.Applications.Portal").then(function (item) {
                    var portalAppName = item.props.AppName;}
             */
    var getInstance = function(fqn, isProperty, includeAcl, depth, includeShortcuts, camelCasePropertyNames) {
        var instanceRequest, deferred;
        if (angular.isString(fqn)) {
            instanceRequest = createInstanceRequest(camelCasePropertyNames);
            if (isProperty === true) {
                instanceRequest.addPropertyFqn(fqn, includeAcl, depth, includeShortcuts);
            } else {
                instanceRequest.addItemFqn(fqn, includeAcl, depth, includeShortcuts);
            }
        } else {
            instanceRequest = fqn;
        }
        deferred = $q.defer();
        $http.post($rootScope.gBaseUrl + svcPath, instanceRequest, $rootScope.gCommonHttpConfig).then(function success(result) {
            // Since only a single item is expected, we extend the result.data object
            // to allow access to the data without array notation.
            if (result.data && result.data.fqnsResults && result.data.fqnsResults[0]) {
                angular.extend(result.data, result.data.fqnsResults[0]);
            }
            deferred.resolve(result);
        }, function failure(reason) {
            deferred.reject(raErrorHandlerSvc.getRAHTTPError("Instance service error", reason));
        });
        return deferred.promise;
    };
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:instanceSvc#getInstances
             * @methodOf RA.IPCommon.Services.service:instanceSvc
             * @description
             * Makes a multi-item request to the JSON Instance service on the server.
             * Request types (itemFqn, propertyFqn, query) can be freely intermixed in the request.
             *
             * @param {object} instanceRequest {@link RA.IPCommon.Services.object:InstanceRequest}
             * @param {boolean=} [raPassError] Flag indicating whether to turn off
             * common error's interception mechanism
             * @returns {IPromise<T>} Promise to resolve when answer will be available.
             *
             * Example:
             *    var includeAcl = true, depth = 2, includeShortcuts = true;
             *
             *    var instanceRequest = createInstanceRequest();
             *    instanceRequest.addItemFqn("MyEnterprise", includeAcl, depth, includeShortcuts);
             *    instanceRequest.addPropertyFqn("System.Applications");
             *    instanceRequest.addQuery("FROM MyEnterprise WHERE name = 'Extruder001'" );
             *
             *    instanceSvc.getInstances(instanceRequest).then(processResults);
             */
    var getInstances = function(instanceRequest, raPassError) {
        var deferred = $q.defer(), httpConfig = $rootScope.gCommonHttpConfig ? angular.copy($rootScope.gCommonHttpConfig) : {};
        if (typeof raPassError === "boolean") {
            httpConfig.raPassError = raPassError;
        }
        $http.post($rootScope.gBaseUrl + svcPath, instanceRequest, httpConfig).then(function success(result) {
            deferred.resolve(result);
        }, function failure(reason) {
            deferred.reject(raErrorHandlerSvc.getRAHTTPError("Instance service error", reason));
        });
        return deferred.promise;
    };
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:instanceSvc#execQuery
             * @methodOf RA.IPCommon.Services.service:instanceSvc
             * @description
             * Makes a single query request to the JSON Instance service on the server.
             * @param {string} queryExpression - a string containing a query expression.
             * @param {boolean=} [includeAcl] Tells the instance query to return item ACL
             *                               information for the item
             * @param {number=} [depth] Tells the query service to prefetch N-Levels
             *                               of items for the item returned
             * @param {number=} [includeShortcuts] Tells the query service to prefetch N-Levels
             *                               of items for the item returned
             * @param {boolean=} [camelCasePropertyNames] Tells the service to return property names
             *                                           either in camelCase or using original
             *                                           casing
             * @returns {IPromise<T>} Promise to resolve when answer will be available.
             *
             * Example:
             *   instanceSvc.execQuery("FROM MyEnterprise WHERE name = 'Extruder001'").then(processResults);
             */
    var execQuery = function(queryExpression, includeAcl, depth, includeShortcuts, camelCasePropertyNames) {
        var instanceRequest, deferred;
        if (angular.isString(queryExpression)) {
            instanceRequest = createInstanceRequest(camelCasePropertyNames);
            instanceRequest.addQuery(queryExpression, includeAcl, depth, includeShortcuts);
        } else {
            instanceRequest = queryExpression;
        }
        deferred = $q.defer();
        $http.post($rootScope.gBaseUrl + svcPath, instanceRequest, $rootScope.gCommonHttpConfig).then(function success(result) {
            // Since only a single set of items are expected, we extend the result
            // to allow access to the set without two-dimensional array notation.
            if (result.data && result.data.queryResults && result.data.queryResults[0]) {
                angular.extend(result.data, result.data.queryResults[0]);
            }
            deferred.resolve(result);
        }, function failure(reason) {
            deferred.reject(raErrorHandlerSvc.getRAHTTPError("Instance service error", reason));
        });
        return deferred.promise;
    };
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:instanceSvc#execQuerySet
             * @methodOf RA.IPCommon.Services.service:instanceSvc
             * @description
             * Makes a multi-query request to the JSON Instance service on the server.
             * @param {object} instanceRequest {@link RA.IPCommon.Services.object:InstanceRequest}
             * @returns {IPromise<T>} Promise to resolve when answer will be available.
             *
             * Example:
             *    var includeAcl = true, depth = 2, includeShortcuts = true;
             *
             *    var q = createInstanceRequest();
             *    q.addQuery("FROM MyEnterprise WHERE name = 'Extruder001'", includeAcl, depth, includeShortcuts);
             *    q.addQuery("FROM MyEnterprise WHERE TypeName = "Portal.Hyperlink");
             *
             *    instanceSvc.execQuerySet(q).then(processResults);
             */
    var execQuerySet = function(instanceRequest) {
        var deferred = $q.defer();
        $http.post($rootScope.gBaseUrl + svcPath, instanceRequest, $rootScope.gCommonHttpConfig).then(function success(result) {
            deferred.resolve(result);
        }, function failure(reason) {
            deferred.reject(raErrorHandlerSvc.getRAHTTPError("Instance service error", reason));
        });
        return deferred.promise;
    };
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:instanceSvc#createInstanceRequest
             * @methodOf RA.IPCommon.Services.service:instanceSvc
             * @description
             * Create the Instance Request Object
             * @param {bool=} [camelCasePropertyNames] true if property names are camelCase
             * @returns {object} {@link RA.IPCommon.Services.object:InstanceRequest}
             */
    var createInstanceRequest = function(camelCasePropertyNames) {
        return new InstanceRequest(camelCasePropertyNames);
    };
    /**
             * @ngdoc object
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.object:InstanceRequest
             * @description
             * Instance Request Object
             * @property {array=} [fqns] list of FQNs
             * @property {array=} [queries] list of Queries
             * @property {boolean=} [camelCasePropertyNames] true if property names are camelCase
             */
    var InstanceRequest = function() {
        /**
                 * @ngdoc object
                 * @module RA.IPCommon.Services
                 * @name RA.IPCommon.Services.object:InstanceRequest#constructor
                 * @methodOf RA.IPCommon.Services.object:InstanceRequest
                 * @param {boolean=} [camelCasePropertyNames] true if property names are camelCase
                 * @description
                 * Create Instance Request Object
                 */
        function InstanceRequest(camelCasePropertyNames) {
            this.queries = undefined;
            this.fqns = undefined;
            if (camelCasePropertyNames === true || camelCasePropertyNames === false) {
                this.camelCasePropertyNames = camelCasePropertyNames;
            } else {
                this.camelCasePropertyNames = true;
            }
        }
        /**
                 * @ngdoc object
                 * @module RA.IPCommon.Services
                 * @name RA.IPCommon.Services.object:InstanceRequest#addResponseFormat
                 * @methodOf RA.IPCommon.Services.object:InstanceRequest
                 * @param {object} request The Request Object
                 * @param {boolean=} [includeAccessControl] Whether to include ACL in response object or not
                 * @param {object=} [retrievalDepth] Depth of response object
                 * @param {boolean=} [includeShortcuts] Whether to include shortcuts in response object or not
                 * @description
                 * Add Response Format to Instance Request Object
                 */
        function addResponseFormat(request, includeAccessControl, retrievalDepth, includeShortcuts) {
            request.responseFormat = {};
            if (includeAccessControl) {
                request.responseFormat.includeAcl = includeAccessControl;
            }
            if (retrievalDepth) {
                request.responseFormat.depth = retrievalDepth;
            }
            if (includeShortcuts) {
                request.responseFormat.includeShortcuts = includeShortcuts;
            }
        }
        /**
                 * @ngdoc object
                 * @module RA.IPCommon.Services
                 * @name RA.IPCommon.Services.object:InstanceRequest#addItemFqn
                 * @methodOf RA.IPCommon.Services.object:InstanceRequest
                 * @param {string} fqn FQN to add to the request
                 * @param {boolean=} [includeAccessControl] Whether to include ACL in response object or not
                 * @param {object=} [retrievalDepth] Depth of response object
                 * @param {boolean=} [includeShortcuts] Whether to include shortcuts in response object or not
                 * @description
                 * Add Item FQN to Instance Request Object
                 */
        InstanceRequest.prototype.addItemFqn = function(fqn, includeAccessControl, retrievalDepth, includeShortcuts) {
            var request = {};
            request.fqn = fqn;
            addResponseFormat.call(this, request, includeAccessControl, retrievalDepth, includeShortcuts);
            if (!this.fqns) {
                this.fqns = [];
            }
            this.fqns.push(request);
            return this;
        };
        /**
                 * @ngdoc object
                 * @module RA.IPCommon.Services
                 * @name RA.IPCommon.Services.object:InstanceRequest#addItemFqnExcludeVolatile
                 * @methodOf RA.IPCommon.Services.object:InstanceRequest
                 * @param {string} fqn FQN to add to the request
                 * @param {boolean=} [includeAccessControl] Whether to include ACL in response object or not
                 * @param {object=} [retrievalDepth] Depth of response object
                 * @param {boolean=} [includeShortcuts] Whether to include shortcuts in response object or not
                 * @description
                 * Add Item FQN to Instance Request Object - Exclude Volatile Properties
                 */
        InstanceRequest.prototype.addItemFqnExcludeVolatile = function(fqn, includeAccessControl, retrievalDepth, includeShortcuts) {
            var request = {};
            request.fqn = fqn;
            request.excludeVolatileProperties = true;
            addResponseFormat.call(this, request, includeAccessControl, retrievalDepth, includeShortcuts);
            if (!this.fqns) {
                this.fqns = [];
            }
            this.fqns.push(request);
            return this;
        };
        /**
                 * @ngdoc object
                 * @module RA.IPCommon.Services
                 * @name RA.IPCommon.Services.object:InstanceRequest#addPropertyFqn
                 * @methodOf RA.IPCommon.Services.object:InstanceRequest
                 * @param {string} fqn FQN to add to the request
                 * @param {boolean=} [includeAccessControl] Whether to include ACL in response object or not
                 * @param {object=} [retrievalDepth] Depth of response object
                 * @param {boolean=} [includeShortcuts] Whether to include shortcuts in response object or not
                 * @param {number=} [pageSize] Size of returned page (default 0 - do not use paging)
                 * @param {number=} [page] Index of returned page (default 0)
                 * @description
                 * Add Property FQN to Instance Request Object
                 */
        InstanceRequest.prototype.addPropertyFqn = function(fqn, includeAccessControl, retrievalDepth, includeShortcuts, pageSize, page) {
            var request = {};
            request.propertyFqn = fqn;
            addResponseFormat.call(this, request, includeAccessControl, retrievalDepth, includeShortcuts);
            if (pageSize) {
                request.pageSize = pageSize;
            }
            if (page) {
                request.page = page;
            }
            if (!this.fqns) {
                this.fqns = [];
            }
            this.fqns.push(request);
            return this;
        };
        /**
                 * @ngdoc object
                 * @module RA.IPCommon.Services
                 * @name RA.IPCommon.Services.object:InstanceRequest#addQuery
                 * @methodOf RA.IPCommon.Services.object:InstanceRequest
                 * @param {string} queryExpression Query Expression to add to the request
                 * @param {boolean=} [includeAccessControl] Whether to include ACL in response object or not
                 * @param {object=} [retrievalDepth] Depth of response object
                 * @param {boolean=} [includeShortcuts] Whether to include shortcuts in response object or not
                 * @description
                 * Add Query Expression to Instance Request Object
                 */
        InstanceRequest.prototype.addQuery = function(queryExpression, includeAccessControl, retrievalDepth, includeShortcuts) {
            var request = {};
            request.query = queryExpression;
            addResponseFormat.call(this, request, includeAccessControl, retrievalDepth, includeShortcuts);
            if (!this.queries) {
                this.queries = [];
            }
            this.queries.push(request);
            return this;
        };
        return InstanceRequest;
    }();
    return {
        getInstance: getInstance,
        getInstances: getInstances,
        execQuery: execQuery,
        execQuerySet: execQuerySet,
        createInstanceRequest: createInstanceRequest
    };
} ]);

/* 
 * (c) Rockwell Automation 2013
 */
/*jshint maxlen: false*/
//This rule makes code unreadable, so I'm not willing to follow it
//ZK4 use some kind of config object (config service) instead of the scope
/*global angular*/
/**
 * @ngdoc service
 * @module RA.IPCommon.Services
 * @name RA.IPCommon.Services.service:liveDataSvc
 * @description
 * Service for Live Data based Request and Manipulations, it uses
 * {@link RA.IPCommon.Services.object:Subscriber Subscriber} as a base so it has all it's methods available.
 */
angular.module("RA.IPCommon.Services").provider("liveDataSvc", function() {
    "use strict";
    var minimumTimerValue = 1e3, maxRetryCount = 3;
    /**
     * Service related Options
     */
    var options = {
        /**
             * generic update interval
             * @type {number}
             */
        updateInterval: minimumTimerValue,
        /**
             * relative path to service
             * @type {string}
             */
        serviceRelativePath: "api/1/live/",
        /**
             * Whether to log into console
             * @type {boolean}
             */
        logToConsole: false
    };
    /**
     * @ngdoc method
     * @module RA.IPCommon.Services
     * @name RA.IPCommon.Services.service:liveDataSvc#init
     * @methodOf RA.IPCommon.Services.service:liveDataSvc
     * @description
     * Initialize Parameters
     * @param {object} params - additional options
     */
    this.init = function(params) {
        angular.extend(options, params);
    };
    this.$get = [ "$http", "$log", "$rootScope", "$q", "$interval", "raIdGenSvc", "raErrorHandlerSvc", "subscriberSvc", "raErrorCollectorSvc", function($http, $log, $rootScope, $q, $interval, raIdGenSvc, raErrorHandlerSvc, subscriberSvc, raErrorCollectorSvc) {
        var fqns = {}, failureState, retryLeft = maxRetryCount, /**
             * Add Fqn to list
             * @param {string} fqn - to add
             */
        addFqn = function(fqn) {
            if (fqns[fqn] === undefined) {
                fqns[fqn] = 1;
            } else {
                fqns[fqn]++;
            }
        }, /**
             * Remove Fqn to list
             * @param {string} fqn - to remove
             */
        removeFqn = function(fqn) {
            if (fqns[fqn] !== undefined) {
                fqns[fqn]--;
                if (fqns[fqn] === 0) {
                    delete fqns[fqn];
                }
            }
        }, /**
             * Prepares data for request
             * @returns {object} data prepared for JSON request
             */
        _buildRequestJSON = function() {
            var item;
            var consumersRequestArray = [];
            for (item in fqns) {
                if (fqns.hasOwnProperty(item)) {
                    consumersRequestArray.push(item);
                }
            }
            return {
                fqns: consumersRequestArray
            };
        };
        var _injector = {
            /**
                 * @ngdoc method
                 * @module RA.IPCommon.Services
                 * @name RA.IPCommon.Services.service:liveDataSvc#getOnce
                 * @methodOf RA.IPCommon.Services.service:liveDataSvc
                 * @description
                 * Subscribe for retrieve data once
                 * @param {array} fqns list of fqns
                 * @param {bool} immediatelly whether get data immediatelly
                 * @param {string} id handle of subscription
                 * @param {boolean} bHash (optional default true) wheter return hash or array
                 * @returns {IPromise<T>} Angular promise to be resolved later
                 */
            getOnce: function(fqns, immediatelly, id, bHash) {
                var el, defer;
                if (bHash === undefined) {
                    bHash = true;
                }
                if (immediatelly) {
                    defer = $q.defer();
                    $http.post($rootScope.gBaseUrl + options.serviceRelativePath, {
                        fqns: fqns
                    }, $rootScope.gCommonHttpConfig).success(function(resultObject) {
                        var ret, result, i;
                        try {
                            if (typeof resultObject === "string") {
                                throw "Returned string in place of array";
                            }
                            result = resultObject.fqnsResults;
                            if (bHash) {
                                ret = {};
                                el = result.length;
                                for (i = 0; i < el; i += 1) {
                                    ret[fqns[i]] = result[i].value;
                                }
                            } else {
                                ret = [];
                                el = result.length;
                                for (i = 0; i < el; i += 1) {
                                    ret[i] = result[i].value;
                                }
                            }
                            defer.resolve(ret);
                        } catch (e) {
                            defer.reject("Connection error: " + e);
                        }
                    }).error(function(r) {
                        defer.reject("Connection error: " + r);
                    });
                    return defer.promise;
                }
                if (!id) {
                    id = raIdGenSvc.getStrId();
                }
                var data = {
                    fqns: fqns,
                    isHash: bHash,
                    isOnce: true
                };
                return this.subscribe(id, data, {
                    allAtOnce: true
                }, subscribed, unsubscribed, update);
            },
            /**
                 * @ngdoc method
                 * @module RA.IPCommon.Services
                 * @name RA.IPCommon.Services.service:liveDataSvc#getRepeatedly
                 * @methodOf RA.IPCommon.Services.service:liveDataSvc
                 * @description
                 * Subscribe to get data repeatedly according to 
                 * interval used in setTimer
                 * @param {string} id handle of subscription
                 * @param {string} fqns optional base string for fqn tails
                 * @param {bool} bHash return value is hash by default(true), array if false
                 * @returns {IPromise<T>} Promise that can be extended
                 * by service-generated id (RAServiceAutoGeneratedId) if
                 * id is not defined (or is null)
                 */
            getRepeatedly: function(id, fqns, bHash) {
                bHash = bHash === undefined || bHash === null ? true : bHash;
                id = id || raIdGenSvc.getStrId();
                var data = {
                    fqns: fqns,
                    isHash: bHash
                };
                return this.subscribe(id, data, {
                    allAtOnce: true
                }, subscribed, unsubscribed, update);
            }
        };
        /**
             * Called when consumer subscribed.
             * @param consumer
             */
        function subscribed(consumer) {
            var fqns = consumer.data.fqns;
            // init request
            consumer.fqnsArray = [];
            for (var i = 0; i < fqns.length; i += 1) {
                consumer.fqnsArray.push({
                    fqn: fqns[i],
                    index: i
                });
                addFqn(fqns[i]);
            }
        }
        /**
             * Called when consumer un-subscribed.
             * @param consumer
             */
        function unsubscribed(consumer) {
            for (var i = 0; i < consumer.fqnsArray.length; i += 1) {
                removeFqn(consumer.fqnsArray[i].fqn);
            }
        }
        /**
             * Called when data retrieved from the server.
             * @param consumer
             */
        function update(consumers) {
            var httpConfig, requestArray = _buildRequestJSON();
            if (requestArray.fqns.length === 0) {
                return;
            }
            if (options.logToConsole) {
                $log.info(requestArray);
            }
            httpConfig = $rootScope.gCommonHttpConfig ? angular.copy($rootScope.gCommonHttpConfig) : {};
            httpConfig.raPassError = true;
            $http.post($rootScope.gBaseUrl + options.serviceRelativePath, requestArray, httpConfig).then(// Success
            function(resultObject) {
                if (failureState) {
                    _injector.setTimer(_injector.getUpdateInterval());
                    failureState = false;
                }
                var el, resultsHash, i, rfqn, index, consumer, dataDefined, itemId, data, result;
                retryLeft = maxRetryCount;
                try {
                    resultsHash = {};
                    if (typeof resultObject.data === "string") {
                        throw "Returned string in place of array";
                    }
                    result = resultObject.data.fqnsResults;
                    el = result.length;
                    for (i = 0; i < el; i += 1) {
                        resultsHash[result[i].fqn] = result[i].value;
                    }
                    index = 0;
                    dataDefined = true;
                    for (itemId in consumers) {
                        if (consumers.hasOwnProperty(itemId)) {
                            consumer = consumers[itemId];
                            if (consumer.deferred !== undefined) {
                                dataDefined = true;
                                if (!consumer.data.isHash) {
                                    data = [];
                                    el = consumer.fqnsArray.length;
                                    for (i = 0; i < el; i += 1) {
                                        rfqn = consumer.fqnsArray[i];
                                        data[rfqn.index] = {};
                                        if (resultsHash[rfqn.fqn] === undefined) {
                                            dataDefined = false;
                                            break;
                                        }
                                        data[rfqn.index] = resultsHash[rfqn.fqn];
                                    }
                                } else {
                                    data = {};
                                    el = consumer.fqnsArray.length;
                                    for (i = 0; i < el; i += 1) {
                                        rfqn = consumer.fqnsArray[i];
                                        if (resultsHash[rfqn.fqn] === undefined) {
                                            dataDefined = false;
                                            break;
                                        }
                                        data[rfqn.fqn] = resultsHash[rfqn.fqn];
                                    }
                                }
                                if (dataDefined) {
                                    if (consumer.data.isOnce) {
                                        _injector.unsubscribe(itemId, data);
                                    } else {
                                        consumer.deferred.notify(data);
                                    }
                                }
                            }
                            index++;
                        }
                    }
                } catch (e) {
                    _injector.rejectAll("Bad data: " + resultObject.data.toString());
                }
            }, // Failure
            function(reason) {
                if (--retryLeft === 0) {
                    var error = raErrorHandlerSvc.getRAHTTPError("Communication error", "Connection error: " + reason);
                    failureState = true;
                    _injector.clearTimer();
                    raErrorCollectorSvc.addHttpError(error).then(function(retry) {
                        if (retry) {
                            update(consumers);
                            retryLeft = 1;
                        } else {
                            _injector.rejectAll("Connection error: " + reason);
                        }
                    });
                }
            });
        }
        // Make Subscriber base of this.
        subscriberSvc.extend(_injector);
        if (options.updateInterval !== 0) {
            _injector.setTimer(options.updateInterval);
        }
        return _injector;
    } ];
});

/* 
 * (c) Rockwell Automation 2013
 */
/* global angular */
/**
 * @ngdoc service
 * @module RA.IPCommon.Services
 * @name RA.IPCommon.Services.service:mimeSvc
 * @description
 * Service for Mime Data based Request and Manipulations
 */
angular.module("RA.IPCommon.Services").factory("mimeSvc", [ "$http", "$rootScope", "$q", "raErrorHandlerSvc", function($http, $rootScope, $q, raErrorHandlerSvc) {
    "use strict";
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:mimeSvc#getMimeProperty
             * @methodOf RA.IPCommon.Services.service:mimeSvc
             * @description
             * Get Mime Property Value
             * @param {object} fqn - Fqn of Mime
             * @returns {IPromise<T>} Angular promise to resolve later
             */
    var getMimeProperty = function(fqn) {
        var defer = $q.defer();
        $http.get(getServiceUrl(fqn), $rootScope.gCommonHttpConfig).then(function onSuccess(result) {
            defer.resolve(result.data);
        }, function onError(reason) {
            defer.reject(raErrorHandlerSvc.getRAHTTPError("mimeSvc error", reason));
        });
        return defer.promise;
    };
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:mimeSvc#getServiceUrl
             * @methodOf RA.IPCommon.Services.service:mimeSvc
             * @description
             * Constructs a URL to the service using given parameter.
             * The parameter value is encoded using encodeURIComponent()
             * function.
             * @param {string=} [fqn] the FQN of MIME property
             * @returns {string} The URL to GetMimeProperty service with
             * properly encoded parameters, or just the base URL if called with
             * no parameters.
             */
    var getServiceUrl = function(fqn) {
        var url = $rootScope.gBaseUrl + "api/1/mime";
        if (fqn) {
            url = url + "/" + encodeURIComponent(fqn);
        }
        return url;
    };
    return {
        getMimeProperty: getMimeProperty,
        getServiceUrl: getServiceUrl
    };
} ]);

/*
 * (c) Rockwell Automation 2013
 */
/* global angular */
/**
 * @ngdoc service
 * @module RA.IPCommon.Services
 * @name RA.IPCommon.Services.service:navigationHandlerSvc
 * @description
 * Service for Navigation Handler Request and Manipulations
 */
angular.module("RA.IPCommon.Services").factory("navigationHandlerSvc", [ "$http", "$rootScope", "$q", "raErrorHandlerSvc", "viewSvc", "fqnSvc", "WELLKNOWN_LOCATIONS", function($http, $rootScope, $q, raErrorHandlerSvc, viewSvc, fqnSvc, WELLKNOWN_LOCATIONS) {
    "use strict";
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:navigationHandlerSvc#getNavigationHandler
             * @methodOf RA.IPCommon.Services.service:navigationHandlerSvc
             * @description
             * Makes a request to JSON navigationhandler service on the server.
             * @param {object} navigationHandlerRequest {@link RA.IPCommon.Services.object:NavigationHandlerRequest}
             * @returns {IPromise<T>} - Promise to resolve when answer
             * will be available.
             */
    var getNavigationHandler = function(navigationHandlerRequest) {
        var defer = $q.defer();
        $http.post($rootScope.gBaseUrl + "api/1/navigationhandler/", navigationHandlerRequest, $rootScope.gCommonHttpConfig).then(function success(result) {
            defer.resolve(result.data);
        }, function error(r) {
            //$log.error("Navigation service connection error: " + r);
            //defer.reject();
            // Instead of above use as follows
            // but errorCallback function in then() should
            // propagate this error (see: viewSvc, and browserCtrl)
            defer.reject(raErrorHandlerSvc.getRAHTTPError("navigationHandler service connection error", r));
        });
        return defer.promise;
    };
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:navigationHandlerSvc#getNavigationView
             * @methodOf RA.IPCommon.Services.service:navigationHandlerSvc
             * @description
             * Create or Return the default view for the given FullyQualifiedName
             * if the currentView is not set, call a service to retrieve the fqn "available" view.
             * @param {object} currentFqn - Current FullyQualifiedName
             * @param {object=} [currentView] - Current View
             * @returns {IPromise<T>} - Promise to resolve when answer
             * will be available.
             **/
    var getNavigationView = function(currentFqn, currentView) {
        var defer = $q.defer();
        var viewFqn;
        if (currentView !== undefined && currentView !== "") {
            viewFqn = viewSvc.getFqnForViewName(currentView);
        } else {
            viewFqn = currentView;
        }
        getNavigationHandler(createNavigationHandlerRequest(currentFqn, viewFqn)).then(function success(data) {
            defer.resolve(fqnSvc.getLastName(data.navhandlerfqn));
        }, function failure(reason) {
            // Since the error occurred you can propagate it to the
            // error listener and $exceptionHandler
            raErrorHandlerSvc.propagate(reason);
        });
        return defer.promise;
    };
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:navigationHandlerSvc#createNavigationHandlerRequest
             * @methodOf RA.IPCommon.Services.service:navigationHandlerSvc
             * @description
             * Create or Return the Navigation Handler Request.
             * @param {object} fqn - FullyQualifiedName
             * @param {object} viewFqn - View FullyQualifiedName
             * @returns {NavigationHandlerRequest} Navigation Handler Request
             * {@link RA.IPCommon.Services.object:NavigationHandlerRequest}
             **/
    var createNavigationHandlerRequest = function(fqn, viewFqn) {
        return new NavigationHandlerRequest(fqn, viewFqn);
    };
    /**
             * @ngdoc object
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.object:NavigationHandlerRequest
             * @description
             * Navigation Handler Request Object
             * @property {string} fqn The FQN of NavigationHandlerRequest
             * @property {string} currentNavHandlerFqn The FQN of current Navigation handler
             * @property {string} navHandlerProviderFqn The FQN of Navigation Handler Provider
             */
    var NavigationHandlerRequest = function() {
        function NavigationHandlerRequest(_fqn, _viewFqn) {
            this.fqn = _fqn;
            this.currentNavHandlerFqn = _viewFqn;
            this.navHandlerProviderFqn = WELLKNOWN_LOCATIONS.MOBILE_APPLICATION;
        }
        return NavigationHandlerRequest;
    }();
    return {
        getNavigationHandler: getNavigationHandler,
        getNavigationView: getNavigationView,
        createNavigationHandlerRequest: createNavigationHandlerRequest
    };
} ]);

/*
 * (c) Rockwell Automation 2013
 */
/* global angular */
/**
 * @ngdoc service
 * @module RA.IPCommon.Services
 * @name RA.IPCommon.Services.service:navigationSvc
 * @description
 * Service for Navigation Request and Manipulations
 */
angular.module("RA.IPCommon.Services").factory("navigationSvc", [ "$http", "$rootScope", "$q", "raErrorHandlerSvc", function($http, $rootScope, $q, raErrorHandlerSvc) {
    "use strict";
    var lastResult;
    var defaultHideSkipRules = {};
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:navigationSvc#getLastResult
             * @methodOf RA.IPCommon.Services.service:navigationSvc
             * @description
             * Returns the result of the most recent Navigation request.
             * @returns {object} - the most recent result of a getNavigationData request.
             * will be available.
             */
    var getLastResult = function() {
        return lastResult;
    };
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:navigationSvc#getNavigationData
             * @methodOf RA.IPCommon.Services.service:navigationSvc
             * @description
             * Makes a request to JSON Navigation service on the server.
             * @param {object} navigationRequest {@link RA.IPCommon.Services.object:NavigationRequest}
             * @returns {IPromise<T>} - Promise to resolve when answer
             * will be available.
             */
    var getNavigationData = function(navigationRequest) {
        var defer = $q.defer();
        // TODO: uncomment it and fix UTs
        //                if (fqn === undefined || fqn === null) {
        //                    defer.reject(raErrorHandlerSvc.getRAError(
        //                        'Navigation service error.',
        //                        'Incorrect parameters for navigation service.FQN is empty'));
        //                    return defer.promise;
        //                }
        $http.post($rootScope.gBaseUrl + "api/1/navigation/", navigationRequest, $rootScope.gCommonHttpConfig).then(function success(result) {
            lastResult = result;
            defer.resolve(result.data);
        }, function error(r) {
            // Instead of above use as follows
            // but errorCallback function in then() should
            // propagate this error (see: viewSvc, and browserCtrl)
            defer.reject(raErrorHandlerSvc.getRAHTTPError("Navigation service connection error", r));
        });
        return defer.promise;
    };
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:navigationSvc#createNavigationRequest
             * @methodOf RA.IPCommon.Services.service:navigationSvc
             * @description
             * Create and return Navigation Request Object
             * Note : If navHandlerFqn is specified then the Hide & Skip Rules
             * will be ignored.
             * @param {object} fqn - FullyQualifiedName
             * @param {object} propNames - Property Names
             * @param {object} includeParents - true if parents are included 
             * @param {object=} [navHandlerFqn] - FullyQualifiedName of Navigation Handler
             * @param {object=} [hideRules] - Hide Rules
             * @param {object=} [skipRules] - Skip Rules
             * @returns {object} - {@link RA.IPCommon.Services.object:NavigationRequest}
             * will be available.
             */
    var createNavigationRequest = function(fqn, propNames, includeParents, navHandlerFqn, hideRules, skipRules) {
        return new NavigationRequest(fqn, propNames, includeParents, navHandlerFqn, hideRules, skipRules);
    };
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:navigationSvc#setHideSkipRules
             * @methodOf RA.IPCommon.Services.service:navigationSvc
             * @description
             * Sets the default hide and skip rules - called at app startup
             * @param {object=} [hideRules] - Hide Rules
             * @param {object=} [skipRules] - Skip Rules
             */
    var setDefaultHideSkipRules = function(hideRules, skipRules) {
        var newHideRules, newSkipRules;
        if (angular.isArray(hideRules) || hideRules === undefined) {
            newHideRules = hideRules;
        } else {
            raErrorHandlerSvc.propagate(raErrorHandlerSvc.getRAError("NavigationSvc: HideRules Should be an array"));
        }
        if (angular.isArray(skipRules) || skipRules === undefined) {
            newSkipRules = skipRules;
        } else {
            raErrorHandlerSvc.propagate(raErrorHandlerSvc.getRAError("NavigationSvc: SkipRules Should be an array"));
        }
        defaultHideSkipRules = {
            hideRules: newHideRules,
            skipRules: newSkipRules
        };
    };
    /**
             * @ngdoc object
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.object:NavigationRequest
             * @description
             * Navigation Request Object
             * @property {string} fqn The FQN of NavigationRequest
             * @property {array} propNames The Property Names
             * @property {boolean} includeParents Whether to include parents in results
             * @property {string=} [navHandlerFqn] The FQN of Navigation Handler Item
             * @property {array=} [hideRules] The Hide Rules for Navigation
             * @property {array=} [skipRules] he Skip Rules for Navigation
             */
    var NavigationRequest = function() {
        function NavigationRequest(_fqn, _propNames, _includeParents, _navHandlerFqn, _hideRules, _skipRules) {
            this.fqn = _fqn;
            this.propNames = _propNames;
            this.includeParents = _includeParents;
            if (_navHandlerFqn) {
                this.navHandlerFqn = _navHandlerFqn;
            } else {
                if (_hideRules || _skipRules) {
                    if (_hideRules) {
                        this.hideRules = _hideRules;
                    }
                    if (_skipRules) {
                        this.skipRules = _skipRules;
                    }
                } else {
                    this.hideRules = defaultHideSkipRules.hideRules;
                    this.skipRules = defaultHideSkipRules.skipRules;
                }
            }
        }
        return NavigationRequest;
    }();
    return {
        getLastResult: getLastResult,
        getNavigationData: getNavigationData,
        createNavigationRequest: createNavigationRequest,
        setDefaultHideSkipRules: setDefaultHideSkipRules
    };
} ]);

/*
 * (c) Rockwell Automation 2014
 */
/* global angular */
/**
 * @ngdoc service
 * @module RA.IPCommon.Services
 * @name RA.IPCommon.Services.service:operationSvc
 * @description
 * Service for Operation Request and Manipulations
 */
angular.module("RA.IPCommon.Services").factory("operationSvc", [ "$http", "$rootScope", "$q", "raErrorHandlerSvc", function($http, $rootScope, $q, raErrorHandlerSvc) {
    "use strict";
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:operationSvc#getOperationData
             * @methodOf RA.IPCommon.Services.service:operationSvc
             * @description
             * Makes a request to JSON Operation service on the server.
             * @param {OperationRequest} operationReq {@link RA.IPCommon.Services.object:OperationRequest}
             * @param {boolean=} [raPassError] - flag indicating whether to turn off
             * common error's interception mechanism
             * @param {object=} [cancelPromise] -  promise that should abort the request when resolved
             * @returns {IPromise<T>} - Promise to resolve when answer
             * will be available.
             */
    var getOperationData = function(operationReq, raPassError, cancelPromise) {
        var defer = $q.defer();
        var httpConfig = $rootScope.gCommonHttpConfig;
        if (typeof raPassError === "boolean" || cancelPromise && typeof cancelPromise.then === "function") {
            if (httpConfig) {
                httpConfig = angular.copy(httpConfig);
            } else {
                httpConfig = {};
            }
            // Setting raPassError flag in the httpConfig
            httpConfig.raPassError = raPassError;
            // Setting cancel promise
            if (cancelPromise && typeof cancelPromise.then === "function") {
                httpConfig.timeout = cancelPromise;
            }
        }
        $http.post($rootScope.gBaseUrl + "api/1/operation/", operationReq, httpConfig).then(function success(result) {
            defer.resolve(result.data);
        }, function error(r) {
            // Pass errors if flag is set
            if (typeof raPassError === "boolean" && raPassError) {
                defer.reject(r);
            } else {
                defer.reject(raErrorHandlerSvc.getRAHTTPError("Operation service connection error", r));
            }
        });
        return defer.promise;
    };
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:operationSvc#createOperationRequest
             * @methodOf RA.IPCommon.Services.service:operationSvc
             * @description
             * Create or Return the Operation Request.
             * @param {string} target The FQN of target item
             * @param {string} operation The name of the operation
             * @param {string=} [parameters] The parameters for the request
             * @returns {OperationRequest} {@link RA.IPCommon.Services.object:OperationRequest}
             **/
    var createOperationRequest = function(target, operation, parameters) {
        return new OperationRequest(target, operation, parameters);
    };
    /**
             * @ngdoc object
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.object:OperationRequest
             * @description
             * Operation Request Object
             * @property {string} target The FQN of target item
             * @property {string} operation The name of the operation
             * @property {string=} [parameters] The parameters for the request
             */
    var OperationRequest = function() {
        function OperationRequest(_target, _operation, _parameters) {
            this.target = _target;
            this.operation = _operation;
            this.parameters = _parameters;
        }
        return OperationRequest;
    }();
    return {
        getOperationData: getOperationData,
        createOperationRequest: createOperationRequest
    };
} ]);

/*
 * (c) Rockwell Automation 2013
 */
/* global angular */
/**
 * @ngdoc service
 * @module RA.IPCommon.Services
 * @name RA.IPCommon.Services.service:persistenceSvc
 * @description
 * Service for Persistence Request and Manipulations
 */
angular.module("RA.IPCommon.Services").factory("persistenceSvc", [ "$http", "$rootScope", "$q", "raErrorHandlerSvc", function($http, $rootScope, $q, raErrorHandlerSvc) {
    "use strict";
    /**
            * @ngdoc method
            * @module RA.IPCommon.Services
            * @name RA.IPCommon.Services.service:persistenceSvc#commit
            * @methodOf RA.IPCommon.Services.service:persistenceSvc
            * @description
            * Makes a request to JSON Persistence service on the server.
            * @param {object} persistRequest {@link RA.IPCommon.Services.object:PersistRequest}
            * @param {boolean=} [raPassError] flag indicating whether to turn off
            * common error's interception mechanism
            * @returns {IPromise<T>} Promise to resolve when answer will be available.
            * 
            * It is strongly recommended to use the PropNameValues and PersistRequest utility objects
            * to assist in construction of the request object. Doing so provides protection against 
            * underlying changes to the JSON Persistence service. 
            *
            * Examples:
            *
            *  Creating items:  
            *
            *           var propNameValues = createPropNameValues();
            *           propNameValues.add('Name', 'DouglasFolder');
            *           propNameValues.add('Description', 'Douglas folder description');
            *
            *           var persistRequest = createPersistRequest();
            *           persistRequest.createItem('MyEnterprise.Public', 
            *             'TypeSystem.Packages.[Core.Package].ItemTypes.[Core.Folder]', 
            *             propNameValues)
            *
            *           persistenceSvc.commit(persistRequest);
            *
            *   Updating items:
            *
            *           var propNameValues = createPropNameValues();
            *           propNameValues.add('Description', 'Updated folder description');
            *
            *           var persistRequest = createPersistRequest();
            *           persistRequest.changeItem('MyEnterprise.Public.DouglasFolder', propNameValues);
            *
            *           persistenceSvc.commit(persistRequest);
            *
            *   Re-ordering an item collection:
            *           // NOTE: The collection property must be defined as "isOrdered" in the model item type.
            *           //       Also, you cannot add a collection and re-order it in the same transaction.
            *
            *           var propNameValues = createPropNameValues();
            *           propNameValues.reorder('Favorites', ['Item 5','Item 4','Item 3','Item 2','Item 1']);
            *
            *           var persistRequest = createPersistRequest();
            *           persistRequest.changeItem('System.Services.Profile.Users.PTM\User1.Mobile', propNameValues);
            *
            *           persistenceSvc.commit(persistRequest);
            *
            *    Rename item: (only one allowed per commit)
            *
            *           var persistRequest = createPersistRequest();
            *           persistRequest.renameItem('MyEnterprise.Public.DouglasFolder','RoseFolder')
            *
            *           persistenceSvc.commit(persistRequest);
            *
            *    Deleting items:
            *
            *           var persistRequest = createPersistRequest();
            *           persistRequest.deleteItem('MyEnterprise.Public.RoseFolder');
            *           persistRequest.deleteItem('MyEnterprise.Public.TestFolder');
            *
            *           persistenceSvc.commit(persistRequest);
            */
    var commit = function(persistRequest, raPassError) {
        var deferred = $q.defer(), httpConfig = $rootScope.gCommonHttpConfig ? angular.copy($rootScope.gCommonHttpConfig) : {};
        if (typeof raPassError === "boolean") {
            httpConfig.raPassError = raPassError;
        }
        $http.post($rootScope.gBaseUrl + "api/1/persistence/", persistRequest, httpConfig).then(function(result) {
            deferred.resolve(result);
        }, function failure(reason) {
            deferred.reject(raErrorHandlerSvc.getRAHTTPError("Persistence service error", reason));
        });
        return deferred.promise;
    };
    /**
            * @ngdoc method
            * @module RA.IPCommon.Services
            * @name RA.IPCommon.Services.service:persistenceSvc#createPropNameValues
            * @methodOf RA.IPCommon.Services.service:persistenceSvc
            * @description
            * Create & Return Proerpty Name & Value Pairs
            * @returns {object} Property Name Value Pair
            */
    var createPropNameValues = function() {
        return new PropNameValues();
    };
    /**
             * @ngdoc object
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.object:PropNameValues
             * @description
             * Property Name Value Object
             * @property {dictionary} Properties Name Value Pair
             */
    var PropNameValues = function() {
        /**
                 * @ngdoc object
                 * @module RA.IPCommon.Services
                 * @name RA.IPCommon.Services.object:PropNameValues#constructor
                 * @methodOf RA.IPCommon.Services.object:PropNameValues
                 * @description
                 * Create Property Name Value Pairs for New Item Creation
                 * via Persistence Service
                 */
        function PropNameValues() {}
        /**
                 * @ngdoc object
                 * @module RA.IPCommon.Services
                 * @name RA.IPCommon.Services.object:PropNameValues#add
                 * @methodOf RA.IPCommon.Services.object:PropNameValues
                 * @param {string} name Name of the property to add
                 * @param {object} value Value to add at Name property name
                 * @description
                 * Adds property Name Value Pair for New Item Creation
                 */
        PropNameValues.prototype.add = function(name, value) {
            if (name) {
                this[name] = value;
            }
        };
        /**
                 * @ngdoc object
                 * @module RA.IPCommon.Services
                 * @name RA.IPCommon.Services.object:PropNameValues#reorder
                 * @methodOf RA.IPCommon.Services.object:PropNameValues
                 * @param {string} name Name of the property to reorder
                 * @param {object} value Value to add at Name property name
                 * @description
                 * Reorder property Name Value Pair for New Item Creation
                 */
        PropNameValues.prototype.reorder = function(name, value) {
            if (name) {
                this[name] = {
                    finalOrder: value
                };
            }
        };
        return PropNameValues;
    }();
    /**
            * @ngdoc method
            * @module RA.IPCommon.Services
            * @name RA.IPCommon.Services.service:persistenceSvc#createPersistRequest
            * @methodOf RA.IPCommon.Services.service:persistenceSvc
            * @description
            * Create & Return Persistence Request
            * @returns {object} Persistence Request Object
            */
    var createPersistRequest = function() {
        return new PersistRequest();
    };
    /**
             * @ngdoc object
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.object:PersistRequest
             * @description
             * Persist Request Object
             * @property {array=} [newItems] List of new items to persist
             * @property {array=} [renamedItem] List of items to rename
             * @property {array=} [changedItems] List of changed items to persist
             * @property {array=} [deletedItems] List of items to delete
             */
    var PersistRequest = function() {
        /**
                 * @ngdoc object
                 * @module RA.IPCommon.Services
                 * @name RA.IPCommon.Services.object:PersistRequest#constructor
                 * @methodOf RA.IPCommon.Services.object:PersistRequest
                 * @description
                 * Create Persistent Request Object
                 */
        function PersistRequest() {
            this.newItems = undefined;
            this.renamedItem = undefined;
            this.changedItems = undefined;
            this.deletedItems = undefined;
        }
        /**
                 * @ngdoc object
                 * @module RA.IPCommon.Services
                 * @name RA.IPCommon.Services.object:PersistRequest#createItem
                 * @methodOf RA.IPCommon.Services.object:PersistRequest
                 * @param {string=} [parentPropertyFqn] FQN of Parent Property
                 * @param {string=} [itemType] Item Type
                 * @param {array=} [propNameValues] Property Name Value Pairs
                 * @description
                 * Create Item via Persistence Service
                 */
        PersistRequest.prototype.createItem = function(parentPropertyFqn, itemType, propNameValues) {
            var createRequest = {};
            if (parentPropertyFqn) {
                createRequest.parentPropertyFqn = parentPropertyFqn;
            }
            if (itemType) {
                createRequest.itemType = itemType;
            }
            if (propNameValues) {
                createRequest.props = propNameValues;
            }
            if (!this.newItems) {
                this.newItems = [];
            }
            this.newItems.push(createRequest);
            return this;
        };
        /**
                 * @ngdoc object
                 * @module RA.IPCommon.Services
                 * @name RA.IPCommon.Services.object:PersistRequest#renameItem
                 * @methodOf RA.IPCommon.Services.object:PersistRequest
                 * @param {string=} [itemFqn] FQN of Item
                 * @param {string=} [newName] New Name of Item
                 * @description
                 * Rename Item via Persistence Service
                 */
        PersistRequest.prototype.renameItem = function(itemFqn, newName) {
            if (!this.renamedItem) {
                this.renamedItem = {};
            }
            if (itemFqn) {
                this.renamedItem.fqn = itemFqn;
            }
            if (newName) {
                this.renamedItem.newName = newName;
            }
            return this;
        };
        /**
                 * @ngdoc object
                 * @module RA.IPCommon.Services
                 * @name RA.IPCommon.Services.object:PersistRequest#changeItem
                 * @methodOf RA.IPCommon.Services.object:PersistRequest
                 * @param {string=} [itemFqn] FQN of Item
                 * @param {string=} [propNameValues] Properties to change
                 * @description
                 * Change Item via Persistence Service
                 */
        PersistRequest.prototype.changeItem = function(itemFqn, propNameValues) {
            var changeRequest = {};
            if (propNameValues) {
                propNameValues.add("FullyQualifiedName", itemFqn);
                changeRequest = propNameValues;
            }
            if (!this.changedItems) {
                this.changedItems = [];
            }
            this.changedItems.push(changeRequest);
            return this;
        };
        /**
                 * @ngdoc object
                 * @module RA.IPCommon.Services
                 * @name RA.IPCommon.Services.object:PersistRequest#deleteItem
                 * @methodOf RA.IPCommon.Services.object:PersistRequest
                 * @param {string=} [itemFqn] FQN of Item to delete
                 * @description
                 * Delete Item via Persistence Service
                 */
        PersistRequest.prototype.deleteItem = function(itemFqn) {
            if (!this.deletedItems) {
                this.deletedItems = [];
            }
            this.deletedItems.push(itemFqn);
            return this;
        };
        return PersistRequest;
    }();
    return {
        commit: commit,
        createPropNameValues: createPropNameValues,
        createPersistRequest: createPersistRequest
    };
} ]);

/*
 * (c) Rockwell Automation 2014
 */
/* global angular */
/* global _ */
/**
 * @ngdoc service
 * @module RA.IPCommon.Services
 * @name RA.IPCommon.Services.service:securityContextSvc
 * @description
 * Service for Security Context Request and Manipulations
 */
angular.module("RA.IPCommon.Services").factory("securityContextSvc", [ "$http", "$log", "$rootScope", "$q", "instanceSvc", function($http, $log, $rootScope, $q, instanceSvc) {
    "use strict";
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:securityContextSvc#getSecurityContextData
             * @methodOf RA.IPCommon.Services.service:securityContextSvc
             * @description
             * Makes a request to JSON Security Context service on the server.
             * @returns {IPromise<T>} - Promise to resolve when answer
             * will be available.
             */
    var getSecurityContextData = function() {
        var defer = $q.defer();
        $http.get($rootScope.gBaseUrl + "api/1/securitycontext/", $rootScope.gCommonHttpConfig).success(function(result) {
            defer.resolve(result);
        }).error(function(r) {
            $log.error("Security service connection error: " + r);
            defer.reject();
        });
        return defer.promise;
    };
    /**
             * Internal Method - Merge the Permissions
             * @param {object} roles - roles
             * @param {object} response - response
             * @returns {object} - the Access control list (ACL)
             */
    var mergePermissions = function(roles, response) {
        var acl = [ "N", "N", "N", "N" ];
        response.roles.push("Everyone");
        angular.forEach(response.roles, function(value) {
            var rolesAcl = _.first(_.pluck(_.where(roles, {
                role: value
            }), "rwde"));
            if (rolesAcl) {
                var splitted = rolesAcl.split("");
                angular.forEach(splitted, function(value, key) {
                    if (value === "Y") {
                        acl[key] = "Y";
                    }
                });
            }
        });
        return acl;
    };
    /**
             * Internal Method - Resolve the ACL
             * @param {object} roles - roles
             * @param {object} requiredPermissions - requiredPermissions
             * @returns {IPromise<T>} - the angular promise
             */
    var resolveAcl = function(roles, requiredPermissions) {
        var deferred = $q.defer();
        getSecurityContextData().then(function(response) {
            var acl = mergePermissions(roles, response);
            var result = true;
            var splittedRequiredPermissions = requiredPermissions.split("");
            angular.forEach(acl, function(value, key) {
                if (splittedRequiredPermissions[key] === "Y" && value !== "Y") {
                    result = false;
                }
            });
            deferred.resolve(result);
        });
        return deferred.promise;
    };
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:securityContextSvc#checkPermissions
             * @methodOf RA.IPCommon.Services.service:securityContextSvc
             * @description
             * Makes a request to services on the server to get item's permissions.
             * @param {string} fqn - FQN of the item to get permissions for.
             * @param {string} requiredPermissions - permissions to check in VP rwde format 
             * e.g. 'YNNN' that checks whether item is read-only.
             * @returns {IPromise<T>} - Promise to resolve when answer
             * will be available, the answer is boolean.
             */
    var checkPermissions = function(fqn, requiredPermissions) {
        var deferred = $q.defer();
        instanceSvc.getInstance(fqn, false, true, 0).then(function(response) {
            var item = _.first(response.data.fqnsResults).item;
            if (item) {
                var roles = item.acl.roles;
                if (!roles) {
                    var parent = _.first(response.data.fqnsResults).item.acl.inherited;
                    deferred.resolve(checkPermissions(parent, requiredPermissions));
                } else {
                    roles.push({
                        role: "SysAdmin",
                        rwde: "YYYY"
                    });
                    resolveAcl(roles, requiredPermissions).then(function(result) {
                        deferred.resolve(result);
                    });
                }
            } else {
                deferred.resolve(false);
            }
        });
        return deferred.promise;
    };
    return {
        getSecurityContextData: getSecurityContextData,
        checkPermissions: checkPermissions
    };
} ]);

/* 
 * (c) Rockwell Automation 2016
 */
/*global angular*/
/**
 * @ngdoc service
 * @module RA.IPCommon.Services
 * @name RA.IPCommon.Services.service:subscriberSvc
 * @description
 * A wrapper service used to make certain object (service) inherit properties and methods from
 * {@link RA.IPCommon.Services.object:Subscriber Subscriber} base.
 * @example
 * <pre>
 *      var promise;
 *
 *      var dummySvc = {
 *          subscribed: function(consumer) {
 *              console.log("consumer subscribed " + consumer.foo);
 *
 *              // do whatever initialization logic here
 *          },
 *          unsubscribed: function(consumer) {
 *              console.log("consumer un-subscribed " + consumer.foo);
 *
 *              // do whatever cleanup logic here
 *          },
 *          update: function(consumer) {
 *              console.log("consumer updated " + consumer.foo);
 *
 *              // now you can use promise object declared above to do whatever async tasks and then
 *              // call notify, resolve, reject etc., other objects (for example widgets using dummySvc)
 *              // can of course hook to this promise their own callbacks
 *              try {
 *                  throw "error";
 *              }
 *              catch (e) {
 *                  console.error(e);
 *
 *                  // methods from Subscriber base are available
 *                  this.rejectAll(e);
 *              }
 *          }
 *      );
 *
 *      subscriberSvc.extend(dummySvc);
 *
 *      promise = subscriberSvc.subscribe(
 *          "#1", { foo: "bar" ), {}, dummySvc.subscribed, dummySvc.unsubscribed, dummySvc.update
 *      );
 * </pre>
 */
angular.module("RA.IPCommon.Services").factory("subscriberSvc", [ "$injector", function($injector) {
    "use strict";
    /**
     * @ngdoc object
     * @module RA.IPCommon.Services
     * @name RA.IPCommon.Services.object:Subscriber
     * @description
     * Object used as base class for services that need to get notified by timer events. The notifications can be
     * sent explicitly using update method. See {@link RA.IPCommon.Services.service:subscriberSvc SubscriberSvc}
     * in order how to use this as base class for your services.
     */
    function Subscriber($injector) {
        var self = this;
        var consumers = {}, minimumTimerValue = 1e3, timer = null, updateInterval, updateFn, allAtOnce;
        var $interval = $injector.get("$interval"), $log = $injector.get("$log"), $q = $injector.get("$q");
        /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.object:Subscriber#subscribe
         * @methodOf RA.IPCommon.Services.object:Subscriber
         * @description
         * Subscribe for retrieving data
         * @param {String} id handle of subscription
         * @param {Object} data (optional) subscriber data
         * @param {Object} options (optional) additional options, properties: (bool) allAtOnce
         * @param {Function} onSubscribed (optional) callback invoked when consumer subscribed,
         * function takes consumer as an argument
         * @param {Function} onUnsubscribed (optional) callback invoked when consumer un-subscribed,
         * function takes consumer as an argument
         * @param {Function} onUpdate {optional) callback invoked when consumers should update
         * @returns {Object} promise
         */
        this.subscribe = function(id, data, options, onSubscribed, onUnsubscribed, onUpdate) {
            data = data || {};
            // Init options, add defaults.
            options = options || {};
            options.allAtOnce = options.allAtOnce || false;
            var deferred = $q.defer();
            deferred.promise.debugId = id;
            deferred.promise.RAServiceAutoGeneratedId = id;
            allAtOnce = options.allAtOnce;
            consumers[id] = {
                id: id,
                deferred: deferred,
                data: data,
                onUnsubscribed: onUnsubscribed
            };
            if (angular.isFunction(onSubscribed)) {
                onSubscribed(consumers[id]);
            }
            updateFn = onUpdate;
            return deferred.promise;
        };
        /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.object:Subscriber#unsubscribe
         * @methodOf RA.IPCommon.Services.object:Subscriber
         * @description
         * Stop retrieving data for particular id
         * @param {String} id target id
         * @param {Object} data (optional) data to resolve promise with
         * @param {Object} reject (optional) data to reject promise with
         * @returns {Boolean} Whether subscription existed for id
         */
        this.unsubscribe = function(id, data, reject) {
            var consumer = consumers[id];
            if (consumer === undefined) {
                $log.info("Unsubscribing consumer which was not subscribed - id: " + id);
                return false;
            }
            if (angular.isFunction(consumer.onUnsubscribed)) {
                consumer.onUnsubscribed(consumer);
            }
            if (reject) {
                consumer.deferred.reject(reject);
            } else {
                consumer.deferred.resolve(data);
            }
            delete consumers[id];
            return true;
        };
        /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.object:Subscriber#update
         * @methodOf RA.IPCommon.Services.object:Subscriber
         * @description
         * Call update explicitly.
         * @param {String} id (optional) if passed only subscriber of given id will get notified.
         */
        this.update = function(id) {
            if (!angular.isFunction(updateFn)) {
                return;
            }
            if (allAtOnce && !id) {
                updateFn(consumers);
            } else {
                if (id) {
                    var consumer = consumers[id];
                    if (consumer === undefined) {
                        $log.info("Update called for consumer which was not subscribed - id: " + id);
                        return;
                    }
                    updateFn(consumer);
                } else {
                    angular.forEach(consumers, function(item) {
                        updateFn(item);
                    });
                }
            }
        };
        /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.object:Subscriber#unsubscribeAll
         * @methodOf RA.IPCommon.Services.object:Subscriber
         * @description
         * Un-subscribe all subscribed ids.
         */
        this.unsubscribeAll = function() {
            var itemId;
            for (itemId in consumers) {
                if (consumers.hasOwnProperty(itemId)) {
                    this.unsubscribe(itemId);
                }
            }
            consumers = {};
        };
        /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.object:Subscriber#rejectAll
         * @methodOf RA.IPCommon.Services.object:Subscriber
         * @description
         * Reject all subscribers and un-subscribe them.
         * @param {String} message reject message
         */
        this.rejectAll = function(message) {
            var consumerId;
            for (consumerId in consumers) {
                if (consumers.hasOwnProperty(consumerId)) {
                    this.unsubscribe(consumerId, null, message);
                }
            }
        };
        /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.object:Subscriber#setTimer
         * @methodOf RA.IPCommon.Services.object:Subscriber
         * @description
         * Set interval for data update and start periodical updating
         * @param {number} updateEveryMilliseconds interval
         */
        this.setTimer = function(updateEveryMilliseconds) {
            this.clearTimer();
            if (!angular.isNumber(updateEveryMilliseconds)) {
                $log.warn("Bad interval for setTimer ignored");
                return;
            }
            if (updateEveryMilliseconds >= minimumTimerValue) {
                updateInterval = updateEveryMilliseconds;
            } else {
                $log.warn("Warning: Custom timer is not a number or lower than minimum " + minimumTimerValue + " ms. Using default value.");
                updateInterval = minimumTimerValue;
            }
            this.startTimer(updateInterval);
        };
        /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.object:Subscriber#startTimer
         * @methodOf RA.IPCommon.Services.object:Subscriber
         * @description
         * Starts periodical updating
         * @param {number} interval interval
         */
        this.startTimer = function(interval) {
            if (!angular.isDefined(interval)) {
                throw "interval is required";
            }
            if (timer) {
                return;
            }
            if (!timer) {
                //if (options.logToConsole) {
                //    $log.info('interval=' + interval);
                //}
                timer = $interval(function() {
                    self.update();
                }, interval);
            }
        };
        /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.object:Subscriber#clearTimer
         * @methodOf RA.IPCommon.Services.object:Subscriber
         * @description
         * Stops periodical updating
         */
        this.clearTimer = function() {
            if (timer) {
                $interval.cancel(timer);
                timer = null;
            }
        };
        /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.object:Subscriber#getUpdateInterval
         * @methodOf RA.IPCommon.Services.object:Subscriber
         * @description
         * Gets update interval
         */
        this.getUpdateInterval = function() {
            return updateInterval;
        };
        /**
         * @ngdoc method
         * @module RA.IPCommon.Services
         * @name RA.IPCommon.Services.object:Subscriber#getConsumer
         * @methodOf RA.IPCommon.Services.service:subscriberSvc
         * @description
         * Gets consumer by given id
         */
        this.getConsumer = function(id) {
            return consumers[id];
        };
    }
    /**
     * @ngdoc method
     * @module RA.IPCommon.Services
     * @name RA.IPCommon.Services.service:subscriberSvc#extend
     * @methodOf RA.IPCommon.Services.service:subscriberSvc
     * @description
     * Extends given service with methods and properties from
     * {@link RA.IPCommon.Services.object:Subscriber Subscriber} base.
     * @param {Object} service
     * <p>Target object which will inherit from {@link RA.IPCommon.Services.object:Subscriber Subscriber} base.</p>
     */
    var extend = function(service) {
        angular.extend(service, new Subscriber($injector));
    };
    return {
        extend: extend
    };
} ]);

/*
 * (c) Rockwell Automation 2013
 */
/*global angular*/
/*global _*/
/*global moment*/
/*jsHint maxlen: 120*/
/**
 * @ngdoc service
 * @module RA.IPCommon.Services
 * @name RA.IPCommon.Services.service:timeSeriesSvc
 * @description
 * Service for TimeSeries Request and Manipulations, it uses
 * {@link RA.IPCommon.Services.object:Subscriber Subscriber} as a base so it has all it's methods available.
 */
angular.module("RA.IPCommon.Services").provider("timeSeriesSvc", function() {
    "use strict";
    var self = this, /**
             * @ngdoc object
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.object:SamplingTypes
             * @description
             * List of available sampling types for samplingDefinition
             */
    samplingTypes = {
        Interpolative: "Retrieve interpolated values. The interpolation" + "type is server specific.",
        SampleAndHold: "Taking the first of two given values",
        Linear: "Linear interpolation between two given values.",
        Total: "Retrieve the totalized value (time integral) of the " + "data over the resample interval using linear " + "interpolation between measured points.",
        Sum: "Retrieve the sum of all values in the resample interval.",
        Average: "Retrieve the average data over the resample interval.",
        TimeAverage: "Retrieve the time weighted average data over" + "the resample interval.",
        Count: "Retrieve the number of raw values over the resample " + "interval.",
        StandardDeviation: "Retrieve the standard deviation over the " + "resample interval.",
        MinimumActualTime: "Retrieve the minimum value in the resample " + "interval and the timestamp of the minimum value.",
        Minimum: "Retrieve the minimum value in the resample interval.",
        MaximumActualTime: "Retrieve the maximum value in the resample " + "interval and the timestamp of the maximum value.",
        Maximum: "Retrieve the maximum value in the resample interval.",
        Start: "Retrieve the value at the beginning of the resample " + "interval. The time stamp is the time stamp of the " + "beginning of the interval.",
        End: "Retrieve the value at the end of the resample interval." + "The time stamp is the time stamp of the end of the interval.",
        Delta: " Retrieve the difference between the first and last " + "value in the resample interval.",
        Variance: "Retrieve the variance over the sample interval.",
        Range: "Retrieve the difference between the minimum and " + "maximum value over the sample interval.",
        DurationGood: "Retrieve the duration (expressed in " + "100-nanosecond units) of time in the interval during which " + "the data is good.",
        DurationBad: "Retrieve the duration (expressed in " + "100-nanosecond units) of time in the interval during which " + "the data is bad.",
        PercentGood: "Retrieve the percent of data (1 equals 100 " + "percent) in the interval which has good quality.",
        PercentBad: "Retrieve the percent of data (1 equals 100 " + "percent) in the interval which has bad quality.",
        WorstQuality: "Retrieve the worst quality of data in the interval",
        TimeAverageSampleAndHold: "Retrieve the time weighted average " + "data over the resample interval using sample and hold " + "'interpolation' between measured values.",
        TotalSampleAndHold: "Retrieve the totalized value (time " + "integral) of the data over the resample interval using " + "sample and hold 'interpolation' between measured points.",
        MinSampleAndHold: "Retrieve the minimum value in the resample " + "interval using sample and hold 'interpolation' between " + "measured points.",
        MaxSampleAndHold: "Retrieve the maximum value in the resample " + "interval using sample and hold 'interpolation' between " + "measured points.",
        CumulativeTotal: "Retrieve the cumulative total in the resample " + "interval."
    }, injector, globalTimerInterval = 5e3, maxRetryCount = 3, ERR_GET_DATA_ONCE = "TimeSeries connection error for GetDataOnce", ERR_PROCESS_DATA = "TimeSeries service - cannot process data", ERR_GET_DATA_REP = "TimeSeries connection for getDataRepeatedly " + "aborted (id: {{id}})", ERR_WRONG_DATE_FORMAT = "Wrong input for format time to text: {{date}}", WRN_SET_GEN_TIMER = "Warning: Custom timer is not a number or " + "lower than minimum {{min}}ms. Using default minimum value.";
    this.minimumTimerInterval = globalTimerInterval;
    this.serviceRelativePath = "api/1/timeseries/";
    this.$get = [ "$http", "$log", "$timeout", "$q", "$rootScope", "$interpolate", "raIdGenSvc", "raErrorHandlerSvc", "subscriberSvc", "raOpcQualitySvc", "raErrorCollectorSvc", function($http, $log, $timeout, $q, $rootScope, $interpolate, raIdGenSvc, raErrorHandlerSvc, subscriberSvc, raOpcQualitySvc, raErrorCollectorSvc) {
        var unsubscribedIds = {};
        /**
                 * @param {Object} postResult data returned from http post
                 * @param {Array} fqns list of requested fqns
                 * @returns {Object} hash of messages
                 */
        var processResult = function(postResult, fqns) {
            var messages = {}, startTime = new Date(postResult.timePeriod.start).valueOf(), endTime = new Date(postResult.timePeriod.end).valueOf();
            angular.forEach(postResult.fqnsResults, function(el, idx) {
                if (el) {
                    //default to null instead of empty array, default we suppose we have no fqn values 
                    //data in this el behavior of setting value null is the same as in else condition
                    this[el.fqn] = null;
                    if (el.values.length) {
                        // we create and fill array with data only if we know we have data
                        this[el.fqn] = [];
                        angular.forEach(el.values, function(data) {
                            var timeStamp = new Date(data.t), timeStampValue = timeStamp.valueOf();
                            if (timeStampValue >= startTime && timeStampValue <= endTime) {
                                this.push({
                                    timeStamp: timeStamp,
                                    value: data.v,
                                    quality: data.q
                                });
                            }
                        }, this[el.fqn]);
                    }
                } else {
                    // The code is based on assumption that result contains
                    // data for fqns in the same order as request.
                    this[fqns[idx]] = null;
                }
            }, messages);
            return {
                messages: messages,
                startTime: startTime,
                endTime: endTime
            };
        };
        /**
                 * Internal Method - Constructs request to be sent
                 * @param {object} data incoming data
                 * @param {object} repeatedly flag indication there is construction for repeated data request
                 * @returns {object} object with prepared request
                 */
        function constructRequest(data, repeatedly) {
            var request = {
                fqns: data.fqns,
                timePeriod: {}
            };
            if (angular.isDefined(data.duration)) {
                if (repeatedly && data.duration >= 0) {
                    throw raErrorHandlerSvc.getRAError("Error in timeSeriesSvc.getDataRepeatedly", "Request data duration cannot be positive.");
                }
                request.timePeriod.duration = data.duration;
            }
            if (repeatedly && data.start) {
                throw raErrorHandlerSvc.getRAError("Error in timeSeriesSvc.getDataRepeatedly", "Request start time cannot be set.");
            } else if (data.start) {
                request.timePeriod.start = formatTimeForServer(data.start);
            }
            if ((data.duration === null || data.duration === undefined) && !(angular.isDefined(data.start) && angular.isDefined(data.end))) {
                throw raErrorHandlerSvc.getRAError("Error in timeSeriesSvc.getDataRepeatedly", "Request data duration, or request start and end time must be set.");
            }
            if (data.timeDeadBand) {
                request.timeDeadBand = data.timeDeadBand;
            }
            if (data.valueDeadBand) {
                data.valueDeadBand = parseFloat(data.valueDeadBand);
                if (data.valueDeadBand > 0 && data.valueDeadBand <= 1) {
                    request.valueDeadBand = data.valueDeadBand;
                }
            }
            if (data.samplingDefinition) {
                request.samplingDefinition = data.samplingDefinition;
            }
            return request;
        }
        /**
                 * Internal Method - Formats date into string representation for server
                 * @param {object} date Date to be converted
                 * @returns {String} string representation of date
                 */
        function formatTimeForServer(date) {
            if (!angular.isDate(date)) {
                raErrorHandlerSvc.propagate(raErrorHandlerSvc.getRAError($interpolate(ERR_WRONG_DATE_FORMAT)({
                    date: date
                })));
                return "";
            }
            return date.toISOString();
        }
        /**
                 * Sets the general timer for repeating data subscribers
                 * @param {number} intervalMilliseconds
                 * <p>The interval length in milliseconds</p>
                 */
        function setGeneralTimer(intervalMilliseconds) {
            if (intervalMilliseconds > self.minimumTimerInterval) {
                globalTimerInterval = intervalMilliseconds;
            } else {
                $log.warn($interpolate(WRN_SET_GEN_TIMER)({
                    min: self.minimumTimerInterval
                }));
                globalTimerInterval = self.minimumTimerInterval;
            }
        }
        /**
                 * Gets start time for next request when getting data repeatedly.
                 * @param {Object} data result from previous call
                 * @param {Number} originalDuration - original request duration in milliseconds, always negative
                 * @return {Moment} moment object
                 */
        function getStartForNextRequest(data, originalDuration) {
            function getLastValueToUse(fqnResult) {
                var result = _.first(fqnResult.values).t;
                for (var i = fqnResult.values.length - 1; i >= 0; i--) {
                    var val = fqnResult.values[i];
                    if (!raOpcQualitySvc.isHdaInterpolated(val.q)) {
                        return val.t;
                    }
                }
                return result;
            }
            var result = null;
            var currentTimeMinusDuration = moment.utc().add(originalDuration, "seconds");
            angular.forEach(data.fqnsResults, function(fqnResult) {
                var lastValue = moment.utc(getLastValueToUse(fqnResult));
                if (!result || result.isAfter(lastValue)) {
                    result = lastValue.clone();
                }
            });
            if (result === null) {
                //no good quality - add period to response start time - as default for next request
                result = moment.utc(data.timePeriod.start);
            }
            if (currentTimeMinusDuration.isAfter(result)) {
                result = currentTimeMinusDuration;
            }
            return result;
        }
        /**
                 * Method to get first value before next request start time in current data.
                 * @param {Object} postResult data result from previous call
                 * @param {Moment} nextStartMoment starting date for next request
                 * @returns {Object} object which may be filled with values before next request start time
                 * structure: {
                 * 'Extruder.Stroke Length': 
                 *      [{q: 192, t:"2017-07-21T15:23:01.0629279Z", v:34}],
                 * 'Extruder.Hydraulic Pressure': [] 
                 *  ...
                 * }
                 */
        function getRequestDataNextStartValues(postResult, nextStartMoment) {
            var beforeNextRequestValues = {}, last;
            angular.forEach(postResult.fqnsResults, function(el) {
                if (el) {
                    //default to null instead of empty array, default we suppose we have no fqn values 
                    //data in this el behavior of setting value null is the same as in else condition
                    this[el.fqn] = null;
                    if (el.values.length) {
                        last = _.findLast(el.values, function(value) {
                            var utcTime = moment.utc(value.t);
                            if (utcTime >= nextStartMoment) {
                                return true;
                            }
                            return false;
                        });
                        this[el.fqn] = last;
                    }
                }
            }, beforeNextRequestValues);
            return beforeNextRequestValues;
        }
        /**
                 * Function to optionally filter first value in repeated request when it is interpolated between 
                 * two good ones. Directly modifies postResult input parameter.
                 * @param {Object} postResult
                 * @param {Object} previousRequestNextStartValues
                 */
        function filterStartResultData(postResult, previousRequestNextStartValues) {
            var firstVqt, firstVqtMoment, secondVqt;
            angular.forEach(postResult.fqnsResults, function(el) {
                if (el && previousRequestNextStartValues[el.fqn] && el.values.length > 1) {
                    firstVqt = el.values.slice(0, 1)[0];
                    firstVqtMoment = moment.utc(firstVqt.t);
                    if (raOpcQualitySvc.isHdaInterpolated(firstVqt.q)) {
                        secondVqt = el.values.slice(1, 2)[0];
                        if (firstVqtMoment > moment(previousRequestNextStartValues[el.fqn].t) && firstVqtMoment < moment(secondVqt.t) && raOpcQualitySvc.isGood(previousRequestNextStartValues[el.fqn].q) && raOpcQualitySvc.isGood(secondVqt.q)) {
                            el.values.splice(0, 1);
                        }
                    }
                }
            });
        }
        injector = {
            setGeneralTimer: setGeneralTimer,
            /**
                     * @ngdoc method
                     * @module RA.IPCommon.Services
                     * @name RA.IPCommon.Services.service:timeSeriesSvc#getGlobalTimerInterval
                     * @methodOf RA.IPCommon.Services.service:timeSeriesSvc
                     * @description
                     * Getter for the globalTimerInterval value
                     * @returns {Number} Global Time Interval
                     */
            getGlobalTimerInterval: function() {
                return globalTimerInterval;
            },
            /**
                     * @ngdoc method
                     * @module RA.IPCommon.Services
                     * @name RA.IPCommon.Services.service:timeSeriesSvc#getSamplingTypes
                     * @methodOf RA.IPCommon.Services.service:timeSeriesSvc
                     * @description
                     * Returns list of available sampling type names
                     * @returns {object} {@link RA.IPCommon.Services.object:SamplingTypes}
                     */
            getSamplingTypes: function() {
                return angular.copy(samplingTypes);
            },
            /**
                     * @ngdoc method
                     * @module RA.IPCommon.Services
                     * @name RA.IPCommon.Services.service:timeSeriesSvc#getDataOnce
                     * @methodOf RA.IPCommon.Services.service:timeSeriesSvc
                     * @description
                     * Get data from time series service
                     * @param {object} timeSeriesReq A structure:
                     *  {
                     *      fqns: {array(string)} List of fqns for request
                     *      duration: {number} duration time into history to look at
                     *      timeDeadBand: {string} timeDeadBand time dead band if
                     *        wanted
                     *      valueDeadBand: {number} valueDeadBand optional value dead
                     *        band
                     *      start: {date} start Optional start interval point other
                     *        than now
                     *      samplingDefinition: {object} Optional definition for
                     *        sampling data consisting of up to three parameters
                     *        <ul>
                     *          <li><b>samplingType: <i>string</i></b> <i>required</i>
                     *          One of the types returned in getSamplingTypes (the
                     *          string representation of key, not the
                     *          value/description)</li>
                     *          <li><b>sliceCount: <i>integer</i></b> <i>optional</i>
                     *          Number of slices to which the time interval should be
                     *          divided</li>
                     *          <li><b>deltaT: <i>integer</i></b> <i>optional</i>
                     *          Length of interval to which the time interval should be
                     *          divided</li>
                     *        </ul>
                     *        One of the optional parameters has to be defined
                     *  }
                     *
                     * @returns {IPromise<T>} Angular promise to be resolved later
                     */
            getDataOnce: function(timeSeriesReq) {
                var defered, request = constructRequest(timeSeriesReq);
                defered = $q.defer();
                $http.post($rootScope.gBaseUrl + self.serviceRelativePath, request, $rootScope.gCommonHttpConfig).then(function success(result) {
                    var messages;
                    try {
                        messages = processResult(result.data, timeSeriesReq.fqns);
                    } catch (error) {
                        defered.reject(raErrorHandlerSvc.getRAError(ERR_PROCESS_DATA, error));
                        return;
                    }
                    defered.resolve(messages);
                }, function failure(reason) {
                    defered.reject(raErrorHandlerSvc.getRAHTTPError(ERR_GET_DATA_ONCE, reason));
                });
                return defered.promise;
            },
            /**
                     * @ngdoc method
                     * @module RA.IPCommon.Services
                     * @name RA.IPCommon.Services.service:timeSeriesSvc#getDataRepeatedly
                     * @methodOf RA.IPCommon.Services.service:timeSeriesSvc
                     * @description
                     * Get data from time series service repeatedly.
                     * @param {object} timeSeriesReq A structure:
                     *  {
                     *      fqns: {array(string)} List of fqns for request
                     *      duration: {number} duration time into history to look at, only negative values allowed
                     *      timeDeadBand: {string} timeDeadBand time dead band if
                     *        wanted
                     *      valueDeadBand: {number} valueDeadBand optional value dead
                     *        band
                     *      samplingDefinition: {object} Optional definition for
                     *        sampling data consisting of up to three parameters
                     *        <ul>
                     *          <li><b>samplingType: <i>string</i></b> <i>required</i>
                     *          One of the types returned in getSamplingTypes (the
                     *          string representation of key, not the
                     *          value/description)</li>
                     *          <li><b>sliceCount: <i>integer</i></b> <i>optional</i>
                     *          Number of slices to which the time interval should be
                     *          divided</li>
                     *          <li><b>deltaT: <i>integer</i></b> <i>optional</i>
                     *          Length of interval to which the time interval should be
                     *          divided</li>
                     *        </ul>
                     *        One of the optional parameters has to be defined
                     *  }
                     * @param {String} id identification
                     * @param {Number} ownRepeatInterval optional - set own repeat
                     *        interval
                     * @returns {IPromise<T>} Angular promise to resolve later
                     */
            getDataRepeatedly: function(timeSeriesReq, id, ownRepeatInterval) {
                if (id === undefined || id === null) {
                    id = raIdGenSvc.getStrId();
                }
                var data = {
                    req: constructRequest(timeSeriesReq, true),
                    id: id,
                    retryLeft: maxRetryCount,
                    requestCancel: null,
                    timer: $timeout(send, 0)
                };
                var promise = this.subscribe(id, data, {}, null, unsubscribed, null);
                var consumer = injector.getConsumer(id);
                var repeatInterval = ownRepeatInterval ? ownRepeatInterval : globalTimerInterval;
                var originalDuration = consumer.data.req.timePeriod.duration;
                function send() {
                    var httpConfig;
                    // cancel previous request if there is one
                    if (consumer.data.requestCancel) {
                        consumer.data.requestCancel.resolve();
                    }
                    if (consumer.data.timer) {
                        $timeout.cancel(consumer.data.timer);
                        consumer.data.timer = null;
                    }
                    if (unsubscribedIds[consumer.id]) {
                        return;
                    }
                    consumer.data.requestCancel = $q.defer();
                    httpConfig = $rootScope.gCommonHttpConfig ? angular.copy($rootScope.gCommonHttpConfig) : {};
                    httpConfig.timeout = consumer.data.requestCancel.promise;
                    httpConfig.raPassError = true;
                    consumer.data.lastRequestTimestamp = new Date().valueOf();
                    //If we are using dataSampling, we want the whole bunch of data,
                    //not just the time slice from last result
                    if (timeSeriesReq.samplingDefinition) {
                        delete consumer.data.req.timePeriod.start;
                        delete consumer.data.req.timePeriod.end;
                        consumer.data.req.timePeriod.duration = timeSeriesReq.duration;
                    }
                    $http.post($rootScope.gBaseUrl + self.serviceRelativePath, consumer.data.req, httpConfig).then(function success(result) {
                        var messages, latency, timeout = repeatInterval, nextRequestStartMoment, filteredResultData;
                        latency = new Date().valueOf() - consumer.data.lastRequestTimestamp;
                        timeout = latency > timeout ? 0 : timeout - latency;
                        try {
                            filteredResultData = result.data;
                            if (consumer.data.previousRequestNextStartValues) {
                                // we check previous values to current starting ones 
                                // to filter out possible 
                                // start interpolated ones if they are between good ones
                                filterStartResultData(filteredResultData, consumer.data.previousRequestNextStartValues);
                            }
                            messages = processResult(filteredResultData, consumer.data.req.fqns);
                            nextRequestStartMoment = getStartForNextRequest(filteredResultData, originalDuration);
                            consumer.data.nextStart = nextRequestStartMoment.toDate();
                            // we remember last value before nextStart in current request to check its 
                            // quality vs. next request start time value quality, possibly 
                            // to omit start value 
                            // - it may be interpolated between two good quality values
                            consumer.data.previousRequestNextStartValues = getRequestDataNextStartValues(filteredResultData, nextRequestStartMoment);
                        } catch (e) {
                            consumer.deferred.reject();
                            raErrorHandlerSvc.getRAError(ERR_PROCESS_DATA, e);
                            return;
                        }
                        consumer.data.req.timePeriod.start = formatTimeForServer(consumer.data.nextStart);
                        consumer.data.req.timePeriod.duration = 0;
                        consumer.data.retryLeft = maxRetryCount;
                        consumer.data.requestCancel = null;
                        consumer.data.timer = $timeout(send, timeout);
                        consumer.deferred.notify(messages);
                    }, function failure(reason) {
                        if (--consumer.data.retryLeft === 0) {
                            var error = raErrorHandlerSvc.getRAHTTPError("Communication error", angular.extend(reason || {}, {
                                causeMsg: $interpolate(ERR_GET_DATA_REP)({
                                    id: consumer.id
                                })
                            }));
                            raErrorCollectorSvc.addHttpError(error).then(function(retry) {
                                if (retry) {
                                    send();
                                    consumer.data.retryLeft = 1;
                                } else {
                                    injector.unsubscribe(consumer.id, null, error);
                                }
                            });
                        } else {
                            consumer.data.timer = $timeout(send, repeatInterval);
                        }
                    });
                }
                return promise;
            }
        };
        // Make Subscriber base of this.
        subscriberSvc.extend(injector);
        /**
                 * Called when subscriber un-subscribed.
                 * @param consumer
                 */
        function unsubscribed(consumer) {
            unsubscribedIds[consumer.id] = true;
            if (consumer.data.requestCancel) {
                consumer.data.requestCancel.resolve();
            }
            if (consumer.data.timer) {
                $timeout.cancel(consumer.data.timer);
            }
        }
        return injector;
    } ];
});

/*
 * (c) Rockwell Automation 2014
 */
/* global angular */
/**
 * @ngdoc service
 * @module RA.IPCommon.Services
 * @name RA.IPCommon.Services.service:viewSvc
 * @description
 * Service for View Service Requests and Manipulations
 */
angular.module("RA.IPCommon.Services").factory("viewSvc", [ "$rootScope", "$q", "instanceSvc", "fqnSvc", "persistenceSvc", "WELLKNOWN_LOCATIONS", "WELLKNOWN_ITEM_TYPES", "VIEWS_PATH", function($rootScope, $q, instanceSvc, fqnSvc, persistenceSvc, WELLKNOWN_LOCATIONS, WELLKNOWN_ITEM_TYPES, VIEWS_PATH) {
    "use strict";
    var viewLocationParts = VIEWS_PATH;
    var viewType = WELLKNOWN_ITEM_TYPES.MOBILE_VIEW;
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:viewSvc#addView
             * @methodOf RA.IPCommon.Services.service:viewSvc
             * @description
             * Add a View
             * @param {string} name view name
             * @param {string} anchorFqn - Anchor Fqn
             * @param {string} description view description
             * @returns {IPromise<T>} Promise to resolve when answer
             * will be available.
             */
    var addView = function(name, anchorFqn, description) {
        var defer = $q.defer();
        var propNameValues = persistenceSvc.createPropNameValues(), persistRequest = persistenceSvc.createPersistRequest();
        propNameValues.add("Name", name);
        propNameValues.add("AnchoredFQN", encodeURIComponent(anchorFqn));
        propNameValues.add("Description", description);
        persistRequest.createItem(WELLKNOWN_LOCATIONS.MOBILE_VIEWS, viewType, propNameValues);
        persistenceSvc.commit(persistRequest).then(function success(response) {
            defer.resolve(response);
        }, function error(reason) {
            defer.reject(reason);
        });
        return defer.promise;
    };
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:viewSvc#getViews
             * @methodOf RA.IPCommon.Services.service:viewSvc
             * @description
             * Makes a request to JSON Navigation service on the server
             * to get list of views.
             * @returns {IPromise<T>} Promise to resolve when answer
             * will be available.
             */
    var getViews = function() {
        return instanceSvc.getInstance(WELLKNOWN_LOCATIONS.MOBILE_APPLICATION, false, false, 1);
    };
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:viewSvc#getFqnForViewName
             * @methodOf RA.IPCommon.Services.service:viewSvc
             * @description
             * Get Fqn of the View Name
             * @param {string=} [viewName] name of the view
             * @returns {string} Fqn of the View
             */
    var getFqnForViewName = function(viewName) {
        if (!viewName) {
            //"Default" view for the purpose of getting displays via navigation service
            return WELLKNOWN_LOCATIONS.MOBILE_APPLICATION;
        }
        var parts = viewLocationParts.slice();
        parts.push(viewName);
        //TODO: switch to angular module
        return fqnSvc.buildFqn(parts);
    };
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:viewSvc#renameView
             * @methodOf RA.IPCommon.Services.service:viewSvc
             * @description
             * Rename a view.
             * @param {string} fqn The original FQN of the view, Including the final Name node.
             * @param {string} newName  The new name to be used for the final Name node.
             * @returns {IPromise<T>} Promise to resolve when answer will be available.
             */
    var renameView = function(fqn, newName) {
        var defer = $q.defer();
        var persistRequest = persistenceSvc.createPersistRequest();
        persistRequest.renameItem(fqn, newName);
        persistenceSvc.commit(persistRequest).then(function success(response) {
            defer.resolve(response);
        }, function failure(reason) {
            defer.reject(reason);
        });
        return defer.promise;
    };
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:viewSvc#updateView
             * @methodOf RA.IPCommon.Services.service:viewSvc
             * @description
             * Update an existing view item with given information.
             * @param {string} fqn The view fqn of the properties that are being updated.
             * @param {object} viewInfo The object containing the information that can be
             * updated for the view, including:
             *   - description
             *   - anchorFqn
             * @returns {IPromise<T>} Promise to resolve when answer will be available.
             */
    var updateView = function(fqn, viewInfo) {
        var defer = $q.defer();
        var persistRequest = persistenceSvc.createPersistRequest();
        if (viewInfo.description !== undefined) {
            var updatedDescriptionValues = persistenceSvc.createPropNameValues();
            updatedDescriptionValues.add("Description", viewInfo.description);
            persistRequest.changeItem(fqn, updatedDescriptionValues);
        }
        if (viewInfo.anchorFqn) {
            var updatedAnchorFqnValues = persistenceSvc.createPropNameValues();
            updatedAnchorFqnValues.add("AnchoredFQN", viewInfo.anchorFqn);
            persistRequest.changeItem(fqn, updatedAnchorFqnValues);
        }
        if (persistRequest.changedItems) {
            persistenceSvc.commit(persistRequest).then(function success(response) {
                defer.resolve(response);
            }, function failure(reason) {
                defer.reject(reason);
            });
        }
        return defer.promise;
    };
    /**
             * @ngdoc method
             * @module RA.IPCommon.Services
             * @name RA.IPCommon.Services.service:viewSvc#removeView
             * @methodOf RA.IPCommon.Services.service:viewSvc
             * @description
             * Remove the View
             * @param {string} name - of the view to remove
             * @returns {IPromise<T>} Promise to resolve when answer will be available.
             */
    var removeView = function(name) {
        var defer = $q.defer();
        var persistRequest = persistenceSvc.createPersistRequest();
        persistRequest.deleteItem(fqnSvc.appendNamePart(WELLKNOWN_LOCATIONS.MOBILE_VIEWS, name));
        persistenceSvc.commit(persistRequest).then(function success(response) {
            defer.resolve(response);
        }, function error(reason) {
            defer.reject(reason);
        });
        return defer.promise;
    };
    return {
        addView: addView,
        getViews: getViews,
        renameView: renameView,
        updateView: updateView,
        removeView: removeView,
        getFqnForViewName: getFqnForViewName
    };
} ]);
//# sourceMappingURL=debug/ra-ip-common.js.map