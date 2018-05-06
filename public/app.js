(() => {
    'use strict';
    angular
    .module('theStation', ['appRoutes', 'ngMessages', 'duScroll', 'ngFileUpload', 'ngAnimate', 'ngMap'])
    .value('duScrollDuration', 2000)
    .value('duScrollOffset', 30);

})();