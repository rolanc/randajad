(() => {
    'use strict';
    angular
        .module('randajad')
        .directive('menuLateral', menuLateral);

    function menuLateral() {
        let sidebar = {
            templateUrl: '/components/directives/sidebar/sidebar.html',
            restrict: 'EA'
        };

        return sidebar;
    }
})();