(function() {
    angular
        .module('WebAppMaker')
        .controller('PageNewController', PageNewController);

    function PageNewController($routeParams, PageService, $location){
        var model = this;

        function init(){
            model.userId = $routeParams['userId'];
            model.websiteId = $routeParams['wid'];
            model.createPage = createPage;
        }
        init();

        function createPage() {
            const page = {
                "name": model.name,
                "description": model.description
            };

            PageService.createPage(model.websiteId, page);
            $location.url('/user/' + model.userId + '/website/'
                + model.websiteId + '/page');
        }
    }
})();