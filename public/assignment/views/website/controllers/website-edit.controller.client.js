(function(){
    angular
        .module('WebAppMaker')
        .controller('WebsiteEditController', WebsiteEditController);

    function WebsiteEditController($routeParams,
                                   $location,
                                   WebsiteService,
                                   $rootScope,
                                   UserService) {
        var model = this;

        function init(){
            model.deleteWebsite = deleteWebsite;
            model.updateWebsite = updateWebsite;
            model.user = $rootScope.currentUser;
            model.websiteId = $routeParams['wid'];

            WebsiteService.findWebsitesByUser(model.user._id)
                .then(function(response){
                    model.websites = response;
                });
            WebsiteService.findWebsiteById(model.websiteId)
                .then(function(response) {
                    model.website = response;
                });

        }

        init();

        function updateWebsite() {
            WebsiteService.updateWebsite(model.websiteId, model.website)
                .then(function(response){
                    console.log(response.data);
                });
            $location.url('/user/website');
        }

        function deleteWebsite(){
            WebsiteService.deleteWebsite(model.websiteId, model.userId)
                .then(function(response){
                    console.log(response.data);
                });

            $location.url('/user/website');
        }
    }
})();
