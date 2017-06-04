(function(){
    angular
        .module('WebAppMaker')
        .controller('WebsiteListController', WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var model = this;

        model.userId = $routeParams['userId'];
        WebsiteService.findWebsitesByUser(model.userId)
            .then(function(response){
                model.websites = response;
            });
    }
})();