(function(){
    angular
        .module('WebAppMaker')
        .controller('WebsiteListController', WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var model = this;

        model.userId = $routeParams['userId'];
        model.websites = WebsiteService.findWebsitesByUser(model.userId);
    }
})();