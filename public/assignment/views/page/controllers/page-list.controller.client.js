(function(){
    angular
        .module('WebAppMaker')
        .controller('PageListController', PageListController);

    function PageListController($routeParams, PageService, $rootScope) {
        var model = this;

        function init() {
            model.websiteId = $routeParams['wid'];
            model.user = $rootScope.currentUser;
            PageService.findPagesByWebsiteId(model.websiteId)
                .then(function(response) {
                    model.pages = response;
                });
        }
        init();
    }
})();
