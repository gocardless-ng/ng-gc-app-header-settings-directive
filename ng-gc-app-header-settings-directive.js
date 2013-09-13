/**
 * @license ng-gc-app-header-settings-directive v0.1.0
 * (c) 2013-2013 GoCardless, Ltd.
 * https://github.com/gocardless-ng/ng-gc-app-header-settings-directive.git
 * License: MIT
 */'use strict';

angular.module('gc.appHeaderSettings', [
  'gc.toggle',
  'gc.popover',
  'app-header-settings-template.html'
])
.directive('appHeaderSettings', [
  function appHeaderSettingsDirective() {

    return {
      restrict: 'E',
      templateUrl: 'app-header-settings-template.html',
      transclude: true,
      replace: true,
      scope: true
    };

  }
]);

angular.module('app-header-settings-template.html', []).run(function($templateCache) {
  $templateCache.put('app-header-settings-template.html',
    '<span class="u-relative"><button class="btn btn--hollow" toggle="appHeaderSettingsIsVisible"><i class="btn-icon btn-icon--centered ss-settings"></i></button><popover show="appHeaderSettingsIsVisible" class="header-settings-dropdown u-text-h6 u-padding-Hm u-padding-Vxs"><div ng-transclude=""></div></popover></span>');
});
