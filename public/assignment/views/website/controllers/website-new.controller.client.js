(function() {
    angular
        .module('WebAppMaker')
        .controller('WebsiteNewController', WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService, $location) {
        var model = this;

        function init() {
            model.userId = $routeParams['userId'];
            WebsiteService.findWebsitesByUser(model.userId)
                .then(function(response){
                    model.websites = response;
                });
            model.createWebsite = createWebsite;
        }
        init();

        function createWebsite(name, description){
            if(name === undefined || description === undefined) {
                console.log('Error, please input name and description');
                return ;
            }

            var newWebsite = {
                name: name,
                description: description
            };

            WebsiteService.createWebsite(model.userId, newWebsite)
                .then(function(response){
                    console.log(response);
                });
            $location.url('user/' + model.userId + '/website');
        }
    }
})();