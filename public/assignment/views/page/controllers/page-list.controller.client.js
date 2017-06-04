(function(){
    angular
        .module('WebAppMaker')
        .controller('PageListController', PageListController);

    function PageListController($routeParams, PageService) {
        var model = this;

        function init() {
            model.websiteId = $routeParams['wid'];
            model.userId = $routeParams['userId'];
            PageService.findPagesByWebsiteId(model.websiteId)
                .then(function(response) {
                    model.pages = response;
                });
        }
        init();
    }
})();
