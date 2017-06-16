(function() {
    angular
        .module('WebAppMaker')
        .controller('WebsiteNewController', WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService, $location, $rootScope) {
        var model = this;

        function init() {
            model.user = $rootScope.currentUser;
            WebsiteService.findWebsitesByUser(model.user._id)
                .then(function(response){
                    model.websites = response;
                });
            model.createWebsite = createWebsite;
        }
        init();

        function createWebsite(name, description){
            if(name === undefined || description === undefined) {
                model.message = "Please input name and description";
                return ;
            }

            var newWebsite = {
                name: name,
                description: description
            };

            WebsiteService.createWebsite(model.user._id, newWebsite)
                .then(function(response){
                    console.log(response);
                });
            $location.url('user/website');
        }
    }
})();