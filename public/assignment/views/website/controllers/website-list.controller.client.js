(function(){
    angular
        .module('WebAppMaker')
        .controller('WebsiteListController', WebsiteListController);

    function WebsiteListController(WebsiteService, $rootScope) {
        var model = this;
        model.user = $rootScope.currentUser;

        WebsiteService.findWebsitesByUser(model.user._id)
            .then(function(response){
                model.websites = response;
            });
    }
})();