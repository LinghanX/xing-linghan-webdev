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
            model.updateWebsite = updateWebsite;
            model.userId = $routeParams['userId'];
            model.websiteId = $routeParams['wid'];

            UserService.findUserById(model.userId)
                .then(function(response){
                    model.user = response;
                });
            WebsiteService.findWebsitesByUser(model.userId)
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
            $location.url('/user/' + model.userId + '/website');
        }

        function deleteWebsite(){
            WebsiteService.deleteWebsite(model.websiteId)
                .then(function(response){
                    console.log(response.data);
                });

            $location.url('/user/' + model.userId + '/website');
        }
    }
})();
