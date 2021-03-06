(function() {
    angular
        .module('WebAppMaker')
        .controller('PageNewController', PageNewController);

    function PageNewController($routeParams, PageService, $location, $rootScope){
        var model = this;

        function init(){
            model.user = $rootScope.currentUser;
            model.websiteId = $routeParams['wid'];
            model.createPage = createPage;
        }
        init();

        function createPage() {
            if(model.name === undefined) {
                model.message = "Please input a name";
                return ;
            }

            const page = {
                "name": model.name,
                "description": model.description
            };

            PageService.createPage(model.websiteId, page);
            $location.url('/user/website/' + model.websiteId + '/page');
        }
    }
})();