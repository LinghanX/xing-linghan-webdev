(function(){
    angular
        .module('WebAppMaker')
        .controller('WebsiteEditController', WebsiteEditController);

    function WebsiteEditController($routeParams,
                                   $location,
                                   WebsiteService,
                                   UserService) {
        var model = this;

        function init(){
            model.deleteWebsite = deleteWebsite;
            model.userId = $routeParams['userId'];
            model.websiteId = $routeParams['wid'];

            model.user = UserService.findUserById(model.userId);
            model.websites = WebsiteService.findWebsitesByUser(model.userId);
            model.website = WebsiteService.findWebsiteById(model.websiteId);
        }

        init();

        function deleteWebsite(){
            WebsiteService.deleteWebsite(model.websiteId);

            console.log('hello');
            $location.url('/user/' + model.userId + '/website');
        }
    }
})();
