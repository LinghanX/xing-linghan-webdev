(function(){
    angular
        .module('WebAppMaker')
        .controller('PageListController', PageListController);

    function PageListController($routeParams, PageService) {
        var model = this;

        function init() {
            model.websiteId = $routeParams['wid'];
            model.pages = PageService.findPagesByWebsiteId(model.websiteId);
        }
    }
})();
