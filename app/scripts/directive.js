/**
 * Created by Admin on 6/4/2016.
 */
/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */


/**
 * pageTitle - Directive for set Page title - mata title
 */
function pageTitle($rootScope, $timeout) {
    return {
        link: function(scope, element) {
            var listener = function(event, toState, toParams, fromState, fromParams) {
                // Default title - load on Dashboard 1
                var title = 'sm-number';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) title = 'sm-number | ' + toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    }
};
angular
    .module('smugglernumber')
    .directive('pageTitle', pageTitle)