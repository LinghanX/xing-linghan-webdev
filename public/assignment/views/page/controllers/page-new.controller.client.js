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

        function createPage(name, description) {
            var page = {
                "name": name,
                "description": description
            };
            PageService.createPage(model.websiteId, page)
                .then(function(response) {
                    $location.url('/user/' + model.userId + '/website/'
                        + model.websiteId + '/page');
                });
        }
    }
})();